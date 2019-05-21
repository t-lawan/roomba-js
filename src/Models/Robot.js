import { DirectionConst } from '../Consts/DirectionConsts';
/**
 *
 *
 * @class Robot
 */
class Robot {

    /**
     *Creates an instance of Robot.
     * @param {*} coordinates
     * @memberof Robot
     */
    constructor(coordinates) {
        this._position = coordinates;
    }

    /**
     * Adds or Subtracts to the X or Y coordinate
     * depending on the Direction
     * @param direction
     * @memberof Robot
     */
    move(direction) {
        switch (direction) {
            case DirectionConst.N.id: {
                this._position.y++;
                break;
            }
            case DirectionConst.E.id: {
                this._position.x++;
                break;
            }
            case DirectionConst.S.id: {
                this._position.y--;
                break;
            }
            case DirectionConst.W.id: {
                this._position.x--;
                break;
            }
            default: {
                throw new Error(`There's an error with the directions provided`);
            }
        }
        // console.log(`The robot moved ${direction} to ${this._position.x},${this._position.y}`);
    }

    /**
     * Returns the current posoition of the robot
     *
     * @memberof Robot
     */
    getPosition(){
        return this._position;
    }
}

module.exports = Robot;
