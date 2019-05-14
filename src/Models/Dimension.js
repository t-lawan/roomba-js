/**
 *
 *
 * @class Dimension
 */
class Dimension {
    static getCoordinate(dimensionsString){
        return {
            x: +dimensionsString.split(' ')[0],
            y: +dimensionsString.split(' ')[1]
        };
    }
}

module.exports = Dimension;