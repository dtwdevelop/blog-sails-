/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
module.exports = {

  page: function (req, res) {
    //var data = Models.find({ where: { topic: 'hello' },limit: 1, skip:0});
    Article.findOne({ id: 1 }).exec(function(err,found){
        if(err)
             return res.serverError(err);
         else{
             console.log(found.title);
             return res.view('hi',{data:found});
         }
    
    });

    
    
  },
  
    
  index: function (req, res) {
  

},

   list: function (req, res) {
  
   News.find().exec(function(err,found){
        if(err)
             return res.serverError(err);
         else{
              return res.json(found);
             // return res.view("list",{news:found});
         }
    
    });

},

  pagenews: function (req, res) {
  
   
   if(req.param('id')) var id =req.param('id');
    News.findOne({ id: id }).exec(function(err,found){
        if(err)
             return res.serverError(err);
         else{
              return res.view("page_news",{info:found});
         }
    
    });
  }
/**
*/

  


// input: function (req, res) {
//       // Article.create({id:2,title:'first post',topic: "hello Sails",date:'2014-10-29'}).exec(function(err,created){
//       //     console.log(err);
//       // });
// var date = new Date();
// News.create({id:3,title:'first post',text: "Secound  news"}).exec(function(err,created){
//           console.log(err);
//       });
      
//     return res.send("Make ok");
 // }


};

