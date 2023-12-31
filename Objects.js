//---------------------           DECLARAR UN OBJETO
{
  var auto = {
    marca: "Ford",
    modelo: "Fiesta",
    "año": 1987,
    mostrarColor: function() {
        console.log(`marca: ${this.marca} modelo: ${this.modelo}`);
    }
  };
  auto.mostrarColor()

  //SE PUEDE ACCEDER DE 2 MANERAS
  console.log(auto.hola)       //si no existe devuelve undefined
  auto["marca"]               //si no existe devuelve undefined
}

//------------------------      FUNCION CONSTRUCTORA DE OBJETOS
{
  function auto(marca,modelo,annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
  }

  var coleccionAutos = [];
  for( var i=0; i<3; i++){
    coleccionAutos.push(new auto(prompt("ingrese marca: "),prompt("ingrese el modelo: "), prompt("ingrese el año: ")));
  }
}


//-----------    SPREAD OPERATOR - COPIA DE OBJETOS, 
{
  let persona1 = {
    name: "nombre1",
    lastname: "apellido1"
  }
  // let result = a[""] ? 'tiene' : 'no tiene'
  console.log(persona1["name"] )

  let persona2 = { 
    name:'nombre2',
    lastname: 'apellido2'
  }
  // persona1 = persona2   //both are refering to the same object
  // persona1 = {...persona2} //a new copy (spread operator)
  
  // SI TIENE PROPIEDADES EN COMUN PREVALECEN LAS DEL SEGUNDO OBJETO, EL OBJETO RESULTANDO TIENE TODAS LAS PROPIEDADES QUE NO SE REPITEN
  let persona3 = {
    ...persona1,
    ...persona2
  }
  console.log({...persona1})
  console.log(persona3)
}

// -----------------    REST OPERATOR
{

  
}

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


//----------------   FOR  OF(object no es iterable, no funciona)   &  FOR IN   OBJECT (se usaba antes de ES6 ahora no es buena practica,
// hay que usar hasOwnProperty para asegurarse que la propiedad es del objeto y no del prototipo)
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