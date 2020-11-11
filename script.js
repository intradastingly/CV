window.addEventListener('load', main);

/** initializes tab toggle */
function main(){
    toggleTabs();
}

/** Applies on click event to 4 tabs on the page */
function toggleTabs() {
    const dropDown = document.getElementsByClassName("drop-down-tabs");
    for(let i = 0; i < dropDown.length; i++){
        dropDown[i].onclick = toggleSection;
    }    
}

/**
 * 
 * @param {mouseclick} event 
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

//string.includes('id');
// make it so Id's are different. + "tab";

