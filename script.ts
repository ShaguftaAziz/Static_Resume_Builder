document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.toggle-button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = (button as HTMLButtonElement).getAttribute('data-target');
            const section = document.getElementById(targetId!);

            if (section) {
                const isHidden = section.classList.contains('hidden');
                section.classList.toggle('hidden', !isHidden);
                button.textContent = isHidden ? `Hide ${section.querySelector('h2')?.textContent}` : `Show ${section.querySelector('h2')?.textContent}`;
            }
        });
    });
});
;


