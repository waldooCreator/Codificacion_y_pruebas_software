interface Bebida {
    obtenerDescripcion(): string;
    costo(): number;
}


class Cafe implements Bebida {
    obtenerDescripcion(): string {
        return "Café simple";
    }
    costo(): number {
        return 20;
    }
}


abstract class BebidaDecorador implements Bebida {
    protected bebida: Bebida;


    constructor(bebida: Bebida) {
        this.bebida = bebida;
    }


    abstract obtenerDescripcion(): string;
    abstract costo(): number;
}


class Leche extends BebidaDecorador {
    obtenerDescripcion(): string {
        return this.bebida.obtenerDescripcion() + ", leche";
    }
    costo(): number {
        return this.bebida.costo() + 5;
    }
}


class Azucar extends BebidaDecorador {
    obtenerDescripcion(): string {
        return this.bebida.obtenerDescripcion() + ", azúcar";
    }
    costo(): number {
        return this.bebida.costo() + 2;
    }
}


class Chocolate extends BebidaDecorador {
    obtenerDescripcion(): string {
        return this.bebida.obtenerDescripcion() + ", chocolate";
    }
    costo(): number {
        return this.bebida.costo() + 7;
    }
}


function mainn() {
    let bebida: Bebida = new Cafe();


    bebida = new Leche(bebida);
    bebida = new Azucar(bebida);
    bebida = new Chocolate(bebida);


    console.log(`Orden: ${bebida.obtenerDescripcion()}`);
    console.log(`Costo total: $${bebida.costo()}`);
}


mainn();