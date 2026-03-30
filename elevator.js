
class Elevator{
    constructor(direction = "STAY", floor = 0, moving = false, from = 0, to = 10){
        this.direction = direction
        this.floor = floor
        this.moving = moving
        this.stops = []
        this.rest = 0
    }
    transfer(r){
     
       let rd  = r.from < r.to ? "UP" : "DOWN";
        if(this.stops.length === 0){
          this.stops.push(...[r.from, r.to])
          this.direction = (r.from > r.to) ? "DOWN" : "UP";
          this.moving = true;
          this.preProcess();
        }else if(rd === this.direction && ((this.direction === "UP" && r.from > this.floor) || (this.direction === "DOWN" && r.from < this.floor))){
  
         this.stops = [...this.stops, ...[r.from, r.to]];
         this.stops = (this.direction  === "UP") ? this.stops.sort((a, b) => a - b) : this.stops.sort((a, b) => b - a);
        }else{
         return r;
        }
           return null 
  

        }
  



      
    
    process(){
     let cf = this.floor;
     let stop = (this.stops.length > 0 ) ? this.stops[0] : null;
     if(stop === null){
      this.moving = false
    }else if(cf == stop && this.rest !== 3){
          this.moving = false;
          this.direction = "STAY"
      if(this.rest == 2)this.stops.shift();
        this.rest++
    }else{
       this.moving = true
      this.rest = 0;
     this.direction = (cf < stop) ? "UP" : "DOWN";
    this.floor = (this.direction === "UP") ? this.floor + 1 : this.floor - 1;
     
     }
       
    console.log(this);
     
    }
    preProcess(){
           setInterval(() => {
        
      if(this.stops.length > 0)this.process()
       }, 1000);
    }
}



class Controller{
    constructor(){
     this.floorCount = 10
      this.Elevator = []
      this.requests = []
    }

    request(from , to){
      this.requests.push({from, to});
      this.process();
    }
    process(){
        if(this.requests.length !== 0){
         let  r  = this.requests.shift();
        //  let rd = r.from < r.to ? "UP" : "DOWN";
        //  if(this.Elevator.length  === 0)this.Elevator = [new Elevator()];
                        
        //     //calculate and transfer request to reach out elevator
        //     let i = 0;
        //     while(i < this.Elevator.length){
        //       let ce = this.Elevator[i];
        //       if(ce.request.length === 0){ce.transfer(r); break}
        //       if((rd === ce.direction && r.from > ce.floor)){
        //         ce.transfer(r); break
        //       }


        //       i++
        //     }


          if(this.Elevator.length === 0)this.Elevator = [new Elevator()];
          let e1 = this.Elevator [0];
          console.log(e1.transfer(r));

         
        }
    }


}

let controller = new Controller();

controller.request(1, 5);
controller.request(3, 8);
//controller.request(8, 3);