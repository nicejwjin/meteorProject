<프로젝트 생성>
meteor create {PROJECT_NAME}

<GIT 등록>
- github 사이트에 로그인
- new Repository 생성
- 프로젝트 디렉토리로 이동 ex> cd {PROJECT_DIR}
git init
git add *
git add .meteor     // github 페이지에 안나와있으므로 꼭 해줘야함
git commit -m 'init'
git remote add origin https://github.com/{USER_ID}/{PROJECT_NAME}.git
git push -u origin master

<순서대로 설치하세요>
meteor add session              //세션 사용 패키지
meteor add twbs:bootstrap       //bootstrap-3 패키지
meteor add accounts-password    //비밀번호 패키지
meteor add ian:accounts-ui-bootstrap-3      //bootstrap 로그인 패키지
meteor add iron:router          // 경로 변환 라우터 추가