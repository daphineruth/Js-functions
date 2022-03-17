//setTimeout

const ingredients = ['olives', 'dates'] 

setTimeout ( (ing1, ing2) => 
console.log(`Here is your pizza with {ing1} and $[ing2]`,3000, 
...ingredients)
);

if (ingredients.includes('dates'))clearTimeout(pizzaTimer);


//setInterval

setInterval(function () {

    const now  = new Date();
    console.log(now);
}, 1000
);