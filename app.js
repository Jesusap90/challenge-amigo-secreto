class NombreSelector {
    constructor() {
        this.nombres = [];
        this.nombreInput = document.getElementById("nombreInput");
        this.nombreLista = document.getElementById("nombreLista");
        this.playButton = document.getElementById("playButton");
        this.resultado = document.getElementById("resultado");
    }
        agregarAmigo()
         {
            let input = this.nombreInput.value.trim();
            
            if (!input || !isNaN(input)) {
                alert("Por favor, ingresa un nombre válido.");
                return;
            }
            
            if (this.nombres.length >= 10) {
                alert("Solo se permiten 10 nombres en la lista.");
                return;
            }
            
            this.nombres.push(input);
            this.nombreInput.value = "";
            this.actualizarLista();
            this.verificarPlayButton();
        }
        
        actualizarLista() {
            this.nombreLista.innerHTML = "";
            this.nombres.forEach(nombre => {
                let li = document.createElement("li");
                li.textContent = nombre;
                this.nombreLista.appendChild(li);
            });
        }
        
        verificarPlayButton() {
            this.playButton.disabled = this.nombres.length < 2;
        }
        
        sortearAmigo() {
            let nombreAleatorio = this.nombres[Math.floor(Math.random() * this.nombres.length)];
            this.resultado.textContent = "Nombre seleccionado: " + nombreAleatorio;
        }
    }
    
    const app = new NombreSelector();
    