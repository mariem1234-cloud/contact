const mongoose=require('mongoose');

const Author=mongoose.model('Author', {

    name: {
        type:String,
    },

    image: {
        type:String,
    },

    email: {
        type:String,
    },

    mobile: {
        type:String,
    },

    company: {
        type:String,
    },

    title:{
        type:String
    },

    selectGroup:{
        type:String
    }



})

module.exports=Author;


