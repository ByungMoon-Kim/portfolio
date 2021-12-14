const cgv = document.querySelector('.C-cgv');
const nara = document.querySelector('.C-nara');
const habitus = document.querySelector('.C-ht');
const dnd = document.querySelector('.C-DND');

const body = document.querySelector('.Mycareer')
function cgvCareer(){
    if(cgv){
            cgv.innerText="2016.09.01 - 2019.09.28 - 고객서비스 및 영화관청결"
}
}
function naraCareer(){
    if(nara){
        nara.innerText="2020.07.16 - 2020.12.18 - 역사기록물 디지털화 작업 및 교과서 메타데이터 작업";
    }
}
function habitusCareer(){
    if(habitus){
        habitus.innerText="2021.05.10 - 2021.07.09 - 웹관리 및 웹개발, 웹기획, 마케팅";
    }
}
function dndCareer(){
    if(dnd){
        dnd.innerText="2021.07.19 - 2021.12.10 - 인천교육청 역사기록물 메타데이터 작업"
    }
}
cgv.addEventListener('mouseover', cgvCareer);
nara.addEventListener('mouseover', naraCareer);
habitus.addEventListener('mouseover', habitusCareer);
dnd.addEventListener('mouseover', dndCareer);