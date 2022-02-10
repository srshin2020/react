# react web app
- React와 Firebase로 앱 개발하기 (React JS and Firebase Web App Project)
- Meterial UI 이용
- yarn 사용
- 동영상 12개조회수 19,758회최종 업데이트: 2019. 6. 23.
- by 동빈나
- https://www.youtube.com/playlist?list=PLRx0vPvlEmdCjiCfu4QB6tV7cZS4ZoTOQ

## get started
- yarn global로 설치
  - sudo npm install -g yarn
- 권한 관련 설정 오류 해결
  - https://hidelryn.github.io/2019/08/17/etc-npm-yarn-permission-err/  
  - sudo chown -R $USER:$GROUP ~/.npm
  - sudo chown -R $USER:$GROUP ~/.config
- yarn 초기화
  -  yarn init
- react, react-dom 설치
  - yarn add react react-dom
- webpack, webpack-dev-server development로 설치
  - yarn add --dev webpack webpack-dev-server 
  - https://stitchcoding.tistory.com/23
- babel 설치
  - yarn add --dev babel-core babel-loader babel-preset-react-app
  - yarn add --dev webpack-cli
- material ui 설치
  - yarn add @material-ui/core
  - yarn add @material-ui/icons
- yarn 실행 
  - yarn start
- reactor router dom 설치
  - yarn add react-router-dom
- 말줄임표 설치
  - yarn add react-text-truncate
## 배포하기 
- build 하기 위한 설치
  - yarn add --dev copy-webpack-plugin
  - yarn add firebase-tools
  - yarn이 안되어 npm global로 다시 설치함. 
  - sudo npm install -g firebase-tools 
- build
  - yarn build
  - firebase login
  - firebase init
  - firebase deploy
  - https://react-firebase-app-17eb1.web.app/#/
  -  

## 스크린샷
<img width="610" alt="스크린샷 2022-02-10 오후 1 15 11" src="https://user-images.githubusercontent.com/96237885/153336118-a529f2b2-5050-4cd3-a18e-0baa64d7d9b6.png">
<img width="593" alt="스크린샷 2022-02-10 오후 1 14 59" src="https://user-images.githubusercontent.com/96237885/153336132-399007a4-7c33-41fc-b508-92325cb4d5b2.png">
<img width="590" alt="스크린샷 2022-02-10 오후 1 14 49" src="https://user-images.githubusercontent.com/96237885/153336147-f50c774c-3549-4efe-a681-2c32822046ca.png">
<img width="587" alt="스크린샷 2022-02-10 오후 1 14 35" src="https://user-images.githubusercontent.com/96237885/153336158-0a4100ae-e213-4ff8-bd1d-80bf0464a058.png">
<img width="582" alt="스크린샷 2022-02-10 오후 1 14 26" src="https://user-images.githubusercontent.com/96237885/153336176-d2cd9438-95d3-4f5c-bfe5-d71a42b15734.png">
