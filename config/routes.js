/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/tt': { view: 'pages/homepage' },
  '/kk': { view: 'Demo/timer' },
  '/' : 'DemoController.author',

  // democontroller
  'POST /create-author' : 'DemoController.createAuthor',
  'POST /create-task' : 'DemoController.createTask',
  'GET /author/editbyid' : 'DemoController.editAuthor',
  'POST /author/editbyid' : 'DemoController.editAuthor',
  'GET /task/editbyid' : 'DemoController.editTask',
  'POST /task/editbyid' : 'DemoController.editTask',
  'GET /task/delete' : 'DemoController.deleteTask',
  'GET /author/delete' : 'DemoController.deleteAuthor',

// timercontroller
  'GET /timer' : 'TimerController.timer',
  'POST /create-timer' : 'TimerController.createTimer',
  'GET /timer/editbyid' : 'TimerController.editTimer',
  'POST /timer/editbyid' : 'TimerController.editTimer',
  'GET /timer/delete' : 'TimerController.deleteTimer',
  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
