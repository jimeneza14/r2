import React from 'react';

const CardBody = ({ book: lib }) => {
      const v3 = lib;
      return (
            <div className="card-body">                  
                  {/* <p>Title : {lib.book.title}</p>
                  <p>Autor : {lib.book.author.name}</p>
                  <p>ISBN  : {lib.book.ISBN}</p>
                  <p>Pages : {lib.book.pages}</p>
                  <p>Year  : {lib.book.year}</p> */}
                  {/* <p className="card-description">{lib.book.synopsis}</p> */}
            </div>
      );
};

export default CardBody;