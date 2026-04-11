
//1. --------------using try Catch method-------------
// const asyncHandler = (func) =>async (req, res, next) =>  {

//     try{
//         await func(res, res, next);
//     }
//     catch(error){
// res.status(error.code || 500).json({
//     success: false,
//     message: error.message,
// })
//     }
// }



//2. ------Using  promise-catch method

const asyncHandler = (func) => (req, res, next) => {
Promise.resolve(func(req, res, next)).catch((error) => 
    next(error)
)
}
export {asyncHandler};