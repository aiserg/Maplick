import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';

import './download.js'
import './body.jade';

Template.body.onRendered(function bodyOnCreated() {
    let myLatlng = new google.maps.LatLng(51.741713, 36.194022);
    let myOptions = {
        zoom: 8,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    
    let map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);


    let marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title:"Hello World!"
    });
});