module.exports=mongoose=>{
    const User=mongoose.model('user',mongoose.Schema({
        firstName:{type:String},
        lastName:{type:String},
        email:{type:String},
        contactNumber:{type:String},
        password:{type:String},
        isLoggedIn:{type:Boolean},
        token:{type:String},
        role:{type:String}
    },{
        timestamps:true
    }));
    return User;
}