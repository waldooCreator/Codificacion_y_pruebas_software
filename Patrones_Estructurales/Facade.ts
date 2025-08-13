class ReproductorDVD {
    encender() { console.log("💿 Reproductor DVD encendido"); }
    reproducir(pelicula: string) { console.log(`▶ Reproduciendo: ${pelicula}`); }
}


class Proyector {
    encender() { console.log("📽 Proyector encendido"); }
    modoPantallaAncha() { console.log("📺 Modo pantalla ancha activado"); }
}


class SistemaSonido {
    encender() { console.log("🔊 Sistema de sonido encendido"); }
    setVolumen(nivel: number) { console.log(`🔊 Volumen ajustado a ${nivel}`); }
}


class CineEnCasaFacade {
    private dvd: ReproductorDVD;
    private proyector: Proyector;
    private sonido: SistemaSonido;


    constructor(dvd: ReproductorDVD, proyector: Proyector, sonido: SistemaSonido) {
        this.dvd = dvd;
        this.proyector = proyector;
        this.sonido = sonido;
    }


    public verPelicula(pelicula: string) {
        console.log("🎬 Preparando para ver la película...");
        this.proyector.encender();
        this.proyector.modoPantallaAncha();
        this.sonido.encender();
        this.sonido.setVolumen(8);
        this.dvd.encender();
        this.dvd.reproducir(pelicula);
    }
}


function mainm() {
    const dvd = new ReproductorDVD();
    const proyector = new Proyector();
    const sonido = new SistemaSonido();


    const cineEnCasa = new CineEnCasaFacade(dvd, proyector, sonido);


    cineEnCasa.verPelicula("Inception");
}


mainm();