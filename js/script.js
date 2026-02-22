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
    const diff = now - startDate;

    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
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


// ========== FUNÇÃO PARA ADICIONAR NOVAS FOTOS ==========
//function addNewPhoto() {
    //const title = prompt('Título da foto:');
    //if (!title) return;
    
    //const date = prompt('Data (DD/MM/AAAA):');
    //if (!date) return;
    
    // Em um site real, você implementaria upload de arquivo aqui
    // Por enquanto, usamos uma imagem de exemplo
    //const newPhoto = {
        //src: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400',
        //title: title,
        //date: date
    //};
    
    //photos.push(newPhoto);
    //renderPhotos();
    
    // Feedback para o usuário
    //alert('Foto adicionada com sucesso! (Simulação - Em um site real você faria upload)');
//}

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