const express = require('express')
const { requireAuth, requireAdmin } = require('../../middlewares/requireAuth.middleware')
const { log } = require('../../middlewares/logger.middleware')
const { getStays, getStayById, addStay, updateStay, removeStay } = require('./stay.controller')
const router = express.Router()

// middleware that is specific to this router
// router.use(requireAuth)

router.get('/', log, getStays)
router.get('/:id', getStayById)
// router.post('/', requireAuth, addStay)
router.put('/:id', requireAuth, updateStay)
// router.delete('/:id', requireAuth, removeStay)

module.exports = router