<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

//Route::get('/', 'WelcomeController@index');
Route::get('/', function() {
    return View::make('welcome');
});

Route::group(array('prefix'=>'/bend'),function(){
	Route::post('login/auth','Bends\AuthController@Login');
	Route::get('login/destroy','Bends\AuthController@Logout');
	Route::get('getAllBends','Bends\AuthController@GetAllBends');
});

Route::group(array('prefix'=>'/bendsApi', 'middleware' => 'bends'),function(){
    Route::get('bend/data','Bends\BendsApi@GetBend');
});

Route::get('home', 'HomeController@index');

Route::get('getUsers', 'HomeController@getUsers');

Route::controllers([
	'auth' => 'Auth\AuthController',
	'password' => 'Auth\PasswordController',
]);
