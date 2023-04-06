const mongoose = require("mongoose");
const DataSchema = new mongoose.Schema(

    {
        _id:{
            type:Number,
            require:true
        },
        blockId:{
            type:String,
            require:true
        },
         blockName:{
            type:String,
            require:true
         },
         censusBlockCode:{
            type:String,
            require:true
         },
         districtId:{
            type:String,
            require:true
         },
         stateId:{
            type:String,
            require:true
         }
    }
);
module.exports = mongoose.model("ga_blocks", DataSchema);