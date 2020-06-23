# KhuTube using AWS, Node js

### 경희대학교 컴퓨터공학과 강연욱

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## KhuTube

Node.js를 사용하여 나만의 Youtube 만들어보기  
Create your own Youtube site using Node.js.

## Configuration

1. Frontend: Vanilla.js(Pug Template)
2. Backend : Node.js
3. Database: mongoDB
4. A W S : EC2

## Quickstart

### Required File

위 저장소를 클론한 후 /myYoutube 위치에 .env 파일을 추가해주세요. 내용은 다음과 같습니다.  
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

Backend를 수정하고 서버를 실행하여 확인하고 싶다면 터미널에 다음과 같이 입력해주세요.  
If you modify your backend project and want to run the server for checking..

```sh
npm run dev:server
```

Frontend를 수정하고 서버상에서 어떻게 실행되는지 확인하고 싶다면 터미널에 다음과 같이 입력해주세요.
If you modify your frontend project and want to check the change on server..

```sh
npm run dev:assets
```

가급적이면 터미널을 분할하여 두 내용을 다 실행시킨 후에 작업하시는 것도 좋습니다.  
I just recommend run both at the same time.

## Reference links

[Passport JS](http://www.passportjs.org/)  
[Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web)

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

## License

## Contact

2017110267 강연욱 rokkyw@khu.ac.kr
