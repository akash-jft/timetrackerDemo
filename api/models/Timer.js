/**
 * Roles.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

 module.exports = {

    attributes: {
  
      name: {
        type: 'string',
        required: true,
      },
      task: {
        type: 'string',
        required: true,
      },
      author: {
        type: 'string',
        required: true,
      },
      hours: {
        type: 'integer',
        defaultsTo:0
      },
      minutes:{
        type: 'integer',
        defaultsTo:0
      },
      seconds:{
        type: 'integer',
        defaultsTo:0
      },
    }
  };
  
  