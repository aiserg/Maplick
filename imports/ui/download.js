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

                let newFileName = `${fileObj.collectionName}-${fileObj._id}-${fileObj.original.name}`;

                Meteor.call("compareImage", newFileName, (err, res) => {

                    console.log("res", res);

                    let newPoint = new google.maps.LatLng(res.data.latitude, res.data.longitude);
                    
                    let marker = new google.maps.Marker({
                        position: newPoint,
                        map: GLOBAL_MAP,
                        title:"Hello World!"
                    });

                    GLOBAL_MAP.setCenter(newPoint);
                });

            })
        })
    }
});