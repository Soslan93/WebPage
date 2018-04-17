menu.onclick = function myFunction() {
    const x = document.querySelector('#myTopnav');
    if (x.className==="topnav"){
        x.className += " responsive";
    }else {
        x.className = "topnav";
    }
}