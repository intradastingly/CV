window.addEventListener('load', main);

function main(){
    toggleTabs();
}

function toggleTabs() {
    const dropDown = document.getElementsByClassName("drop-down-tabs");
    for(let i = 0; i < dropDown.length; i++){
        dropDown[i].onclick = toggleSection;  
    }
}

function toggleSection(dropDown){
    const sections = document.getElementsByClassName('section');
    for(let i = 0; i < sections.length; i++){    
        if (sections[i].classList.contains('display')) {
            sections[i].classList.remove('display');
        } else {
            sections[i].classList.add('display')
        }
    }
   
}   

const aboutMe = document.getElementById('aboutMe');
const skills = document.getElementById('skills');
const portfolio = document.getElementById('portfolio');
const socialMedia = document.getElementById('socialMedia');