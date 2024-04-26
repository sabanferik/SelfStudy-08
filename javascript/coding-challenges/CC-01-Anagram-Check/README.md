<p>Clarusway<img align="right"
  src="https://secure.meetupstatic.com/photos/event/3/1/b/9/600_488352729.jpeg"  width="15px"></p>

# JS-CC-01 : Anagram Check

**Anagrams** are words or phrases formed by rearranging the letters of another, such as `listen` and `silent` or `triangle` and `integral`.

Write a JavaScript function called areAnagrams that takes two strings as input and returns true if the two strings are anagrams of each other, and false otherwise. 

## Additional Information

 - Two array methods that can help you solve this code challenge are sort() and join().

 >**Sort()** - The sort() method is used to sort the elements of an array in place. By default, the sort() method converts elements into strings and sorts them based on their UTF-16 code units.<br>

 Example:
```js
 let arr = ['b', 'd','c','a']
 console.log(arr.sort())

 //Output ['a', 'b', 'c', 'd']
 
```

 >**join()** - The join() method is used to join the elements of an array into a string. <br>

 ```js
 let arr = ['a', 'b','c','d']
 console.log(arr.join(''))

 //Output abcd
 
```

## Learning Outcomes

At the end of the this coding challenge, students will be able to;

- Analyze a problem, identify and apply programming knowledge for appropriate solution.

- Demonstrate their knowledge of algorithmic design principles by using JavaScript effectively.

## Problem Statement

- Your function should be case-insensitive and ignore spaces and punctuation. 
- It should return true if the input strings have the same set of characters (ignoring order), and false otherwise.

Some anagram examples:

```js
console.log(areAnagrams("listen", "silent")); // Should print true
console.log(areAnagrams("triangle", "integral")); // Should print true
console.log(areAnagrams("debit card", "bad credit")); // Should print true
console.log(areAnagrams("Dormitory", "dirty room")); // Should print true
console.log(areAnagrams("The Morse Code", "Here come dots")); // Should print true
console.log(areAnagrams("Astronomer", "Moon starer")); // Should print true

console.log(areAnagrams("hello", "world")); // Should print false
console.log(areAnagrams("apple", "banana")); // Should print false
console.log(areAnagrams("hello", "holla")); // Should print false
console.log(areAnagrams("race", "racing")); // Should print false
```


<p align="center"> ⌛ <strong>Happy Coding </strong> ✍ </p>
