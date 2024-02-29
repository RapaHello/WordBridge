document.addEventListener('DOMContentLoaded', () => {
    // 비밀번호 입력 정보 확인 버튼
    let toggleElements = document.querySelectorAll('.form-password-toggle');
    toggleElements.forEach(element => {
        let toggleIcon = element.querySelector('i');
        let toggleInput = element.querySelector('input');

        toggleIcon.addEventListener('mousedown', event => {
            event.preventDefault();

            toggleInput.type = 'text';
            toggleIcon.classList.replace('bx-hide', 'bx-show');
        });

        toggleIcon.addEventListener('mouseup', event => {
            event.preventDefault();

            toggleInput.type = 'password';
            toggleIcon.classList.replace('bx-show', 'bx-hide');
        });
    });
});