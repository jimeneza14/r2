import React from 'react';
import '../App.css';
import ReadingListCard from './ReadingListCard';

/**
 * Componente funcional que representa la lista de lectura de libros.
 * @param {Object} props Propiedades del componente.
 * @param {Array} props.readingList Arreglo de libros en la lista de lectura.
 * @param {Function} props.removeFromReadingList Función para eliminar un libro de la lista de lectura.
 */
const ReadingList = ({ readingList, removeFromReadingList }) => {
  /**
   * Maneja la eliminación de un libro de la lista de lectura.
   * @param {Object} book El libro que se va a eliminar.
   */
  const handleRemoveFromReadingList = (book) => {
    removeFromReadingList(book);
  };

  return (
    <div className="column"><br /><br /><br />
      <h4>Lista de Lectura</h4><br />
      {readingList.length === 0 ? (
        <p>No books in your reading list.</p>
      ) : (
        <div>
          
          <div>
            {readingList.map(lib => (             
              <ReadingListCard key={lib.book.id} book={lib} onRemoveFromReadingList={handleRemoveFromReadingList} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ReadingList;
