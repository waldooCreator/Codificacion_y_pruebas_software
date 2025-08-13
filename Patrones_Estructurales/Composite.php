<?php
// ==== COMPOSITE ====
// Objetivo: Tratar "uno" (hoja) y "grupo" (composite) de la MISMA forma.
// En este ejemplo: Item (hoja) y Caja (composite) comparten la interfaz Nodo con precio().

interface Nodo
{
    public function precio(): float; // Todos deben poder responder su precio.
}

// --- Hoja: representa un objeto simple con precio fijo ---
class Item implements Nodo
{
    public function __construct(private string $nombre, private float $p) {}
    public function precio(): float
    {
        // El precio de un item es directo.
        return $this->p;
    }
}

// --- Composite: contiene otros Nodos (Items o más Cajas) ---
class Caja implements Nodo
{
    private array $hijos = []; // Aquí metemos Items o Cajas

    public function add(Nodo $n)
    {
        // Podemos meter cualquier Nodo (polimorfismo): Item o Caja.
        $this->hijos[] = $n;
    }

    public function precio(): float
    {
        // El precio de la caja es la suma del precio de TODOS sus hijos.
        // Aquí está la "magia": no nos importa si cada hijo es Item o Caja,
        // solo sabemos que todo Nodo tiene precio()
        return array_sum(array_map(fn($n) => $n->precio(), $this->hijos));
    }
}

// === Uso: el cliente NO distingue entre un item o una caja ===
$caja1 = new Caja();
$caja1->add(new Item('Mouse', 10));
$caja1->add(new Item('Teclado', 20));

$caja2 = new Caja();
$caja2->add($caja1); // Meto una caja dentro de otra (jerarquía)
$caja2->add(new Item('Pantalla', 100));

echo $caja2->precio(); // 130 (10+20+100) -> misma llamada precio() en ambos casos