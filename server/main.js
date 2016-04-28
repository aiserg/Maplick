import { Images } from '../imports/api/images.js';

Images.allow({
    'insert': function () {
        // add custom authentication code here
        return true;
    }
});