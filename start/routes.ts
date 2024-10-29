/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

// Route.get('/', async ({ view }) => {
//   return view.render('welcome')
// })

Route.get('/home', async ({ inertia }) => {
  return inertia.render('Home')
})

// Route.get('/index','HoldersController.index').as('index')

// Route.get('/create','HoldersController.create').as('create');

// Route.get('/edit/:id','Holderscontroller.edit').as('edit');

// Route.post('/store', 'Holderscontroller.store').as('store'); 

// Route.put('/update','Holderscontroller.update').as('update');

// Route.delete('/destroy/:id', 'Holderscontroller.destroy').as('destroy');



Route.get('/holders', 'HoldersController.index').as('holders.index')
Route.get('/holders/create', 'HoldersController.create').as('holders.create')
Route.post('/holders/store', 'HoldersController.store').as('holders.store')
Route.get('/holders/edit/:id', 'HoldersController.edit').as('holders.edit')
Route.put('/holders/update/:id', 'HoldersController.update').as('holders.update')
Route.delete('/holders/destroy/:id', 'HoldersController.destroy').as('holders.destroy')