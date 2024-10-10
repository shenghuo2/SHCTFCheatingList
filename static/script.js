document.addEventListener('DOMContentLoaded', function() {
    const rows = document.querySelectorAll('tbody tr');
    const scrollContainer = document.querySelector('.scroll-container');
    const headerRow = document.querySelector('thead tr');
    let delay = 0;
    let rowHeight = 0;
    let headerHeight = headerRow.offsetHeight;

    rows.forEach((row, index) => {
        setTimeout(() => {
            row.classList.remove('hidden');
            row.classList.add('reveal');
            if (rowHeight === 0) {
                rowHeight = row.offsetHeight;
            }
            scrollContainer.style.height = `${headerHeight + 10 + (index + 1) * rowHeight}px`;
        }, delay);
        delay += 800; // 每行之间的延迟时间，可以根据需要调整
    });
});
