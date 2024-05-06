import React from "react";
import CardBody from "./CardBody";

/**
 * Componente funcional que representa una tarjeta de libro en la lista de libros disponibles.
 * @param {Object} props Propiedades del componente.
 * @param {Object} props.book Objeto que contiene la información del libro.
 * @param {Function} props.onAddToReadingList Función para agregar el libro a la lista de lectura.
 */
const BookListCard = ({ book: lib, onAddToReadingList }) => {
      return (
            <div className="card">
                  <div className='card-img flex'>
                        <img src={lib.book.cover} alt={lib.book.title} />
                        <span className="fas fa-heart column Available" onClick={() => onAddToReadingList(lib)}></span>
                  </div>
                  {/* <CardBody lib={lib} /> */}
                  <div className="card-body">                  
                  <p>Title : {lib.book.title}</p>
                  <p>Autor : {lib.book.author.name}</p>
                  <p>ISBN  : {lib.book.ISBN}</p>
                  <p>Pages : {lib.book.pages}</p>
                  <p>Year  : {lib.book.year}</p>
                  {/* <p className="card-description">{lib.book.synopsis}</p> */}
            </div>
                  <div className="more">
                        <button className="btn btn-primary" >More</button>
                  </div>
            </div>
      );
};

export default BookListCard;