const Validator = require('./Models/Validator');
const chalk = require('chalk');

class Program {
    constructor(room, robot, patchesOfDirt) {
        this.room = room;
        this.robot = robot;
        this.patchesOfDirt = patchesOfDirt;
    }

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

    logFinalResult(numberOfDirtPatchesCleaned) {
        console.log(chalk.bold.red(`Your robot ended at ${this.robot.getPosition().x},${this.robot.getPosition().y}`))
        console.log(chalk.bold.green(`Your robot picked up ${numberOfDirtPatchesCleaned} patches of dirt`));
    }
}

module.exports = Program;