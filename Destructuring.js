/* Destructuring

Las estructuras se pueden desestructurar para poder seleccionar valores
usando patrones de matcheo, con soporte para arreglos y objetos. Esto funciona igual que buscar una propiedad de un objeto `foo['bar']` en el sentido que ambos son `fail-soft`, es decir, que producen un `undefined` cuando algo no se encuentra.

```js
// list matching
var [a, , b] = [1,2,3];

// object matching
var { op: a, lhs: { op: b }, rhs: c }
       = getASTNode()

// object matching shorthand
// binds `op`, `lhs` and `rhs` in scope
var {op, lhs, rhs} = getASTNode()

// Can be used in parameter position
function g({name: x}) {
  console.log(x);
}
g({name: 5})

// Fail-soft destructuring
var [a] = [];
a === undefined;

// Fail-soft destructuring with defaults
var [a = 1] = [];
a === 1;
```

Más Info: [MDN Destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)


ej: 

let nuevoArreglo = [1, 2, 3, 4, 5];
//let a = 1;
//let b = 2;
//let c = 3;
//let d = 4;
//let e = 5; // Para evitar hacer todo eso, mejor se hace:

let [a,b,c,d,e] = nuevoArreglo; //lo que hace es matchear elemento a elemento
let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;

function f9(){
    return [6,7,8,9];
}

let respuesta = f9();// va a devolver [6,7,8,9]
let [z,x,y,w] = f9();
console.log(respuesta);
console.log(z,x,y,w);

ejemplo con objetos
let otroObjeto = {
    nombre: 'Juan',
    edad: 33,
    ciudad: 'Quilpue'
}
let {nombre, edad,ciudad} = otroObjeto;
// nombre - juan
// edad - 33
// ciudad - Quilpue
console.log(nombre,edad,ciudad);

el nombre que le asigno a la variable desde ser el mismo al del objeto
