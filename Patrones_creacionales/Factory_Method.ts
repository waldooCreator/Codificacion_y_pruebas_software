interface Notificacion {
    enviar(mensaje: string): void;
}


class NotificacionEmail implements Notificacion {
    enviar(mensaje: string): void {
        console.log(`Enviando EMAIL: ${mensaje}`);
    }
}


class NotificacionSMS implements Notificacion {
    enviar(mensaje: string): void {
        console.log(`Enviando SMS: ${mensaje}`);
    }
}


abstract class NotificacionFactory {
    abstract crearNotificacion(): Notificacion;


    enviarNotificacion(mensaje: string): void {
        const notificacion = this.crearNotificacion();
        notificacion.enviar(mensaje);
    }
}


class EmailFactory extends NotificacionFactory {
    crearNotificacion(): Notificacion {
        return new NotificacionEmail();
    }
}


class SMSFactory extends NotificacionFactory {
    crearNotificacion(): Notificacion {
        return new NotificacionSMS();
    }
}


function mmain() {
    const emailFactory = new EmailFactory();
    emailFactory.enviarNotificacion("Bienvenido a nuestra plataforma");


    const smsFactory = new SMSFactory();
    smsFactory.enviarNotificacion("Tu código es: 12345");
}


mmain();