let Dimension = require('../Models/Dimension');
let fs = require('fs');
let Validator = require('../Models/Validator');
class FileManager {

    static getContents(url) {
        return fs.readFileSync(url).toString();
    };

    /**
     *
     *
     * @static
     * @memberof FileManager
     */
    static getRoomDimensions(text) {
        return Dimension.getCoordinate(text.split('\n')[0]);
    }

    /**
     *
     *
     * @static
     * @memberof FileManager
     */
    static getRobotCoordinates(text){
        return Dimension.getCoordinate(text.split('\n')[1]);
    }

    /**
     *
     *
     * @static
     * @memberof FileManager
     */
    static getPatchesOfDirtCoordinates(text){
        const lengthOfArray= text.split('\n').length;
        const coordinates = [];
        for (let i = 2; i < (lengthOfArray - 1); i++) {
            coordinates.push(Dimension.getCoordinate(text.split('\n')[i]))
        }
        return coordinates;
    }

    /**
     *
     *
     * @static
     * @memberof FileManager
     */
    static getDirections(text){
        const textArray =  text.split('\n');
        const directions = textArray[textArray.length - 1].split('');
        Validator.directions(directions);
        return directions;
    }



}

module.exports = FileManager;