const EventEmitter = require('events');

class Car extends EventEmitter {
    current_speed = 0;
    max_speed = 120;
    is_broke = false;
    Name = "";

    constructor(Car_Name, Max_speed){
        super();
        this.Name = Car_Name;
        this.max_speed = Max_speed;
    }

    Move(){
        
        if(this.is_broke == false){

            if(this.current_speed > this.max_speed){

                
                console.log(`The car ${this.Name} broke down !`);
                this.is_broke = true;

                let trig = getRandomInt(2);

                if(trig > 0){
                    this.emit('engineer1');
                }
                
                else{
                    this.emit('engineer2');
                }
                

            } 

            else{
                
                this.current_speed += getRandomInt(10);
                console.log(this.Name,` : `, this.current_speed ,`km/h`);
            }
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


console.log("GAME started");

Car1 = new Car("Ford", 125);
engineer1 = new Engineer("Vasian");
engineer2 = new Engineer("Kolian");

Car1.on('engineer1', ()=>engineer1.repare(Car1));
Car1.on('engineer2', ()=>engineer2.repare(Car1));

let intervalId = setInterval(Move_Car1, 1000);

function Move_Car1(){
    Car1.Move();
}





