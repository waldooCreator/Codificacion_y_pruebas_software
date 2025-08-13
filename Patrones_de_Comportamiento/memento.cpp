#include <iostream>
#include <string>
#include <vector>
using namespace std;

class Memento {
    string estado;
public:
    Memento(string e) : estado(e) {}
    string getEstado() const { return estado; } // ← const agregado
};

class Editor {
    string texto;
public:
    void escribir(const string& t) { texto += t; }
    string leer() const { return texto; } // también puede ser const
    Memento guardar() const { return Memento(texto); } // const también
    void restaurar(const Memento& m) { texto = m.getEstado(); }
};

class Historial {
    vector<Memento> estados;
public:
    void agregar(const Memento& m) { estados.push_back(m); }
    Memento obtener(int i) const { return estados[i]; }
};

int main() {
    Editor editor;
    Historial historial;

    editor.escribir("Hola ");
    historial.agregar(editor.guardar());

    editor.escribir("Mundo");
    historial.agregar(editor.guardar());

    cout << "Texto actual: " << editor.leer() << endl;

    editor.restaurar(historial.obtener(0));
    cout << "Texto restaurado: " << editor.leer() << endl;
}