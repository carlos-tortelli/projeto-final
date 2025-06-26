function toggleMenu() {
            const menu = document.getElementById('menuTamanhoFonte');
            menu.classList.toggle('mostrar-menu');
        }
        
        function mudarTamanhoFonte(multiplicador) {
            
            document.getElementById('menuTamanhoFonte').classList.remove('mostrar-menu');
            
           
            document.body.style.fontSize = (16 * multiplicador) + 'px';
            
           
            localStorage.setItem('tamanhoFonte', multiplicador);
        }
        
       
        window.onload = function() {
            const tamanhoSalvo = localStorage.getItem('tamanhoFonte');
            if (tamanhoSalvo) {
                mudarTamanhoFonte(parseFloat(tamanhoSalvo));
            }
            
           
            window.addEventListener('click', function(e) {
                if (!e.target.matches('.btn-acessibilidade')) {
                    const menu = document.getElementById('menuTamanhoFonte');
                    if (menu.classList.contains('mostrar-menu')) {
                        menu.classList.remove('mostrar-menu');
                    }
                }
            });
        }