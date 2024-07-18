"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- *
{
    "plateNumber": "34ABC123",
    "brand": "Ford",
    "model": "Focus",
    "year": 2020,
    "isAutomatic": true,
    "pricePerDay": 249.99
}
{
    "plateNumber": "34ABC234",
    "brand": "Renault",
    "model": "Megane",
    "year": 2022,
    "isAutomatic": false,
    "pricePerDay": 199.99
}
{
    "plateNumber": "34ABC345",
    "brand": "Opel",
    "model": "Astra",
    "year": 2021,
    "isAutomatic": false,
    "pricePerDay": 189.99,
    "isPublish": false
}
/* ------------------------------------------------------- */
// Car Model:

const CarSchema = new mongoose.Schema({

    plateNumber: {
        type: String,
        trim: true,
        unique: true,
        required: true,
    },

    brand: {
        type: String,
        trim: true,
        required: true,
    },

    model: {
        type: String,
        trim: true,
        required: true,
    },

    year: {
        type: Number,
        min: 1950,
        max: new Date().getFullYear(), //2024
        required: true,
    }
})

