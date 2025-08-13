<?php
// ==== ITERATOR ====
// Objetivo: Recorrer una colección sin conocer su estructura interna.
// PHP ya tiene interfaces para esto: IteratorAggregate y ArrayIterator.

class Coleccion implements IteratorAggregate
{
    public function __construct(private array $items) {}

    // El cliente solo usa foreach. Por dentro, yo decido cómo iterar.
    public function getIterator(): Traversable
    {
        // Podrías devolver un iterador propio; aquí usamos ArrayIterator por simplicidad.
        return new ArrayIterator($this->items);
    }
}

// === Uso ===
$numeros = new Coleccion([10, 20, 30]);
// El cliente NO sabe si es array, árbol, base de datos, etc.; solo hace foreach.
foreach ($numeros as $n) {
    echo $n . ' '; // 10 20 30
}
