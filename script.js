window.addEventListener('load', main);

/** initializes tab toggle */
function main(){
    toggleTabs();
}

/** Applies on click event to 4 tabs on the page */
function toggleTabs() {
    const dropDown = document.getElementsByClassName("drop-down-tabs");
    for(let i = 0; i < dropDown.length; i++){
        dropDown[i].addEventListener('click',toggleSection);
        dropDown[i].addEventListener('click',changeButtonColor); 
    }    
}

/**
 * 
 * @param {mouseclick} event displays main sections on page on click.
 */
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

/**
 * 
 * @param {mouseclick} event changes tab color to match section color on click for navigability.
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
//string.includes('id');
// make it so Id's are different. + "tab";

//add javascript that changes color of buttons 

//maybe ad favicons to main sections or tabs 
