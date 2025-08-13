<?php
// ==== COMMAND ====
// Objetivo: Encapsular acciones como objetos para ejecutarlas y deshacerlas sin acoplar.
// Beneficio: historial de comandos, deshacer/rehacer, programar acciones.

class Luz
{
    private bool $on = false;

    public function encender()
    {
        $this->on = true;
        echo "Luz ON\n";
    }
    public function apagar()
    {
        $this->on = false;
        echo "Luz OFF\n";
    }
}

// Interfaz común de "acción"
interface Comando
{
    public function ejecutar();
    public function deshacer();
}

// Comando concreto: Encender luz
class EncenderLuz implements Comando
{
    public function __construct(private Luz $luz) {}
    public function ejecutar()
    {
        $this->luz->encender();
    }
    public function deshacer()
    {
        $this->luz->apagar();
    }
}

// Invocador: sabe "ejecutar comandos" y mantener historial
class Control
{
    private array $historial = [];

    public function presionar(Comando $c)
    {
        // No conoce detalles de la acción, solo "ejecuta"
        $c->ejecutar();
        $this->historial[] = $c;
    }

    public function deshacer()
    {
        // Recupera el último y llama su deshacer()
        if ($c = array_pop($this->historial)) {
            $c->deshacer();
        }
    }
}

// === Uso ===
$control = new Control();
$cmdEncender = new EncenderLuz(new Luz());

$control->presionar($cmdEncender); // Luz ON (ejecutar)
$control->deshacer(); // Luz OFF (deshacer)
