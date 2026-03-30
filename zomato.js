//----- user -----
class User {
    constructor(name, area){
      this.name = name;
      this.id = Date.now();
      this.area = area;
      this.zomato = null;
      this.money = 900; 
    }
    addZomato(zomato){
     this.zomato = zomato;
    }
    activity(){
     let r = this.zomato.search("barfi");
     if(r){
     let id =  this.zomato.placeorder(r, this.id, this.area);
          let payment = new Payment();
          let price = payment.getPrice(id);
         let status =  payment.proceed(price);
            this.money =   this.money - price;
         if(status)console.log("reduce money", price, "customer remaining money is", this.money);

     }
       
    }
    
}

// clock 
class Clock{
  constructor(zomato,  restaurants){
    this.zomato = zomato;
    this.restaurants = restaurants
    this.interval = null
    this.deliveryMans = []
  }
 runEverySecond() {
      this.eventingResturants();
};
eventingResturants = () => {
     this.restaurants.forEach(res => {
      res.working()
     });
     this.deliveryMans.forEach(da => {
      da.preWorking();
     })
}
addDeliveryMan(da){
    this.deliveryMans.push(da);
};

run(){
 this.interval = setInterval(this.runEverySecond.bind(this), 1000);
}
// Run every 1 second (1000 ms)

}


//----- resturant -----
class Resturant{
  constructor(name,area, zomato){
    this.zomato = zomato;
    this.id = Date.now();
    this.area = area,
    this.name = name,
    this.order = new Set(),
    this.items = [];
  }
  insertItems(name, price, time){
    
       let i = new Items(name, price, this.id, time);
        console.log("Restaurant added item", i);
       this.items.push(i);
  }
  placeorder(item){
     this.order.add(item.id);
  }
  working(){
   this.order.forEach(id => {
    let order = this.zomato.orders.get(id);
      order.item.time = order.item.time  - 1;
      console.log("Food ready in ", order.item.time, "sec");
    if(order.item.time == 0){
      order.prepared = true;
      console.log("finally ready for pickup ", order);
      this.zomato.move(id);
      this.order.delete(id);
      console.log(this.zomato.finalToDelivery);
    }
   })
  }
}
//----- items -----
class Items{
  constructor(name,  price, id, time){
    this.name = name,
    this.price = price;
    this.res_id = id;
    this.time =  time
  }
}
//----- order -----
class Order{
  constructor(id,  user_id, item, deliveryLocation, AcceptenceLocation){
    this.id = id,
    this.name = user_id,
    this.item = item,
    this.payment = false,
    this.prepared = false,
    this.delivered = false,
    this.deliveryMan = null,
    this.deliveryManPickup = false,
    this.deliveryManLocation = null,
    this.deliveryLocation = deliveryLocation,
    this.AcceptenceLocation = AcceptenceLocation;
  }
}
//----- zomato -----
class Zomato{
    constructor(){
      this.user = new Map();
      this.res = new Map();
      this.items = [];
      this.orders = new Map();
      this.deliveryMans = new Map();
      this.prepared = [];
      this.finalToDelivery = [];
      
    }
    addResturant(restaurant){
      console.log("Restaurant added to zomato", restaurant);
       this.res.set(restaurant.id, restaurant);
       this.items.push(...restaurant.items);
       restaurant.items = [];
    }
     login(user){
      console.log("user Login in zomato", user);
      let _user = {
        name : user.name,
        area : user.area,
        order : []

      }
        this.user.set(user.id, _user); 
    }
    logout(user){
        this.user.remove(user.id);
    }
    search(name){
      console.log("Search food item with name ", name)
      for(let i = 0; i < this.items.length; i++){
        
        if(name === this.items[i].name){
          console.log("find ", this.items[i].name, " to available.")
           return this.items[i];  
          
        }
      }
      console.log("find", "nothing")
      return null
    }
    placeorder(item, user_id, deliveryLocation){
      console.log("orderplacing", item);
      let AcceptenceLocation = this.res.get(item.res_id).area;
      let id = 1;
     let order = new Order(id,  user_id, item, deliveryLocation, AcceptenceLocation);
     this.orders.set(id, order);
     this.res.get(item.res_id).placeorder(order);
      return id;
    }
    move(id){
      let r = this.orders.get(id);
       this.finalToDelivery.push(r);
       this.orders.delete(id);
    };
    addDelieveryMan(da){
        this.deliveryMans.set(da.id, da);
        this.giveOrder(da.id);
    }
    giveOrder(id){
     if(this.deliveryMans.get(id).order && this.finalToDelivery.length > 0){
     this.deliveryMans.get(id).getOrder(this.finalToDelivery.pop());
     }
    }
   
}
zomato = new Zomato();

//----- payment portal -----
class Payment{
  constructor(){
    this.object = null;
  }
  getPrice(id){
     
       this.object = zomato.orders.get(id);
       if(this.object == null)return "no order found";
       console.log("Asking price", this.object.item.price);
       return this.object.item.price;
    
  }
  proceed(price){
    console.log("paying price", price);
    this.object.payment = true;
    return true;
  }
}

// ----- delivery man -----

class DeliveryMan{
   constructor(area = 0, zomato){
    this.id = Date.now();
    this.zomato = zomato;
    this.area = area;
    this.order = null;
    this.working = false;
     this.channel = [];
   }
   getOrder(order){
       this.order = order;
          
   }
   startWorking(){
    if(!this.order){
      if(this.zomato.finalToDelivery.length > 0){this.order = this.zomato.finalToDelivery.pop();
        this.order.DeliveryMan = this;
        this.working = true;
         this.channel = [this.zomato.res.get(this.order.item.res_id).area, this.order.deliveryLocation];
      }
      
    }else{
      console.log("delivery man at location ", this.area);
     let a  = this.area;
     let r = this.channel[0];
     if(a > r){
       this.area = a - 1;
     }else if(a == r){
      this.channel.shift();
       if(this.channel.length > 0){
        console.log('delivery man pickup food from resturant location', r);
       }else{
        console.log('delivery man at customer location',  r);
        this.order = null;
       }
     }else{
      this.area = a + 1;
     }

    }
   }
   preWorking(){
    //console.log(this.order);
    if(this.working = true)this.startWorking();
   }
}







 let restaurant = new Resturant("haldiram", 9, zomato);
 restaurant.insertItems("namkeen", 100, 6);
 restaurant.insertItems("dal chawal", 200, 8);
 restaurant.insertItems("barfi", 500, 3);
 restaurant.insertItems("snacks", 400, 4);
 zomato.addResturant(restaurant);
 user = new User("harshit", 2)
 zomato.login(user);
user.addZomato(zomato);
user.activity();
let clock = new Clock(zomato, zomato.res);
clock.run();
let da = new DeliveryMan(0, zomato);
zomato.addDelieveryMan(da); 
da.startWorking();
clock.addDeliveryMan(da);