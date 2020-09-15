// creating a func that reverse a string
function reverse(str) {
    //check input
    // !str = no input check
    // str.lenght < 2 input less than two
    if (!str || str.length < 2)
    {
        return 'check your string something'
    }
    const backwards = []
    const totalItems = str.length - 1;

    for (let i = totalItems; i >= 0; i--) {       // storing string in reverse order 
        backwards.push(str[i]);             // string to array in reverse order
    }
    
    // print in revese order
    const back_str = backwards.join("");
    console.log(back_str)

    //mt -2 built-in method 
    
}    
function reverse2(str) {
        k = str.split('').reverse().join('')
        console.log(k)

}

const reverse3 = str => str.split('').reverse().join('');

reverse2('twitter - Aditya 0x34')
 
