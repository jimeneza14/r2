/// En este archivo de prueba, estamos utilizando la biblioteca 
/// @testing-library/react para renderizar el componente App y 
/// simular eventos de clic en los botones dentro del componente. 
/// Luego, estamos realizando algunas aserciones para verificar si 
/// los elementos esperados están presentes en la pantalla después de 
/// simular los eventos de clic.
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders without crashing', () => {
    render(<App />);
  });

  test('adds a book to reading list', () => {
    const { getByText } = render(<App />);
    fireEvent.click(getByText('Agregar a lista de lectura'));
    expect(getByText('El libro ya está en la lista de lectura.')).toBeInTheDocument();
  });

  test('removes a book from reading list', () => {
    const { getByText } = render(<App />);
    fireEvent.click(getByText('Quitar de lista de lectura'));
    expect(getByText('Catalogo de libros')).toBeInTheDocument();
  });
});

