module.exports=mongoose=>{
    const Product=mongoose.model('product',mongoose.Schema({
        name:{type:String},
        category:{type:String},
        price:{type:Number},
        description:{type:String},
        manufacturer:{type:String},
        availableItems:{type:Number},
        imageUrl:{type:String}
    },{
        timestamps:true
    }))
    return Product;
}