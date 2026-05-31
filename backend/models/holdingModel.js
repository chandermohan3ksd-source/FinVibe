const  {HoldingSchema}=require("../Schemas/holdingSchema.js");
const {model}=require("mongoose");
const holdingModel=model("holding",HoldingSchema);
module.exports={holdingModel};
