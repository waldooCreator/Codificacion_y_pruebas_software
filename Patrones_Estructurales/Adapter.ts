
interface PasarelaPago {
    pagar(cantidad: number): void;
}


class PayPal {
    hacerPago(monto: number): void {
        console.log(`Pagando $${monto} usando PayPal.`);
    }
}


class Stripe {
    procesarPago(valor: number): void {
        console.log(`Pagando $${valor} usando Stripe.`);
    }
}


class PayPalAdapter implements PasarelaPago {
    private paypal: PayPal;


    constructor(paypal: PayPal) {
        this.paypal = paypal;
    }


    pagar(cantidad: number): void {
        this.paypal.hacerPago(cantidad);
    }
}


class StripeAdapter implements PasarelaPago {
    private stripe: Stripe;


    constructor(stripe: Stripe) {
        this.stripe = stripe;
    }


    pagar(cantidad: number): void {
        this.stripe.procesarPago(cantidad);
    }
}


class TiendaOnline {
    procesarCompra(pasarela: PasarelaPago, monto: number): void {
        pasarela.pagar(monto);
    }
}

function main() {
    const tienda = new TiendaOnline();


    const paypalAdapter = new PayPalAdapter(new PayPal());
    tienda.procesarCompra(paypalAdapter, 150);


    const stripeAdapter = new StripeAdapter(new Stripe());
    tienda.procesarCompra(stripeAdapter, 300);
}


main();