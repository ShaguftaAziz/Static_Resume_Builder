document.addEventListener('DOMContentLoaded', function () {
    var buttons = document.querySelectorAll('.toggle-button');
    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            var _a, _b;
            var targetId = button.getAttribute('data-target');
            var section = document.getElementById(targetId);
            if (section) {
                var isHidden = section.classList.contains('hidden');
                section.classList.toggle('hidden', !isHidden);
                button.textContent = isHidden ? "Hide ".concat((_a = section.querySelector('h2')) === null || _a === void 0 ? void 0 : _a.textContent) : "Show ".concat((_b = section.querySelector('h2')) === null || _b === void 0 ? void 0 : _b.textContent);
            }
        });
    });
});
;
