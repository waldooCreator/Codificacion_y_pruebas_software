class Configuracion {
    private static instancia: Configuracion;
    private configuraciones: { [clave: string]: string } = {};


    private constructor() {
        console.log("🛠 Creando configuración por primera vez...");
    }


    public static obtenerInstancia(): Configuracion {
        if (!Configuracion.instancia) {
            Configuracion.instancia = new Configuracion();
        }
        return Configuracion.instancia;
    }


    public setConfig(clave: string, valor: string): void {
        this.configuraciones[clave] = valor;
    }


    public getConfig(clave: string): string | undefined {
        return this.configuraciones[clave];
    }
}


function main2() {
    const config1 = Configuracion.obtenerInstancia();
    config1.setConfig("tema", "oscuro");


    const config2 = Configuracion.obtenerInstancia();
    console.log("Tema actual:", config2.getConfig("tema"));


    console.log("¿Son la misma instancia?", config1 === config2);
}


main2();