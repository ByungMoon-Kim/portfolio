var login = "test";
function login_key() {
  if (event.keyCode == 13) {
    alert("로그인에 성공하였습니다");
    alert("포트폴리오 페이지로 이동합니다");
    location.href = "portfolio.html";
  }
}