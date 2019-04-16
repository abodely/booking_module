module.exports = (sequelize, type) => {
  return sequelize.define('accommodation', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    price_per_day: {
      type: type.DECIMAL(5, 2),
      allowNull: false,
    },
    cleaning_fee: {
      type: type.DECIMAL(4, 2),
      defaultValue: 0,
    },
    additional_guest_fee: {
      type: type.DECIMAL(4, 2),
      defaultValue: 0,
    },
    accommodations_tax: {
      type: type.DECIMAL(4, 2),
      defaultValue: 0,
    },
    general_tax: {
      type: type.DECIMAL(4, 2),
      defaultValue: 0,
    },
    rating_score: {
      type: type.DECIMAL(3, 1),
      allowNull: false,
    },
    number_of_ratings: {
      type: type.INTEGER,
      defaultValue: 0,
    },
    guest_threshold: {
      type: type.INTEGER,
      default: null,
    },
    max_guests: {
      type: type.INTEGER,
      allowNull: false,
    },
    minimum_stay_length: {
      type: type.INTEGER,
      default: null,
    },
    availability_end_date: {
      type: type.DATEONLY,
      default: '"2021-01-01',
    },
    availability_last_updated: {
      type: type.DATE(),
      defaultValue: sequelize.NOW,
    },
    number_viewing_listing: {
      type: type.INTEGER,
      default: 0,
    },
    above_avg_views: type.BOOLEAN,
    rare_find: type.BOOLEAN,
    hot_item: type.BOOLEAN,
  });
};
