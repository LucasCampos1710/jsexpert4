import { constants } from "../../_shared/constants.js"
import RoomController from "./contoller.js"
import RoomSocketBuilder from "./util/roomSocket.js"


const room = {
    id: '001',
    topic: 'JS Expert'
}

const user = {
    img: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/cactus_cacti_avatar_pirate-256.png',
    username: 'Lucas' + Date.now()
}

const roomInfo = { user, room }

const socketBuilder = new RoomSocketBuilder({
    socketUrl: constants.socketUrl,
    namespace: constants.socketNamespaces.room
})

const roomControler = RoomController.initialize(dependencies)

