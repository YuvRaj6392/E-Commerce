module.exports=mongoose=>{
    const Order=mongoose.model('order',mongoose.Schema({
        addressId:{type:String},
        productId:{type:String}
    },{
        timestamps:true
    }))
return Order
}