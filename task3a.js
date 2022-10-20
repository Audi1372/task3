let obj=[
    {person:"Name 1",age:"2",company:"Guvi"},
    {person:"Name 2",age:"7",company:"Guvi Geek"},
    {person:"Name 3",age:"10",company:"Guvi Geek Networks"}
 ]
 let data=JSON.stringify(obj)
 let data1=JSON.parse(data)

// ********forloop normal****
 for(let i=0;i<data1.length;i++)
 {
    console.log(data1[i])
 }

// output:
// { person: 'Name 1', age: '2', company: 'Guvi' }
// { person: 'Name 2', age: '7', company: 'Guvi Geek' }
// { person: 'Name 3', age: '10', company: 'Guvi Geek Networks' }

// *****foreach***** */
 data1.forEach(x=>{
    console.log(x)
 })
//  output:
// { person: 'Name 1', age: '2', company: 'Guvi' }
// { person: 'Name 2', age: '7', company: 'Guvi Geek' }
// { person: 'Name 3', age: '10', company: 'Guvi Geek Networks' }


// *****forin****
 for(let i in data1){
    console.log(data1[i])
 }
//  //output:
//  { person: 'Name 1', age: '2', company: 'Guvi' }
// { person: 'Name 2', age: '7', company: 'Guvi Geek' }
// { person: 'Name 3', age: '10', company: 'Guvi Geek Networks' }


// ******for of***********
 for(let j of data1){
  
    console.log(j)
 }
//  output:
//  { person: 'Name 1', age: '2', company: 'Guvi' }
// { person: 'Name 2', age: '7', company: 'Guvi Geek' }
// { person: 'Name 3', age: '10', company: 'Guvi Geek Networks' }