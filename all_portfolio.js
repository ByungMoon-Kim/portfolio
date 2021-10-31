const cgv = document.querySelector('.C-cgv');
const nara = document.querySelector('.C-nara');
const habitus = document.querySelector('.C-ht');
const dnd = document.querySelector('.C-DND');

const body = document.querySelector('.Mycareer')
function cgvCareer(){
    if(cgv){
            cgv.innerText="2016.09.01 - 2019.09.28"
}
}
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
nara.addEventListener('mouseover', naraCareer);
habitus.addEventListener('mouseover', habitusCareer);
dnd.addEventListener('mouseover', dndCareer);