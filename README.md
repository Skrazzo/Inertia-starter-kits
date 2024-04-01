

# Install

Clone the repository and open terminal in the cloned directory.

Here's commands for setting up Laravel back-end:
```sh
composer install
cp .env.example .env
php artisan key:generate
```

After configurating .env file run
```sh
php artisan migrate
```

Now we need to install everything for React front-end:
```sh
npm i
```

That's all, for front-end you will need to run Vite, with `npm run dev` and back-end with `php artisan serve` and you will be able to access React on **localhost:8000** ( default Laravel port )

**Happy Hacking !**




# Change log

## v1.1
* Renamed directories
* Updated to Laravel 11
* Updated dependencies from v1
* Modified User modal and user table migration
  
## v1
* Created two Laravel and Inertia versions, one is vanilla where two frameworks are just connected together. Second one has the most basic authentication system with routes /login, /register and /dashboard, and all User account logic is stored in UserController file
* Added 'auth' variable to every inertia render, so that you can access logged in user information right in your component.
* Added [tighten/ziggy](https://github.com/tighten/ziggy) and @routes to the app.blade.php, so now you can access all laravel ->name('') routes in React component
* Modified User modal and user table migration
