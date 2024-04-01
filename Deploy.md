

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

# Deploy

This is tutorial on how to deploy to a server subfolder, server I'm using is **apache2**

We need to start with compiling all of our JS and CSS code, by running
```sh
npm run build
```

All of our built JavaScript/CSS code now is stored in **Laravel_dir/public/build**, When we transfer our project files to the server. Let's assume, that we transfered files to directory **/var/www/html/** which would mean that our projects directory is **/var/www/html/project_name** and using apache2 server, we can access our Laravel project by going to the **public folder link**

Here's how our project is looking right now:

|Files|link|
|---|---|
|Laravel files|http://server.com/project_name/public/|
|Built React files| http://server.com/project_name/public/build|


## Issue fix 1.

Laravel has loaded, but Vite is trying to access files from the root directory **(This wouldn't be an issue, if you would be making SPA)**
<img style="width:100%;" src="https://github.com/Skrazzo/Inertia-starter-kits/assets/58330666/270a0fae-6ee0-4fd2-9da9-779d05d15475" />



To fix this, we need to edit **vite.config.js** and add **base** path to our compiled files folder 
```js
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    base: '/project_name/public/build/',
    plugins: [
        react(), // React plugin that we installed for vite.js
        laravel({
            input: 'resources/js/app.jsx',
            refresh: true,
        }),
    ],
});
```

And run
```sh
npm run build
```

## Issue fix 2.

Now when first issue is fixed, our compiled files are executing, but our link is duplicating.
<img style="width:100%;" src="https://github.com/Skrazzo/Inertia-starter-kits/assets/58330666/471232d5-9329-4f40-9fee-7172f7ad619a" />


To fix this you will need to edit to this file:
`project_name/vendor/inertiajs/inertia-laravel/src/Response.php`

Find **$page** variable and edit it from this:
```php
$page = [
	'component' => $this->component,
	'props' => $props,
	'url' => $request->getBaseUrl().$request->getRequestUri(),
	'version' => $this->version,
];
```
To this: 
```php
$page = [
	'component' => $this->component,
	'props' => $props,
	'url' => $request->getRequestUri(),
	'version' => $this->version,
];
```

This will prevent URL from duplicating. And that's it, if you want you can put this code into the .htaccess file to protect all Laravel files, except the public folder
```
<IfModule mod_rewrite.c>
# That was ONLY to protect you from 500 errors
# if your server did not have mod_rewrite enabled

RewriteEngine On
	# RewriteBase /
	# NOT needed unless you're using mod_alias to redirect

	RewriteCond %{REQUEST_URI} !/public
	RewriteRule ^(.*)$ public/$1 [L]
	# Direct all requests to /public folder

</IfModule>
```


---

**Of course the correct way would be creating Laravel SPA, but if you don't have the option to do so, this is the way that worked for me, and I hope this will be useful for others too.**
