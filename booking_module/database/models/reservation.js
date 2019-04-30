module.exports = (sequelize, type) => {
  return sequelize.define('reservation', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    date: {
      type: type.DATEONLY,
      allowNull: false,

    },
    accommodation_id: {
      type: type.INTEGER,
      allowNull: false,
      // references: {
      //   model: 'accommodation',
      //   key: 'id',
      // },
    },
    guest_id: {
      type: type.INTEGER,
      allowNull: false,
      // references: {
      //   model: 'guests',
      //   key: 'id',
      // },
    },
    total_guests: {
      type: type.INTEGER,
      allowNull: false,
    },
    total_adults: {
      type: type.INTEGER,
      allowNull: false,
    },
    total_children: {
      type: type.INTEGER,
      defaultValue: 0,
    },
    total_infants: {
      type: type.INTEGER,
      defaultValue: 0,
    },
  },
  // {
  //   indexes: [
  //     {
  //       unique: true,
  //       fields: ['accommodation_id', 'date'],
  //     },
  //   ],
  // }
  );
};
