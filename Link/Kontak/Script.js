function goBack() {
   window.history.back();
}
document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('.toggle-btn');
    var contents = document.querySelectorAll('.content');

    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Sembunyikan semua konten
            contents.forEach(function(content) {
                content.style.display = 'none';
            });

            // Tampilkan konten yang sesuai dengan tombol yang diklik
            var target = document.getElementById(this.getAttribute('data-target'));
            if (target) {
                target.style.display = 'block';
            }
        });
    });
});


document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('tls').value;

    var messageData = {
        name: name,
        email: email,
        ditanyakan: tls,
        timestamp: new Date().toLocaleString()
    };

    // Ambil riwayat pesan dari LocalStorage
    var history = JSON.parse(localStorage.getItem('contactHistory')) || [];

    // Tambahkan pesan baru ke riwayat
    history.push(messageData);

    // Simpan kembali ke LocalStorage
    localStorage.setItem('contactHistory', JSON.stringify(history));

    // Tampilkan riwayat terbaru
    displayHistory();

    // Reset form
    document.getElementById('contactForm').onreset();
});

function displayHistory() {
    var history = JSON.parse(localStorage.getItem('contactHistory')) || [];
    var historyList = document.getElementById('historyList');
    historyList.innerHTML = '';

    history.forEach(function(item) {
        var listItem = document.createElement('li');
        listItem.textContent = `${item.timestamp} - ${item.name} (${item.email}): ${item.tsl}`;
        historyList.appendChild(listItem);
    });
}

// Tampilkan riwayat saat halaman dimuat
document.addEventListener('DOMContentLoaded', displayHistory);