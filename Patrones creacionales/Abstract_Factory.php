<?php
// ==== Abstract Factory ====
// Sirve para crear "familias" de objetos que combinan entre sí,
// sin que el código cliente sepa exactamente qué clases se están usando.

// --- Interfaces para los productos ---
interface Silla
{
    public function sentarse(): string;
}
interface Mesa
{
    public function apoyar(): string;
}

// --- Productos concretos de estilo Moderno ---
class SillaModerna implements Silla
{
    public function sentarse(): string
    {
        return 'Silla moderna';
    }
}
class MesaModerna implements Mesa
{
    public function apoyar(): string
    {
        return 'Mesa moderna';
    }
}

// --- Productos concretos de estilo Clásico ---
class SillaClasica implements Silla
{
    public function sentarse(): string
    {
        return 'Silla clásica';
    }
}
class MesaClasica implements Mesa
{
    public function apoyar(): string
    {
        return 'Mesa clásica';
    }
}

// --- Interfaz de la fábrica ---
interface FabricaMuebles
{
    public function crearSilla(): Silla;
    public function crearMesa(): Mesa;
}

// --- Fábricas concretas ---
class FabricaModerna implements FabricaMuebles
{
    public function crearSilla(): Silla
    {
        return new SillaModerna();
    }
    public function crearMesa(): Mesa
    {
        return new MesaModerna();
    }
}
class FabricaClasica implements FabricaMuebles
{
    public function crearSilla(): Silla
    {
        return new SillaClasica();
    }
    public function crearMesa(): Mesa
    {
        return new MesaClasica();
    }
}

// --- Cliente: pide un "estilo" y recibe objetos que combinan ---
function armarSet(FabricaMuebles $f)
{
    echo $f->crearSilla()->sentarse() . ' + ' . $f->crearMesa()->apoyar() . PHP_EOL;
}

// Uso
armarSet(new FabricaModerna()); // Silla moderna + Mesa moderna
armarSet(new FabricaClasica()); // Silla clásica + Mesa clásica
