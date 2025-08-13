<?php
// ==== VISITOR ====
// Objetivo: Añadir operaciones a una jerarquía (Figuras) sin modificar sus clases.
// Las Figuras solo exponen aceptar(Visitante). El Visitante sabe "qué hacer" con cada tipo.

interface Visitante
{
    public function visitarCirculo(Circulo $c);
    public function visitarRect(Rect $r);
}

interface Figura
{
    public function aceptar(Visitante $v);
}

// "Elementos" que NO queremos tocar cada vez que agregamos una operación nueva
class Circulo implements Figura
{
    public function __construct(public float $r) {}
    public function aceptar(Visitante $v)
    {
        $v->visitarCirculo($this);
    }
}

class Rect implements Figura
{
    public function __construct(public float $w, public float $h) {}
    public function aceptar(Visitante $v)
    {
        $v->visitarRect($this);
    }
}

// Visitante concreto: NUEVA operación "calcular área"
class AreaVisitor implements Visitante
{
    public function visitarCirculo(Circulo $c)
    {
        $area = pi() * $c->r * $c->r;
        echo "Área círculo: $area\n";
    }
    public function visitarRect(Rect $r)
    {
        $area = $r->w * $r->h;
        echo "Área rect: $area\n";
    }
}

// === Uso: agregamos la operación sin cambiar Circulo/Rect ===
$figs = [new Circulo(2), new Rect(3, 4)];
$visitor = new AreaVisitor();

foreach ($figs as $f) {
    // Polimorfismo doble: la figura llama al método específico del visitante
    $f->aceptar($visitor);
}
