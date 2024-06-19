<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdvertisementController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TokenController;

Route::get('/', [AdvertisementController::class, 'homepage'])->name('home');
Route::post('/', [AdvertisementController::class, 'homepage'])->name('ads.search');
Route::get('/profile/{id}', [ProfileController::class, 'show'])->name('profile.show');

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'display'])->name('dashboard');
    Route::get('/advertisement/create', [AdvertisementController::class, 'create'])->name('ads.create');
    Route::post('/advertisement/store', [AdvertisementController::class, 'store'])->name('ads.store');
    Route::post('/advertisement/delete/{id}', [AdvertisementController::class, 'delete'])->name('ads.delete');
    Route::get('/advertisement/edit/{id}', [AdvertisementController::class, 'edit'])->name('ads.edit');
    Route::get('/advertisement/favorite/{id}', [AdvertisementController::class, 'favorite'])->name('ads.favorite.toggle');
    Route::get('/advertisement/addfavorite/{id}', [AdvertisementController::class, 'addfavorite'])->name('ads.favorite.add');
    Route::get('/advertisement/blacklist/{id}', [AdvertisementController::class, 'blacklist'])->name('ads.blacklist');
    Route::get('/advertisement/validation/{id}', [AdvertisementController::class, 'validate'])->name('ads.validate');
    Route::post('/advertisement/handlevalidation', [AdvertisementController::class, 'handleValidation'])->name('ads.validation.submit');
});

Route::get('/advertisement/{id}', [AdvertisementController::class, 'show'])->name('ads.show');
