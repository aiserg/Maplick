import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Images } from '../api/images.js';
import './download.jade';

Template.download.events({
    'change .myFileInput': function(event, template) {
        FS.Utility.eachFile(event, function(file) {
            Images.insert(file, function (err, fileObj) {
                console.log("----------------------------------fileObj", fileObj);
                console.log("----------------------------------", fileObj.collectionName + "-" + fileObj._id + "-" + fileObj.original.name);
                // Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
            });
        });
    }
});