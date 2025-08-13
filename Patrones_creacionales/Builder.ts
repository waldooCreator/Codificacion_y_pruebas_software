class Pizza {
    constructor(
        private tamano: string,
        private masa: string,
        private quesoExtra?: boolean,
        private ingredientes?: string[],
        private bordeRelleno?: boolean,
    ) {}
}






class PizzaBuilder {


    private tamano: string = '';
    private masa: string = '';
    private quesoExtra?: boolean;
    private ingredientes?: string[];
    private bordeRelleno?: boolean;


    setTamano(tamano: string) {
        this.tamano = tamano;
        return this;
    }


    setMasa(masa: string) {
        this.masa = masa;
        return this;
    }


    setQuesoExtra(quesoExtra: boolean) {
        this.quesoExtra = quesoExtra;
        return this;
    }


    setIngrediente(ingredientes: string[]) {
        this.ingredientes = ingredientes;
        return this;
    }


    setBordeRelleno(bordeRelleno: boolean) {
        this.bordeRelleno = bordeRelleno;
        return this;
    }


    build():Pizza {
        if(!this.tamano || !this.masa) {
            throw new Error("Tamaño y Masa son obligatorios");
        }


        return new Pizza(this.tamano, this.masa, this.quesoExtra, this.ingredientes, this.bordeRelleno);
    }
   
}


function maiin() {
    const miPizza = new PizzaBuilder()
        .setTamano('XL')
        .setMasa('Masa madre')
        .setQuesoExtra(true)
        .setIngrediente(['pepperoni','Tomate'])
        .setBordeRelleno(false)
        .build()


    console.log(miPizza);
}


main()