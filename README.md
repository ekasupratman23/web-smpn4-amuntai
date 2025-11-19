# web-smpn4-amuntai

Project starter for SMP Negeri 4 Amuntai — Vite + React + Tailwind + Supabase (for berita & login admin)

## Cepat mulai (lokal)
1. Pasang dependensi:

```bash
npm install
```

2. Buat project Supabase gratis di https://supabase.com dan catat `URL` + `ANON KEY`.

3. Salin `.env.example` menjadi `.env` dan isikan:

```
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=public-anon-key
VITE_APP_TITLE="SMP Negeri 4 Amuntai"
```

4. Jalankan server dev:

```bash
npm run dev
```

## Struktur DB Supabase (saran table)
Buat table `news` dengan kolom:
- id (int, pk, auto increment)
- title text
- slug text
- excerpt text
- content text
- image text
- status text
- created_at timestamptz default now()

## Penggunaan
- Halaman Berita akan membaca data dari table `news`.
- Login admin (nanti): kita dapat menambah table `users` + row-level security di Supabase.

---

Jika Bapak mau, saya bisa bantu:
- Membuat SQL migration untuk table `news` dan `users` yang bisa di-import ke Supabase.
- Menambahkan halaman Admin untuk CRUD berita (terhubung ke Supabase).
- Men-deploy ke GitHub repo yang Bapak buat.
