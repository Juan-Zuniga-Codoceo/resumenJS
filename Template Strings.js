/*Template Strings

Los Template Strings son una syntax sugar para la construcción de strings. Es parecido a la interpolación de stings de Perl, Python y otros lenguajes.

```js
// Basic literal string creation
`In JavaScript '\n' is a line-feed.`

// Multiline strings
`In JavaScript this is
 not legal.`

// String interpolation
var name = "Bob", time = "today";
`Hello ${name}, how are you ${time}?`

// Construct an HTTP request prefix is used to interpret the replacements and construction
POST`http://foo.org/bar?a=${a}&b=${b}
     Content-Type: application/json
     X-Credentials: ${credentials}
     { "foo": ${foo},
       "bar": ${bar}}`(myOnReadyStateChangeHandler);
```

Más Info: [MDN Template Strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings)

ej: 
let nombre = "Juan"
console.log('Hola '+ nombre);
console.log(`Hola ${nombre}` sirve pára anidar cuanta info yo quiera) // la tecla de las comillas invertidas esta sobre el enter y se usa apretando alt gr + la tecla

se debe poner el signo peso y las llaves para que sepa que se agragara

