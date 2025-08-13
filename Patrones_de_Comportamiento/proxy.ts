interface Documento {
    mostrar(): void;
}


class DocumentoConfidencial implements Documento {
    private contenido: string;

    constructor(contenido: string) {
        this.contenido = contenido;
    }

    mostrar(): void {
        console.log(`Contenido del documento: ${this.contenido}`);
    }
}

class ProxyDocumento implements Documento {
    private documentoReal: DocumentoConfidencial;
    private usuario: string;

    constructor(usuario: string, contenido: string) {
        this.usuario = usuario;
        this.documentoReal = new DocumentoConfidencial(contenido);
    }

    mostrar(): void {
        if (this.usuario === "admin") {
            this.documentoReal.mostrar();
        } else {
            console.log("Acceso denegado: no tienes permisos para ver este documento.");
        }
    }
}

function main4() {
    const documentoAdmin = new ProxyDocumento("admin", "Plan estratégico 2025");
    documentoAdmin.mostrar();

    const documentoUsuario = new ProxyDocumento("invitado", "Plan estratégico 2025");
    documentoUsuario.mostrar(); 
}

main4();
