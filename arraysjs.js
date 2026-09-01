// creating an array using array literal
let arr1 = [10, 20, 30, 40, 50]
console.log("arrays-1:", arr1)

let arr2 = ['hello', 'world', 1, 2, 3, true, false, [11, 12, 13], 
           { id: 1, name: 'ojesvi', course: 'b.tech' }]
console.log("arrays-2:", )
for (let i = 0; i < arr2.length; i++) {
    console.log(arr2[i],"type of:",typeof(arr2[i]))
}

// creating an array using new keyword
let arr3 = new Array(10, 20, 30, 40, 50)
console.log("array-3:", arr3)

// accessing the array elements using index
console.log(arr2[3]) //2
console.log(arr2[8].name) // ojesvi
console.log(arr2[7][1]) //12

//modifying the array elements using index
arr2[3] = 100
console.log("modified arrat-2 :", arr2) 

// methods of array
console.log("length of array-2:", arr2.length)
// returns index of first occurrence of 100 in arr2
console.log("indx of 100 in array-2:", arr2.indexOf(100))
//return -1 if element not found in arr2
console.log("index of 1000 in array-2:", arr2.indexOf(1000))

let arr4 = [10, 20, 30, 40, 50]
// adding an element at the end of arr2
arr4.push(200)
console.log("array-4 after adding 200 at the end:", arr4)

// adding an element at the beginning of arr4
arr4.unshift(5)
console.log("array-4 after adding 5 at the beginnbing:", arr4)

// removing an element from the end of arr4
arr4.pop()
console.log("array-r after removing an element from end:", arr4)
// removing an elements from beginning of arr4
arr4.shift()
console.log("array-4 after removing element from beginning:", arr4)

// extracting a portion of arr4 and storing it in arr5
let arr5 = arr4.slice(1,4)
console.log("array-5 after extracting a portion of array-4:", arr5)

//inserting an element at indeeeeeex 2 of arr4
arr4.splice(2,0,25)
console.log("array-4 after inserting 225 at index 2:", arr4)

// removing an element at index 3 of arr4 
arr4.splice(3,2)
console.log("array-4 after removing an element at index 3:", arr4)

// includes( ) method returns true if the array contains a certain elements ,  otherwise false
console.log("Dose array-4 contains 75?", arr4.includes(75))
console.log("Dose array-4 contains 100?", arr4.includes(100))

// join() method joins all the elements of an array into a string
console.log("array-4 elements joined into a string:", arr4.join("-"))

// concat() method is used to merge two or more arrays
//concatenating two arrays using concat() method
let arr7 = [1,2,3]
let arr8 = [4,5,6]
let arr9 = arr7.concat(arr8)//concatenating arr7 and arr8
console.log("Concatenated array:",arr9)

//sorting an array using sort() method
let arr10 = [5,3,8,1,2]
arr10.sort()//sorting the array in ascending order
console.log("Sorted array:",arr10)

//sort in descending order using sort() method
arr10.sort((a,b)=>b-a)//sorting the array in descending order
console.log("Sorted array in descending order:",arr10)

let students = [
    {id: 1, name: 'Alice', age: 20},
    {id: 2, name: 'Bob', age: 22},
    {id: 3, name: 'Charlie', age: 21},
    {id: 4, name: 'David', age: 23},
    {id: 5, name: 'Eve', age: 20}
]
console.log("student array:", students)

students.sort((a,b) => b.id - a.id)
console.log("students array after sorting by id in descending order:", students)

students.sort((a,b) => a.age - b.age)
console.log("students array after sorting by age in ascending order:", students)

//reverse() method is used to reverse the order of the elements in an array
let arr11 = [1, 2, 3, 4, 5]
console.log("array-before reversing:", arr11)
arr11.reverse()
console.log("array-11 after reversing:", arr11)

// map() method is used to create a new array by applying a function to each element of the array
let arr12 = [1, 2, 3, 4, 5]
let arr13 = arr12.map(x => x * 2)
console.log("array-12:", arr12)
console.log("array-13 after multiplying each element of array-12 by 2:", arr13)

//filter() method is used to create a new array with all elements that pass the test implementation
let arr14 = [1, 2, 3, 4, 4]
let arr15 = arr14.filter(x => x % 2 === 0)
console.log()



