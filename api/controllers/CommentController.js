/**
 * CommentController
 *
 * @description :: Server-side logic for managing Comments
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	comment: function (req, res) {
  
  Comment.find().sort('date DESC').paginate({page: 1, limit: 5}).exec(function(err,found){
        if(err)
             return res.serverError(err);
         else{

             // return res.view("comment",{comments:found});
              return res.json(found);
         }
     
    });
    
  

    
  },

   addcomment: function (req, res) {
    console.log(req.allParams());
    Comment.create(req.allParams()).exec(function(err,created){
          console.log(err);
      });
      
    //return res.send("Make ok");
    return res.redirect("comment");
  },

	
};

