/* =========================
   ENV (Issue: Langsung di index)
   Tugas: 
   1. pindahkan ke file khusus (config/env.ts), ok
   2. gunakan `export const env = {...}` untuk menyimpan data env ok
   3. tambahkan property DB_FILE berisi process.env.DB_FILE ke dalam `const env = {...}` ok
   4. cek kondisi if (!process.env.DB_FILE) console.warn("⚠ DB_FILE not set, using default database.sqlite"); ok
========================= */

export const env = {
    PORT: process.env.PORT || 3000,
    DB_FILE: process.env.DB_FILE || "database.sqlite",
    NODE_ENV: process.env.NODE_ENV || "development",
    SECRET_KEY: process.env.SECRET_KEY || ""
};

if (!process.env.DB_FILE) {
    console.warn("⚠ DB_FILE not set, using default database.sqlite");
}