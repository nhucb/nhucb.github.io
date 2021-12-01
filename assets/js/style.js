function star(){
    let count = 200;
    const place = document.querySelector('.os_title');
    let i = 0;
    while(i < count){
        let star=document.createElement("i");
        let x = Math.floor(Math.random() * window.innerWidth);
        let y = Math.floor(Math.random() * window.innerHeight)/2;
        let duration = Math.random() * 10;
        let size = Math.random() * 2;

        if(y < window.innerHeight/4 || x < window.innerWidth*3/5 || x>window.innerWidth*4/5){
            star.style.left = x+'px';
            star.style.top = y+'px';
            star.style.width = 1+size+'px';
            star.style.height = 1+size+'px';
    
            star.style.animationDuration =1+duration+'s';
            star.style.animationDelay = duration+'s';
    
            place.appendChild(star);
            i++
        }
    }
}
star();

function leftscroll(){
    const lbutton = document.querySelector('.scrolll');
    
}
