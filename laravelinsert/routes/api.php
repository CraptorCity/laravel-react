<?php

use App\Http\Controllers\TelefonController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('api')->post('/number/save',[TelefonController::class,'store']);
Route::middleware('api')->get('/number',[TelefonController::class,'index']);
Route::middleware('api')->post('/number/update/{id}',[TelefonController::class,'update']);
Route::middleware('api')->delete('/number/delete/{id}',[TelefonController::class,'destroy']);

