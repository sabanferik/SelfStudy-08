"use strict";
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                                Documentation                               */
/* -------------------------------------------------------------------------- */
// https://swagger-autogen.github.io/docs/
// $ npm i swagger-autogen
// $ npm i swagger-ui-express
// $ npm i redoc-express

//! SWAGGER & Redoc
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../../swagger.json");
const redoc = require("redoc-express");

//* URL => /documents
//* JSON
router.get("/json", (req, res) => {
  res.sendFile("swagger.json", { root: "." });
});
//*swagger
router.get(
  "/swagger",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, {
    swaggerOptions: {
      persistAuthorization: true,
    },
  })
);
//? REDOC
router.get(
  "/redoc",
  redoc({
    title: "Personnel Api",
    specUrl: "/documents/json",
  })
);

module.exports = router;