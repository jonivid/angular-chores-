const familyMembersDao = require('../03.dao/family-members-dao')

async function getAllFamilyMembers() {
    const soldiers = await familyMembersDao.getAllFamilyMembers()
    return (soldiers)
}


module.exports = {getAllFamilyMembers}
