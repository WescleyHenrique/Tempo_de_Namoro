// ========== CONFIGURAÇÕES ==========
// ALTERE A DATA DE INÍCIO DO NAMORO AQUI (ano, mês, dia)
const startDate = new Date('2024-10-05T00:22:10');

// ========== FOTOS DE EXEMPLO ==========
// Substitua pelas suas fotos
let photos = [
    {
        src : 'fotos/Fotos_projetos/IMG-20260118-WA0109.jpg',
        title: 'Casamento de Rondinho e Laiana',
        date: 'Jan/2026'
    },
    {
        src: 'fotos/Fotos_projetos/IMG-20251225-WA0040.jpg',
        title: 'Natal 2025',
        date: 'Dez/2025'
    },
    {
        src: 'fotos/Fotos_projetos/IMG_20251013_001814564_PORTRAIT.jpg',
        title: 'Momento juntos',
        date: 'Out/2025'
    },
    {
        src: 'fotos/Fotos_projetos/IMG-20251005-WA0170.jpg',
        title: 'Momento juntos',
        date: 'Out/2025'
    },
    {
        src: 'fotos/Fotos_projetos/IMG-20250824-WA0200.jpg',
        title: 'Chá de bebê de Malice',
        date: 'Ago/2025'
    },
    {
        src: 'fotos/Fotos_projetos/IMG_20250303_172327_673.jpg',
        title: 'Final de semana em Extremox',
        date: 'Mar/2025'
    },
    {
        src: 'fotos/Fotos_projetos/IMG_20250101_000641175.jpg',
        title: 'Ano Novo 2025',
        date: 'Jan/2025'
    },
    {
        src: 'fotos/Fotos_projetos/IMG_20241224_201913_962.webp',
        title: 'Natal 2024',
        date: 'Dez/2024'
    },
    {
        src: 'fotos/Fotos_projetos/IMG-20240613-WA0006.jpg',
        title: 'Dia Especial',
        date: 'Jun/2024'
    },
];

// ========== FUNÇÕES DO CONTADOR ==========
function updatecontador() {
    const now = new Date();
    
    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();

    // Ajuste se o dia atual for menor que o dia de início
    if (days < 0) {
        months--;
        // Pega o último dia do mês anterior para compensar os dias
        const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += lastMonth.getDate();
    }

    // Ajuste se o mês atual for menor que o mês de início
    if (months < 0) {
        years--;
        months += 12;
    }

    // Para horas, minutos e segundos, podemos usar o resto da divisão do tempo total
    const diff = now - startDate;
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    // Atualiza o HTML
    document.getElementById('years').textContent = String(years).padStart(2, '0');
    document.getElementById('months').textContent = String(months).padStart(2, '0');
    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

// ========== FUNÇÕES DAS FOTOS ==========
function renderPhotos() {
    const grid = document.getElementById('photosGrid');
    grid.innerHTML = '';
    
    photos.forEach((photo) => {
        const photoCard = document.createElement('div');
        photoCard.className = 'photo-card';
        photoCard.onclick = () => openPhoto(photo.src);
        
        photoCard.innerHTML = `
            <div class="photo-container">
                <img src="${photo.src}" alt="${photo.title}" loading="lazy">
                <div class="photo-overlay">
                    <div class="photo-title">${photo.title}</div>
                    <div class="photo-date">${photo.date}</div>
                </div>
            </div>
        `;
        
        grid.appendChild(photoCard);
    });
}

// ========== FUNÇÕES DAS ABAS ==========
function openTab(tabName) {
    // Esconder todas as abas
    const tabs = document.getElementsByClassName('tab-content');
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active');
    }
    
    // Remover classe active de todos os botões
    const buttons = document.getElementsByClassName('tab-button');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active');
    }
    
    // Mostrar a aba selecionada
    document.getElementById(tabName).classList.add('active');
    
    // Adicionar classe active ao botão clicado
    event.target.classList.add('active');
}

// ========== FUNÇÕES DO MODAL ==========
function openPhoto(src) {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modalImage');
    modal.classList.add('active');
    modalImg.src = src;
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('active');
}

// ========== INICIALIZAÇÃO ==========
document.addEventListener('DOMContentLoaded', function() {
    // Inicia o contador
    updatecontador();
    renderPhotos();
    setInterval(updatecontador, 1000);
    
    // Fechar modal com tecla ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
});