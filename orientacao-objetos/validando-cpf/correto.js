class ValidaCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        });
    }
    
    geraaNovoCpf() {
        
    }

    valida() {
        if(!this.cpfLimpo) return false;
        if(typeof cpfLimpo !== 'string') return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.isSequencia()) return false;
        
        return 'CHEGUEI AQUI';
    }
    
    isSequencia() {
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
    }
}


const validacpf = new ValidaCPF('070.987.720-03');
console.log(validacpf.valida());