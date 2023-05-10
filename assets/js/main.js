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
        this.marca  = marca
        this.modelo = modelo
        console.log("Equipo es instanciado")
    }
    mostrarDatosEquipo(){
    console.log (`Este equipo serial ${this.serial} marca ${this.marca} modelo ${this.modelo} `);
    }
}


class Teclado extends EquipoEs6 {
    constructor(serial,marca,modelo,  tipo,idioma){
        super(serial,marca,modelo)
        this.tipo   = tipo
        this.idioma = idioma
    }
}

class Disco extends EquipoEs6 {
    constructor(serial,marca,modelo,  tipoDisco, capacidad) {
        super(serial,marca,modelo)
        this.tipoDisco  = tipoDisco
        this.capacidad  = capacidad
    }
    mostrarDatosEquipo(){
        console.log (`Este disco ${this.tipoDisco} capacidad ${this.capacidad}  `);
        }
    }

const equipo1 =  new EquipoEs5 ( "345354","Microsoft","MT001");
const equipo2 =  new EquipoEs6 ( "345354","Microsoft","MT001");
const equipo3 =  new EquipoEs6 ( "21212","Lenovo","NT024");
const teclado1 = new Teclado ("3333","Ginius","ttt44","inalambrico","español")
const disco1 = new Disco ("4444","Seagate","TDTS","SSD","1TB")

//console.log (equipo1)
//console.log (equipo2)
//console.log (teclado1)
console.log (disco1)
disco1.mostrarDatosEquipo()

equipo2.mostrarDatosEquipo();
equipo3.mostrarDatosEquipo();

teclado1.mostrarDatosEquipo()




/******************      Ejemplo Generadores  **************************/

 const generador  = mostrarInformacion()

 setTimeout(() => {
    generador.next(); 
 }, 2000 );

 setTimeout(() => {
    generador.next(); 
 }, 5000 );

 setTimeout(() => {
    generador.next(); 
 }, 8000 );


function* mostrarInformacion() {
    yield console.log ("primer Mensaje")

    console.log("mensaje intermedio")
    yield console.log ("SEGUNDO Mensaje")
    yield console.log ("tercer Mensaje")
} 
