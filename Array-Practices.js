var counter = 0;
// 1. Declare an array with more than 5 number of items
console.log(`
${++counter}\)`);
const ele5 = [1, 'John', {age : 18}, ['apple', 'orange'], 12.6, false]
console.log(ele5)

// 2. Find the length of your array
console.log(`
${++counter}\)`);
console.log(ele5.length)

// 3. Get the first item, the middle item and the last item of the array
console.log(`
${++counter}\)`);
console.log(`First item: ${ele5[0]}`)
console.log(`last item : ${ele5[ele5.length-1]}`)
console.log(`Middle item: ${ele5[(ele5.length/2)-1]}`)

// 4. Declare an array called mixedDataTypes, put different data types and in your array
// and the array size should be greater than 5
console.log(`
${++counter}\)`);
const mixedDataTypes = [123, 'John Doe', {no : 18}, ['apple', 'orange', 18], 12.6, false, 17384470410]
console.log(mixedDataTypes)

// 5. Declare an array variable name itCompanies and assign initial values
// Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon.
console.log(`
${++counter}\)`);
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']


// 6. Print the array using console.log()
console.log(`
${++counter}\)`);
console.log(itCompanies)

// 7. Print the number of companies in the array/
console.log(`
${++counter}\)`);
console.log(itCompanies.length)

// 8. Print the first company, middle and last company
console.log(`
${++counter}\)`);
console.log(`First item: ${itCompanies[0]}`)
console.log(`last item : ${itCompanies[itCompanies.length-1]}`)
console.log(`Middle item: ${itCompanies[((itCompanies.length+1)/2)-1]}`)

// 9. Print out each company/
console.log(`
${++counter}\)`);
for(x of itCompanies){
    console.log(x)
}

// 10. Change companies to uppercase and print them out
console.log(`
${++counter}\)`);
for(x of itCompanies){
    console.log(x.toUpperCase())
}

// 11. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
// are big IT companies.
console.log(`
${++counter}\)`);
console.log(`${itCompanies.join(', ')} are big IT companies`)

// 12. Check if a certain company exists in the itCompanies array. 
// If it exist return the company else return a company is not found.
console.log(`
${++counter}\)`);
console.log(itCompanies.indexOf('Samsung') === -1 ? 'a company is not found' : itCompanies[itCompanies.indexOf('Samsung')] )

// 13. Filter out companies which have more than one 'o' without the filter method
console.log(`
${++counter}\)`);
let filteredarr=itCompanies.map((x)=>{
    if(x.match(/oo*/) != null){
        return x
    }
})
console.log(filteredarr.flat())

// 14. Sort the array using sort() method
console.log(`
${++counter}\)`);
console.log(itCompanies.sort()) //

// 15. Reverse the array without reverse method
console.log(`
${++counter}\)`);
let temp;
console.log(`Before: ${itCompanies}`)
for(let i=0 ; i<(itCompanies.length/2)-1 ; i++){
    temp = itCompanies[i];
    itCompanies[i] = itCompanies[itCompanies.length-1];
    itCompanies[itCompanies.length-1] = temp;
}
console.log(`After: ${itCompanies}`)

// 16. Reverse the array using reverse() method
console.log(`
${++counter}\)`);
console.log(itCompanies.reverse())

// 17. Slice out the first 3 companies from the array
console.log(`
${++counter}\)`);
console.log(itCompanies.slice(0,3))

// 18. Slice out the last 3 companies from the array
console.log(`
${++counter}\)`);
console.log(itCompanies.slice(-3,itCompanies.length))

// 19. Slice out the middle IT company or companies from the array
console.log(`
${++counter}\)`);
console.log(itCompanies.slice((itCompanies.length/2)-1, (itCompanies.length/2)))

// 20. Remove the first IT company from the array
console.log(`
${++counter}\)`);
console.log(itCompanies.shift())

// 21. Remove the middle IT company or companies from the array
console.log(`
${++counter}\)`);
console.log(itCompanies.splice((itCompanies.length/2)-1),1);
console.log(itCompanies)

// 22. Remove the last IT company from the array
console.log(`
${++counter}\)`);
console.log(itCompanies.pop())

// 23. Remove all IT company
console.log(`
${++counter}\)`);
console.log(itCompanies.splice(0, itCompanies.length))