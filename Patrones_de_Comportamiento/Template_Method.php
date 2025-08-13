<?php
// ==== TEMPLATE METHOD ====
// Imagina que siempre seguimos los mismos pasos para hacer un pago:
// 1) Validar datos
// 2) Cobrar
// 3) Notificar al cliente
//
// La idea es que estos pasos estén definidos en un "molde" (clase base),
// y que las subclases cambien SOLO el paso de "Cobrar".

// Clase base con la secuencia fija
abstract class Pago {
  // Este método define el ORDEN exacto de pasos (plantilla)
  public final function procesar() {
    $this->validar();   // Paso 1: igual para todos
    $this->cobrar();    // Paso 2: lo define cada subclase
    $this->notificar(); // Paso 3: igual para todos
  }

  protected function validar() {
    echo "Validando datos...\n";
  }

  // Paso que las subclases deben implementar
  abstract protected function cobrar();

  protected function notificar() {
    echo "Notificando al cliente\n";
  }
}

// Subclase: pago con tarjeta
class PagoTarjeta extends Pago {
  protected function cobrar() {
    echo "Cobrando con TARJETA\n";
  }
}

// Subclase: pago en efectivo
class PagoEfectivo extends Pago {
  protected function cobrar() {
    echo "Cobrando en EFECTIVO\n";
  }
}

// === Uso ===
echo "-- Pago con Tarjeta --\n";
(new PagoTarjeta())->procesar();

echo "\n-- Pago en Efectivo --\n";
(new PagoEfectivo())->procesar();
