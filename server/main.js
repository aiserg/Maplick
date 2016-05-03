import { Images } from '../imports/api/images.js';
import { Patterns } from '../imports/api/patterns.js';

const execSync = require('exec-sync');

Images.allow({
    'insert': function () {
        // add custom authentication code here
        return true;
    },
    'update': function () {
        // add custom authentication code here
        return true;
    }
});

Meteor.methods({
    "compareImage"(compareImagePath) {
        console.log("compareImage", compareImagePath);
        let resultNodeProcess = execSync('node /Users/prospero/WebstormProjects/node-help-opencv/opencv-image-compare.js /Users/prospero/WebstormProjects/node-help-opencv/rome1.jpg /Users/prospero/WebstormProjects/node-help-opencv/rome2.jpg');
        console.log(resultNodeProcess);
        return resultNodeProcess;
    }
});