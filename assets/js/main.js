function Calculadora() {
    this.display = document.querySelector('.display');

    this.capturaCLiques = () => {
        
        document.addEventListener('click', e => {
            const el = e.target;

            if (el.classList.contains('btn-num')) {
                this.addNumDisplay(el);
            }

            if (el.classList.contains('btn-clear')) {
                this.clear();
            }

            if (el.classList.contains('btn-del')) {
                this.del();
            }

            if (el.classList.contains('btn-eq')) {
                this.realizaConta();
            }

            this.display.focus();
        })
    }

    

    this.inicia = () => {
        this.capturaCLiques();
        this.capturaEnter();
    }

    this.capturaEnter = () => {
        this.display.addEventListener('keyup', e => {
            if(e.keyCode !== 13) return;
            this.realizaConta();
        })
    }

    this.addNumDisplay = el => {
        this.display.value += el.innerText;
    }

    this.clear = () =>{
        this.display.value = '';
    }

    this.del = () => {
        this.display.value = this.display.value.slice(0, -1);
    }

    this.realizaConta = () => {
        try {
            const conta = eval(this.display.value);
            
            if (!conta) {
                alert("Conta Invalida");
                return;
            }

            this.display.value = conta;
        } catch (e) {
            alert("Conta Invalida");
            return;
        }
    }

}

const calculadorta = new Calculadora();
calculadorta.inicia();