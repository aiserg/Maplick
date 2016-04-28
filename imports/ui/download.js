import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Images } from '../api/images.js';
import './download.jade';
import { GLOBAL_MAP } from './body.js'

Template.download.events({
    'change .myFileInput': function(event, template) {
        FS.Utility.eachFile(event, function(file) {
            Images.insert(file, function (err, fileObj) {
                console.log("----------------------------------", fileObj.collectionName + "-" + fileObj._id + "-" + fileObj.original.name);
                let marker = new google.maps.Marker({
                    position: new google.maps.LatLng(51.741713, 36.194022),
                    map: GLOBAL_MAP,
                    title:"Hello World!"
                });
            });
        });
    }
});