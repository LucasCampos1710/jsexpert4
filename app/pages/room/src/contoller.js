export default class RoomController {
    constructor({ roomInfo, socketBuilder }) {
        this.socketBuilder = socketBuilder
        this.roomInfo = roomInfo
    }
    static initialize(deps) {
        return new RoomController(deps)
    }
    
    async _initialize() {
        const socket = socketBuilder
            .setOnUserConnected((user) => console.log('user connected!', user))
            .setOnUserDisconnected((user) => console.log('user disconnected!', user))
            .setOnRoomUpdated((room) => console.log('room list!', room))
            .build()



        socket.emit(constants.events.JOIN_ROOM, this.roomInfo)
    }

}