<?php
// ==== INTERPRETER ====
// Objetivo: Definir una gramática simple y cómo evaluarla.
// Aquí: expresiones aritméticas básicas (Num, Suma, Resta).

interface Exp
{
    public function val(): int;
}

// Hoja: número literal
class Num implements Exp
{
    public function __construct(private int $n) {}
    public function val(): int
    {
        return $this->n;
    }
}

// Nodo: Suma de dos expresiones
class Suma implements Exp
{
    public function __construct(private Exp $a, private Exp $b) {}
    public function val(): int
    {
        return $this->a->val() + $this->b->val();
    }
}

// Nodo: Resta de dos expresiones
class Resta implements Exp
{
    public function __construct(private Exp $a, private Exp $b) {}
    public function val(): int
    {
        return $this->a->val() - $this->b->val();
    }
}

// === Uso: construimos el árbol de la expresión (2 + 3) - 1 ===
// Paso a paso:
// 1) Num(2) y Num(3)
// 2) Suma( Num(2), Num(3) ) => 5
// 3) Resta( [Suma(...)=5], Num(1) ) => 4
$exp = new Resta(new Suma(new Num(2), new Num(3)), new Num(1));

echo $exp->val(); // 4
