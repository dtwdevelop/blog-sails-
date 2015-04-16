/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
* Models.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
// 

tableName: 'news',
migrate: 'safe',
autoPK: false,        // don't try and add a unique ID; we already have one 
autoCreatedAt: false, // don't try and add a createdAt timestamp
autoUpdatedAt: false, // don't try and add a updatedAt timestamp
  attributes: {
     id:{type:'integer',primaryKey: true},
     title : { type: 'string',
         maxLength: 200,
//         required: true,
     },
     text : { type: 'string' },
    
  }
  
};


