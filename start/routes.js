'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('index')
Route.on('/Car').render('Car')
Route.on('/Contact').render('Contact')
Route.on('/Delivery').render('Delivery')
Route.on('/LogIn').render('LogIn')
Route.on('/ProductDetails').render('ProductDetails')
Route.on('/SignUp').render('SignUp')
Route.on('/Store').render('Store')
Route.on('/Warehouse').render('Warehouse')
Route.on('/Suscription').render('Suscription')
Route.on('/AboutUs').render('AboutUs')
Route.on('/FAQs').render('FAQs')
Route.on('/index').render('index')
