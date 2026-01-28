#!/usr/bin/env python3
"""
Victoria Hampers - Auto Update Products from Excel
Jalankan: python3 update_products.py
"""

import pandas as pd
import json
import re

EXCEL_FILE = "Victoria_Hampers_Products.xlsx"
JS_FILE = "js/main.js"

def read_excel():
    df = pd.read_excel(EXCEL_FILE, sheet_name="Produk")
    products = []

    for _, row in df.iterrows():
        items = [item.strip() for item in str(row["Isi Hampers"]).split(",")]

        product = {
            "id": int(row["ID"]),
            "name": str(row["Nama Produk"]),
            "price": int(row["Harga"]),
            "category": str(row["Kategori"]).lower().strip(),
            "image": str(row["URL Gambar"]),
            "description": str(row["Deskripsi"]),
            "items": items,
            "featured": str(row["Featured"]).lower().strip() in ["ya", "yes", "true", "1"]
        }
        products.append(product)

    return products

def generate_js_array(products):
    lines = ["const products = ["]

    for i, p in enumerate(products):
        items_str = json.dumps(p["items"], ensure_ascii=False)

        lines.append("    {")
        lines.append(f'        id: {p["id"]},')
        lines.append(f'        name: "{p["name"]}",')
        lines.append(f'        price: {p["price"]},')
        lines.append(f'        category: "{p["category"]}",')
        lines.append(f'        image: "{p["image"]}",')
        lines.append(f'        description: "{p["description"]}",')
        lines.append(f'        items: {items_str},')
        lines.append(f'        featured: {"true" if p["featured"] else "false"}')

        if i < len(products) - 1:
            lines.append("    },")
        else:
            lines.append("    }")

    lines.append("];")
    return "\n".join(lines)

def update_main_js(products):
    with open(JS_FILE, "r", encoding="utf-8") as f:
        content = f.read()

    # Pattern untuk mencocokkan array products
    pattern = r"const products = \[[\s\S]*?\n\];"

    new_array = generate_js_array(products)
    new_content = re.sub(pattern, new_array, content)

    with open(JS_FILE, "w", encoding="utf-8") as f:
        f.write(new_content)

def main():
    print("=" * 50)
    print("Victoria Hampers - Update Products")
    print("=" * 50)

    print(f"\n📖 Membaca {EXCEL_FILE}...")
    products = read_excel()
    print(f"   ✓ {len(products)} produk ditemukan")

    print(f"\n📝 Mengupdate {JS_FILE}...")
    update_main_js(products)
    print(f"   ✓ File berhasil diupdate")

    print("\n" + "=" * 50)
    print("✅ SELESAI!")
    print("=" * 50)
    print("\nLangkah selanjutnya:")
    print("1. Cek website lokal: open index.html")
    print("2. Push ke GitHub:")
    print("   git add .")
    print('   git commit -m "Update products"')
    print("   git push")
    print()

if __name__ == "__main__":
    main()
