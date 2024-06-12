"use strict";
const Contact = require("../models/contactModel");
const { sequelize } = require("../configs/db");
module.exports = {
  list: async (req, res) => {
    // const data = await sequelize.query("SELECT * FROM contacts") //* klasik sql sorguların yerine ORM kullanıyoruz.
    // const data = await Contact.findAndCountAll()
    // const data = await Contact.findAll()
    const data = await Contact.findAll({
      where: {
        isActive: true,
      },
    });
    console.log(data);
    res.status(200).send({
      error: false,
      contacts: datas,
    });
  },
  create: async (req, res) => {
    // const { firstName, lastName, email, phone, address, isActive } = req.body;
    // const data = await sequelize.query(
    //   "INSERT INTO contacts (firstName,lastName,email,phone,address,createdAt,updatedAt,isActive) VALUES (?,?,?,?,?,?,?,?)",
    //   {
    //     replacements: [
    //       firstName,
    //       lastName,
    //       email,
    //       phone,
    //       address,
    //       new Date(),
    //       new Date(),
    //       isActive || true,
    //     ],
    //   }
    // );//* Klasik sql sorgusu
    const data = await Contact.create(req.body); //! ORM

    res.status(201).send({
      error: false,
      contact: data,
    });
  },
  get: async (req, res) => {},
  update: async (req, res) => {},
  delete: async (req, res) => {},
};
