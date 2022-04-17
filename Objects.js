/* Object Literals Mejorados

Ahora los Object Literals se extendedieron para setear el prototipo durante su construcción, atajos para cuando hacemos una asignación de este tipo: `propiedad: propiedad`, definimos métodos, cuando hacemos llamadas a super, y al computar nombres de propiedades en una expresión. Todo esto junto mejora el proceso de diseño orientado a objetos ya que trabaja en sinergía con las mejoras en las clases antes mencionadas.

```js
var obj = {
    // __proto__
    __proto__: theProtoObj, //extiende el prototipo
    propiedad, // atajo para propiedad:propiedad
    // Methods
    toString() {
     // Super calls
     return "d " + super.toString();
    },
    // Computed (dynamic) property names
    [ 'prop_' + (() => 42)() ]: 42
};
```

Más Info: [MDN Grammar and types: Object literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Object_literals)


ej:

obj = {
    propiedad: 1, 
    nombre: 'Juan'
}

function hola(nombre, propiedad) {
    return {
        nombre,
        propiedad
    }
}

let m = hols('Juan',1);
console.log(m);

Estamos generando un objeto y estamos diciendo que 
Si el key y el value son los mismo, puedo dejar solo el key, nombre:nombre  propiedad:propiedad
key: value
key === value
key