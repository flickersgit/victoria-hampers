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

## Update Produk via Excel

### File yang Dibutuhkan
- `Victoria_Hampers_Products.xlsx` - Data produk
- `update_products.py` - Script auto-update

### Cara Update Produk
1. Buka `Victoria_Hampers_Products.xlsx`
2. Edit/tambah/hapus produk di sheet "Produk"
3. Simpan file Excel
4. Jalankan script:
   ```bash
   python3 update_products.py
   ```
5. Push ke GitHub:
   ```bash
   git add .
   git commit -m "Update products"
   git push
   ```

### Format Data Excel
| Kolom | Format | Contoh |
|-------|--------|--------|
| ID | Angka | 1, 2, 3 |
| Nama Produk | Teks | Hampers Lebaran |
| Harga | Angka (tanpa Rp) | 450000 |
| Kategori | lebaran/natal/imlek/wedding/baby/corporate | lebaran |
| Deskripsi | Teks | Paket hampers... |
| Isi Hampers | Pisah dengan koma | Item 1, Item 2, Item 3 |
| URL Gambar | URL lengkap | https://... |
| Featured | Ya/Tidak | Ya |

### Update Gambar Produk
**Opsi 1 - Upload ke repo:**
1. Simpan gambar di folder `images/`
2. URL: `https://flickersgit.github.io/victoria-hampers/images/nama-file.jpg`

**Opsi 2 - Image hosting:**
- Imgur: https://imgur.com
- Cloudinary: https://cloudinary.com

## Customization Lainnya
- Ganti nomor WhatsApp di semua file HTML
- Sesuaikan warna di Tailwind config di setiap HTML
