function goBack() {
    window.history.back();
};

document.getElementById('contactFrom').addEventListener('submit', async (event) => {
    event.preventDefault(); // Mencegah pengiriman formulir standar
 
    const button = event.target.querySelector('button');
    const spinner = button.nextElementSibling; // Mengambil spinner dari tombol
    button.classList.add('loading'); // Menambahkan kelas loading ke tombol
    spinner.style.display = 'inline-block'; // Menampilkan spinner
 
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
 
    try {
      const response = await fetch('/kontak', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      const result = await response.json();
 
      const popup = document.getElementById('popup');
      const popupMessage = document.getElementById('popupMessage');
      
      if (response) {
        popupMessage.textContent = result.message;
      } else {
        popupMessage.textContent = 'Gagal mengirim formulir: ' + result.message;
      }
      popup.classList.add('active');
    } catch (error) {
      const popup = document.getElementById('popup');
      const popupMessage = document.getElementById('popupMessage');
      popupMessage.textContent = 'Error: ' + error.message;
      popup.classList.add('active');
    } finally {
      // Sembunyikan spinner dan hapus kelas loading setelah respons diterima
      button.classList.remove('loading');
      spinner.style.display = 'none';
    }
  });
 
  document.getElementById('popupClose').addEventListener('click', () => {
    document.getElementById('popup').classList.remove('active');
  });