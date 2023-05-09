// clase equipo ES5
function EquipoEs5 (serial,marca,modelo ){
    this.serial = serial
    this.marca = marca
    this.modelo = modelo
}

// clase equipo ES6
class  EquipoEs6 {
    constructor(serial,marca,modelo){
        this.serial = serial 
        this.marca = marca
        this.modelo = modelo
    }
}

class Teclado extends EquipoEs6 {
    constructor(serial,marca,modelo,  tipo,idioma){
        super(serial,marca,modelo)
        this.tipo   = tipo
        this.idioma = idioma
    }
}

const equipo1 =  new EquipoEs5 ( "345354","Microsoft","MT001");
const equipo2 =  new EquipoEs6 ( "345354","Microsoft","MT001");
const teclado1 = new Teclado ("3333","Ginius","ttt44","inalambrico","español")

console.log (equipo1)
console.log (equipo2)
console.log (teclado1)
