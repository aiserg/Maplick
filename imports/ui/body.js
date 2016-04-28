import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './download.js'
import './body.jade';

export let GLOBAL_MAP = null;


Template.body.onRendered(function bodyOnCreated() {
    let myLatlng = new google.maps.LatLng(51.741713, 36.194022);
    let myOptions = {
        zoom: 8,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    GLOBAL_MAP = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
});
