class Room {

    constructor(dimension) {
        this._dimension = dimension;
    }

    getDimension(){
        return this._dimension;
    }
}

module.exports = Room;