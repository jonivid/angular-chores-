const express = require('express')
const cors = require('cors')
const server = express()
const familyMembersController = require('./01.controller/family-members-controller')
const choresController = require('./01.controller/chores-controller')

server.use(cors({ origin: 'http://localhost:3000' }))
// server.use(cors({ origin: 'http://localhost:4200' }))
server.use(express.json())

git s
server.use('/familyMembers', familyMembersController)
server.use('/chores', choresController)


server.listen(3001, () => console.log('port 3001 is running'))
