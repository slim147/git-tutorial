// const toBinary = function(){
//   const num = parseInt(prompt('Enter a number: ')).toString(2);
//   const check = [...num].filter(s => parseInt(s)).reduce((acc,cur) => Number(acc) + Number(cur));
//   console.log(check)
// }

// const toBinary = function(x){
//  const bin =  x.toString(2).split('').filter(s => parseInt(s)).reduce((acc,cur) => Number(acc) + Number(cur),0);
//  return bin;
// }
// toBinary(151)
// recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
// const dogs = [
//   { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
//   { weight: 8, curFood: 200, owners: ['Matilda'] },
//   { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
//   { weight: 32, curFood: 340, owners: ['Michael'] }
// ];
// dogs.forEach(x => {
//   x.recFood = Math.trunc((x.weight ** .75) * 28)
// });
// // console.log(dogs)
// console.log('**************************************')
// console.log(dogs.find(x => x.owners.includes('Sarah')))
// const ownersEatTooMuch = dogs.filter(x => x.recFood < x.curFood).flatMap(x => x.owners);
// const ownersEatTooLittle = dogs.filter(x => x.recFood > x.curFood).flatMap(x => x.owners);
// console.log('**************************************')
// console.log(ownersEatTooMuch)
// console.log(ownersEatTooLittle)
// const [a,b,c,d,e,f] = ownersEatTooMuch.concat(ownersEatTooLittle);
// console.log(`"${a}","${b}" and "${c}'s" dogs eat too much! and "${d}","${e}" and "${f}'s"dogs eat too little!"`)
// const isOkay = (y) => y.some(x => (x.curFood > x.recFood * 0.90) && x.curFood < (x.recFood * 1.10))
// console.log(isOkay(dogs))
// const isExact = dogs.some(x => x.curFood === x.recFood)
// console.log(isExact);
// const dogExact = dogs.some(x => x => (x.curFood > x.recFood * 0.90) && x.curFood < (x.recFood * 1.10))
// const sortDogs = function(x){
//   let y = x.forEach(z => z.curFood);
//   return y;
// }
// console.log('AAAAAAAAAAAAAAA')
// console.log(sortDogs(dogs))
const date = new Date();
// const format = {
//   day: 'number',
//   month:'long',
//   year: 'number'
// }
// console.log(format)

// const myDate = Intl.dateTimeFormat('en-US',format).format(date)
// const numDays = Date.now(21/12/2020) 
// console.log(date)
// function dateDiffInDays(date2,) {
//     // round to the nearest whole number
//     return Math.round((date2)/(1000*60*60*24*365));
// }
// const  daysDiff=dateDiffInDays(new Date('December 21, 2019 03:24:00'));
// console.log(daysDiff)

// console.log(Math.round(date/(1000 * 60 * 60 * 24 * 365)))
// const amount = Intl.NumberFormat('NGR',{style:'currency',currency:'NGN'}).format(50)
// console.log(amount)
const array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
const sortArray = function(arr){
const unique_values = new Set(arr);
const sortedArray = [];
let n = [];
for(x of [...unique_values].sort((a,b) => a-b)){
  for(y of arr){
    if(x === y){
      n.push(y)
    } 
  }
  if(n.length <= 1){sortedArray.push(n[0])
  }else{sortedArray.push(n)}
 
  n=[];
}
return sortedArray;
}

console.log(sortArray(array))







