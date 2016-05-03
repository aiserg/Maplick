import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating'
import { Images } from '../api/images.js'
import './download.jade'
import { GLOBAL_MAP } from './body.js'

Template.download.events({
    'change .myFileInput': function(event, template) {
        FS.Utility.eachFile(event, function(file) {
            let mainform = document.getElementsByClassName('maplick-mainform');
            let foundedimg = document.getElementsByClassName('founded-img');
            let imgcontainer = document.getElementsByClassName('img-container');
            mainform[0].style.top = '15%';
            foundedimg[0].style.height = '70%';
            Images.insert(file, function (err, fileObj) {
                let newFileNAme = `${fileObj.collectionName}-${fileObj._id}-${fileObj.original.name}`;
                console.log(newFileNAme);
                Meteor.call("compareImage", newFileNAme, (err, res) => {
                    console.log("res", res);
                });
                //
                // let latitude = 0, longitude = 0;
                // switch(fileObj.original.name) {
                //     case "rome.jpg":
                //         [latitude, longitude] = [41.891305, 12.492655];
                //         break;
                //     case "pushkinskiy.jpeg":
                //         [latitude, longitude] = [51.737959, 36.192831];
                //         break;
                //     case "tower.jpg":
                //         [latitude, longitude] = [48.858370, 2.294857];
                //         break;
                //     default:
                //         [latitude, longitude] = [51.741713, 36.194022];
                // }
                // let newPoint = new google.maps.LatLng(latitude, longitude);
                // let marker = new google.maps.Marker({
                //     position: newPoint,
                //     map: GLOBAL_MAP,
                //     title:"Hello World!"
                // });
                // GLOBAL_MAP.setCenter(newPoint);
            })
        })
    }
});