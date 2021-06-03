const EventEmitter = require('events');

class Car extends EventEmitter {
    current_speed = 0;
    max_speed = 120;

    Move(){
        current_speed += getRandomInt(10);

        if(current_speed > this.max_speed){
            console.log("The car broke down !");
            this.emit('event');
        }
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
