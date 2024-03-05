<?php

use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/login', function () { return Inertia::render('Login'); })->name('login');
Route::get('/register', function () { return Inertia::render('Register'); })->name('register');

Route::post('/login', [UserController::class, 'login'])->name('post.login');
Route::post('/register', [UserController::class, 'register'])->name('post.register');
Route::get('/logout', [UserController::class, 'logout'])->name('logout');


Route::middleware('auth')->group(function () {
    Route::get('/dashboard', function () { return Inertia::render('Dashboard'); })->name('dashboard');
});
