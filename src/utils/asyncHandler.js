
const asyncHandler=(requestHandler)=>{
    (req,res,next)=>{
        Promise.resolve(requestHandler).catch((err)=>next(err))
    }
}
export {asyncHandler};

//you can also so that with try and catch