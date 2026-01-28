// Victoria Hampers - Main JavaScript

// Product Data
const products = [
    {
        id: 1,
        name: "Hampers Lebaran Berkah",
        price: 450000,
        category: "lebaran",
        image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=400&h=400&fit=crop",
        description: "Paket hampers lebaran lengkap dengan kue kering premium dan sirup berkualitas. Cocok untuk berbagi kebahagiaan di hari raya.",
        items: ["Nastar Premium 250gr", "Kastengel Keju 250gr", "Putri Salju 200gr", "Sirup Marjan 2 botol", "Kurma Ajwa 500gr"],
        featured: true
    },
    {
        id: 2,
        name: "Hampers Lebaran Mewah",
        price: 750000,
        category: "lebaran",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
        description: "Hampers lebaran premium dengan pilihan kue dan makanan terbaik. Kemasan eksklusif dengan box kayu.",
        items: ["Kue Kering Premium 4 toples", "Kurma Medjool 1kg", "Sirup Premium 2 botol", "Teh Tong Tji Premium", "Madu Murni 500ml"],
        featured: true
    },
    {
        id: 3,
        name: "Hampers Natal Classic",
        price: 550000,
        category: "natal",
        image: "https://images.unsplash.com/photo-1512909006721-3d6018887383?w=400&h=400&fit=crop",
        description: "Paket hampers natal dengan tema klasik merah hijau. Berisi cokelat dan cookies premium.",
        items: ["Chocolate Truffle Box", "Christmas Cookies Assorted", "Red Wine (Non-Alcohol)", "Cheese Selection", "Christmas Pudding"],
        featured: true
    },
    {
        id: 4,
        name: "Hampers Natal Premium",
        price: 950000,
        category: "natal",
        image: "https://images.unsplash.com/photo-1543934638-bd2e138430c4?w=400&h=400&fit=crop",
        description: "Hampers natal mewah dengan pilihan produk impor dan kemasan premium.",
        items: ["Belgian Chocolate Box", "Italian Panettone", "Premium Cookies Set", "Sparkling Juice", "Gourmet Cheese", "Christmas Candle"],
        featured: false
    },
    {
        id: 5,
        name: "Hampers Imlek Prosperity",
        price: 650000,
        category: "imlek",
        image: "https://images.unsplash.com/photo-1548043852-b9e0e4e15fd6?w=400&h=400&fit=crop",
        description: "Hampers imlek dengan tema kemakmuran dan keberuntungan. Warna merah dan gold mendominasi.",
        items: ["Kue Keranjang Premium", "Jeruk Mandarin 1kg", "Teh Cina Premium", "Kacang-kacangan Assorted", "Ang Pao Exclusive"],
        featured: true
    },
    {
        id: 6,
        name: "Hampers Imlek Deluxe",
        price: 1200000,
        category: "imlek",
        image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=400&fit=crop",
        description: "Hampers imlek super premium dengan produk-produk pilihan berkualitas tinggi.",
        items: ["Abalone Kaleng Premium", "Bird Nest Drink", "Kue Keranjang Set", "Premium Tea Set", "Gold Coin Chocolate", "Red Wine"],
        featured: false
    },
    {
        id: 7,
        name: "Seserahan Modern",
        price: 1500000,
        category: "wedding",
        image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=400&fit=crop",
        description: "Paket seserahan modern dengan kemasan elegan. Bisa dicustom sesuai kebutuhan.",
        items: ["Box Perhiasan", "Sepatu & Tas Set", "Mukena Premium", "Skincare Set", "Al-Quran & Tasbih", "Buah-buahan Segar"],
        featured: true
    },
    {
        id: 8,
        name: "Wedding Gift Elegant",
        price: 850000,
        category: "wedding",
        image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=400&fit=crop",
        description: "Kado pernikahan elegan untuk pasangan yang baru menikah.",
        items: ["Towel Set Premium", "Aromatherapy Set", "Photo Frame", "Scented Candles", "Wine Glasses Set"],
        featured: false
    },
    {
        id: 9,
        name: "Baby Boy Hampers",
        price: 550000,
        category: "baby",
        image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&h=400&fit=crop",
        description: "Hampers kelahiran untuk bayi laki-laki dengan tema biru.",
        items: ["Baby Clothes Set", "Baby Blanket", "Baby Shoes", "Soft Toys", "Baby Care Products"],
        featured: true
    },
    {
        id: 10,
        name: "Baby Girl Hampers",
        price: 550000,
        category: "baby",
        image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=400&h=400&fit=crop",
        description: "Hampers kelahiran untuk bayi perempuan dengan tema pink.",
        items: ["Baby Dress Set", "Baby Blanket Pink", "Baby Headband", "Soft Dolls", "Baby Skincare Set"],
        featured: false
    },
    {
        id: 11,
        name: "Corporate Gift Standard",
        price: 350000,
        category: "corporate",
        image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=400&h=400&fit=crop",
        description: "Hampers corporate standar untuk karyawan atau klien bisnis.",
        items: ["Premium Cookies Box", "Coffee/Tea Set", "Tumbler Exclusive", "Notebook Premium"],
        featured: false
    },
    {
        id: 12,
        name: "Corporate Gift Premium",
        price: 750000,
        category: "corporate",
        image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=400&h=400&fit=crop",
        description: "Hampers corporate premium untuk VIP clients dan partner bisnis.",
        items: ["Gourmet Food Selection", "Premium Wine/Tea", "Leather Goods", "Exclusive Stationery", "Personalized Card"],
        featured: true
    }
];

