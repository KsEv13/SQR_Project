# SQR Project

### Description

An application with the ability to register user and login. For authorized users application displays form with cake attributes and presents design examples. Sends the form in the telegram chat.

API for the authorization is available as scratch server in /server/index.js. (Just run it in terminal by `node /server/index.js`)

### Done

- Custom webpack config
- Custom babel config
- Routes for login and register
- styled-components
- header with any png logo (logo should be bundled with webpack?), title and links to login and register
- http requests to the Server API
- external API for cake Images
- for authorized user display the form

---

### Server API

`POST /register`
accepts login and password to create user

```
// Request
{
    "login": "string",
    "password": "string"
}
```

```
// Response
200 - if register succeded
(empty response)
400 - already exists error, login or password not present error
{
    "message": "string"
}
```

---

`POST /login`
validates user login and password, provide session token

```
// Request
{
    "login": "string",
    "password": "string"
}
```

```
// Response
200 - success
{
    "token": "string"
}
401 - invalid auth
{
    "message": "string"
}
```
