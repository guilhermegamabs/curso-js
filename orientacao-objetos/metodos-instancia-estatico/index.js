class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    //Método de Instância
    aumentarVolume() {
        this.volume += 2;
    }

    //Método de Instância
    diminuirVolume() {
        this.volume -= 2;
    }

    // Método Estático
    static trocaPilha() {
        console.log('Ok, vou trocar.')
    }
}

// Instância:
const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
console.log(controle1);

// Estático:
ControleRemoto.trocaPilha();