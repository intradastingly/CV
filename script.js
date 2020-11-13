window.addEventListener('load', main);

/** initializes tab toggle & sets an interval that checks for the width of the screen*/
function main(){
    toggleTabs();
    setInterval(removeDesktopSections, 100); 
    setInterval(addMobileSections, 100); 
}



/** Applies click event to the 4 navigation tabs on the page */
function toggleTabs() {
    const dropDown = document.getElementsByClassName("drop-down-tabs");
    for(let i = 0; i < dropDown.length; i++){
        dropDown[i].addEventListener('click',toggleSection);
        dropDown[i].addEventListener('click',changeButtonColor); 
    }    
}

/**
 * @param {mouseclick} event displays main sections on page on click.
 */
function toggleSection(event){
    const sections = document.getElementsByClassName('section');
    for(const section of sections){
        const sectionId = section.id + '-tab';
        if (sectionId === event.target.id){ 
            section.classList.remove('display')
        } else {
            section.classList.add('display');
        }
    }   
}

/**
 * @param {mouseclick} event changes tab color to white on click for easier navigability.
 */
function changeButtonColor(event){
    const tab = document.getElementsByClassName("drop-down-tabs");
    for(const color of tab){
        if (color.id === event.target.id){
            color.style.color = 'rgb(59, 59, 59)';
            color.classList.add('tab-color')
        } else {
            color.style.color = 'rgb(187, 187, 187)';
            color.classList.remove('tab-color')
        }
    }
}

/**
 * @param {screen size} Removes Desktop version of the drop down tabs.
 */
function removeDesktopSections(){
    const desktopDivs = document.getElementById('screen-width');
    if (document.documentElement.clientWidth <= 500) {
        desktopDivs.style.display = "none";
    } else if (document.documentElement.clientWidth >= 501){
        desktopDivs.style.display = "flex";
    }
}

/**
 * @param {screen size} Adds mobile version to the drop down tabs. Allows them to fit inside.
 */
function addMobileSections(){
    const mobileDivs = document.getElementsByClassName('mobile');
    for(const divs of mobileDivs){
        if (document.documentElement.clientWidth >= 501) {
            divs.style.display = 'none';
        } else if (document.documentElement.clientWidth <= 500){
            divs.style.display = '';
        }
    }
    
}

//make sure github pages is working
//about me section 



