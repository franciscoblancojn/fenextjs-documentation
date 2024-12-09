# useQuery

El hook `useQuery` proporciona acceso y control sobre los parámetros de consulta en la URL, permitiendo manipularlos y reaccionar a sus cambios.

### Importación

Para importar el componente useQuery, se puede hacer desde fenextjs

```tsx copy
import { useQuery } from "fenextjs";
```

### Parámetros

| Parámetro    | Tipo                         | Requerido | Default | Descripcion                                                                 |
| ------------ | ---------------------------- | --------- | ------- | --------------------------------------------------------------------------- |
| ignoreQuerys | [id: keyof T]                | no        |         | Lista de claves de los parámetros de consulta que deben ser ignorados.      |
| parseQuery   | (data: ParsedUrlQuery) =\> T | no        |         | Función para transformar los parámetros de consulta en el formato esperado. |

### QueryDataDefault

Interfaz de los parámetros de consulta predeterminados.

| Nombre        | Descripcion                     | Default   |
| ------------- | ------------------------------- | --------- |
| id            | ID único.                       | undefined |
| search        | Término de búsqueda.            | ''        |
| searchAddress | Dirección de búsqueda.          | ''        |
| tab           | Nombre de la pestaña activa.    | 'all'     |
| page          | Página actual.                  | 0         |
| npage         | Número de elementos por página. | 10        |
| totalpage     | Total de páginas.               | 100       |
| allitems      | Total de elementos.             | 1000      |
| start         | Inicio del rango.               | undefined |
| end           | Fin del rango.                  | undefined |
| order         | Orden de los elementos.         | undefined |
| orderBy       | Campo por el cual ordenar.      | undefined |
| exportBy      | Exportaciones adicionales.      | []        |

### Returns

| Parametro     | Tipo                                              | Descripcion                                                                         |
| ------------- | ------------------------------------------------- | ----------------------------------------------------------------------------------- |
| load          | boolean                                           | Indica si el router está listo.                                                     |
| query         | T                                                 | Los parámetros de consulta actuales en formato `T`.                                 |
| setQuery      | (query: T) =\> boolean                            | Función para sobrescribir los parámetros de consulta.                               |
| onConcatQuery | (newQuery: T) =\> boolean                         | Función para agregar nuevos parámetros de consulta sin sobrescribir los existentes. |
| onChangeQuery | (id: keyof T) =\> (value: T[keyof T]) =\> boolean | Devuelve una función que modifica un parámetro específico.                          |
| onDeleteQuery | (id: keyof T) =\> boolean                         | Función para eliminar un parámetro de consulta específico.                          |
| isChange      | boolean                                           | Indica si los parámetros de consulta han cambiado.                                  |

### Usos

- Uso básico

```tsx copy
const { query, setQuery } = useQuery();
setQuery({ search: "example" });
```

- Agregar nuevos parámetros

```tsx copy
const { onConcatQuery } = useQuery();
onConcatQuery({ page: 2 });
```

- Eliminar un parámetro

```tsx copy
const { onDeleteQuery } = useQuery();
onDeleteQuery("search");
```

- Definir un formato personalizado

```tsx copy
const { query } = useQuery<{ customParam: string }>({
  parseQuery: (data) => ({
    customParam: data?.customParam ?? "",
  }),
});
```
