const Validator = require('./Models/Validator');
const chalk = require('chalk');

class Program {
    /**
     *Creates an instance of Program.
     * @param {*} room
     * @param {*} robot
     * @param {*} patchesOfDirt
     * @memberof Program
     */
    constructor(room, robot, patchesOfDirt) {
        this.room = room;
        this.robot = robot;
        this.patchesOfDirt = patchesOfDirt;
    }

    /**
     *
     *
     * @param {*} directions
     * @memberof Program
     */
    run(directions){
        let numberOfDirtPatchesCleaned = 0;
        let index = 0;
        const lengthOfDirections = directions.length;

        while((index < lengthOfDirections) && (Validator.robotStaysInRoom(this.robot, this.room))) {
            this.robot.move(directions[index]);
            if(Validator.isRobotOnPatchOfDirt(this.robot, this.patchesOfDirt)) {
                numberOfDirtPatchesCleaned = numberOfDirtPatchesCleaned + 1;
            }
            index++;
        }

        this.logFinalResult(numberOfDirtPatchesCleaned)
    }

    /**
     *
     *
     * @param {*} numberOfDirtPatchesCleaned
     * @memberof Program
     */
    logFinalResult(numberOfDirtPatchesCleaned) {
        console.log(chalk.bold.red(`Your robot ended at ${this.robot.getPosition().x},${this.robot.getPosition().y}`))
        console.log(chalk.bold.green(`Your robot picked up ${numberOfDirtPatchesCleaned} patches of dirt`));
    }
}

module.exports = Program;