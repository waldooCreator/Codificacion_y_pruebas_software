interface VehiculoPrototype {
    clonar(): VehiculoPrototype;
    mostrar(): void;
}

class Auto implements VehiculoPrototype {
    constructor(
        private marca: string,
        private modelo: string,
        private color: string
    ) {}

    clonar(): VehiculoPrototype {
        return new Auto(this.marca, this.modelo, this.color);
    }

    mostrar(): void {
        console.log(`Auto: ${this.marca} ${this.modelo} - Color: ${this.color}`);
    }
}

function main6() {
    const autoOriginal = new Auto("Toyota", "Corolla", "Rojo");
    autoOriginal.mostrar();

    const autoClonado = autoOriginal.clonar();
    autoClonado.mostrar();

    const autoPersonalizado = new Auto("Toyota", "Corolla", "Negro");
    autoPersonalizado.mostrar();
}

main6();
