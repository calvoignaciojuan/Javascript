//definir directamente un objeto
var auto = {
  marca: "Ford",
  modelo: "Fiesta",
  "año": 1987,
  mostrarColor: function() {

      console.log(`marca: ${this.marca} modelo: ${this.modelo}`);
  }
};

//----------------------------------------------------------------------------------------------
//crear una funcion constructora de objetos
function auto(marca,modelo,annio){
  this.marca = marca;
  this.modelo = modelo;
  this.annio = annio;
}

var coleccionAutos = [];
for( var i=0; i<3; i++){
  coleccionAutos.push(new auto(prompt("ingrese marca: "),prompt("ingrese el modelo: "), prompt("ingrese el año: ")));
}


let a = {
  name: "juan",
  lastname: "calvo"
}
let b = { 
  name:'',
  name2: ''
}
// b = a   //both are refering to the same object
// b = {...a} //a new copy (spread operator)


console.log(a)
console.log(b)

b.name = 'pepe' 

console.log(a)
console.log(b)


let pepe = "hola"
{
  let pepe = "chau"
  console.log(pepe)
}


//----------------             FOR  OF(object no es iterable, no funciona)   &  FOR IN   OBJECT (se usaba antes de ES6 ahora no es buena practica, hay que usar hasOwnProperty para asegurarse que la propiedad es del objeto y no del prototipo)
{ 
  const obj = {
    a: 'h',
    b: 'o',
    c: 'l',
    d: 'a'
  }
  // for (const iterator of obj) {
  //   console.log(iterator)
  // }
  //recorre las llaves(indices)
  for (const iterator in obj){
    console.log(iterator)
  }
  console.log(obj["a"])
  console.log(obj.a)
}


//------------      ITERAR OBJETO FORMA CORRECTA DESPUES DE ES6
// Object.keys()     //ES6
// Object.values()   //INTRODUCIDO EN ES8
// Object.entries()  //INTRODUCIDO EN ES8

{
  const obj = {
    a: 'h',
    b: 'o',
    c: 'l',
    d: 'a'
  }

  const keys = Object.keys(obj)
  console.log(keys)

  const values = Object.values(obj)
  console.log(values)

  const entries = Object.entries(obj)   //arreglo de arreglos
  console.log(entries)

  //destructure the array
  for(const [key,value] of entries){
    console.log('key: ', key)
    console.log('value', value)
  }
  
}