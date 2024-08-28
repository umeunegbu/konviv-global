function scrollToContact(){
    document.getElementById('contact').scrollIntoView({behavior: "smooth"});
};

function openInNewTab(url){
    window.open(url, "_blank").focus();
}

function collapseNavbar(){
    const collapseNavbar = document.querySelector('.navbar-collapse.show');
    collapseNavbar.classList.remove('show'); 
}