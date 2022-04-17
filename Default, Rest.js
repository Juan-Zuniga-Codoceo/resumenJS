/* Default + Rest + Spread

Las declaraciones de funciones pueden tener argumentos que defaultean a  un valor si no son declarados. También se puede transformar un arreglo en argumentos consecutivos. Y al reves, o sea podemos bindear los últimos elementos de los argumentos como si fuera un sólo arreglo.

```js
function f(x, y=12) {
  // y is 12 if not passed (or passed as undefined)
  return x + y;
}
f(3) == 15
```

```js
function f(x, ...y) { // significa que te pueden venir n cantidad de elementos y van a llegar en formato de arreglo (...)

  // y is an Array
  return x * y.length;
}
f(3, "hello", true) == 6
```

```js
function f(x, y, z) {
  return x + y + z;
}
// Pass each elem of array as argument
f(...[1,2,3]) == 6
```

Más Info: [Default parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters), [Rest parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters), [Spread Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator)
