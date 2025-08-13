interface Observador {
    actualizar(temperatura: number): void;
}

interface Sujeto {
    agregarObservador(obs: Observador): void;
    removerObservador(obs: Observador): void;
    notificarObservadores(): void;
}

class EstacionMeteorologica implements Sujeto {
    private observadores: Observador[] = [];
    private temperatura: number = 0;


    agregarObservador(obs: Observador): void {
        this.observadores.push(obs);
    }


    removerObservador(obs: Observador): void {
        this.observadores = this.observadores.filter(o => o !== obs);
    }


    setTemperatura(nuevaTemperatura: number): void {
        console.log(`📡 Nueva temperatura registrada: ${nuevaTemperatura}°C`);
        this.temperatura = nuevaTemperatura;
        this.notificarObservadores();
    }


    notificarObservadores(): void {
        for (let obs of this.observadores) {
            obs.actualizar(this.temperatura);
        }
    }
}



class PantallaExterior implements Observador {
    actualizar(temperatura: number): void {
        console.log(`🌞 Pantalla Exterior: La temperatura actual es ${temperatura}°C`);
    }
}

class AppMovil implements Observador {
    actualizar(temperatura: number): void {
        console.log(`📱 App Móvil: Notificación - Temperatura: ${temperatura}°C`);
    }
}


function main3() {
    const estacion = new EstacionMeteorologica();


    const pantalla = new PantallaExterior();
    const app = new AppMovil();


    estacion.agregarObservador(pantalla);
    estacion.agregarObservador(app);


    estacion.setTemperatura(25);
    estacion.setTemperatura(30);
}


main3();