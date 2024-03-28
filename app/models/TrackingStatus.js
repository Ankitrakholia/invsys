// app/models/TrackingStatus.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Update with path to your database config

class TrackingStatus extends Model {}

TrackingStatus.init({
  requestId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: 'requests', // Name of the table that contains requests
      key: 'id',
    }
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastUpdated: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  }
}, {
  sequelize,
  modelName: 'TrackingStatus',
  tableName: 'tracking_status', // Make sure this matches your actual table name
  timestamps: false
});

module.exports = TrackingStatus;
