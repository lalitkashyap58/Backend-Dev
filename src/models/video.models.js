import mongoose,{Schema} from "mongoose";
// !this one is different make sure to revise this concept
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
// !this one is different make sure to revise this concept

const videoSchema=new Schema({
    videoFile:{
        type:String,//cloudinary url
        required:true,
    
    },
    thumbanil:{
        type:String,
        required:true,
    
    },
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    duration:{
        type:Number,//cloundinary se
        required:true,
    },
    views:{
        type:Number,
        default:0,
    },
    isPublished:{
        type:Boolean,
        default:true
    },

    owner:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
   

})


videoSchema.plugin(mongooseAggregatePaginate);
export const Video=mongoose.model("Video",videoSchema);