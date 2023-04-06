const mongoose = require("mongoose");
const DataSchema = new mongoose.Schema(

    {
        _id:{
            type:Number,
            require:true
        },
        censusStateCode:{
            type:String,
            require:true
        },
        censusYear:{
            type:String,
            require:true
         },
         stateId:{
            type:String,
            require:true
         },
         stateName:{
            type:String,
            require:true
         },
         
    }
);
module.exports = mongoose.model("ga_states", DataSchema);