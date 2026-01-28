# Victoria Hampers - Website Katalog

## Deskripsi Project
Website katalog **Victoria Hampers** untuk menampilkan koleksi produk hampers/parcel premium dengan berbagai kategori dan harga.

## Tech Stack
- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Styling**: Tailwind CSS (CDN)
- **Icons**: Font Awesome 6

## Struktur Folder
```
/
├── index.html          # Halaman beranda
├── catalog.html        # Halaman katalog produk
├── product.html        # Halaman detail produk
├── contact.html        # Halaman kontak & pemesanan
├── claude.md           # Dokumentasi project
├── css/
│   └── style.css       # Custom styles
├── js/
│   └── main.js         # JavaScript utama & data produk
└── images/             # Folder untuk gambar produk
```

## Fitur Website
- **Homepage**: Hero section, kategori, produk unggulan, testimonial, CTA
- **Katalog**: Filter kategori & harga, sorting, grid produk
- **Detail Produk**: Galeri foto, deskripsi, isi hampers, tombol pesan
- **Kontak**: Form inquiry, info kontak, FAQ
- **Responsive**: Mobile-first design
- **WhatsApp Integration**: Tombol floating & link pesan langsung

## Kategori Produk
1. Hampers Lebaran
2. Hampers Natal & Tahun Baru
3. Hampers Imlek
4. Hampers Wedding/Seserahan
5. Hampers Baby Born
6. Hampers Corporate Gift

## Warna Theme
- **Primary (Gold)**: #d4912d
- **Secondary (Brown)**: #6b4134
- **Background**: #faf6f3

## Data Produk
Data produk disimpan di `js/main.js` sebagai array JavaScript. Setiap produk memiliki:
- `id`: ID unik
- `name`: Nama produk
- `price`: Harga (number)
- `category`: Kategori
- `image`: URL gambar
- `description`: Deskripsi
- `items`: Array isi hampers
- `featured`: Boolean untuk produk unggulan

## Kontak Default
- WhatsApp: +62 812-3456-7890
- Email: hello@victoriahampers.com
- Instagram: @victoriahampers
- Lokasi: Jakarta, Indonesia

## Cara Menjalankan
1. Buka file `index.html` di browser
2. Atau gunakan live server extension di VS Code

## Customization
- Edit data produk di `js/main.js`
- Ganti nomor WhatsApp di semua file HTML
- Tambah gambar produk di folder `images/`
- Sesuaikan warna di Tailwind config di setiap HTML
