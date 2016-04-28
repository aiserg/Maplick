import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

import './download.js'
import './body.jade';

Template.body.onRendered(function bodyOnCreated() {
    let myLatlng = new google.maps.LatLng(51.741713, 36.194022);
    let myOptions = {
        zoom: 8,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    Session.set("map", new google.maps.Map(document.getElementById("map_canvas"), myOptions));
});