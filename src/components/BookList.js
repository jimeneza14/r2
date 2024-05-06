import React, { useEffect, useState } from 'react';
import GenreFilter from './GenreFilter';
import BookListCard from './BookListCard';

/**
 * Componente funcional que muestra una lista de libros disponibles y proporciona
 * opciones para filtrar por género.
 * @param {Function} addToReadingList Función para agregar un libro a la lista de lectura.
 * @param {Array} availableBooks Lista de libros disponibles.
 */
  const BookList = ({ addToReadingList, availableBooks }) => {
  // Estado local para almacenar la lista de libros y el género seleccionado
  const [books, setBooks] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);

  // Efecto para actualizar la lista de libros cuando cambia la 
  // lista de libros disponibles
  useEffect(()=>{setBooks(availableBooks);}, [availableBooks]);

  // Función para manejar la acción de agregar un libro a la lista de lectura
  const handleAddToReadingList = (book) => {
    addToReadingList(book);
  };

  // Función para manejar el cambio de género seleccionado
  const handleGenreChange = (genre) => {
    setSelectedGenre(genre);
  };

  // Extraemos los géneros únicos de todos los libros
  const allGenres = books.reduce((genres, lib) => {
    if (!genres.includes(lib.book.genre)) {
      genres.push(lib.book.genre);
    }
    return genres;
  }, []);

  // Filtra los libros según el género seleccionado
  const filteredBooks = selectedGenre ? books.filter(lib => lib.book.genre === selectedGenre) : books;
  
  // Renderiza el componente
  return (
    <div className="column bolder">
      {/* Pasamos los géneros únicos como prop 'genres' */}
      <GenreFilter genres={allGenres} onGenreChange={handleGenreChange} /><p> {filteredBooks.length} libros en este genero</p>
      <h4>Libros Disponibles</h4>
      <div>
        {filteredBooks.map(lib => (
          <BookListCard key={lib.book.id} book={lib} onAddToReadingList={handleAddToReadingList} />
        ))}
      </div>
    </div>
  );
};

export default BookList;