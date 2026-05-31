const {OrderSchema}=require("../Schemas/orderSchema.js");
const {model}=require("mongoose");
const orderModel=new model("order",OrderSchema);
module.exports={orderModel};
