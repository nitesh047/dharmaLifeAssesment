const mongoose = require("mongoose");
const DataSchema = new mongoose.Schema(

    {
        _id:{
            type:Number,
            require:true
        },
        censusDistrictCode:{
            type:String,
            require:true
        },
        districtId:{
            type:String,
            require:true
         },
         districtName:{
            type:String,
            require:true
         },
         stateId:{
            type:String,
            require:true
         },
         
    }
);
module.exports = mongoose.model("ga_districts", DataSchema);