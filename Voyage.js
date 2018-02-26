var Vehicule = function(modele,kilometrage,premium){
  var self= this;
  this.modele = modele;
  this.kilometrage = kilometrage;
  this.voyage = function(newKm){
    if(newKm > 0){
      self.kilometrage += newKm;
    }
  }
  console.log(this.addTrip)
  this.moteur = "v8";
  this.premium = premium;
  this.color = function(){
    if(this.premium){(this.color = "Red",this.moteur = "v12")} else (this.color = "Blue", this.moteur = "v8");
  };
  if (this.premium){ return this.color("Red")} else return this.color("Blue");
};
var car1 = new Vehicule("Ferrari",500, true);
var car2 = new Vehicule("Lambourghini",500, true);
var car3 = new Vehicule("Seat",500, false);
var car4 = new Vehicule("Lexus",500, true);
var car5 = new Vehicule("Citroen",500, false);

car2;
