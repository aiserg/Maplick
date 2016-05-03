import { Images } from '../imports/api/images.js';
import { Patterns } from '../imports/api/patterns.js';
const pathToNodeProgram = "/Users/prospero/WebstormProjects/node-help-opencv/opencv-image-compare.js";
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

        Meteor._sleepForMs(500);

        let result = {
            comparePercent: 0,
            data: null
        };

        for (let pattern of Patterns.find().fetch()) {

            let fullCompareImagePath = "/Users/prospero/uploads/" + compareImagePath;

            let pathToPattern = "/Users/prospero/" + pattern.pathToPAttern;

            let query = `node ${pathToNodeProgram} ${fullCompareImagePath} ${pathToPattern}`;

            var resultNodeProcess = execSync(query);

            resultNodeProcess = parseFloat(resultNodeProcess);

            if (result.comparePercent < resultNodeProcess) {
                result.comparePercent = resultNodeProcess;
                result.data = pattern;

            }
        }

        return result ;

    }
});