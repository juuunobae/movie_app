#  ReactJS App
### ReactJS와 create-react-app을 사용하여 웹 서비스 만들기

# Requirements
### nodeJS, npm, npx
- nodeJS
  - Chorome V8 Javascript 엔진으로 빌드된 Javascript 런타임이다.
  - 이벤트 기반, 논 블로킹 I/O 모델을 사용해 가볍고 효율적이다.
- npm
  - Node Package Manader의 약자이다.
  - Javascript 패키지 매니저이고, NodeJS에서 사용할 수 있는 모듈들을 패키지화하여 모아둔 저장소 역할을 하며 설치/관리를 수행할 수 있는 CLI를  제공한다.
- npx
  - Node Package Runner
  - npm 레지스트리에 올라가있는 패키지를 쉽게 설치하고 관리할 수 있도록 도와주는 일회성 CLI도구 이다.
  - 한번만 실행하고 싶을 때 사용한다.
  - 일회성
    - npm으로 패키지를 글로벌 전역으로 설치하게 되면 많은 잔여 파일들이 컴퓨터에 설치되지만 이를 한 번 실행된 후에는 스스로 제거가 되는 것

# React install
## create-react-app으로 실행 한다.
- create-react-app
  - 리액트는 ES의 최신 문법을 사용하는 경우가 존재하지만, 최신 문법을 지원해주지 않는 브라우저 때문에 webpack이나 babel등과 같은 작업 환경을 구축해야 한다.
  - 리액트 개발을 바로 시작할 수 있도록 위와 같은 작업환경(프로젝트 구조 작업, 설정 작업 등)을 하나의 명령을 실행해서 React Web App을 Set up 할 수 있게 해준다.
  
### install
- 터미널에 `npx create-react-app my_app`을 입력하고 설치한다.
  - [my_app] = 원하는 프로젝트 폴더명
- ```
    cd my_app
    npm start   
  ``` 
    - 프로젝트 폴더로 이동 후 로컬에서 실행할 수 있다.