// Format price to Indonesian Rupiah
function formatPrice(price) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(price);
}

// Create product card HTML
function createProductCard(product) {
    return `
        <div class="product-card bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
            <a href="product.html?id=${product.id}" class="block">
                <div class="aspect-square overflow-hidden bg-brown-100">
                    <img src="${product.image}" alt="${product.name}"
                         class="product-image w-full h-full object-cover"
                         onerror="this.src='https://via.placeholder.com/400x400/f0e6dd/cdab8f?text=Victoria+Hampers'">
                </div>
                <div class="p-4">
                    <span class="text-xs text-gold-600 font-medium uppercase tracking-wide">${getCategoryLabel(product.category)}</span>
                    <h3 class="font-semibold text-brown-800 mt-1 mb-2 line-clamp-2">${product.name}</h3>
                    <p class="text-gold-600 font-bold text-lg">${formatPrice(product.price)}</p>
                </div>
            </a>
            <div class="px-4 pb-4">
                <a href="https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20dengan%20${encodeURIComponent(product.name)}%20(${formatPrice(product.price)})"
                   target="_blank"
                   class="block w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg text-center text-sm font-medium transition">
                    <i class="fab fa-whatsapp mr-1"></i> Pesan
                </a>
            </div>
        </div>
    `;
}

// Get category label
function getCategoryLabel(category) {
    const labels = {
        'lebaran': 'Lebaran',
        'natal': 'Natal',
        'imlek': 'Imlek',
        'wedding': 'Wedding',
        'baby': 'Baby Born',
        'corporate': 'Corporate'
    };
    return labels[category] || category;
}

// Load featured products on homepage
function loadFeaturedProducts() {
    const container = document.getElementById('featuredProducts');
    if (!container) return;

    const featuredProducts = products.filter(p => p.featured).slice(0, 4);
    container.innerHTML = featuredProducts.map(p => createProductCard(p)).join('');
}

// Filter and display products on catalog page
function filterProducts() {
    const categoryFilter = document.querySelector('input[name="category"]:checked')?.value || 'all';
    const priceFilter = document.querySelector('input[name="price"]:checked')?.value || 'all';
    const sortBy = document.getElementById('sortBy')?.value || 'default';

    let filteredProducts = [...products];

    // Filter by category
    if (categoryFilter !== 'all') {
        filteredProducts = filteredProducts.filter(p => p.category === categoryFilter);
    }

    // Filter by price
    if (priceFilter !== 'all') {
        const [min, max] = priceFilter.split('-').map(Number);
        filteredProducts = filteredProducts.filter(p => p.price >= min && p.price <= max);
    }

    // Sort
    switch (sortBy) {
        case 'price-low':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'name':
            filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
    }

    // Display products
    const container = document.getElementById('productGrid');
    const emptyState = document.getElementById('emptyState');
    const productCount = document.getElementById('productCount');

    if (container) {
        if (filteredProducts.length === 0) {
            container.innerHTML = '';
            emptyState?.classList.remove('hidden');
        } else {
            container.innerHTML = filteredProducts.map(p => createProductCard(p)).join('');
            emptyState?.classList.add('hidden');
        }
    }

    if (productCount) {
        productCount.textContent = filteredProducts.length;
    }
}

// Mobile menu toggle
function initMobileMenu() {
    const menuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            const icon = menuBtn.querySelector('i');
            if (mobileMenu.classList.contains('hidden')) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            } else {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            }
        });
    }
}

// Initialize catalog page filters
function initCatalogFilters() {
    const categoryInputs = document.querySelectorAll('input[name="category"]');
    const priceInputs = document.querySelectorAll('input[name="price"]');
    const sortSelect = document.getElementById('sortBy');
    const resetBtn = document.getElementById('resetFilter');

    categoryInputs.forEach(input => {
        input.addEventListener('change', filterProducts);
    });

    priceInputs.forEach(input => {
        input.addEventListener('change', filterProducts);
    });

    if (sortSelect) {
        sortSelect.addEventListener('change', filterProducts);
    }

    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            document.querySelector('input[name="category"][value="all"]').checked = true;
            document.querySelector('input[name="price"][value="all"]').checked = true;
            if (sortSelect) sortSelect.value = 'default';
            filterProducts();
        });
    }
}

// Add floating WhatsApp button
function addFloatingWhatsApp() {
    const existingBtn = document.querySelector('.floating-wa');
    if (existingBtn) return;

    const btn = document.createElement('a');
    btn.href = 'https://wa.me/6281234567890';
    btn.target = '_blank';
    btn.className = 'floating-wa wa-pulse';
    btn.innerHTML = '<i class="fab fa-whatsapp"></i>';
    btn.title = 'Chat via WhatsApp';
    document.body.appendChild(btn);
}

// Show toast notification
function showToast(message, type = 'success') {
    const existingToast = document.querySelector('.toast');
    if (existingToast) existingToast.remove();

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `<i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'} mr-2"></i>${message}`;
    document.body.appendChild(toast);

    setTimeout(() => toast.classList.add('show'), 100);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
    loadFeaturedProducts();
    addFloatingWhatsApp();

    // If on catalog page
    if (document.getElementById('productGrid')) {
        initCatalogFilters();
        filterProducts();
    }
});

// Export for use in other scripts
window.products = products;
window.formatPrice = formatPrice;
window.createProductCard = createProductCard;
window.filterProducts = filterProducts;
window.showToast = showToast;
