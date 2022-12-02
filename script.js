class Cars
{
      constructor(name) // class with constructor and object -
      {
            this.carname = name;
            console.log("I have a " + this.carname +"," + " it is a Mustang");
      }
      info() // Method
      {
            document.write("I have a " + this.carname +"," + " it is a Mustang");
      }

}
//inherited child-class :
class Car extends Cars
{
      info() // Method
      {
            super.info();
            console.log("I have a " + this.carname +"," + " it is a Mustang");
      }
} 
let a = new Car("Ford");
a.info();