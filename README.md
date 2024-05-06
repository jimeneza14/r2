Implementar una pequeña aplicación de lista de libros utilizando el framework de React. [anchor](https://enlace.tld "Live Demo")

# Funcionalidades:
1. Visualización de Libros Disponibles.
2. Creación de Lista de Lectura.
3. Filtrado de Libros por Género:.
4. Sincronización de Estado.
5. Persistencia de Datos.
6. Sincronización entre Pestañas.

# Estructura de Carpetas y Archivos:

lista-de-libros/  
>  public/  
> >  index.html 
> >
>
> src/  
> > components/
> > > BookList.js  
> > > BookListCard.js  
> > > GenreFilter.js  
> > > ReadingList.js  
> > > ReadingListCard.js
> >
> > data/
> > >  books.json
> >
> >  utils/
> > > localStorage.js  
> > > localStorageavailableBooks.js
> >
> > App.css  
> > App.js  
> > App.test.js  
> > index.js  
>

# src

## Componentes:  
### BookList.js  
Componente para mostrar una lista de libros disponibles y proporciona opciones para filtrar por género y permite agregar libros a la lista de lectura.

 * **Props:** El componente acepta dos props: addToReadingList, una función para agregar un libro a la lista de lectura, y availableBooks, que es una lista de libros disponibles.

* **Estado:** Utiliza dos estados locales, books y selectedGenre, para almacenar la lista de libros y el género seleccionado respectivamente.

* **Efecto:** Utiliza el hook useEffect para actualizar la lista de libros cuando cambia la lista de libros disponibles.

* **Funciones:** Define dos funciones, handleAddToReadingList y handleGenreChange, para manejar la acción de agregar un libro a la lista de lectura y el cambio de género seleccionado respectivamente.

*  **Renderizado:** Renderiza el componente GenreFilter, pasando los géneros únicos y la función de manejo del cambio de género como props. También muestra la cantidad de libros en el género seleccionado y renderiza los libros filtrados como componentes BookListCard.

### BookListCard.js  
Representa una tarjeta de libro en la lista de libros disponibles.

* **Props:** El componente acepta dos props: book y onAddToReadingList. book es un objeto que contiene la información del libro, y onAddToReadingList es una función para agregar el libro a la lista de lectura.

* **Renderizado:** Renderiza la imagen del libro, la información del libro (título, autor, ISBN, páginas y año) y un enlace para obtener más información sobre el libro.

* **Interactividad:** Incluye un ícono de corazón que permite al usuario agregar el libro a la lista de lectura al hacer clic en él.

### GenreFilter  
Pepresenta un filtro de género para la lista de libros.

* **Props:** El componente acepta dos props: genres y onGenreChange. genres es un arreglo de géneros disponibles, y onGenreChange es una función para manejar el cambio de género seleccionado.

* **Renderizado:** Renderiza un menú desplegable (<select>) que permite al usuario seleccionar un género. También incluye una opción predeterminada para mostrar todos los géneros disponibles y opciones para cada género en el arreglo genres.

* **Interactividad:** Utiliza el evento onChange del menú desplegable para llamar a la función onGenreChange cuando el usuario selecciona un género diferente.

### ReadingList.js  
Representa la lista de libros de lectura.

* **Props:** El componente acepta dos props: readingList y removeFromReadingList. readingList es un arreglo de libros en la lista de lectura, y removeFromReadingList es una función para eliminar un libro de la lista de lectura.

* **Renderizado:** Renderiza el encabezado "Lista de Lectura" seguido de la lista de libros en la lista de lectura. Si la lista de lectura está vacía, muestra un mensaje indicando que no hay libros en la lista.

* **Interactividad:** Utiliza la función handleRemoveFromReadingList para manejar la eliminación de libros de la lista de lectura cuando se hace clic en el ícono de eliminación en cada tarjeta de libro (ReadingListCard).

### ReadingListCard  
Representa una tarjeta de libro en la lista de lectura.

* **Props:** El componente acepta dos props: book y onRemoveFromReadingList. book es un objeto que contiene la información del libro, y onRemoveFromReadingList es una función para eliminar el libro de la lista de lectura cuando se hace clic en el ícono de eliminación.

* **Renderizado:** Renderiza la tarjeta de libro con la imagen de la portada, el título, el autor, el ISBN, el número de páginas y el año de publicación del libro. También incluye un botón "Más" para mostrar más detalles del libro.

* **Interactividad:** Utiliza el ícono de eliminación (fas fa-backspace) para permitir al usuario eliminar el libro de la lista de lectura cuando se hace clic en él.

## Data  
### books.json
Proporciona información detallada sobre varios libros, incluyendo su título, género, autor, año de publicación y más.

## Utils  
### localStorage
Proporciona funciones para guardar y cargar la lista de lectura en el localStorage del navegador.

* **READING_LIST_KEY:** Una constante que define la clave utilizada para almacenar la lista de lectura en el localStorage.

* **saveReadingList(readingList):** Una función que toma la lista de lectura como argumento, la serializa a formato JSON y la guarda en el localStorage bajo la clave definida por READING_LIST_KEY.

* **readingList:** La lista de lectura que se desea guardar en el localStorage.

* **loadReadingList():** Una función que carga la lista de lectura almacenada en el localStorage, la parsea desde JSON y la devuelve como un array de objetos. Si no hay una lista de lectura en el localStorage, devuelve un array vacío.

Estas funciones utilizan un bloque try-catch para manejar posibles errores que puedan surgir al interactuar con el localStorage, como errores de serialización o acceso. Si ocurre un error, se registra en la consola y la función devuelve un valor predeterminado, como un array vacío.

### localStorageavailableBooks  
Proporciona funciones para guardar y cargar la lista de libros disponibles en el localStorage del navegador.

* **AVAILABLE_BOOK_KEY:** Una constante que define la clave utilizada para almacenar la lista de libros disponibles en el localStorage.

* **saveavailableBooks(availableBooks):** Una función que toma la lista de libros disponibles como argumento, la serializa a formato JSON y la guarda en el localStorage bajo la clave definida por AVAILABLE_BOOK_KEY.

* **availableBooks:** La lista de libros disponibles que se desea guardar en el localStorage.

* **loadavailableBooks():** Una función que carga la lista de libros disponibles almacenada en el localStorage, la parsea desde JSON y la devuelve como un array de objetos. Si no hay una lista de libros disponibles en el localStorage, devuelve un array vacío.

Estas funciones utilizan un bloque try-catch para manejar posibles errores que puedan surgir al interactuar con el localStorage, como errores de serialización o acceso. Si ocurre un error, se registra en la consola y la función devuelve un valor predeterminado, como un array vacío.

## App.css  
Para dar estilo a la aplicación.

## App.js  
Actúa como la raíz de la aplicación.

* **Estado:** Utiliza el hook useState para manejar dos estados: readingList, que almacena la lista de libros que el usuario ha agregado para leer, y availableBooks, que almacena la lista de libros disponibles para ser agregados a la lista de lectura.

* **Efecto:** Utiliza el hook useEffect para cargar la lista de lectura desde el almacenamiento local cuando el componente se monta por primera vez. También carga la lista de libros disponibles desde un archivo JSON.

* **Funciones:** Define dos funciones, addToReadingList y removeFromReadingList, para agregar y eliminar libros de la lista de lectura respectivamente. Estas funciones actualizan el estado y también guardan los cambios en el almacenamiento local.

* **Renderizado:** El componente renderiza dos subcomponentes: BookList y ReadingList, pasandoles las funciones y estados necesarios como props.

## App.test.js  
Archivo de prueba para el componente App. Utiliza la biblioteca `@testing-library/react` para realizar pruebas de renderizado y simulación de eventos de clic en los botones dentro del componente.

* `describe('App Component', () => {...):` Define un grupo de pruebas para el componente App.

* `test('renders without crashing', () => {...):` Una prueba que verifica si el componente se renderiza correctamente sin errores.

* `test('adds a book to reading list', () => {...):` Una prueba que simula hacer clic en un botón para agregar un libro a la lista de lectura y luego verifica si se muestra un mensaje adecuado en la pantalla.

* `test('removes a book from reading list', () => {...):` Una prueba que simula hacer clic en un botón para quitar un libro de la lista de lectura y luego verifica si se muestra el texto "Catalogo de libros" en la pantalla, indicando que el libro se eliminó correctamente.

En cada prueba, se utiliza la función `render(<App />)` para renderizar el componente App. Luego, se utiliza la función `fireEvent.click()` para simular un evento de clic en los botones dentro del componente. Finalmente, se utilizan las funciones de aserción de `@testing-library/react`, como `getByText()` y `toBeInTheDocument()`, para verificar si los elementos esperados están presentes en la pantalla después de simular los eventos de clic.

**NOTA:** Asegúrate de tener instaladas todas las dependencias necesarias, incluyendo `Jest` y `@testing-library/react`. Puedes instalar ejecutando el siguiente comando en tu terminal:  
`npm install --save-dev jest`  
`npm install --save-dev @testing-library/react`  

Una vez que tengas instaladas las dependencias, puedes ejecutar las pruebas ejecutando el siguiente comando en tu terminal en la raíz de tu proyecto:  
`npm test`

Esto ejecutará `Jest` y buscará automáticamente todos los archivos cuyo nombre termine en `.test.js` o `.spec.js` en tu proyecto y ejecutará las pruebas definidas en ellos.

`Jest` ejecutará las pruebas y mostrará los resultados en la terminal. Verás una lista de pruebas que se ejecutan y si pasan o fallan.

Si alguna prueba falla, `Jest` te proporcionará información sobre el fallo para que puedas solucionarlo.