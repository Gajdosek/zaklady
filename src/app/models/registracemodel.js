const jsondb = require("simple-json-db")
const uzivatele = new jsondb(__dirname+"/../../../data/uzivatel.json")
const bcrypt = require("bcrypt")


exports.vytvoruzivatele = (jmeno,heslo) => {
    let id = (uzivatele.get("nextid"))
    let uzivatel;
    bcrypt.hash(heslo, 10, function(err, hash) {
       
        uzivatel = {"jmeno": jmeno,"heslo":hash}
         uzivatele.set(id,uzivatel)
         uzivatele.set("nextid",++id)
        
    });


    return;
}


exports.jevdatabazi = (jmeno) => {
let zaznamy = uzivatele.JSON()
for(let u in zaznamy)
{
   if (zaznamy[u].jmeno == jmeno) 
        return true
}
return false
}




