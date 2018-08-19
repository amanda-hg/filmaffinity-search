# filmaffinity-search

This module returns filmaffinity data. You can search by fragment of title or filmaffinity id
```js
{
    titulo: 'Ace Ventura, un detective diferente',
    anio: '1994',
    direccion: 'Tom Shadyac',
    reparto:
    'Jim Carrey,   Sean Young,   Courteney Cox,   Tone Loc,   Dan Marino,   Noble Willingham,   Troy Evans,   Udo Kier,   Raynor Scheine,   Frank Adonis,   Tiny Ron,   David Margulies,   John Capodice,   Judy Clayton,   Bill Zuckert,   Alice Drummond,   Rebecca Ferratti,   Mark Margolis',
    sinopsis:
    'El detective Ace Ventura, especializado en rescatar animales secuestrados, recibe el encargo de localizar y rescatar el delfin Copo de Nieve, mascota del equipo de fútbol de Miami, que ha sido secuestrado el día anterior a la gran final que debe disputar el equipo.'
}
```
# Usage

Just require the module like any other npm module 
```js
const FilmaffinitySearch = require('filmaffinity-search');
```

# Methods

This module has three methods:

- getId: returns a promise with a array with the title and id film through the title
- getRecord: returns a promise with a record film through the id
- getFilm: returns a promise with a films array through the title

# Example
## getId
Input:
```js
const FilmaffinitySearch = require('filmaffinity-search');

const getIds = FilmaffinitySearch.getIds;
getIds('lo que el viento se llevo')
    .then((films) => films.forEach(( film ) => console.log(JSON.stringify(film, null, 4))));

```
Output:
```js
{
    "titulo": "Lo que el viento se llevó (1939)",
    "id": "470268"
}
{
    "titulo": "El viento se levanta (2013)",
    "id": "835261"
}
{
    "titulo": "El viento se llevó lo que (1998)",
    "id": "796616"
}
```
## getRecord
Input:
```js
const FilmaffinitySearch = require('filmaffinity-search');

const getRecord = FilmaffinitySearch.getRecord;
getRecord(470268)
    .then((film) => console.log(JSON.stringify(film, null, 4)));

```

Output:
```js
{
    "titulo": "Lo que el viento se llevó",
    "anio": "1939",
    "direccion": "Victor Fleming,   George Cukor,   Sam Wood",
    "reparto": "Vivien Leigh,   Clark Gable,   Olivia de Havilland,   Leslie Howard,   Hattie McDaniel,   Thomas Mitchell,   Barbara O'Neil,   Butterfly McQueen,   Ona Munson,   Ann Rutherford,   Evelyn Keyes,   Mickey Kuhn,   Ward Bond",
    "sinopsis": "Georgia, 1861. En la elegante mansión sureña de Tara, vive Scarlett O'Hara (Vivien Leigh), la joven más bella, caprichosa y egoísta de la región. Ella suspira por el amor de Ashley (Leslie Howard), pero él está prometido con su prima, la dulce y bondadosa Melanie (Olivia de Havilland). En la última fiesta antes del estallido de la Guerra de Secesión (1861-1865), Scarlett conoce al cínico y apuesto Rhett Butler (Clark Gable), un vividor arrogante y aventurero, que sólo piensa en sí mismo y que no tiene ninguna intención de participar en la contienda. Lo único que él desea es hacerse rico y conquistar el corazón de la hermosa Scarlett."
}
```
## getFilms
Input:
```js
const FilmaffinitySearch = require('filmaffinity-search');

const getFilms = FilmaffinitySearch.getFilms;
getFilms('lo que el viento se llevo')
    .then((films) =>  films.forEach(( film ) => console.log(JSON.stringify(film, null, 4))));
```

Output:
```js
{
    "titulo": "Ace Ventura, un detective diferente",
    "anio": "1994",
    "direccion": "Tom Shadyac",
    "reparto": "Jim Carrey,   Sean Young,   Courteney Cox,   Tone Loc,   Dan Marino,   Noble Willingham,   Troy Evans,   Udo Kier,   Raynor Scheine,   Frank Adonis,   Tiny Ron,   David Margulies,   John Capodice,   Judy Clayton,   Bill Zuckert,   Alice Drummond,   Rebecca Ferratti,   Mark Margolis",
    "sinopsis": "El detective Ace Ventura, especializado en rescatar animales secuestrados, recibe el encargo de localizar y rescatar el delfin Copo de Nieve, mascota del equipo de fútbol de Miami, que ha sido secuestrado el día anterior a la gran final que debe disputar el equipo."
}
{
    "titulo": "Ace Ventura: Operación África",
    "anio": "1995",
    "direccion": "Steve Oedekerk",
    "reparto": "Jim Carrey,   Ian McNeice,   Simon Callow,   Maynard Eziashi,   Bob Gunton,   Sophie Okonedo,   Tommy Davidson,   Adewale Akinnuoye-Agbaje,   Ken Kirzinger",
    "sinopsis": "Intentando superar el trauma que le ha dejado el fracaso de su última misión, en la que no pudo evitar que muriera el mapache que tenía que rescatar, el inefable detective Ace Ventura se retira a un monasterio budista. Pero, una vez allí, un extraño personaje le ofrece una fuerte suma de dinero para que trate de encontrar al animal sagrado de una tribu."
}
```