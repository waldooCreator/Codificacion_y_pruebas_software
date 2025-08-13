#include <iostream>
using namespace std;

class Manejador {
protected:
    Manejador* siguiente = nullptr;
public:
    virtual void manejar(int nivel) {
        if (siguiente) siguiente->manejar(nivel);
    }
    void setSiguiente(Manejador* sig) {
        siguiente = sig;
    }
};

class ManejadorBajo : public Manejador {
public:
    void manejar(int nivel) override {
        if (nivel <= 1)
            cout << "ManejadorBajo procesó el nivel " << nivel << endl;
        else if (siguiente) siguiente->manejar(nivel);
    }
};

class ManejadorMedio : public Manejador {
public:
    void manejar(int nivel) override {
        if (nivel == 2)
            cout << "ManejadorMedio procesó el nivel " << nivel << endl;
        else if (siguiente) siguiente->manejar(nivel);
    }
};

class ManejadorAlto : public Manejador {
public:
    void manejar(int nivel) override {
        if (nivel >= 3)
            cout << "ManejadorAlto procesó el nivel " << nivel << endl;
        else if (siguiente) siguiente->manejar(nivel);
    }
};

int main() {
    ManejadorBajo bajo;
    ManejadorMedio medio;
    ManejadorAlto alto;

    bajo.setSiguiente(&medio);
    medio.setSiguiente(&alto);

    bajo.manejar(1);
    bajo.manejar(2);
    bajo.manejar(3);
}