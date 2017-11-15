<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


//api/posts
Route::get('/posts','Postscontroller@index');
Route::get('/posts/{post}','Postscontroller@show');

Route::post('/register','Auth\RegisterController@register');
Route::post('/login','Auth\LoginController@login');
Route::middleware('auth:api')->post('/logout','Auth\LoginController@logout');
Route::post('/token/refresh','Auth\LoginController@refresh');