<a href="https://github.com/dyobi/WEBPJT_COAXER" title="header" alt="header">
  <img src="https://github.com/dyobi/WEBPJT_COAXER/blob/main/client/src/assets/icons/logo.png" width="100" height="100" title="header" alt="header">
</a>

# WEBPJT_COAXER

> A responsive Single Page Application(SPA) using React, Spring-boot

> Responsive Web Application for a dating website.

> A web brunch project of bootcamp named <a href="https://mgr.kgitbank.com/" target="_blank">`KGITBANK`</a>

## Preview

<img src="https://github.com/dyobi/WEBPJT_COAXER/blob/main/client/src/assets/images/PREVIEW.gif?raw=true" width="60%" title="preview" alt="preview">

---

## Deployment

<br>

Hello guys, Do you want to try this project yourself on your computer? Follow the few instructions below!

<br>

**[1] Clone repository**

The first step is cloning git repository from GitHub using `git clone` command.

```shell
git clone https://github.com/dyobi/WEBPJT_COAXER.git && cd WEBPJT_COAXER
```

<br>

**[2] Check versions**

```shell
JDK(1.8) / NODE(Latest) / NPM(Latest)
```

<br>


**[3] Client server**

Before you run this project, you have to install all the libraries using `npm` for front side.

```shell
cd client && npm install
```

<br>


**[4] API keys**

```shell
cd client/src/constants && vim api.js
```

```shell
// GOOGLE API
export const GOOGLE_ID = 'Your Google Api Id';
export const GOOGLE_SECRET = 'Your Google Api Secret';

// FACEBOOK API
export const FACEBOOK_ID = 'Your Facebook Api Id';
export const FACEBOOK_SECRET = 'Your Facebook Api Secret';

// GITHUB API
export const GITHUB_ID = 'Your Github Api Id';
export const GITHUB_SECRET = 'Your Github Api Secret';

// GOOGLE MAPS
export const GMAPS_API = 'Your GoogleMap Api Key';
```

```shell
Press ESC, type :x, and press ENTER
```

<br>

**[5] API server**

Before you run this project, you have to import api folder to your IDE (IntelliJ or Eclipse) and then configure your MySQL info at `/api/src/main/resources/application.properties`.

<br>

**[6] Initialize project**

You can run front side rendering using `npm start` in client folder. Back-end can be run by your IDE. Don't forget to run MySQL server as well.
Once you run back-end server, it automatically creates all the tables what this project needs.

```shell
[cd client && npm start] / [run api server] / [run database]
```

```shell
Front-end default url : https://localhost:3000 / Back-end default url : http://localhost:8080
```

---

## Language & IDE

> Front-end Side

- Javascript
- React
- Redux
- CSS
- HTTPS
- `VS Code`

> Back-end Side

- Java
- Spring-boot
- `IntelliJ`

> Database

- MySQL
- JPA Hibernate
- `Workbench`

---

## Features

> User
- OAuth 2.0 login system (Google, Facebook, Github)

> Overview

- Look around users whom you like, whom you're liked by, whom you're matched with
- User login history

> Look up

- Search users by your ideal preference
- Search users' information

> Chat

- Chat with people whom you're matched with
- Sound alarm when you send or get messages

> Setting

- Set your personal information including profile pictures
- Set your preference of your ideal person

---

## Luke Kim (@kilkim in 42 Silicon Valley)

- A Web developer who likes trying new things.

- Majored in mechanical Engineering.

- Contact: dyobi.92@gmail.com
