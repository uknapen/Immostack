<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdvertisementController;
use App\Http\Controllers\ApiController;
use App\Http\Controllers\LoggingControllerForCordova;
use App\Http\Controllers\TokenController;


Route::post('/login', [TokenController::class, 'login'])->name('api.login');
Route::get('/homepage', [ApiController::class, 'homepage']);
Route::get('/dashboard', [ApiController::class, 'adminDashboardDisplay']);
Route::get('/validation', [ApiController::class, 'validate']);
Route::post('/advalidation', [ApiController::class, 'handleValidation']);


// Logging from Cordova to Laravel's logs
Route::post('/log', [LoggingControllerForCordova::class, 'logInfo']);