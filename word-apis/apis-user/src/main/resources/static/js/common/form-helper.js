/**
 * form-helper.js
 * form 입력과 관련된 도움 함수 제공
 */

/**
 * 암호 입력 필드의 가시성에 대한 토글
 * '.form-password-toggle' 클래스를 가진 필드를 찾아서 요소에 대해 비밀번호 표시 토글 기능을 적용
 */
export function togglePasswordVisibility() {
    // 비밀번호 입력 정보 확인 버튼
    const toggleElements = document.querySelectorAll('.form-password-toggle');

    // 비밀번호를 숨기는 메서드
    const hidePassword = (input, icon) => {
        input.type = 'password';
        icon.classList.replace('bx-show', 'bx-hide');
    }

    // 비밀번호를 표시하는 메서드
    const showPassword = (input, icon) => {
        input.type = 'text';
        icon.classList.replace('bx-hide', 'bx-show');
    }

    // 각 토글 요소에 대해 이벤트를 설정
    toggleElements.forEach(element => {
        const toggleIcon = element.querySelector('i');
        const toggleInput = element.querySelector('input');

        toggleIcon.addEventListener('click', event => {
            event.preventDefault();
            if (toggleInput.type === 'password') {
                showPassword(toggleInput, toggleIcon);
            } else {
                hidePassword(toggleInput, toggleIcon);
            }
        });
    });
}

/**
 * 입력 필드에 한글만 입력 가능
 * '.onlyKorean' 클래스를 가진 필드를 찾아서 요소에 대해 적용
 */
export function onlyKorean() {
    const koreanPattern = /[^ㄱ-힣]/g;
    const onlyKoreans = document.querySelectorAll('.onlyKorean');

    onlyKoreans.forEach(korean => {
        korean.addEventListener('input', function() {
            this.value = this.value.replace(koreanPattern, '');
        });
    });
}

/**
 * 입력 필드에 소문자, 숫자만 입력 가능
 * '.onlyId' 클래스를 가진 필드를 찾아서 요소에 대해 적용
 */
export function onlyAlphaNumber() {
    const idPattern = /[^a-z0-9]/g;
    const onlyIds = document.querySelectorAll('.onlyId');

    onlyIds.forEach(id => {
       id.addEventListener('input', function() {
            this.value = this.value.replace(idPattern, '');
        });
    });
}