const cgv = document.querySelector('.career-img-cgv');
const nara = document.querySelector('.career-img-nara');
const habitus = document.querySelector('.career-img-state-up');
const dnd = document.querySelector('.career-img-dnd');

function cgvCareer(){
    if(cgv){
        cgv.innerText="2016.09.01 - 2019.09.28";
    }
}
cgv.addEventListener('click', cgvCareer);