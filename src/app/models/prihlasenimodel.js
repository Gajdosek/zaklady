const jsondb = require("simple-json-db")
const uzivatele = new jsondb(__dirname + "/../../../data/uzivatel.json")
const bcrypt = require("bcrypt")


exports.prihlaseni = function (jmeno, heslo) {

    let res = false;
    if (this.jevdatabazi(jmeno) == true) {
        console.log("YO")
        let uzivatel = this.ziskaniuzivatelepodlejmena(jmeno)
        // Load hash from your password DB.
        res = bcrypt.compareSync(heslo, uzivatel.heslo)
    }
    return res;

}

exports.ziskaniuzivatelepodlejmena = (jmeno)=> {

    let zaznamy = uzivatele.JSON()
    for (let u in zaznamy) {
        if (zaznamy[u].jmeno == jmeno)
            return zaznamy[u]
    }
    return false

}

exports.jevdatabazi = (jmeno) => {
    let zaznamy = uzivatele.JSON()
    for (let u in zaznamy) {
        if (zaznamy[u].jmeno == jmeno)
            return true
    }
    return false
}