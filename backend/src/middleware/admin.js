import jwt from 'jsonwebtoken';
const JWT_ADMIN_SECRET="skjgdkgfsjkb";


function adminMiddleware(req,res,next){

    const token = req.headers.token;
    const decoded =jwt.verify(token,JWT_ADMIN_SECRET);

    if(decoded){
        req.userId=decoded.id;
        next();
    }else{
        res.status(403).json({message:"You are not signed in"});
    }
}

export default adminMiddleware;