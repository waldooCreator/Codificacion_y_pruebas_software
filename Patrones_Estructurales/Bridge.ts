interface Dispositivo {
    encender(): void;
    apagar(): void;
    establecerVolumen(volumen: number): void;
}



class Televisor implements Dispositivo {
    encender(): void {
        console.log("📺 Televisor encendido");
    }
    apagar(): void {
        console.log("📺 Televisor apagado");
    }
    establecerVolumen(volumen: number): void {
        console.log(`📺 Volumen del televisor: ${volumen}`);
    }
}


class Radio implements Dispositivo {
    encender(): void {
        console.log("📻 Radio encendida");
    }
    apagar(): void {
        console.log("📻 Radio apagada");
    }
    establecerVolumen(volumen: number): void {
        console.log(`📻 Volumen de la radio: ${volumen}`);
    }
}



class ControlRemoto {
    protected dispositivo: Dispositivo;
    constructor(dispositivo: Dispositivo) {
        this.dispositivo = dispositivo;
    }


    encender(): void {
        this.dispositivo.encender();
    }
    apagar(): void {
        this.dispositivo.apagar();
    }
}


class ControlRemotoAvanzado extends ControlRemoto {
    subirVolumen(): void {
        console.log("🔼 Subiendo volumen...");
        this.dispositivo.establecerVolumen(10);
    }
    bajarVolumen(): void {
        console.log("🔽 Bajando volumen...");
        this.dispositivo.establecerVolumen(3);
    }
}



function main1() {
    const tv = new Televisor();
    const radio = new Radio();


    const controlTv = new ControlRemotoAvanzado(tv);
    const controlRadio = new ControlRemotoAvanzado(radio);


    console.log("=== Controlando Televisor ===");
    controlTv.encender();
    controlTv.subirVolumen();
    controlTv.apagar();


    console.log("\n=== Controlando Radio ===");
    controlRadio.encender();
    controlRadio.bajarVolumen();
    controlRadio.apagar();
}


main1();