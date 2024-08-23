// The script for the icon font from https://akaricons.com/ is in this pen's JS settings

function goUrlF() {
    window.location.href = './assets/menu/fasilitas/index.html';
}

function goUrlP() {
    window.location.href = './assets/menu/pendaftaran/index.html'
}

function goUrlV() {
    window.location.href = './assets/menu/visimisi/index.html'
}

const about = document.getElementById('tentang');
about.addEventListener('click' , () => {
    document.querySelector('.container-tentang').classList.add('expand')
})

const closeAbout = document.querySelector('.container-tentang > .tentang-toggle');
closeAbout.addEventListener('click' , () => {
    document.querySelector('.container-tentang').classList.remove('expand')
})

let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

let burger = document.getElementById('burger'),
	nav    = document.getElementById('main-nav'),
    slowmo = document.getElementById('slowmo');

burger.addEventListener('click', function(e){
	this.classList.toggle('is-open');
	nav.classList.toggle('is-open');
});

slowmo.addEventListener('click', function(e){
	this.classList.toggle('is-slowmo');
});

/* Onload demo - dirty timeout */
let clickEvent = new Event('click');

window.addEventListener('load', function(e) {
	slowmo.dispatchEvent(clickEvent);
	burger.dispatchEvent(clickEvent);
	
	setTimeout(function(){
		burger.dispatchEvent(clickEvent);
		
		setTimeout(function(){
			slowmo.dispatchEvent(clickEvent);
		}, 3500);
	}, 5500);
});

