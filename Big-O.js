//Linear Time

const data = ['A', 'B', 'C', 'D']
const data2 = [1, 2, 3, 4, 5]

for (let i = 0; i < data2.length; i++ ) {
    console.log(data[j] + data2[i])
}

// Quadratic Time - ex) bubble sort, selection sort, insertion sort
// Nested Loops

for (let j= 0; j < data.length; j++ ) {
    for (let i = 0; i < data2.length; i++ ) {
        console.log(data[j] + data2[i])
        console.log(data[j] + data2[i])
        console.log(data[j] + data2[i])
        console.log(data[j] + data2[i])
    }
}

O(n^2)
// remove constant
// O(n^2 + n) ===> O(n^2)

// Constant Time - ex) Hash tables

const pizza = { 
    'supreme' : 10, 
    'pepperoni' : 8,
    'hawaiian' : 14
}

O(1)


// Logarithmic Time 
// Can't use binary search. Faster than above

O(log n)