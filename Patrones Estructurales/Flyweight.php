<?php
// ==== FLYWEIGHT ====
// Objetivo: Ahorrar memoria compartiendo el estado repetido (intrínseco).
// Intrínseco: datos que NO cambian entre instancias (textura). Se comparte.
// Extrínseco: datos variables por instancia (posición). No se comparte.

class ModeloArbol
{
    public function __construct(public string $textura) {}
    public function dibujar(int $x, int $y)
    {
        // Usamos el mismo "molde" (textura) para muchos árboles, solo cambia la pos.
        echo "Árbol con textura '{$this->textura}' en ($x,$y)\n";
    }
}

// Fábrica que reutiliza (cachea) modelos por textura
class FabricaModelos
{
    private static array $pool = []; // cache: textura => ModeloArbol

    public static function obtener(string $textura): ModeloArbol
    {
        // Si ya existe, lo reutilizamos; si no, lo creamos UNA vez.
        return self::$pool[$textura] ??= new ModeloArbol($textura);
    }
}

// === Uso: en vez de crear miles de modelos, reutilizo uno ===
$modeloPino = FabricaModelos::obtener('pino.png'); // 1 sola instancia
// Dibujamos el "mismo" árbol en distintas posiciones (extrínseco)
$modeloPino->dibujar(10, 20);
$modeloPino->dibujar(30, 50);
$modeloPino->dibujar(70, 15);

// Si pido otra textura, se crea otro modelo y también se cachea
$modeloRoble = FabricaModelos::obtener('roble.png');
$modeloRoble->dibujar(5, 5);
