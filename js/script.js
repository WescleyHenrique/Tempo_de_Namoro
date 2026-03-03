const startDate = new Date('2024-10-05T00:22:10');

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
    {
        src: 'fotos/Fotos_projetos/unnamed.jpg',
        title: 'Nosso casamento',
        date: 'Tá p acontecer ainda'
    },
];

//FUNÇÕES DO CONTADOR 
function updatecontador() {
    const now = new Date();
    
    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();

    
    if (days < 0) {
        months--;
        const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += lastMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    const diff = now - startDate;
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('years').textContent = String(years).padStart(2, '0');
    document.getElementById('months').textContent = String(months).padStart(2, '0');
    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

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

function openTab(tabName) {
    const tabs = document.getElementsByClassName('tab-content');
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active');
    }
    
    const buttons = document.getElementsByClassName('tab-button');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active');
    }
    
    document.getElementById(tabName).classList.add('active');
    
    event.target.classList.add('active');
}

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

document.addEventListener('DOMContentLoaded', function() {
    updatecontador();
    renderPhotos();
    setInterval(updatecontador, 1000);
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
});