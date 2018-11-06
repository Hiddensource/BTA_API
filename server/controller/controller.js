var {
    BusAggregator
} = require('../models/bus-aggregator');
var {
    User
} = require('../models/user');
var {
    mongoose
} = require('../db/mongoose');

getData = (req, res) => {
    BusAggregator.find().then((busAggregators) => {
        res.send({
            busAggregators
        })
    }, (e) => {
        res.status(400).send(e);
    });
}

addData = (req, res) => {
    var newBusAggregator = new BusAggregator({
        busAggName: req.body.busAggName,
        url: req.body.url,
        appId: req.body.appId,
        appKey: req.body.appKey
    });
    newBusAggregator.save().then((busAggregators) => {
        res.send({
            busAggregators
        })
    }, (e) => {
        res.status(400).send(e);
    });
}
updateData = (req, res) => {

    BusAggregator.findOneAndUpdate({
        busAggName: req.params.name
    }, {
        $set: {
            busAggName: req.body.busAggName,
            url: req.body.url,
            appId: req.body.appId,
            appKey: req.body.appKey
        }
    }).then((busAggregators) => {
        res.send({
            busAggregators
        })
    }, (e) => {
        res.status(400).send(e);
    });

}
deleteData = (req, res) => {
    BusAggregator.findOneAndDelete({
        busAggName: req.params.name
    }).then((busAggregators) => {
        res.send({
            busAggregators
        })
    }, (e) => {
        res.status(400).send(e);
    });
}


module.exports = {
    getData,
    addData,
    updateData,
    deleteData
}