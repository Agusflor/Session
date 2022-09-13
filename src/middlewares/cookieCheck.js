module.exports = (req,res,next)=>{
        if(req.cookies.user){
         req.session.userLogin = req.cookies.user
        }
        next()
    }