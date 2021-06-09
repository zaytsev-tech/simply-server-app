import Player from './Player.js'
import Service from './Service.js'

class PlayerController {
    async create(req, res) {
        try {
            const player = await Service.create(req.body);
            res.json(player);
        } catch(e){
            res.status(500).json(e.message);
        }
    }

    async getAllPlayers(req, res) {
        try {
            const players = await Service.getAllPlayers();
            return res.json(players);
        } catch(e) {
            res.status(500).json(e.message)
        }
    }

    async updatePlayer(req, res) {
        try {
            const updatedPlayer = await Service.updatePlayer(req.body);
            return res.json(updatedPlayer);
        } catch(e) {
            res.status(500).json(e.message)
        }
    }

    async deletePlayer(req, res) {
        try {
            const deletedPlayer = await Service.deletePlayer(req.params.id);
            return res.json(deletedPlayer);
        } catch(e) {
            res.status(500).json(e.message)
        }
    }
}

export default new PlayerController();