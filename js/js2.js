const filterBtns = document.querySelectorAll('.filter_btn');
const modalCheckbox = document.getElementById('filterCheckbox');

function applyFilter(filterType) {
    if (modalCheckbox) {
        modalCheckbox.checked = false;
    }

    console.log('Выбран фильтр:', filterType);

    const categories = document.querySelectorAll('.kategorii');
    const sections = document.querySelectorAll('section');
    const allCards = document.querySelectorAll('.kartochki');

    const filterMap = {
        'korean': 'Корейская литература',
        'chinese': 'Китайская литература',
        'japanese': 'Японская литература'
    };

    if (filterMap[filterType]) {
        categories.forEach((category, index) => {
            const section = sections[index];
            if (category.textContent === filterMap[filterType]) {
                category.style.display = 'block';
                if (section) section.style.display = 'grid';
            } else {
                category.style.display = 'none';
                if (section) section.style.display = 'none';
            }
        });
    }
    else if (filterType === 'hits') {
        categories.forEach(category => {
            category.style.display = 'block';
        });
        sections.forEach(section => {
            if (section) section.style.display = 'grid';
        });
        allCards.forEach(card => {
            if (card.querySelector('.hit_badge')) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
        console.log('Показываем Хиты (карточки с hit_badge)');
    }
    else if (filterType === 'new') {
        categories.forEach(category => {
            category.style.display = 'block';
        });
        sections.forEach(section => {
            if (section) section.style.display = 'grid';
        });

        allCards.forEach(card => {
            if (card.querySelector('.badge')) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
        console.log('Показываем Новинки (карточки с badge)');
    }

    if (filterMap[filterType]) {
        allCards.forEach(card => {
            card.style.display = 'block';
        });
    }
}

filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        applyFilter(this.getAttribute('data-filter'));
    });
});

const modalWindow = document.querySelector('.modal_window');
if (modalWindow) {
    modalWindow.addEventListener('click', function(e) {
        if (e.target === this && modalCheckbox) {
            modalCheckbox.checked = false;
        }
    });
}

const filterLabel = document.querySelector('.filter_label');
if (filterLabel) {
    filterLabel.addEventListener('click', function(e) {
        e.preventDefault();
        const checkbox = document.getElementById('filterCheckbox');
        if (checkbox) {
            checkbox.checked = true;
        }
    });
}