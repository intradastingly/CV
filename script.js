window.addEventListener('load', main);

function main(){
    toggleTabs();
}

function toggleTabs() {
    const aboutMe = document.getElementById('aboutMe');
    const skills = document.getElementById('skills');
    const portfolio = document.getElementById('portfolio');
    const socialMedia = document.getElementById('socialMedia');
    aboutMe.addEventListener('click', aboutMeSection);
    skills.addEventListener('click', skillsSection);
    portfolio.addEventListener('click', portfolioSection);
    socialMedia.addEventListener('click', socialMediaSection);
    
}

function aboutMeSection(){
    const about = document.getElementById('aboutMe-expand');
    about.classList.toggle('display');
    removePreviousSelection()
}

function skillsSection(){
    const skills = document.getElementById('skills-expand');
    skills.classList.toggle('display');
    removePreviousSelection()
}

function portfolioSection(){
    const portofolio = document.getElementById('portfolio-expand');
    portofolio.classList.toggle('display');  
    removePreviousSelection()
}

function socialMediaSection(){
    const socialMedia = document.getElementById('socialMedia-expand');
    socialMedia.classList.toggle('display');
    removePreviousSelection()
}

function removePreviousSelection(){
    const sections = document.getElementsByClassName('section');
    for(let i = 0; i < sections.length; i++){
        if(sections[i].classList.contains('display')){  
        sections[i].classList.add('display');
    }
}
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

/* function toggleTabs() {
    const dropDown = document.getElementsByClassName("drop-down-tabs");
    for(let i = 0; i < dropDown.length; i++){
        dropDown[i].onclick = toggleSection; 
}  */