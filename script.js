window.addEventListener('load', main);

function main(){
    toggleTabs();
}

function toggleTabs() {
    const dropDown = document.getElementsByClassName("drop-down-tabs");
    for(const tabs of dropDown){
        tabs.onclick = toggleSection;
    }
}

function toggleSection(){
    const sections = document.getElementsByClassName('section');
    for(let i = 0; i < sections.length; i++){
        if (sections[i].classList.contains('display')) {
            sections[i].classList.remove('display');
        } else {
            sections[i].classList.add('display')
        }
    }
}   
