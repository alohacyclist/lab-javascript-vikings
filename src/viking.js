// Soldier
class Soldier {
  constructor (health, strength) {
    this.health = health
    this.strength = strength
  }

  attack() {
    return this.strength
  }

  receiveDamage(damage) {
    this.health -= damage
  }
}

// Viking
class Viking extends Soldier {
  constructor (name, health, strength) {
    super (health, strength)
    this.name = name
  }

    receiveDamage(damage) {
      this.health -= damage
      if(this.health > 0) return `${this.name} has received ${damage} points of damage`
      if(this.health < 1) return `${this.name} has died in act of combat`
    }

    battleCry() {
      return `Odin Owns You All!`
    }

  }

// Saxon
class Saxon extends Soldier {
    
  receiveDamage(damage) {
    this.health -= damage
    if(this.health > 0) return `A Saxon has received ${damage} points of damage`
    if(this.health < 1) return `A Saxon has died in combat`
  }

}

// War
class War {
  constructor(){
    this.vikingArmy = []
    this.saxonArmy = []
  } 
  
  
  
  addViking(viking) {
    this.vikingArmy.push(viking)
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon)
  }

  vikingAttack () {
    let saxon = this.saxonArmy[Math.floor(this.saxonArmy.length * Math.random())]
    let viking = this.vikingArmy[Math.floor(this.vikingArmy.length * Math.random())]

    let remainingHealth = saxon.receiveDamage(viking.strength)

    if(saxon.health <= 0) this.saxonArmy.pop()
    return remainingHealth
  }

  saxonAttack() {
    let saxon = this.saxonArmy[Math.floor(this.saxonArmy.length * Math.random())]
    let viking = this.vikingArmy[Math.floor(this.vikingArmy.length * Math.random())]

    let remainingHealth = viking.receiveDamage(saxon.strength)

    if(viking.health <= 0) this.vikingArmy.pop()
    return remainingHealth
  }

  showStatus() {
    if(!this.vikingArmy.length) return `Saxons have fought for their lives and survived another day...`
    if(!this.saxonArmy.length) return `Vikings have won the war of the century!`
    if(this.vikingArmy.length && this.saxonArmy.length) return `Vikings and Saxons are still in the thick of battle.`
    
  }
  // My attack method
  attack(attacker, defender){
    attacker = this.attackerArmy[Math.floor(this.attackerArmy.length * Math.random())]
    defender = this.defenderArmy[Math.floor(this.defenderArmy.length * Math.random())]

    let remainingHealth = defender.receiveDamage(attacker.strength)
    if(defender.health <= 0) this.defenderArmy.pop()
    return remainingHealth
  }
}





// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}

