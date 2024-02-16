// Soldier
class Soldier {
    constructor(salud, fuerza) {
        this.salud = salud;
        this.fuerza = fuerza;
    }

    //funcion flecha
    attack = () => `la  fuerza es ${ this.fuerza }`;

    //funcion normal
    set receiveDamage(daño) {
        this.salud -= daño;

        //condicinal ternario
        this.salud < 0 ? 0 : this.salud;
        console.log(this.salud)
    }
}
const soldado = new Soldier(100, 25)
console.log(`Fuerza del soldado: ${soldado.attack()}`);


// Viking
class Viking extends Soldier {
    constructor(nombre, salud, fuerza) {
        super(salud, fuerza);
        this.nombre = nombre;
    }

    receiveDamage(daño) {
        this.salud -= daño;
        //if ternario
        return this.salud > 0 ? `${this.nombre} ha recibido ${daño} puntos de DAÑO y su salud es ${this.salud}` : `${nombre} ha muerto en combate`
    }

    //funcion flecha que devuelve "¡Odin es dueño de todos ustedes!"
    battleCry = () =>  "¡Odin es dueño de todos ustedes!";
}
const vikingo = new Viking("Ragnar", 100, 30);
console.log(`Fuerza del vikingo: ${vikingo.attack()}`);
console.log(`Grio del vikingo: ${vikingo.battleCry()}`);
console.log(`Daño que recibe el vikingo: ${vikingo.receiveDamage(3)}`);


// Saxon
class Saxon extends Soldier{
    constructor(salud, fuerza) {
        super(salud, fuerza);

    }

    receiveDamage = (daño) => {
        this.salud -= daño;
        return this.salud > 0 ? `Sajón ha recibido ${daño} puntos de DAÑO y su salud es ${this.salud}` : `Sajón ha muerto en combate`
        
    }
}
const saxon = new Saxon(100, 15);
console.log(`Fuerza del saxon: ${saxon.attack()}`);
console.log(`Daño que recibe el saxon: ${saxon.receiveDamage(5)}`);


// War
function War() {}