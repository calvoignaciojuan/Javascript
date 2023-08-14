//hoisting proceso por el cual javascript eleva declaraciones hacia la parte superior del scope

//var tiene al menos scope de funcion, no de bloque (si se declara dentro de una funcion dentro de un bloque if, el hoisting la saca al scope a nivel funcion)
//solo se eleva la declaracion pero no la inicializacion. por lo que tiene el valor de undefined hasta la linea donde se le asigna el valor

//function declarativas//imports - pasa lo mismo que con var pero no es undefined, directamente se puede acceder como si la funcion haya sido declarada al inicio del bloque

//let y const/funcion anonima no pueden usarse antes de su declaracion

{

  function mifuncion(){    
      var caja4 = "mmmm";
      if(true){
          var caja1= "dato1";       //function scope   (hoisting me lo saca del if en tiempo de ejecucion)
          let caja2= "dato2";      //block scope
          const caja3 = "dato3";   //block scope
      }  
  }  
  console.log(caja4);  
}

// HOISTING FUNCION ANONIMA
{
  console.log(suma(2,3))
  const suma = (a,b)=> {
    return a+b
  }
} // REFERENCE ERROR

//HOISTING FUNCION DECLARATIVA(CON NOMBRE)
{
  console.log(suma(2,3))
  function suma(a,b){
    return a+b
  }
} //FUNCIONA PERFECTO



switch (key) {
  case value:
    
    break;

  default:
    break;
}

function solution(arraySecreto) {
  // Tu código aquí 👈
  let first = arraySecreto.shift()
  console.log(first)
  console.log(typeof(first))
  return (typeof(first) === "string") 
}

console.log(solution(["hola","quetal"]))