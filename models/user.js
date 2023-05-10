import mongoose from "mongoose";
const{Schema,model}=mongoose;

const userShema= new Schema({
    email:{
        type:string,
        required:true,
        unique:true,
        trim:true,
        lowecase:true,
        index:{unique:true}
    },
    password:{
        type:string,
        required:true

    },

})

export const user = model('user', userShema);