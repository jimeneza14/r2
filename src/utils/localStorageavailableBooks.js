const AVAILABLE_BOOK_KEY = 'availableBooks';

// Toma la lista de lectura como argumento, 
// la serializa a JSON y la guarda en el localStorage 
// bajo la clave AVAILABLE_BOOK_KEY.
export const saveavailableBooks = (availableBooks) => {
  // Utilizamos un try-catch block para manejar errores 
  // que puedan surgir al interactuar con localStorage.
  try {
    const serializedavailableBooks = JSON.stringify(availableBooks);
    localStorage.setItem(AVAILABLE_BOOK_KEY, serializedavailableBooks);
  } catch (error) {
    console.error('Error saving available books list to localStorage:', error);
  }
};

// Carga la lista de lectura almacenada en localStorage, 
// la parsea desde JSON y la devuelve. 
// Si no hay una lista de libro disponible en localStorage, devuelve un array vacío.
export const loadavailableBooks = () => {
  // Utilizamos un try-catch block para manejar errores 
  // que puedan surgir al interactuar con localStorage.
  try {
    const serializedavailableBooks = localStorage.getItem(AVAILABLE_BOOK_KEY);
    if (serializedavailableBooks === null) {
      return [];
    }
    return JSON.parse(serializedavailableBooks);
  } catch (error) {
    console.error('Error loading available books list from localStorage:', error);
    return [];
  }
};
