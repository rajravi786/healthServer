import UserModel from "../model/user.js"
// import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken';

class SignupController {
    static signUp = async (req, res) => {
    
    
       let userExist = await UserModel.exists({username:req.body.username},)
      if(userExist){

        return res.json({
          message: 'User already exists',
          status: false
      })
      }
      
      else{

    
         
        
       let user = new UserModel({
            username:req.body.username,
            password:req.body.password,
            
          
           
            

            
        });
        
        await user.save();
       return res.json({
        message: 'User register success',
        status: true,
        
     })
        
      }
    
}
}

export default SignupController;