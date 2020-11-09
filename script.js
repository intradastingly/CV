window.addEventListener('load', main);

function main(){
    toggleTabs();
}

function toggleTabs() {
    const dropDown = document.getElementsByClassName("drop-down-tabs");
    for(const tabs of dropDown){
        tabs.onclick = toggleSection;
        return tabs;
    }
}

function toggleSection(tabs){
    const sections = document.getElementsByClassName('section');
    for(let i = 0; i < sections.length; i++){
        if (sections[i].classList.contains('display')) {
            sections[i].classList.remove('display');
            console.log('tabs')
        } else {
            sections[i].classList.add('display')
        }
    }
}   

const aboutMe = document.getElementById('aboutMe');
const skills = document.getElementById('skills');
const portfolio = document.getElementById('portfolio');
const socialMedia = document.getElementById('socialMedia');