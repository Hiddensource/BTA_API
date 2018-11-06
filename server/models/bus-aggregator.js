var mongoose = require('mongoose');

var BusAggregator = mongoose.model('BusAggregator', {
    busAggName: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    appId: {
        type: String,
        required: true
    },
    appKey: {
        type: String,
        required: true
    }
});

module.exports = {
    BusAggregator
}