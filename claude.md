# Victoria Hampers - Website Katalog

## Deskripsi Project
Website katalog **Victoria Hampers** untuk menampilkan koleksi produk hampers/parcel premium dengan berbagai kategori dan harga.

## Live Website
- **URL**: https://flickersgit.github.io/victoria-hampers/
- **Repo**: https://github.com/flickersgit/victoria-hampers

## Tech Stack
- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Styling**: Tailwind CSS (CDN)
- **Icons**: Font Awesome 6
- **Hosting**: GitHub Pages

## Struktur Folder
```
/
├── index.html                      # Halaman beranda
├── catalog.html                    # Halaman katalog produk
├── product.html                    # Halaman detail produk
├── contact.html                    # Halaman kontak & pemesanan
├── claude.md                       # Dokumentasi project
├── Victoria_Hampers_Products.xlsx  # Data produk (Excel)
├── update_products.py              # Script auto-update produk
├── css/
│   └── style.css                   # Custom styles
├── js/
│   └── main.js                     # JavaScript utama & data produk
└── images/
    └── logo.png                    # Logo Victoria Hampers
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
Warna disesuaikan dengan branding Instagram @victoriahampers:
- **Cream**: #FEF9F3, #F5E6D3 (background)
- **Tan**: #C4A77D, #B39768 (aksen, button)
- **Sage**: #B5C4A8 (optional accent)
- **Text**: #5E4E33 (dark brown)

## Kontak
- **WhatsApp**: +65 8500 3405
- **Email**: hello@victoriahampers.com
- **Instagram**: @victoriahampers

## Cara Menjalankan Lokal
```bash
# Buka langsung di browser
open index.html

# Atau dengan live server
npx live-server
```

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

## Deploy ke GitHub Pages
```bash
git add .
git commit -m "Update..."
git push
```
Website akan auto-update dalam 1-2 menit.

## Customization
- **Logo**: Ganti `images/logo.png`
- **WhatsApp**: Edit nomor di semua file HTML (cari `6585003405`)
- **Warna**: Edit Tailwind config di `<script>` tag setiap HTML
- **Produk**: Edit via Excel + jalankan `update_products.py`
