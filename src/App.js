import React, { useState, useEffect } from 'react';
import BookList from './components/BookList';
import ReadingList from './components/ReadingList';
import { saveReadingList, loadReadingList } from './utils/localStorage';
import { saveavailableBooks } from './utils/localStorageavailableBooks';
import library from './data/books';

const App = () => {
  // Definición de estados para la lista de lectura y los libros disponibles
  const [readingList, setReadingList] = useState([]);
  const [availableBooks, setAvailableBooks] = useState([]);

  // Efecto para cargar la lista de lectura desde el 
  // almacenamiento local cuando el componente se monta
  useEffect(() => {
     // Cargar los libros disponibles desde el archivo 
     // data.json y almacenarlos en el localStore.
    const c1 = library.library;
    saveavailableBooks(c1);
    setAvailableBooks(c1);

    // Cargar la lista de lectura desde el localStore
    const savedReadingList = loadReadingList();
    setReadingList(savedReadingList);
  }, []);

  // Función para agregar un libro a la lista de lectura
  const addToReadingList = (lib) => {
    // Verificar si el libro ya está en la lista de lectura
    const isBookInReadingList = (readingList.map(lib => lib.book.id)).some(id => id === lib.book.id);

    // Si el libro no está en la lista, agregarlo
    if (!isBookInReadingList) {
      const updatedReadingList = [...readingList, lib];
      setReadingList(updatedReadingList);
      saveReadingList(updatedReadingList);

      // Eliminar el libro de la lista de disponibles
      const updatedAvailableBooks = availableBooks.filter(item => item.book.id !== lib.book.id);
      setAvailableBooks(updatedAvailableBooks);
      saveavailableBooks(updatedAvailableBooks);
    } else {
      // Mostrar una alerta si el libro ya está en la lista de lectura
      alert("El libro ya está en la lista de lectura.");
    }

  };

 // Función para eliminar un libro de la lista de lectura
  const removeFromReadingList = (bookToRemove) => {
    // Eliminar el libro de la lista de lectura
    const updatedReadingList = readingList.filter(lib => lib.book.id !== bookToRemove.book.id);
    setReadingList(updatedReadingList);
    saveReadingList(updatedReadingList);

    // Agregar el libro a la lista de disponibles si no está presente
    const isAlreadyInAvailableBooks = (availableBooks.map(lib => lib.book.id)).some(id => id === bookToRemove.book.id);
    
    if (!isAlreadyInAvailableBooks) {
      const updatedAvailableBooks = [...availableBooks, bookToRemove];
      setAvailableBooks(updatedAvailableBooks);
      saveavailableBooks(updatedAvailableBooks);
    }
  };

  // Renderizado del componente
  return (
    <div>
      <h3>Catalogo de libros</h3>
      <div className="container rounded-top-4">
        <BookList addToReadingList={addToReadingList} availableBooks={availableBooks} />
        <ReadingList readingList={readingList} removeFromReadingList={removeFromReadingList} />
      </div>
    </div>
  );
};

export default App;
