import Router from 'express'
import PlayerControl from './PlayerController.js'

const router = new Router()

router.post('/players', PlayerControl.create)
router.get('/players', PlayerControl.getAllPlayers)
router.put('/players/', PlayerControl.updatePlayer)
router.delete('/players/:id', PlayerControl.deletePlayer)

export default router;