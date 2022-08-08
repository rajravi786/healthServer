import userModel from "../model/user.js"

class ExpenseController {
    static expense = async (req, res) => {
    
        var objFriends = {time:'hello',date:13,description:req.body.description,medicine:req.body.medication};
        userModel.findByIdAndUpdate(
           req.params.id, 
           { $push: { remainder: objFriends  } },
          function (error, success) {
                if (error) {
                    console.log(error);
                } else {
                    console.log(success);
                    res.status(true).json({message:"sucesss"})
                }
            });
        
        
      
    }
  }

  export default ExpenseController;