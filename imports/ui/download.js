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
                let x = 0, y = 0;
                switch(fileObj.original.name) {
                    case "rome.jpg":
                        [x, y] = [41.891305, 12.492655];
                        break;
                    case "pushkinskiy.jpeg":
                        [x, y] = [51.737959, 36.192831];
                        break;
                    case "tower.jpg":
                        [x, y] = [48.858370, 2.294857];
                        break;
                    default:
                        [x, y] = [51.741713, 36.194022];
                }
                let newPoint = new google.maps.LatLng(x, y);
                let marker = new google.maps.Marker({
                    position: newPoint,
                    map: GLOBAL_MAP,
                    title:"Hello World!"
                });
                GLOBAL_MAP.setCenter(newPoint);
            });
        });
    }
});