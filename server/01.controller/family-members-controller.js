const express = require('express')
const familyMembersLogic = require('../02.logic/family-members-logic')
const router = express.Router()

//get all soldiers
router.get('/', async (req, res, next) => {
    try {
        const soldiers = await familyMembersLogic.getAllFamilyMembers()
        res.json(soldiers)

    }
    catch (error) {
        return next(error);

    }

})


module.exports = router