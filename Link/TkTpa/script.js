function goBack() {
   window.history.back();
}

// function sendEmail() {
//     const name = document.getElementById('name').value;
//     const tl = document.getElementById('tl').value;
//     const dob = document.getElementById('dob').value;
//     const gender = document.querySelector('input[name="gender"]:checked').value;
//     const address = document.getElementById('address').value;
//     const phone = document.getElementById('phone').value;

//     const subject = 'Registrasi Tk/Tpa';
//     const body = `Nama: ${name}\nTempat Lahir: ${tl}\nTanggal Lahir: ${dob}\nJenis Kelamin: ${gender}\nAlamat: ${address}\nNo Telepon/WA: ${phone}`;

//     const mailtoLink = `mailto: ntahlah112@proton.me?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
//     window.location.href = mailtoLink;
// }