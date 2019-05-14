#!/usr/bin/env node
'use strict';

let FileManager =  require('./Services/FileManager');
let Room =  require('./Models/Room');
let Robot =  require('./Models/Robot');
let Program =  require('./Program');

try {
    const inputFile = FileManager.getContents('input.txt');

    const room = new Room(
        FileManager.getRoomDimensions(inputFile)
    );
    const robot = new Robot(
        FileManager.getRobotCoordinates(inputFile)
    );
    const patchesOfDirt= FileManager.getPatchesOfDirtCoordinates(inputFile);
    const directions = FileManager.getDirections(inputFile);
    
    const program = new Program(room, robot, patchesOfDirt);
    program.run(directions);
} catch (error) {
    console.log(error);
}