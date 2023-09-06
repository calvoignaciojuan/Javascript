//----------------         FOR OF  &  FOR IN   ARRAY
{ 
  //recorre los valores
  const arr = ['a','b','c','d','e','f']
  for (const iterator of arr) {
    console.log(iterator)
  }
  //recorre las llaves(indices)
  for (const iterator in arr){
    console.log(iterator)
  }
  console.log(arr[0])
  console.log(arr["0"])
}

//-----------------        METODOS BASICOS
{
  const arreglo = [0,1,2,3,4,5,6,7,8,9,4];

  // .length 		devuelve la longitud del array.
  console.log('arreglo.length: ', arreglo.length)

  // .push(element) 	agrega elementos al final de array.
  arreglo.push(200)
  console.log('arreglo.push(200): ', arreglo)

  // .pop() 		elimina el ultimo elemento del array.
  const ultimo = arreglo.pop()
  console.log('el ultimo era: ', ultimo)

  // .shift() 		elimina el primer elemento del array.
  const primero = arreglo.shift()
  console.log('el primero era: ', primero)

  // .unshift() 		agrega un elemento al inicio del array
  arreglo.unshift(666)
  console.log('arreglo.unshift(666): ', arreglo)

  // .indexOf(element) 	devuelve la posición de la primera aparicion de  un elemento en el array, si no existe devuelve -1
  const index = arreglo.indexOf(4)
  console.log('arreglo.indexOf(4): ', index)

  // .lastIndexOf(element)	devuelve la posición de la ultima aparicion de  un elemento en el array
  const indexLast = arreglo.lastIndexOf(4)
  console.log('arreglo.lastIndexOf(4): ', indexLast)
  
  // .splice(index,cant)	elimina elementos apartir del index indicado, ej .splice(2,1) elimina el elemento del indice 2.



}

//-----------------            FOREACH
//return undefined (no retorna nada, sirve para hacer algo con cada elemento)
{
  const arreglo1 = [0,1,2,3,4,5,6,7,8,9];
  arreglo1.forEach((element, index, arr) =>{    
    console.log('element',element);
    console.log('index',index);
    console.log('arr',arr);
  });
}

//-----------------            FILTER
//devuelve un nuevo array que contiene solo los elemento donde la funcion callback retorno true
//el largo del array resultado puede ser distinto del del array que se itera
{
  const array = [1,5,7,9,10,3]
  const resultado = array.filter( (element, index, arr) => {
    return element > 3
  })
  console.log(resultado)
}

//---------------------        FIND
//devuelve el primer elemento que retorne true con la funcion callbak
//si ninguno cumple devuelve undefined
{
  const arr = [
    {nombre:'juan',edad:32},
    {nombre:'pepe',edad:30},
    {nombre:'carlos',edad:32}
  ]
  const result = arr.find( (element,index,array) => {
    return element.edad === 32
  })
  console.log(result)
}

//---------------------        FIND INDEX
//devuelve posicion del primer elemento donde el callback retorna true
//si ninguno cumple devuelve -1
{
  const arr = [
    {nombre:'juan',edad:32},
    {nombre:'pepe',edad:30},
    {nombre:'carlos',edad:32}
  ]
  const index = arr.findIndex( (element,index,array) => {
    return element.edad === 32
  })
  console.log(index)
}
//------------------             MAP          
//recorre un array y a cada elemento lo evalua con la funcion callback
//devuelve un nuevo array con los elementos que retorne la funcion callback
//el largo del array resultado es igual al del que se itera
{
  const arreglo = [0,1,2,3,4,5,6,7,8,9];

  const result = arreglo.map((element, index, arr) =>{

      console.log('element',element);
      console.log('index',index);
      // console.log('arr',arr);
      if((element%2)==0){   //devuelve un arreglo con los numeros pares
          return(element);
      }else{
          return(null);
      }   
  });
  console.log(result);
}

//---------------------      REDUCE
{
  const arreglo3 = [0,1,2,3,4,5,6,7,8,9];
  //recorre un array y a cada elemento lo evalua con la funcion callback
  //devuelve un nuevo numero con el valor acumulado de los returns de los callbacks llamados por cada elemento del array
  //array.reduce(callback,inicialValue);

  const acumulado = arreglo3.reduce((acum, element, index, arr)=>{
      return(acum+element);
  },0);
  console.log(acumulado);
}

//---------------------      SOME
//chequea si algun elemento del array cumple con la evaluacion del callback
//return true/false   (true: al menos un elemento retorno a truthy value en el callcback)
{
  const arr = [0,1,2,3,4,5,6,7,null,9];

  const res = arr.some((element,index,array) =>{
      return(element===null);
  });
  console.log(res);
}
//---------------------      EVERY
{
  const arra = [5,4,2,3,4,5,6,7,10,9];
  //chequea si algun todos los elementos del array cumple con la evaluacion del callback
  //return true si el callback retorna true para cada uno de los elementos del array
  const r = arra.every((element,index,array) =>{
      return(element >= 2);
  });

  console.log(r);


  let valor 

  valor?.map((element)=>{
      return true
  })
}


