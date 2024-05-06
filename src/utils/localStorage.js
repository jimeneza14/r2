const READING_LIST_KEY = 'readingList';

// Toma la lista de lectura como argumento, 
// la serializa a JSON y la guarda en el localStorage 
// bajo la clave READING_LIST_KEY.
export const saveReadingList = (readingList) => {
  // Utilizamos un try-catch block para manejar errores 
  // que puedan surgir al interactuar con localStorage.
  try {
    const serializedReadingList = JSON.stringify(readingList);
    localStorage.setItem(READING_LIST_KEY, serializedReadingList);
  } catch (error) {
    console.error('Error saving reading list to localStorage:', error);
  }
};

// Carga la lista de lectura almacenada en localStorage, 
// la parsea desde JSON y la devuelve. 
// Si no hay una lista de lectura en localStorage, devuelve un array vacío.
export const loadReadingList = () => {
  // Utilizamos un try-catch block para manejar errores 
  // que puedan surgir al interactuar con localStorage.
  try {
    const serializedReadingList = localStorage.getItem(READING_LIST_KEY);
    if (serializedReadingList === null) {
      return [];
    }
    return JSON.parse(serializedReadingList);
  } catch (error) {
    console.error('Error loading reading list from localStorage:', error);
    return [];
  }
};
