const cgv = document.querySelector('.C-cgv');
const nara = document.querySelector('.C-nara');
const habitus = document.querySelector('.C-ht');
const dnd = document.querySelector('.C-DND');

function cgvCareer(){
    if(cgv){
        cgv.innerText="2016.09.01 - 2019.09.28";
    }
}
// 이미지 원래대로 리턴
function cgvCareer2(){
    cgv.url('./introdution_img/popcorn-icon.png')
}
// 이미지 원래대로 리턴

function naraCareer(){
    if(nara){
        nara.innerText="2020.07.16 - 2020.12.18";
    }
}
function habitusCareer(){
    if(habitus){
        habitus.innerText="2021.05.10 - 2021.07.09";
    }
}
function dndCareer(){
    if(dnd){
        dnd.innerText="2021.07.19 - ing"
    }
}
cgv.addEventListener('mouseover', cgvCareer);
cgv.addEventListener('mouseleave', cgvCareer2);
nara.addEventListener('mouseover', naraCareer);
habitus.addEventListener('mouseover', habitusCareer);
dnd.addEventListener('mouseover', dndCareer);