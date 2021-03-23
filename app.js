// SECTION Functions

// function definition
let welcomeMessage = "Today is a good day to Robot!"
// if a parameter is given a value it becomes the default if a value is not passed
// this should only be on the last(s) parameters
function greet(name, title = "Your Magesty") {
  let greeting = `Hello ${title} ${name}! ${welcomeMessage}`
  return greeting
}

let n = "joe"
let t = "mr."
// function call
let joeGreeting = greet(n, t)
console.log(joeGreeting)


let members = ['tim', 'jim', 'mary', 'margie', 'ned', 'alicia']
let members2 = [
  { name: 'tim', title: 'mr.' },
  { name: 'jim', title: 'mr.' },
  { name: 'mary', title: 'ms.' },
  { name: 'margie', title: 'dr.' },
  { name: 'ned', title: 'mr.' }
]

for (let i = 0; i < members.length; i++) {
  const member = members[i]
  console.log(greet(member))
}


// ARRAY METHODS

//  forEach (A method to run on every single itteration)
//      for (let i = 0; i < members2.length; i++) {
//        const member = members2[i]
//        console.log(greet(member.name, member.title))
//      }

// array variable followed by method name
//      members2.forEach(function(member){ 
//        console.log(greet(member.name, member.title))
//      })
members2.forEach(member => console.log(greet(member.name, member.title)))

// Find (given an array return the value where the condition is true)
//      let found;
//      for (let i = 0; i < members2.length; i++) {
//        const member = members2[i];
//        if (member.title == 'dr.') {
//          found = member
//          break
//        }
//      }


// if find does not find the value it returns 'undefined'
// let found = members2.find(member => member.title === 'dr.')




// findIndex (find but only returns the index)
// let foundIndex;
// for (let i = 0; i < members2.length; i++) {
//   const member = members2[i];
//   if (member.title == 'dr.') {
//     foundIndex = i
//     break
//   }
// }

// IF findIndex does not find the element it will return -1
//     let foundIndex = members2.findIndex(member => member.title === 'dr.')


// Map (create a new array with all the modifications of a inner function)
// let newArr = []
// for (let i = 0; i < members2.length; i++) {
//   debugger
//   const member = members2[i];
//   let newMember = {
//     name: member.name.toUpperCase(),
//     title: member.title,
//     greeting: greet(member.name, member.title)
//   }
//   newArr.push(newMember)
// }

// let newArr = members2.map(member => { 
//   return { 
//     name: member.name.toUpperCase(), 
//     title: member.title, 
//     greeting: greet(member.name, member.title)
//   } 
// })


// Filter (given an array return a new array of only items that meet the condition)
//      let mrMembers = []
//      for (let i = 0; i < members2.length; i++) {
//        const member = members2[i];
//        if (member.title === 'mr.') {
//          mrMembers.push(member)
//        }
//      }
// 
// let mrMembers = members2.filter(member => member.title == 'mr.')



// Sort (the default is sort alphabetically [EVEN WITH NUMBERS])
//      simple sort, works with strings 
//      members.sort()
// Complex
// members2.sort((a, b) => {
//   var nameA = a.name
//   var nameB = b.name
//   if (nameA < nameB) {
//     return -1;
//   }
//   if (nameA > nameB) {
//     return 1;
//   }

//   // names must be equal
//   return 0;
// })

// indexOf (uses strict equality and therefore will be difficult with refrence types)
members.lastIndexOf('ned')

// Splice (modify an array at a given index)

let fruits = ['orange', 'mango', 'tomato', 'banana', 'kiwi']

fruits.splice(2, 1)


// BONUS String method

// SPLIT (given a string turn it into an array, splitting on provided character)

let str = 'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.'

let sentenceArray = str.split(".")

let wordArray = str.split(' ')

let charArray = str.split('')

let kabobWords = wordArray.join('-')