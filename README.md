# KhuTube using AWS, Node js

### 경희대학교 컴퓨터공학과 강연욱

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## KhuTube

- Create your own Youtube site using Node.js.

## Configuration

1. Frontend: Vanilla.js(Pug Template)
2. Backend : Node.js
3. Database: mongoDB
4. A W S : EC2

## Quickstart

### Required File

If you cloned this repo, please add the .env file in /myYoutube
The .env file is ..

```sh
MONGO_URL = "mongodb://localhost:27017/yourDBname"
PORT = "Your port number"
COOKIE_SECRET = "anything"
GH_ID = "Your github developer Access ID"
GH_SECRET = "Your github developer Secret Key"
FB_ID = "Your facebook developer Access ID"
FB_SECRET = "Your facebook developer Secret Key"
AWS_KEY = "Your AWS IAM Access ID"
AWS_PRIVATEE_KEY = "Your AWS IAM Secret Key"
```

### Install

```sh
npm install
```

### Run program

If you modify your backend project and want to run the server for checking..

```sh
npm run dev:server
```

If you modify your frontend project and want to check the change on server..

```sh
npm run dev:assets
```

I just recommend run both at the same time.

### Reference links

## Pages:

- [x] Home
- [x] Join
- [x] Login
- [x] Search
- [x] User Detail
- [x] Edit Profile
- [x] Change Password
- [x] Upload
- [x] Video Detail
- [x] Edit Video
