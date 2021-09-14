// input submit 이벤트
const loginInput = document.querySelector('.log-in-form');

function onButtonEvent(def) {
  def.preventDefault();
    const id = prompt('js이벤트입니다 test를 입력해주세요')
    if(id === 'test'){
      alert('Awsome!')
    } else {
      alert('종료합니다.')
    }
}
loginInput.addEventListener('submit', onButtonEvent);



// login.html: button 클릭이벤트
const btnJoin = document.querySelector('.user-join');
const btnMember = document.querySelector('.user-sign');

// login.html: join버튼 클릭이벤트
function btnEvent(){
  alert('ID에서 로그인을 진행하여 주세요')
}
btnJoin.addEventListener('click', btnEvent)

// // login.html: Join Membership 클릭이벤트
function btnEvent2(){
  alert('준비 중 입니다.');
}
btnMember.addEventListener('click', btnEvent2);



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