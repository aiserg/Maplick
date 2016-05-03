import { Images } from '../imports/api/images.js';
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
    "useOpencv"() {
        let resultNodeProcess = execSync('node /Users/prospero/WebstormProjects/node-help-opencv/opencv-image-compare.js /Users/prospero/WebstormProjects/node-help-opencv/rome1.jpg /Users/prospero/WebstormProjects/node-help-opencv/rome2.jpg');
        console.log(resultNodeProcess);
    }

});