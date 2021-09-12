// login.html: button 클릭이벤트
const btnJoin = document.querySelector('.user_join');
const btnMember = document.querySelector('.user_join_Member');

// login.html: join버튼 클릭이벤트
function btnEvent(){
  const id = prompt('js이벤트입니다 test를 입력해주세요')
  if(id === 'test'){
    alert('감사합니다! :)')
  } else {
    alert('종료합니다.')
  }
}
btnJoin.addEventListener('click', btnEvent)

// login.html: Join Membership 클릭이벤트
function btnEvent2(){
  alert('준비 중 입니다.');
}
btnMember.addEventListener('click', btnEvent2);
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