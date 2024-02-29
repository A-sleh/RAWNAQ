// ============================ start Header ===========================//

let allLinks = document.querySelectorAll('.nav li a') ,
navContainer = document.querySelector('.nav');
let mainButton = document.querySelector('.main')  ,
    allSpan = mainButton.children ,
    isOpen = false ;

allLinks.forEach(link => {
    link.onclick = (from) => {
        from.preventDefault();
        window.scrollTo({
            top : document.querySelector(`.${link.dataset.url}`).offsetTop - 100 , 
            behavior : 'smooth' ,
        })
        if(isOpen) {
            mainButton.click() ;    
        }
    }
})

// reset Style of li links 
function hiddenTheLinks() {
    navContainer.style.cssText = 'transform: scaleY(0);'
}

function showTheLinks() {
    navContainer.style.cssText = 'transform: scaleY(1);'
}

// open navpar in screen  phone
mainButton.onclick = () => {
    isOpen = ( isOpen ? false :  true ) ;
    fixedNav() 
}

// fixed the navbar 
function fixedNav() {
    for( let i = 0 ; i < allSpan.length ; ++ i ) {
        allSpan[i].classList.toggle('open') ;
    }
    if( isOpen ) {
        showTheLinks()
    }else {
        hiddenTheLinks()
    }
}

// ============================ end Header ===========================//

// ============================ start intro ===========================//

let closeBtn = document.querySelector('.intro .popup span') ,
    infoPopup = document.querySelector('.intro .popup') ,
    openBtn = document.querySelector('.intro .container .info h3');

openBtn.onclick = () => {
    infoPopup.style.cssText = ` transform: translateY(-50%);`
}
closeBtn.onclick = () => {
    infoPopup.style.cssText = ` transform: translateY(-500%);`
}


// ============================ end  intro ===========================//

// ============================ start  products ===========================//

let row1 = document.querySelector('.products .container .info .row1') ,
    row2 = document.querySelector('.products .container .info .row2') ,
    rightBtn = document.querySelector('.products .control #left') ,
    leftBtn = document.querySelector('.products .control #right') ;
var dis = ['30%','10%','-10%','-30%'] 
    current = 0 ;
rightBtn.onclick = () => {
    if(current < dis.length - 1 ) {
        current++;
        row1.style.cssText = `transform: translateX(${dis[current]});`;
        row2.style.cssText = `transform: translateX(${dis[current]});`;
    }
}
leftBtn.onclick = () => {
    if( current > 0 ) {
        current--;
        row1.style.cssText = `transform: translateX(${dis[current]});`;
        row2.style.cssText = `transform: translateX(${dis[current]});`;
    }

}
// ============================ end  products ===========================//

// ============================ start archive ===========================//

let btnReadMore = document.querySelectorAll('.archive .box .info input[type="button"]') ,
    drobBox = document.querySelectorAll('.archive .container .box .info-drub') ,
    closeBtnBox = document.querySelectorAll('.archive .container .box .info-drub span') ;

btnReadMore.forEach( (btn,index) => {
    btn.onclick = () => {
        drobBox.forEach((box,curr) => {
            if( curr == index ) {
                let val = ['0','0','-20%','0','-10%','0'];
                for(let i = 1 ; i <= val.length ; ++ i ) {
                    setTimeout(()=>{
                        box.style.cssText = `transform: translateY(${val[i-1]})` ;
                    } , 200 * i );
                }
            }
        })
    }
})
closeBtnBox.forEach((span,index) => {
    span.onclick = () => {
        drobBox.forEach((box,curr) => {
            if( curr == index ) {
                box.style.cssText = `transform: translateY(-200%)` ;
            }
        })
    }
})

// ============================ end  archive ===========================//