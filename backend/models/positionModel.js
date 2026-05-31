const {PositionsSchema}=require("../Schemas/positionSchema");
const {model}=require("mongoose");
const positionModel=new model("position",PositionsSchema);
module.exports={positionModel};