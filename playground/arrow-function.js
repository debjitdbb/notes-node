var square = (x) => x*x;

console.log(square(3));

var user = {
	name: 'Debjit',
	sayHi: () =>
	{
		console.log(arguments);
		console.log('Hi. I am ' +this.name);
	},
	sayHiAlt()
	{
		console.log(arguments);
		console.log('Hi. i am '+this.name);
	}
};

user.sayHi(1,2,3);