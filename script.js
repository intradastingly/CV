window.addEventListener('load', main);

function main(){
    toggleTabs();
}

function toggleTabs() {
    const dropDown = document.getElementsByClassName("drop-down-tabs");
    for(let i = 0; i < dropDown.length; i++){
        /* dropDown[0].onclick = toggleAbout;
        dropDown[1].onclick = toggleSkills;
        dropDown[2].onclick = togglePortfolio;
        dropDown[3].onclick = toggleSocial; */
        dropDown[i].onclick = toggleSection;
    }    
}

function toggleSection(event){
    const sections = document.getElementsByClassName('section');
    for(const section of sections){
        if (section.id === event.target.id){
            section.classList.remove('display')
        } else {
            section.classList.add('display');
        }
    }   
}

/* function toggleAbout(){
    const about = document.getElementById('aboutMe-expand');
    about.classList.toggle('display');  
}

function toggleSkills(){
    const skills = document.getElementById('skills-expand');
    skills.classList.toggle('display');
}

function togglePortfolio(){
    const portofolio = document.getElementById('portfolio-expand');
    portofolio.classList.toggle('display');
}

function toggleSocial(){
    const socialMedia = document.getElementById('socialMedia-expand');
    socialMedia.classList.toggle('display');
} */



/* function toggleTabs() {
    const dropDown = document.getElementsByClassName("drop-down-tabs");
    for(let i = 0; i < dropDown.length; i++){
        dropDown[i].onclick = toggleSection;
    }   
}

 */

/* function toggleTabs() {
    const dropDown = document.getElementsByClassName("drop-down-tabs");
    for(let i = 0; i < dropDown.length; i++){
        dropDown[i].addEventListener('click', () => toggleSection(...dropDown));
        dropDown[i].addEventListener('click', toggleSection.bind(null, ...dropDown));
    }   
} */