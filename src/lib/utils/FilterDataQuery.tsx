/**
 * Men filter data berdasarkan kata kunci (query).
 */
export default function filterDataByQuery<T>( data: T[], query: string, keys: (keyof T)[]): T[] {
  if (!query) return data;

  return data.filter(item => keys.some(key => {
      const value = item[key];
      if (typeof value === 'string' || typeof value === 'number') {
        return value.toString().toLowerCase().includes(query.toLowerCase());
      }
      return false;
    })
  );
}

/**
 * Berikut langkah-langkah yang dilakukan oleh fungsi ini:
 * 
 * Jika kata kunci (query) kosong, maka fungsi akan mengembalikan data asli (tidak ada perubahan).
 * Jika kata kunci (query) tidak kosong, maka fungsi akan mencari data dalam array berdasarkan kata kunci tersebut.
 * Fungsi akan mencari data dalam array dengan memeriksa beberapa kunci (keys) yang telah ditentukan.
 * Jika data ditemukan dalam salah satu kunci, maka data tersebut akan dimasukkan ke dalam hasil pencarian.
 * Pencarian dilakukan dengan cara membandingkan kata kunci dengan data dalam array, dengan mengubah kedua-duanya menjadi huruf kecil (case-insensitive).
 */
