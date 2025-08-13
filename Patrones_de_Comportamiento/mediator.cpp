#include <iostream>
#include <string>
#include <vector>
using namespace std;

class Colega;
class Mediador {
public:
    virtual void enviar(const string& mensaje, Colega* remitente) = 0;
};

class Colega {
protected:
    Mediador* mediador;
public:
    Colega(Mediador* m) : mediador(m) {}
    virtual void recibir(const string& mensaje) = 0;
};

class MediadorConcreto : public Mediador {
    vector<Colega*> colegas;
public:
    void agregarColega(Colega* c) { colegas.push_back(c); }
    void enviar(const string& mensaje, Colega* remitente) override {
        for (auto c : colegas)
            if (c != remitente) c->recibir(mensaje);
    }
};

class ColegaConcreto : public Colega {
    string nombre;
public:
    ColegaConcreto(Mediador* m, string n) : Colega(m), nombre(n) {}
    void enviar(const string& mensaje) {
        mediador->enviar(nombre + ": " + mensaje, this);
    }
    void recibir(const string& mensaje) override {
        cout << nombre << " recibió: " << mensaje << endl;
    }
};

int main() {
    MediadorConcreto chat;
    ColegaConcreto c1(&chat, "Usuario1");
    ColegaConcreto c2(&chat, "Usuario2");
    ColegaConcreto c3(&chat, "Usuario3");

    chat.agregarColega(&c1);
    chat.agregarColega(&c2);
    chat.agregarColega(&c3);

    c1.enviar("Hola a todos");
    c3.enviar("Hola, Usuario1");
}