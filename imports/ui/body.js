import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './download.js'
import './body.jade';

export let GLOBAL_MAP = null;


Template.body.onRendered(function bodyOnCreated() {
    let myLatlng = new google.maps.LatLng(-33.932861, 151.189182);
    let myOptions = {
        zoom: 15,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    GLOBAL_MAP = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
});
