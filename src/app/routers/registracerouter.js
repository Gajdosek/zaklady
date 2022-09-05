const express = require ("express")

const router = express.Router()

const registracecontroller = require ("../controllers/registracecontroller")

router.get("/registrace",registracecontroller.registrace)

router.post("/registrovani", registracecontroller.registrovani)


module.exports=router