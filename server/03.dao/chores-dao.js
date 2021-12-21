const connection = require('./connection-wrapper')
let ServerError = require("../errors/server-error");
let ErrorType = require("../errors/error-type");

async function getAllChores() {
    let sql = `SELECT c.id, c.description, c.date_created as 'dateCreated',fm.name as 'familyMember'
    FROM chores c
    INNER JOIN family_members fm  ON c.family_member_id=fm.id;`
    const chores = await connection.execute(sql)
    return chores
}

async function addChore(choreDetails) {
    let sql = `INSERT INTO chores (description,date_created ,family_member_id) 
    VALUES(?,?,?);`
    let parameters = [choreDetails.description, choreDetails.date, choreDetails.familyMember]
    try {
        let createChoreResult = await connection.executeWithParameters(sql, parameters)
        return createChoreResult.insertId;
    }
    catch (err) {
        throw new ServerError(ErrorType.GENERAL_ERROR, sql, err);
    }
    
}
async function deleteChore(choreId) {
    let sql = `DELETE from chores where id=?`
    let parameters = [choreId];
    const result = await connection.executeWithParameters(sql, parameters)
    console.log(result);
   return result
}

module.exports = { getAllChores, addChore,deleteChore }