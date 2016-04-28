import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Images } from '../api/images.js';
import { Session } from 'meteor/session';
import './download.jade';
import './body.js'

Template.download.events({
    'change .myFileInput': function(event, template) {
        FS.Utility.eachFile(event, function(file) {
            Images.insert(file, function (err, fileObj) {
                console.log("----------------------------------fileObj", fileObj);
                console.log("----------------------------------", fileObj.collectionName + "-" + fileObj._id + "-" + fileObj.original.name);
                console.log("-----------------------------Session.get(map)", Session.get("map"))
                let marker = new google.maps.Marker({
                    position: new google.maps.LatLng(51.741713, 36.194022),
                    map: Session.get("map"),
                    title:"Hello World!"
                });
                console.log("------------------------------session", Session.keys);
                // Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
            });
        });
    }
});