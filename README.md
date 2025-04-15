## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

|  | Pemrograman Berbasis Framework 2025 |
|--|--|
| NIM |  2241720181 |
| Nama |  Hanief Mochsin |
| Kelas | TI - 3C |

## Persiapan 

* membuat project next js dna menginisialisasikan

![image](https://github.com/user-attachments/assets/e04eeaf7-41c6-48e5-9d3c-2ec401945429)

* lalu Cek konfigurasi postcss.config.mjs, di app/globals.css sudah ada import untuk tailwindcss atau belum
* Buka app/layout.tsx, tambahkan import './globals.css', dan modifikasi menjadi sebagai berikut: 

![image](https://github.com/user-attachments/assets/0c66a216-36e1-4e4f-8352-d5be2efb99c2)

* lalu jalankan aplikasi next js dengan npm run dev dan buka di browser pada alamat https://localhost:3000.

## Membuat Halamn Website 

![image](https://github.com/user-attachments/assets/6868b5eb-466c-4938-a748-add668898f71)

* Buat file app/page.tsx sebagai halaman "Tentang Saya":

![image](https://github.com/user-attachments/assets/12ff61e7-7ac9-4cfe-ab2f-86cdb7aea6fa)

* Buat file app/projects/page.tsx sebagai halaman "Proyek":

![image](https://github.com/user-attachments/assets/98f6c7e2-bde8-4a23-9761-73a28c5d73c5)

* Buat file app/essays/page.tsx sebagai halaman "Esai":

![image](https://github.com/user-attachments/assets/f8c4004a-cafe-4a70-8357-fb711a50fd61)

### Buka browser dan akses: 
* h p://localhost:3000/ untuk halaman "Tentang Saya". 
* h p://localhost:3000/projects untuk halaman "Proyek". 
* h p://localhost:3000/essays untuk halaman "Esai".

## Membuat Layout dan Navigasi
* Buat direktori src/components jika belum ada dan buat file src/components/Layout.tsx:

![image](https://github.com/user-attachments/assets/7877cd45-7b73-44f4-a422-fdf0883d1eb4)

![image](https://github.com/user-attachments/assets/2e1f8d76-8a25-4cec-8cd5-8f560d7615ac)

* Buat file src/components/Navbar.tsx

![image](https://github.com/user-attachments/assets/ff97f46b-1970-47fe-83e1-e7c0f9bb91ab)

* Buat file src/components/Footer.tsx

![image](https://github.com/user-attachments/assets/0bcdfb43-c466-45f9-a180-0f0bd7af6630)

* Update file app/layout.tsx untuk menggunakan layout:

![image](https://github.com/user-attachments/assets/3efcc925-cc60-4bff-9a9f-34be03a8159b)

* Update setiap halaman menambahkan metadata dengan generateMetadata:

![image](https://github.com/user-attachments/assets/123da507-b995-42c3-ba47-b46e95bce105)

* Lakukan hal yang sama untuk halaman projects/page.tsx dan essays/page.tsx.

![image](https://github.com/user-attachments/assets/c642f203-3a62-4866-bff4-b74ae8916148)
![image](https://github.com/user-attachments/assets/80c9bb76-a6f2-45da-8b58-21efb365843f)

## Membuat Halaman Proyek dengan Grid Responsif
* Buat folder di public/images. Kemudian tambahkan dua image, lalu rename dengan nama 
project1.png dan project2.png 

![image](https://github.com/user-attachments/assets/8c531070-5beb-4b00-9aa4-d687d4fb683e)

* Modifikasi file app/projects/page.tsx: 
Tambahkan import next/image dan beberapa image yang telah ditambahkan sebelumnya dan Buat card project item serta Modifikasi komponen project sebagai berikut: 

![image](https://github.com/user-attachments/assets/fb4612a2-8bd6-46f9-b8f9-e98cbcd8dfd6)

* Simpan file dan buka http://localhost:3000/projects di browser. Anda akan melihat daftar proyek 
dalam grid yang responsif.

![image](https://github.com/user-attachments/assets/7d8a438b-0c2c-4075-ad82-93543a4a177c)

#TUGAS

1. Modifikasi halaman "Esai" dengan Grid daftar artikel yang telah ditulis.

![image](https://github.com/user-attachments/assets/f5352bb6-7c60-44f1-9e58-d8c8db1a50ee)
![image](https://github.com/user-attachments/assets/318fb35d-97df-4ab1-9199-048b0fd6fdee)
 
2. Modifikasi halaman “Tentang Saya” Buat tampilan yang menarik  

![image](https://github.com/user-attachments/assets/502d36b8-de4e-4ba0-bbf2-5aaabd94bcd8)
![image](https://github.com/user-attachments/assets/0cd43527-f46f-4982-ad31-8b1e288554ed)









