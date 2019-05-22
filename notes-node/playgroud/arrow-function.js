let square = x => x*x;

console.log(square(9));

let user = {
    name: 'Bill',
    sayHi (){
        console.log(`Hi. I'm ${this.name}`)
    }
};

user.sayHi();
