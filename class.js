/*Classes

Las clases en ES6 son simplemente syntax sugar sobre el patrón de prototipado de objetos. Tener una forma particular de declarar clases, hace que sea más fácil de usar y mejora la interoperabilidad. Las clases soportan la herencia basada en prototipos, llamadas a super, instance y métodos estáticos y constructores.

```js
class SkinnedMesh extends THREE.Mesh {
  constructor(geometry, materials) {
    super(geometry, materials);

    this.idMatrix = SkinnedMesh.defaultMatrix();
    this.bones = [];
    this.boneMatrices = [];
    //...
  }
  update(camera) {
    //...
    super.update();
  }
  get boneCount() {
    return this.bones.length;
  }
  set matrixType(matrixType) {
    this.idMatrix = SkinnedMesh[matrixType]();
  }
  static defaultMatrix() {
    return new THREE.Matrix4();
  }
}

super -> palabra reservada

ej: 
class Auto {
    constructor (color,motor){
        this.color = color;
        this.motor = motor;
    }
    arranca(){
      console.log('arranco');  // el auto arranca a funcionar
    }
    apagar(){
       console.log('apago') //el auto se apaga
    }
}

class Tesla extends Auto{ 
constructor(color, motor,year){
    super();//Estoy invocando el constructor auto
    this.year = year;
}
}


class Ferrari extends Auto{
    constructor(color,motor,chasis){
        super(color, motor); // Super se pone porque voy extendiendo de Auto, primero se genera Auto y despues Ferrari
        this.chasis = chasis;
    }
}


let Tesla = new Tesla('Rojo','V8',2021);
console.log(Tesla);
Tesla.arranca();
Tesla.apagar();
El Tesla heredo toda las funcionalidades de Auto por lo tanto puedo usar los metodos de Auto

let Ferrari = new Ferrari('Azul','V6',2562462120);
console.log(Ferrari); 
Ferrari no tendra la información de Year ya que no extiende de Tesla sino de Auto y esa información no esta en Auto

extends -> se usa para crear una clase hija de otra,
La palabra clave extends se puede usar para crear una subclase a partir de clases personalizadas, así como sus objetos incorporados.


Más info: [MDN Classes](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes)