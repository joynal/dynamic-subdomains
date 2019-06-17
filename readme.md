# Dynamic Subdomain Handling

## Start server

```
node src/app.js
```

## How to test

For testing subdomains locally, use the domain vcap.me:3000

This is a domain that points back to your localhost, allowing you to test subdomains like mango.vcap.me:3000

## Serving dynamic SPA app

You can simply use express static file serving mechanism, if it is too simple.

```js
app.use('/_sub/:subdomain', express.static(path.resolve(__dirname, '..', 'spa-app-directory-name')));
```

If you want to use subdomain in you SPA, simply render app with subdomain & serve.

## Nginx

Generate dhparam:

```
openssl dhparam -out config/ssl/dhparam.pem 4096
```

## License

This project is licensed under the MIT License - see the [license.md](./license.md) file for details