const model = require("../models/prihlasenimodel")



exports.prihlaseni = (req,res)=>{
    
    res.render("prihlaseni")

}
//Akce na prihlaseni uzivatele
exports.prihlasovani = (req,res)=>{
    //Overeni zda uzivatel zadal spravne prihlasovaci udaje
    if(model.prihlaseni(req.body.jmeno,req.body.heslo)==true)
    {
        console.log("prihlaseni")
        //Pokud ano, tak se vytvori cookies se jmenem a zahashovanym heslem
        req.session.jmeno = req.body.jmeno;
        req.session.heslo = model.ziskaniuzivatelepodlejmena(req.body.jmeno).heslo;
        res.redirect("/uzivatelskastranka")
    }
    else
        res.render("main")
}


//Middleware na overeni prihlaseni
exports.jeprihlaseny = (req,res,next) =>
{
    if(req.session.jmeno != undefined && req.session.heslo != undefined)
    {
        next();
    }
    res.render("prihlaseni")

}

exports.uzivatelska_stranka = (req,res)=>
{
    res.render("uzivatelska_stranka")
}