#include <iostream>
#include <memory>
using namespace std;

class Estado {
public:
    virtual void manejar() = 0;
    virtual ~Estado() {}
};

class EstadoEncendido : public Estado {
public:
    void manejar() override {
        cout << "El dispositivo está ENCENDIDO" << endl;
    }
};

class EstadoApagado : public Estado {
public:
    void manejar() override {
        cout << "El dispositivo está APAGADO" << endl;
    }
};

class Dispositivo {
    unique_ptr<Estado> estado;
public:
    void setEstado(Estado* e) {
        estado.reset(e);
    }
    void manejar() {
        if (estado) estado->manejar();
        else cout << "Sin estado definido" << endl;
    }
};

int main() {
    Dispositivo d;
    d.setEstado(new EstadoApagado());
    d.manejar();

    d.setEstado(new EstadoEncendido());
    d.manejar();
}