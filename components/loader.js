// Assets/js/loader.js

// Buat elemen loader
const loader = document.createElement('div');
loader.className = 'loader';
loader.innerHTML = `
<h1>
    <span>M</span>
    <span>A</span>
    <span>N</span>
    <span>I</span>
    <span>S</span>
    <span>H</span>
    <span>.</span>
</h1>
`;

// Tambahkan ke body
document.body.appendChild(loader);

// Optional: Hapus loader saat semua konten siap (misalnya setelah 2 detik atau saat window load)
window.addEventListener('load', () => {
    setTimeout(() => {
        loader.classList.remove('fade-in'); // Hapus kelas fade-in untuk menghilangkan efek fade-in
        loader.classList.add('fade-out'); // Tambahkan kelas fade-out untuk efek menghilang

        // Hapus elemen loader setelah efek selesai
        setTimeout(() => {
            loader.remove(); // atau loader.style.display = "none";
            }, 3000); // delay 3 detik sebelum menghapus elemen loader
        }, 2000); // delay 2 detik sebelum menghapus loader
    }
);
