// Javascript do Menu hamburguer - responsivo: 

// Seleciona o elemento HTML com o id 'hamburguer-menu' e o armazena na variável 'hamburguer';
const hamburguer = document.getElementById('hamburguer-menu');

// Define a função 'toggleMenu' que será executada quando o evento 'click' ou 'touchstart' ocorrer
function toggleMenu(event){

    // Verifica se o evento é do tipo 'touchstart' e, se for, previne o comportamento padrão;
    if(event.type === 'touchstart') event.preventDefault();

    // Seleciona o elemento HTML com a classe 'nav' e o armazena na variável 'nav'
    const nav = document.querySelector('.nav');

    // Adiciona ou remove a classe 'active' do elemento 'nav', alternando o estado do menu;
    nav.classList.toggle('active');

    // Verifica se a classe 'active' está presente no elemento 'nav' e armazena o resultado em 'active'
    const active = nav.classList.contains('active');

    // Define o atributo 'aria-expanded' no elemento do evento para refletir o estado do menu
    event.currentTarget.setAttribute('aria-expanded', active);

    // Define o atributo 'aria-label' no elemento do evento para indicar se o menu está ativado ou desativado
    if (active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
}

// Adiciona um ouvinte de evento 'click' ao elemento 'hamburguer', que chama a função 'toggleMenu'
hamburguer.addEventListener('click', toggleMenu);

// Adiciona um ouvinte de evento 'touchstart' ao elemento 'hamburguer', que também chama a função 'toggleMenu'
hamburguer.addEventListener('touchstart', toggleMenu);








