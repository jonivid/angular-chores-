const express = require('express')
const choresLogic = require('../02.logic/chores-logic')
const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        const chores = await choresLogic.getAllChores()
        res.json(chores)

    }
    catch (error) {
        return next(error);
    }
})

router.post('/', async (req, res, next) => {
    try {
        const choreDetails = req.body;
        const id = await choresLogic.addChore(choreDetails)
        res.json(id)

    }
    catch (error) {
        return next(error);

    }
})

router.delete('/:choreId', async (req, res, next) => {
    try {
        const choreId = req.params.choreId
        console.log(choreId);
        const result = await choresLogic.deleteChore(choreId)
        if (result) res.json(result)

    }
    catch (error) {
        return next(error);

    }
})



module.exports = router