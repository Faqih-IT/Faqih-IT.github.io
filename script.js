// navbar
const navItem = document.querySelectorAll (".menu > .linav")

navItem.forEach((nav) => {
   const menuList = nav.querySelector(".menu-list");
   if (menuList)
   nav.addEventListener("mouseenter",() => {
         menuList.classList.add("navbar-expand");
      });
   nav.addEventListener("mouseleave",() => {
         menuList.classList.remove("navbar-expand");
      });
})


const menuToggle = document.querySelector (".navbar-toggle");

menuToggle.addEventListener("click" ,() => {
  document.querySelector(".menu").classList.toggle("navbar-expand");
  document.querySelector(".navbar-toggle").classList.toggle("navbar-expand");
  document.querySelector(".button").classList.toggle("navbar-expand");
});

const list = document.querySelectorAll(".menu > .linav");
list.forEach((menu) =>{
  const list = menu.querySelector(".list-menu");
  if (list)
  menu.addEventListener("click", () => {
  list.classList.toggle("list-expand")
  });
});

// Tulisan card

const texts1 = "YPD BAITUS SHOFAA AL-ISLAMI";
const texts2 = "Ponpes - Tk/Paudqu/Dta - Smp It - MA";
let charIndex1 = 0;
let charIndex2 = 0;
const typingSpeed = 100;
const newTextDelay = 1000;

const typewriterElement1 = document.getElementById("typewriter1");
const typewriterElement2 = document.getElementById("typewriter2");

function type1() {
    if (charIndex1 < texts1.length) {
        typewriterElement1.textContent += texts1.charAt(charIndex1);
        charIndex1++;
        setTimeout(type1, typingSpeed);
    } else {
        setTimeout(type2, newTextDelay);
    }
}

function type2() {
    if (charIndex2 < texts2.length) {
        typewriterElement2.textContent += texts2.charAt(charIndex2);
        charIndex2++;
        setTimeout(type2, typingSpeed);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(type1, typingSpeed);
});

// script.js
document.getElementById('downloadButton').addEventListener('click', function() {
    // URL file yang akan diunduh
    const fileUrl = '/Img/BrosurBSI.pdf'; // Ganti dengan URL file Anda

    // Membuat elemen link untuk mengunduh file
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'E-Brosur Baitus Shofaa'; // Nama file yang akan disimpan saat diunduh
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});




// card img
// const images = ["/Img/Bsilogo.png", "/Img/Yayasan.jpg",
// "/Img/BackgroundEraser_20240707_231642490.png"]; // Daftar gambar
// let currentIndex = 0;

// function changeImage() {
//     currentIndex = (currentIndex + 1) % images.length; // Mengubah index gambar
//     document.getElementById("galleryImage").src = images[currentIndex]; // Mengganti gambar
// }

// // Mengganti gambar setiap 60 detik (60000 milidetik)
// setInterval(changeImage, 10000);