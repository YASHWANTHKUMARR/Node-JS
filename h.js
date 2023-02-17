/*const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the first number: ', (num1) => {
  rl.question('Enter the second number: ', (num2) => {
    rl.question('Enter the operator (+, -, *, /): ', (operator) => {
      let result;
      switch (operator) {
        case '+':
          result = parseFloat(num1) + parseFloat(num2);
          break;
        case '-':
          result = parseFloat(num1) - parseFloat(num2);
          break;
        case '*':
          result = parseFloat(num1) * parseFloat(num2);
          break;
        case '/':
          result = parseFloat(num1) / parseFloat(num2);
          break;
        default:
          console.log('Invalid operator');
          rl.close();
          return;
      }
      console.log(`The result is: ${result}`);
      rl.close();
    });
  });

});*/
/*const fs = require('fs');
fs.readFile('${_dirname}/pet.txt',(err,data)=>{
  if(err){
    console.log("Error Happened 🔥")
    return;
  }
  console.log(data.toString());
})*/
//fs.unlink('${_dirname}/pet1.txt',(err)=>{})


/*const fs = require('fs');
const superagent = require('superagent');

 function getData(breed) {
    const url = `https://dog.ceo/api/breed/${breed}/images/random`;
    console.log(url)
     superagent.get(url)
     .then(  res => console.log(breed) )
     .catch();
}

/*
 superagent.get(url)
 .then(  res => console.log(res.body) )
 .catch(console.error);
*/

/*fs.readFile("./hi.txt",'utf8',(err, data) => {
    if (err) throw err;
    const dogs = data.toString().split("\n");
    dogs.map( (dog)=>{
        getData(dog)
    } )    
})*/
const fs = require('fs');
const superagent = require('superagent');

  function getData(breed) {
    const url = `https://dog.ceo/api/breed/${breed}/images/random`;

     superagent.get(url)
    .then(  res => console.log(res.body) )
    .catch( err => console.log(breed) );

      fetch(url)
     .then(res => res.json())
      .then(data =>{
        console.log(breed)
         console.log(data)
     })
}

/*
 superagent.get(url)
 .then(  res => console.log(res.body) )
 .catch(console.error);
*/

fs.readFile("./hi.txt",'utf8',(err, data) => {
    if (err) throw err;
    const dogs = data.toString().split("\n");
    dogs.map( (dog)=>{
        getData(dog)
    } )    
})


