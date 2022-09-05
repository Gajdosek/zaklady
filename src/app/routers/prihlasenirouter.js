const express = require ("express")

const router = express.Router()

const prihlasenicontroller = require ("../controllers/prihlasenicontroller")

router.get("/prihlaseni",prihlasenicontroller.prihlaseni)

router.post("/prihlasovani",prihlasenicontroller.prihlasovani)

router.get("/uzivatelskastranka", prihlasenicontroller.jeprihlaseny ,prihlasenicontroller.uzivatelska_stranka)

module.exports=router