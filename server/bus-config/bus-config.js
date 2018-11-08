var {
    BusAggregator
} = require('../models/bus-aggregator');
var {
    mongoose
} = require('../db/mongoose');
var provider = require('../provider/provider');

var Details = [];

providerConfig = async (userRequest) => {




    const busAggregators = await BusAggregator.find();

    // busAggregators.forEach(async (busAggregator) => {

    //     aggregator =  busAggregator.busAggName;
    //     const detail = await provider.aggregator(userRequest, aggregator, busAggregator);
    //     // console.log(detail);
    //     Details.push(detail);


    // });

    for (let i = 0; i < busAggregators.length; i++) {
        aggregator = busAggregators[i].busAggName;
        const detail = await provider.aggregator(userRequest, aggregator, busAggregators[i]);
        Details.push(detail);
    }




    //    Details[0].then((e)=>{console.log(e)});
    return (Details);

}


module.exports = {
    providerConfig

}