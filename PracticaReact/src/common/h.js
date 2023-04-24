const p  = {
    id: "dacaf590-5083-4ac3-bc1d-c951c2d65bae",
    createdA: "2022-11-11T16:51:07.000Z",
    name: "holaaaaaaaaaaaaaaaaaaaa",
    sale: true,
    price: 18181,
    tags: [
      "lifestyle"
    ],
    photo: null
  }
  let {id,createdA,name, tags} = p

  const borrarItemen = function (array,a) {
    for (var i = 0; i < 
      array.length; i++) {
     if (array[i] == a) {
      for (var i2 = i; i2 < array.length - 1; i2++) {
       array[i2] = array[i2 + 1];
      }
      array.length = array.length - 1;
      return;
     }
    }
   };


   var frutas = ['manzana', 'banana', 'pera'];

   borrarItemen(frutas,'banana')
   console.log(frutas)

  let a = '' || 'hola'
