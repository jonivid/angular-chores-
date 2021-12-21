const connection = require('./connection-wrapper')
let ServerError = require("../errors/server-error");
let ErrorType = require("../errors/error-type");


async function getAllFamilyMembers() {
    let sql = `SELECT * from family_members`
    const soldiers = await connection.execute(sql)
    return soldiers

}


module.exports = { getAllFamilyMembers }