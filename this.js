/* This
 HAce referencia al contexto donde se esta llamando la función
contexto -> es el objeto que esta ejecutando una función en un momento especifico
Binding(Enlazamiento) -> asigna el valor que va tomar "this" cuando se ejecuta la funcion

Tipos de binding : (por orden de invocación)
    1.- Lexical binding (arrow functions)
    2.- New binding (instanciar objetos)
    3.- Explicit binding (invocación indirecta)
    4.- Implicit binding (invocación de metodo)
    5.- Default binding (invocación directa)

5.- Default binding:
    ej:

    function quienSoy(){
        console.log ('Hola, yo soy:', this); // Reemplazar "this" por windows
    }
    quienSoy();

* No usar "this" en las funciones globales, mejor poner windows para referirse al objeto global

4.- Implicit binding -> Se produce cuando invocamos al método de un objeto
    ej:

    const Sacha = {
        nombre: "Sacha",
        saludar: function (){
            console.log('Hola, me llamo ${this.nombre}!');
        }
        hermano: {
            nombre: "Eric",
            saludar: function (){
                console.log('Yo, el hermano, me llamo ${this.nombre}');
            }
        }
    }

    sacha.saludar(); // Hola, me llamo Sacha!
    sacha.hermano.saludar(); // Yo, el hermano, me llamo Eric

 Combinando enlazamientos 4 y 5
 const Sacha = {
        nombre: "Juan",
        twitter: '@JZuniga167'
        saludar: function (){
            console.log('Hola, me llamo ${this.nombre}');
            this.siguemeEnTwitter();
        }
        function siguemeEnTwitter(){
        console.log('sigueme en twitter ${this.twitter}!');
    }
};

Cuando trabajamos con eventos del DOM, "this" por defecto, es el elemento que dispara el evento.

3.- Explicit binding -> Sirve para que nosotros elijamos exactamente que objeto queremos que sea "this" cuando se ejecuta la función, nos permite cambiar el contxto de manera explicita
Se produce cuando hacemos una invocación indirecta
ej: 

const juan = {
    nombre: 'Juan',
    saludar: function (gritando, conDespedida){
        const saludoNormal = 'Hola, me llamo ${this.nombre}!';
        const despedidaNormal = 'Chau!';
  
        const saludo = gritando ?
            saludoNormal.toUpperCase() : saludoNormal;// toUpperCase pone en mayuscula las letras
        const despedida = gritando ?
            despedidaNormal.toUpperCase() : despedidaNormal;
        
         console.log(saludo);
         
         if (conDespedida) {
             console.log(despedida);
         }
    }

};

Para llamar la funcion en otro contexto
function.prototype.call -> un metodo que nos permite invocar una funcion cambiandole el contexto
ej: sacha.saludar.call(pepe,true,true); // HOLA, ME LLAMO PEPE! (al poner true y true hace que se invoque la funcion en gritando y conDespedida)

.apply es muy parecido a .call, el primer parametro queda igual y los otros en forma de array
ej: sacha.saludar.apply(pepe,[true,true]); //

.call y .apply hacen lo mismo, si ya se tiene un array armado es recomendable usar el .apply y lo mas comun es utilizar el .call 

Function.prototype.bind -> un metodo de las funciones que nos retorna una nueva función con el contexto enlazado al objeto que le digamos, nos devuelve una funcion
con el valor de "this" que nosotros le digamos pero no la invoca todavia

ej: para un boton

const juan = {
    nombre: 'Juan',
    saludar: function () {
        console.log('Hola, me llamo ${this.nombre}!');
    }
};

const boton = documnt.getElementaryById('miBoton');
boton.addEventListener('click', juan.saludar.bind(juan));

Una funcion que fue creada con "bind" no puede volver a ser enlazada a otro objeto, se usa tbn para el curring o aplicacion parcial de funciones

2.- New binding expliccion video (link: https://www.youtube.com/watch?v=bS71_W_BDFE&t=3s) min:28
ej: 
function Personal(nombre){
    this.nombre = nombre;
}

const juan = new Persona ('Juan');

Es instanciar un nuevo objeto con la palabra new