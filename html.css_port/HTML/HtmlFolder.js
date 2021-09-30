// input keyup 활성화 이벤트
const loginBtn = document.querySelector('.user-join')[3];
const input = document.querySelector('input')[3];
const loginId = document.querySelector('.id-input')[3];
const loginPw = document.querySelector('.pw-input')[3];

function upColor() {
  if(loginId.value && loginPw.value){ // id와 pw의 지정된 값을 받고
    loginBtn.removeAttribute('disabled'); // loginBtn를 disabled를 삭제한뒤
    loginBtn.style.backgroundColor="#0095F60"; // 조건이 모두 맞으면 loginBtn의 컬러를 변경
  }
}
input.addEventListener('keyup', upColor);


// login.html: button 클릭이벤트
// const btnJoin = document.querySelector('.user-join');
// const btnMember = document.querySelector('.user-sign');

// // // login.html: Join Membership 클릭이벤트
// function btnEvent2(){
//   alert('준비 중 입니다.');
// }
// btnMember.addEventListener('click', btnEvent2);



// js 공부 초기 시절
// onclick="var ID = prompt('아이디를 입력해주십시오')
// if(ID === 'test')
// var Password = prompt('비밀번호를 입력해주십시오')
// if(Password === 'test2'){
//    alert('로그인에 성공하셨습니다')
//    alert('페이지로 이동합니다')
// }
// if(Password === 'test2'){
//     location.href='portfolio.html'
// }
//    else {
//        alert('계정 정보가 틀립니다')