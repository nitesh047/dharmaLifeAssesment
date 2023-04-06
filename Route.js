const router = require("express").Router();
const ga_blocks = require("./SchemaBlock.js");
const ga_districts = require('./SchemaDistrict.js');
const ga_states = require('./SchemaState.js');

router.get("/", async (req, res) => {
    const d1 = await ga_states.aggregate([
        {
            $lookup: {
                from: "ga_districts",
                localField: "stateId",
                foreignField: "stateId",
                as: "districts"
            }
        }
        ,
        {
            $group: {
                _id: { "stateId": '$stateId', "stateName": '$stateName' },
                districts: { $push: "$districts" }
            }
        }
        ,
        {
            $unwind: {
                path: '$districts'
            }
        },
        {
            $unwind:{
                path:'$districts'
            }
        }
        ,
        {
            $lookup:{
                from:"ga_blocks",
                localField:'districts.districtId',
                foreignField:'districtId',
                as:'districts.blocks'
            }
        }
        // ,
        // {
        //     $group:{
        //         _id:{"districtId":'$districts.$districtId'},
        //         districts:{$push:"$blocks"}
        //     }
        // }
    ])
    console.log(d1);
    res.send(d1);
    //     {
    //         $lookup: {
    //             from: "ga_blocks",
    //             localField: "blockId",
    //             foreignField: "blockId",
    //             as: "blockId"
    //         }
    //     },
    //     { $unwind: { path: "$ga_districts", preserveNullAndEmptyArrays: true }},
    //     { $unwind: { path: "$ga_blocks", preserveNullAndEmptyArrays: true }}
    // ])
    try {
        console.log("Get Request...")

        const allData = await ga_blocks.find();
        console.log(allData[0].districtId)
        const district = await ga_districts.findById(allData[0].districtId)
        console.log(district)
        res.status(200).json(district);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;