module.exports=mongoose=>{
    const Address=mongoose.model('address',mongoose.Schema({
        zipCode:{type:String},
        state:{type:String},
        street:{type:String},
        landmark:{type:String},
        city:{type:String},
        phoneNumber:{type:String},
        name:{type:String}
    },{
        timestamps:true
    }));
    return Address
}