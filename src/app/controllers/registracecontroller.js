const model = require("../models/registracemodel")

exports.registrace = (req,res)=>{
    
    res.render("registrace")

}

exports.registrovani = (req,res)=>{
if(req.body.heslo != req.body.potvrzeni_hesla)
{
    res.send({odpoved:"Hesla jsou ruzna"})
    return;
}

 if(model.jevdatabazi(req.body.jmeno)==false)
 {
    model.vytvoruzivatele(req.body.jmeno, req.body.heslo)
    res.send({odpoved:"Vse je ok"})
 }
 else
 {
    res.send({odpoved:"Uzivtel je jiz registrovan"})
 }
}