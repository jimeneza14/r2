import React from 'react';

/**
 * Componente funcional que representa una tarjeta de libro en la lista de lectura.
 * @param {Object} props Propiedades del componente.
 * @param {Object} props.book Información del libro.
 * @param {Function} props.onRemoveFromReadingList Función para eliminar un libro de la lista de lectura.
 */
const ReadingListCard = ({ book: lib, onRemoveFromReadingList }) => {
      return (
            <div className="card">
                  <div className='card-img'>
                        <span className='fas fa-backspace Read' onClick={() => onRemoveFromReadingList(lib)}></span>
                        <img src={lib.book.cover} alt={lib.book.title} />
                  </div>
                  <div className="card-body">
                        <p>Title : {lib.book.title}</p>
                        <p>Autor : {lib.book.author.name}</p>
                        <p>ISBN  : {lib.book.ISBN}</p>
                        <p>Pages : {lib.book.pages}</p>
                        <p>Year  : {lib.book.year}</p>
                  </div>
                  <div className="more">
                        <button className='btn btn-primary' >More</button>
                  </div>
            </div>
      );
};

export default ReadingListCard;