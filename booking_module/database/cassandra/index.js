var ExpressCassandra = require('express-cassandra');
var models = ExpressCassandra.createClient({
    clientOptions: {
        contactPoints: ['127.0.0.1'],
        protocolOptions: { port: 9042 },
        keyspace: 'bookings',
        queryOptions: {consistency: ExpressCassandra.consistencies.one}
    },
    ormOptions: {
        defaultReplicationStrategy : {
            class: 'SimpleStrategy',
            replication_factor: 1
        },
        migration: 'safe',
    }
});

var MyModel = models.loadSchema('accommodation', {
    fields:{
        above_avg_views: 'boolean',
        accommodations_tax: 'decimal',
        additional_guest_fee: 'decimal',
        availability_end_date: 'timestamp',
        availability_last_updated: 'timestamp',
        cleaning_fee: 'decimal',
        createdAt: 'timestamp',
        general_tax: 'decimal',
        guest_threshold: 'int',
        hot_item: 'boolean',
        id: 'int',
        minimum_stay_length: 'int',
        max_guests: 'int',
        number_of_ratings: 'int',
        number_viewing_listing: 'int',
        price_per_day: 'decimal',
        rare_find: 'boolean',
        rating_score: 'decimal',
        updatedAt: 'timestamp'
    },
    key:[["id"], "rating_score", "price_per_day", "guest_threshold"],
    clustering_order: {
      "rating_score": "desc",
      "price_per_day": "asc", 
      "guest_threshold": "desc"
    },
});

var guestModel = models.loadSchema('guests', {
  fields:{
    createdAt: 'timestamp',
    id: 'int',
    name: 'text',
    updatedAt: 'timestamp'
  },
  key:["id", "name"],
});

var reservationModel = models.loadSchema('reservations', {
  fields: {
    accommodation_id: 'int',
    createdAt: 'timestamp',
    date: 'timestamp',
    guest_id: 'int',
    id: 'int',
    total_adults: 'int',
    total_children: 'int',
    total_guests: 'int',
    total_infants: 'int',
    updatedAt: 'timestamp'
  },
  key:[["accommodation_id"], "guest_id"],
  clustering_order: {
    "guest_id": "asc"
  },
  indexes: ["id"]
})


// MyModel or models.instance.Person can now be used as the model instance
console.log(models.instance.accommodation === MyModel);

// sync the schema definition with the cassandra database table
// if the schema has not changed, the callback will fire immediately
// otherwise express-cassandra will try to migrate the schema and fire the callback afterwards
MyModel.syncDB(function(err, result) {
    if (err) throw err;
    // result == true if any database schema was updated
    // result == false if no schema change was detected in your models
});

guestModel.syncDB(function(err, result) {
  if (err) throw err;
});

reservationModel.syncDB(function(err, result) {
  if (err) throw err;
})

// copy "bookings"."accommodation" ("id","price_per_day","cleaning_fee","additional_guest_fee","accommodations_tax","general_tax","rating_score","number_of_ratings","guest_threshold","max_guests","minimum_stay_length","availability_end_date","availability_last_updated","number_viewing_listing","above_avg_views","rare_find","hot_item","createdAt","updatedAt") from '/Users/williamwong/Downloads/coding/SDC/booking_module/database/accoms.csv' with delimiter = ',' and HEADER = true;