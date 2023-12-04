// Mendapatkan elemen formulir dan notifikasi
const form = document.querySelector('.contact-form');
const notificationPopup = document.getElementById('notification-popup');
const notificationMessage = document.getElementById('notification-message');

// Mendengarkan acara pengajuan formulir
form.addEventListener('submit', async (event) => {
    event.preventDefault(); // Menghentikan perilaku pengajuan formulir bawaan

    // Mengambil nilai dari formulir
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const company = document.getElementById('contact-company').value;
    const message = document.getElementById('contact-message').value;

    // Membuat objek data yang akan dikirim ke API
    const data = {
        name: name,
        email: email,
        company: company,
        message: message
    };

    try {
        // Mengirim permintaan POST ke API menggunakan Fetch API
        const response = await fetch('https://eox49ed2rdqqviy.m.pipedream.net', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            // Jika respons dari server adalah 200 OK, tampilkan notifikasi popup sukses
            notificationMessage.innerText = 'Pesan Anda telah terkirim!';
            notificationPopup.style.display = 'block';
        } else {
            throw new Error('Network response was not ok.');
        }
    } catch (error) {
        // Tangani kesalahan dan tampilkan notifikasi popup error jika terjadi kesalahan
        console.error('There has been a problem with your fetch operation:', error);
        notificationMessage.innerText = 'Pengiriman pesan gagal. Silakan coba lagi.';
        notificationPopup.style.display = 'block';
    }
});

// Menyembunyikan notifikasi popup jika pengguna menekan tombol "Tutup"
notificationPopup.addEventListener('click', () => {
    notificationPopup.style.display = 'none';
});
