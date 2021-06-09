import Player from './Player.js'
import validator from 'validator'

class AppService {
    async create(player) {
        if(validator.isEmail(player.email)) {
            if(validator.isLength(player.number, {min: 1, max: 2}) && /^[0-9]+$/.test(player.number)) {
            const createdPlayer = await Player.create(player);
            return createdPlayer;
        }
        throw new Error("Неверный формат номера игрока.");
      }
        throw new Error("Неверный формат email.");
    }

    async getAllPlayers(r) {
            const players = await Player.find();
            return players;
    }

    async updatePlayer(player) {
            if(!player._id) {
                throw new Error("ID футболиста не указан");
            }
            const updatedPlayer = await Player.findByIdAndUpdate(player._id, player, {new: true});
            return updatedPlayer;
    }

    async deletePlayer(id) {
            if(!id) {
                throw new Error("ID футболиста не указан");
            }
            const player = await Player.findById(id);
            if(player.number == "10") {
                throw new Error("Нельзя удалить футболиста под номером '10'");
            }
            const deletedPlayer = await Player.findByIdAndDelete(id);
            return deletedPlayer;
    }
}

export default new AppService();