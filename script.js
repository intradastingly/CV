window.addEventListener('load', main);

function main(){
    toggleTabs();
}

function toggleTabs() {
    const aboutMe = document.getElementById('aboutMe');
    const skills = document.getElementById('skills');
    const portfolio = document.getElementById('portfolio');
    const socialMedia = document.getElementById('socialMedia');
    aboutMe.addEventListener('click', test);
    skills.addEventListener('click', test2);
    portfolio.addEventListener('click', test3);
    socialMedia.addEventListener('click', test4);
    //takes tab button that is clicked
    //expands proceeding section onclick 
}

function test(){
    const expand = document.getElementById('aboutMe-expand');
    expand.classList.toggle('display');
}

function test2(){
    const expand = document.getElementById('skills-expand');
    expand.classList.toggle('display');
}

function test3(){
    const expand = document.getElementById('portfolio-expand');
    expand.classList.toggle('display');
}

function test4(){
    const expand = document.getElementById('socialMedia-expand');
    expand.classList.toggle('display');
}




/* function toggleSection(){
    const sections = document.getElementsByClassName('section');
    for(let i = 0; i < sections.length; i++){    
        if (sections[i].classList.contains('display')) {
            sections[i].classList.remove('display');
        } else {
            sections[i].classList.add('display')
        }
    }
   
}   */ 



    const aboutMe = document.getElementById('aboutMe');
    

    //document.getElementById('aboutMe')[0].classList.toggle("responsive");

    /* const dropDown = document.getElementsByClassName("drop-down-tabs");
    for(let i = 0; i < dropDown.length; i++){
        dropDown[i].onclick = toggleSection; 
    }  */ 