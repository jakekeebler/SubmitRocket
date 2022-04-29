// Import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');

// Import database connection from config.js
const sequelize = require('../config/connection');

// Create fact model
class Fact extends Model {}

// Create fields/columns for fact model
Fact.init(
    {
        trans_date: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        period_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'periods',
                key: 'id'
            }
        },
        product_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'products',
                key: 'id'
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        units: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    },

    {
        sequelize,
        tableName: 'fact',
        timestamps: false,

        // Set up indexes for optimized query performance
        indexes: [
            {
                name: 'period_id',
                using: 'BTREE',
                fields: [{ name: 'period_id' }]
            },
            {
                name: 'product_id',
                using: 'BTREE',
                fields: [{ name: 'product_id' }]
            },
            {
                name: 'user_id',
                using: 'BTREE',
                fields: [{ name: 'user_id' }]
            }
        ]
    }
);

module.exports = Fact;
