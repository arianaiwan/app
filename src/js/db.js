// src/js/db.js

let dbInstance = null;

function initDB() {
  return new Promise((resolve, reject) => {
    if (dbInstance) return resolve(dbInstance);

    const request = indexedDB.open('myAppDB', 1);

    request.onupgradeneeded = function (event) {
      const db = event.target.result;
      if (!db.objectStoreNames.contains('lirik')) {
        db.createObjectStore('lirik', { keyPath: 'id', autoIncrement: true });
      }
      if (!db.objectStoreNames.contains('recent')) {
          db.createObjectStore('recent', { keyPath: 'id', autoIncrement: true });
      }
    };

    request.onsuccess = function (event) {
      dbInstance = event.target.result;
      resolve(dbInstance);
    };

    request.onerror = function (event) {
      reject(event.target.error);
    };
  });
}

async function addLirik(data) {
  const db = await initDB();
  const tx = db.transaction('lirik', 'readwrite');
  const store = tx.objectStore('lirik');
  store.put(data);
  return tx.complete;
}

async function getAllLirik() {
  const db = await initDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('lirik', 'readonly');
    const store = tx.objectStore('lirik');
    const request = store.getAll();
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function getLirikById(id) {
  const db = await initDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('lirik', 'readonly');
    const store = tx.objectStore('lirik');
    const request = store.get(String(id)); // pastikan ID sesuai tipe data
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}


async function addRecentView(data) {
  const db = await initDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('recent', 'readwrite');
    const store = tx.objectStore('recent');
    const request = store.put(data);

    request.onsuccess = () => resolve(true);
    request.onerror = () => reject(request.error);
  });
}


async function getAllRecentView() {
  const db = await initDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('recent', 'readonly');
    const store = tx.objectStore('recent');
    const request = store.getAll();
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}


export {
  initDB,
  addLirik,
  getAllLirik,
  addRecentView,
  getAllRecentView,
  getLirikById
};
