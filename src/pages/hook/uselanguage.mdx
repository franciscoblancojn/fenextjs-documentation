# useLanguage

El hook `useLanguage` facilita la gestión de traducciones y el cambio de idioma en una aplicación. Permite traducir palabras con base en una lista de traducciones proporcionada y manejar casos en los que no se encuentra una traducción.

### Importación

Para importar el componente useLanguage, se puede hacer desde fenextjs

```tsx copy
import { useLanguage } from "fenextjs";
```

### Parámetros

| Parámetro | Tipo | Requerido | Default | Descripcion |
| --------- | ---- | --------- | ------- | ----------- |
| langs | Langs | sí |  | Lista de idiomas disponibles en la aplicación, definida como un array de strings. |
| listTranductions | LanguageListProps\<Langs\> | sí |  | Un objeto que contiene las traducciones organizadas por palabra e idioma. |
| defaultLang | Langs[number] | no |  | Idioma predeterminado que se usará si no se ha seleccionado otro idioma. |
| onNoFoundTranslate | (data: \{ word: string; lang: Langs[number] \}) =\> void | no |  | Función que se ejecuta cuando no se encuentra una traducción para una palabra específica. |
| fallbackNoFoundTranslation | string | no |  | Traducción alternativa que se usará cuando no se encuentre la traducción específica para una palabra. |

### LanguageListProps

Interface para definir la lista de idiomas.

```tsx copy
interface LanguageListProps<Langs extends string[]> {
    [word: string]: {
        [lang in Langs[number]]: any;
    };
}
```

### Returns

| Parametro | Tipo | Descripcion |
| --------- | ---- | ----------- |
| onTranslate | (word?: any) =\> any  | Función que recibe una palabra y devuelve su traducción en el idioma actual o la traducción alternativa, si no se encuentra. |
| load | boolean  | Variable que determina si currentLang temino de cargar. |
| currentLang | Langs[number]  | El idioma actual seleccionado. |
| setCurrentLang | (lang: Langs[number]) =\> void  | Función para cambiar el idioma actual. |
### Usos

- Traducción básica

```tsx copy
const { onTranslate } = useLanguage<["en", "es"]>({
    langs: ["en", "es"],
    listTranductions: {
        hello: { en: "Hello", es: "Hola" },
        world: { en: "World", es: "Mundo" },
    },
    defaultLang: "en",
});

const translatedWord = onTranslate("hello"); // "Hello" si el idioma actual es "en"
```

- Cambio de idioma

```tsx copy
const { setCurrentLang } = useLanguage<["en", "es"]>({
    langs: ["en", "es"],
    listTranductions: {
        goodbye: { en: "Goodbye", es: "Adiós" },
    },
    defaultLang: "es",
});

setCurrentLang("en"); // Cambia el idioma actual a "en"
```

- Fallback para traducciones no encontradas

```tsx copy
const { onTranslate } = useLanguage<["en", "es"]>({
    langs: ["en", "fr"],
    listTranductions: {
        welcome: { en: "Welcome", fr: "Bienvenue" },
    },
    fallbackNoFoundTranslation: "Translation not available",
});

const translation = onTranslate("nonexistent"); // "Translation not available"
```

