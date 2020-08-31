// javascript
// Aditya0x34 (https://github.com/Aditya0x34)


class MyArray{
  constructor() {  
    this.length = 0;
    this.data = {};
  }  //O(1)

  get(index) {     //to get store array data with specific index
    return this.data[index]     
  }       //O(1)
  
  push(item) {     // add data on array
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }   //O(1)

  pop() {      // remove last store array data
    const lastItem = this.data[this.length-1]
    delete this.data[this.length-1]
    this.length--;
    return lastItem;
  }    //O(1)

  delete(index) {    // remove specific array data
    const item = this.data[index];
    this.shiftItems(index);

  }  //O(1)

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++)
    {
      this.data[i] = this.data[i+1];
    }
    delete this.data[this.length-1]
    this.length--
  }     //(n)

}



const newArray = new MyArray();
// example -
newArray.push('hello');
newArray.push('AHHHHH');
newArray.push('world')
newArray.push('!')
newArray.delete(1);

console.log(newArray);

// time complexity O(n) linear times

// http://gestyy.com/eeyi7L
