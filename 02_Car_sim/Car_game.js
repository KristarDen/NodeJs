const EventEmitter = require('events');

class Car extends EventEmitter {
    current_speed = 0;
    max_speed = 120;
    is_broke = false;
    Name = "";

    constructor(Car_Name){
        super();
        this.Name = Car_Name;
    }

    Move(){
        
        if(this.is_broke == false){

            if(this.current_speed > this.max_speed){

                console.log(`\x1b[41m`,`The car ${this.Name} broke down !`);
                this.emit('event');

            }
        }

        else{
            this.current_speed += getRandomInt(10);
            console.log(`${this.Name} : ${this.current_speed} km/h`)
        }
       
    }
}

class Engineer {
    Name = "";

    constructor(Engineer_Name){

        this.Name = Engineer_Name;

    }

    repare(Car_unit){

        Car_unit.current_speed = 0;
        Car_unit.is_broke = false;
        console.log(`Car repeared by ${this.Name}, you can move next`);

    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}



Car1 = new Car("Ford");
Engineer1 = new Engineer("Vasian");

Car1.on('event', Engineer1.repare(Car1));

let intervalId = setInterval(Car1.Move(), 1000);

while(true){}




