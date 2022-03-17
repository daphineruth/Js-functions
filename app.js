let animal = {
    name: 'dog',
    eat(a,b) {
        console.log(this.name +"is eating" + "" +a + "" +b);
    }
};
let human={
    name :'Bravin'
}

animal.eat(5, 'bones');
/*
animal.eat.apply(human, [5, 'apples']);
animal.eat.call(human, 5, 'apples');
*/

let human_eat = animal.eat.bind(human);
human_eat(5, 'apples');
