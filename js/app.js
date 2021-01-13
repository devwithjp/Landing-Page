/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * s
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const navbar = document.getElementById('navbar__list');
const sections = document.getElementsByTagName('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/


function navCreationAndScrolling(){
    //To add the the NAME section that are above the other general sections.
    const navbarName = document.createElement('li');
    navbarName.textContent = "NAME";
    navbarName.className = "menu__link";
    navbar.appendChild(navbarName);
    //Upon click event, the listener function scroll's to the target NAME's offset 
    navbarName.addEventListener('click', function(){
        if(navbarName.getAttribute('id') != null){
            $("html, body").animate({ scrollTop: $(`#${navbarName}`).offset().top }, 350);
        } else{
            $("html, body").animate({ scrollTop: 0 }, 350);
        }
    }); 
    //loop through the sections and add their respective text, class and append to parent.   
    for(let i = 0; i <  sections.length; i++){
        const navSec = document.createElement('li');
        navSec.textContent = sections[i].getAttribute('data-nav');
        navSec.className = "menu__link";
        navbar.appendChild(navSec);
        //Upon click event, the listener function scroll's to the target section[i] offset 
        navSec.addEventListener('click', function(){
            if(sections[i].getAttribute('id') != null){

                $("html, body").animate({ scrollTop: $(`#${sections[i].getAttribute('id')}`).offset().top }, 350);
            } else{
                $("html, body").animate({ scrollTop: 0 }, 350);
            };
        });
    }
}

navCreationAndScrolling();


//Change active state and higlight section and nav item upon scrolling and selections

function higlightActiveSection(){
    $(window).on('scroll', function(){
        if($(window).scrollTop() === 0){
            navbar.childNodes[0].classList.add('selectedSectionNav');
            for(let item = 0 ; item < navbar.childNodes.length;item++){
                if(navbar.childNodes[item] !== navbar.childNodes[0]){
                    navbar.childNodes[item].classList.remove('selectedSectionNav');
                }
            }
        } else{ 
            $('section').each(function() {
                if($(window).scrollTop() >= $(this).offset().top - 25) {
                    this.classList.add('your-active-class');
                    for(let sect = 0; sect < sections.length;sect++){
                        if(this !== sections[sect]){
                            sections[sect].classList.remove('your-active-class');
                        }

                    }
                    for(let item = 0 ; item < navbar.childNodes.length; item++){
                        if(navbar.childNodes[item].textContent === this.getAttribute('data-nav')){
                            navbar.childNodes[item].classList.add('selectedSectionNav');

                        } else{
                            navbar.childNodes[item].classList.remove('selectedSectionNav');
                        }
                    }
                }
            });
        }
    })
}
higlightActiveSection();
