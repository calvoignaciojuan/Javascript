



//-----------------            FOREACH

const arreglo1 = [0,1,2,3,4,5,6,7,8,9];
//return undefined (no retorna nada, sirve para hacer algo con cada elemento)
arreglo1.forEach((element,index,arr) =>{

    console.log('element',element);
    console.log('index',index);
    console.log('arr',arr);
});


//------------------             MAP          

const arreglo2 = [0,1,2,3,4,5,6,7,8,9];
//recorre un array y a cada elemento lo evalua con la funcion callback
//devuelve un nuevo array con los elementos que retorne la funcion callback enviada

const result = arreglo2.map((element,index,arr) =>{

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


//---------------------      REDUCE

const arreglo3 = [0,1,2,3,4,5,6,7,8,9];
//recorre un array y a cada elemento lo evalua con la funcion callback
//devuelve un nuevo numero con el valor acumulado de los returns de los callbacks llamados por cada elemento del array
//array.reduce(callback,inicialValue);

const acumulado = arreglo3.reduce((acum,element,index,arr)=>{
    return(acum+element);
},0);
console.log(acumulado);


//---------------------      SOME

const arr = [0,1,2,3,4,5,6,7,null,9];

//chequea si algun elemento del array cumple con la evaluacion del callback
//return true/false   (true: almenos un elemento retorno true en el callcback)
const res = arr.some((element,index,array) =>{
    return(element===null);
});

console.log(res);

//---------------------      EVERY

const arra = [5,4,2,3,4,5,6,7,10,9];
//chequea si algun todos los elementos del array cumple con la evaluacion del callback
//return true si el callback retorna true para cada uno de los elementos del array
const r = arra.every((element,index,array) =>{
    return(element >= 2);
});

console.log(r);