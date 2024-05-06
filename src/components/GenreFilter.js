import React from 'react';

/**
 * Componente funcional que representa un filtro de género para la lista de libros.
 * @param {Object} props Propiedades del componente.
 * @param {Array} props.genres Arreglo de géneros disponibles.
 * @param {Function} props.onGenreChange Función para manejar el cambio de género seleccionado.
 */
const GenreFilter = ({ genres, onGenreChange }) => {
  return (
    // <div>GenreFilter.js</div>
    <div>
      <select onChange={(e) => onGenreChange(e.target.value)}>
        <option value="">All Genres</option>
        {genres.map(genre => (
          <option key={genre} value={genre}>{genre}</option>
        ))}
      </select>
    </div>
  );
};

export default GenreFilter;
