const choresDao = require('../03.dao/chores-dao')


async function getAllChores() {
    const chores = await choresDao.getAllChores()
    return (chores)
}

async function addChore(choreDetails) {
    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();
    newdate = year + "/" + month + "/" + day;
    choreDetails.date = newdate
    const id = await choresDao.addChore(choreDetails)
    return id
}

async function deleteChore(choreId) {
    let deleteChoreData = await choresDao.deleteChore(choreId)
    return (deleteChoreData.insertId)
}


module.exports = { getAllChores, addChore, deleteChore }
