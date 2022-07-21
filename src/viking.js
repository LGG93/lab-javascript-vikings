
// Soldier
class Soldier  {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    }
    attack(){
        return this.strength;
    }

    receiveDamage(theDamage){
        this.health -= theDamage
    }
}


// Viking

class Viking extends Soldier{
    constructor  (name, health, strength){
    super(health,strength);  
    this.name = name;
}

receiveDamage(theDamage){
    this.health -= theDamage;

    if (this.health >  0){
        
        return `${this.name} has received ${theDamage} points of damage`
    }
    else{
        return`${this.name} has died in act of combat`;
    }
    }
    battleCry(){
        return "Odin Owns You All!";
    }
};

// Saxon
class Saxon extends Soldier {
    receiveDamage(theDamage){
        this.health -= theDamage
        if (this.health >  0){
        
            return `A Saxon has received ${theDamage} points of damage`
        }
        else{
            return`A Saxon has died in combat`;
        }
    }
    
}

// War
class War {
    constructor (){
    this.vikingArmy = [];
    this.saxonArmy = [];

    }

    addViking(VikingObject){
        this.vikingArmy.push(VikingObject)
    }
    addSaxon(SaxonObject){
        this.saxonArmy.push(SaxonObject)
    }
    vikingAttack(){
       let randomIndex = Math.floor(Math.random() * this.saxonArmy.length)
       let randomSaxon = this.saxonArmy[randomIndex]
       randomSaxon.receiveDamage()

       let randomNumber = Math.floor(Math.random() * this.VikingArmy.length);
       let randomViking = this.VikingArmy[randomSaxon]
       randomViking.attack()

       let damage = randomViking.attack() = randomSaxon.receiveDamage();
       return this.randomSaxon - damage;
    }
    saxonAttack(){
        randomViking.receiveDamage(randomSaxon.strength)
        if (randomViking.health === 0){
            return this.vikingArmy.length -1
        }
    }
    showStatus(){
        if (randomNumber == 0){
            return "Vikings have won the war of the century!"
        }
        else if(randomIndex == 0){
            return "Saxons have fought for their lives and survived another day..."
        }
        
    }
}

