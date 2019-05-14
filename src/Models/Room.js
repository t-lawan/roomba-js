/**
 *
 *
 * @class Room
 */
class Room {

    /**
     *Creates an instance of Room.
     * @param {*} dimension
     * @memberof Room
     */
    constructor(dimension) {
        this._dimension = dimension;
    }

    getDimension(){
        return this._dimension;
    }
}

module.exports = Room;