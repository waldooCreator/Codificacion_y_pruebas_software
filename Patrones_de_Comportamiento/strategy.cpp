#include <iostream>
#include <memory>
using namespace std;

class Estrategia {
public:
    virtual void ejecutar() = 0;
    virtual ~Estrategia() {}
};

class EstrategiaA : public Estrategia {
public:
    void ejecutar() override {
        cout << "Estrategia A ejecutada" << endl;
    }
};

class EstrategiaB : public Estrategia {
public:
    void ejecutar() override {
        cout << "Estrategia B ejecutada" << endl;
    }
};

class Contexto {
    unique_ptr<Estrategia> estrategia;
public:
    void setEstrategia(Estrategia* e) {
        estrategia.reset(e);
    }
    void ejecutar() {
        if (estrategia) estrategia->ejecutar();
        else cout << "No hay estrategia definida" << endl;
    }
};

int main() {
    Contexto ctx;
    ctx.setEstrategia(new EstrategiaA());
    ctx.ejecutar();

    ctx.setEstrategia(new EstrategiaB());
    ctx.ejecutar();
}