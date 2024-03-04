/**
 * form-validation.js
 * #: 접근 제어자 private
 * 빈 값 및 정규 표현식 검사하는 js
 * #checkFieldNotEmpty(): 'empty' 클래스 필요
 * #checkFieldRegex(): 'regex' 클래스 필요
 */
class FormValidation {
    #form;              // 유효성 감사할 form
    #firstErrorField;   // 유효성 검사 실패한 첫 번째 요소를 저장하기 위한 변수

    // 생성자
    constructor(form) {
        this.#form = form;
        this.#form.onsubmit = this.#handleFormSubmit.bind(this);
    }

    // form 제출 이벤트 처리하는 메서드
    #handleFormSubmit(event) {
        event.preventDefault();     // 기본 제출 이벤트 방지

        this.#firstErrorField = null;   // 필드 초기화
        if (this.#validateForm()) {
            this.#form.submit();
        } else {
            this.#focusFirstErrorField();   // 실패 시 첫 번째 오류 필드에 포커스
        }
    }

    // form 유효성 검사 메서드
    #validateForm() {
        const isNotEmpty = this.#checkFieldsNotEmpty();
        const isValid = this.#checkFieldsRegex();
        return isNotEmpty && isValid;
    }

    // 첫 번째 오류 필드에 포커스를 맞추는 메서드
    #focusFirstErrorField() {
        if (this.#firstErrorField) {
            this.#firstErrorField.focus();
        }
    }

    // 모든 필드가 비어 있지 않은지 검사하는 메서드
    #checkFieldsNotEmpty() {
        let isNotEmpty = true;
        const emptyElements = this.#form.querySelectorAll('.empty');    // 빈 값 확인 대상

        emptyElements.forEach(element => {
            const value = element.value.trim();
            const errorElement = document.querySelector(`#${element.id}-error`);

            if (!value) {
                this.#showErrorMessage(errorElement, `${element.title}을(를) 입력해 주세요.`);
                isNotEmpty = false;
                if (!this.#firstErrorField) {
                    this.#firstErrorField = element;
                }
            } else {
                this.#hideErrorMessage(errorElement);
            }
        });

        return isNotEmpty;
    }

    // 필드 값이 정규 표현식에 부합하는지 검사하는 메서드
    #checkFieldsRegex() {
        let isValid = true;
        const regexElements = this.#form.querySelectorAll('.regex');
        
        regexElements.forEach(element => {
            const value = element.value.trim();
            const errorElement = document.querySelector(`#${element.id}-error`);

            if (!this.#validateFieldValue(element.id, value)) {
                this.#showErrorMessage(errorElement, `${element.title}의 형식이 맞지 않습니다.`);
                isValid = false;
                if (!this.#firstErrorField) {
                    this.#firstErrorField = element;
                }
            }
            else {
                this.#hideErrorMessage(element.id);
            }
        });

        return isValid;
    }

    // 특정 필드의 값을 검증하는 메서드
    #validateFieldValue(id, value) {
        const validator = this.#fieldValidators[id];    // 해당 필드에 대한 검증 함수 가져오기
        return validator ? validator(value) : false;    // 해당 필드에 대한 검증 함수를 실행하여 결과를 반환, 없으면 false 반환
    }

    // 오류 메시지를 표시하는 메서드
    #showErrorMessage(element, message) {
        const id = `${element.id}-message`;
        const errorElement = document.querySelector(`#${id}`);

        if (!errorElement) {
            const messageElement = document.createElement('span');
            messageElement.id = id;
            messageElement.textContent = message;
            element.append(messageElement);
        }
    }

    // 오류 메시지를 숨기는 메서드
    #hideErrorMessage(element) {
        const id = `${element.id}-message`;
        const errorElement = document.querySelector(`#${id}`);

        if (errorElement) {
            errorElement.remove();
        }
    }

    // 필드 검증을 위한 정규 표현식
    #idRegex = /^(?=.*[a-z])(?=.*\d)[a-z\d]{6,15}$/;
    #passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#%^&*])[A-Za-z\d!@#%^&*]{8,20}$/;
    #emailRegExp = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}$/;
    #nameRegExp = /^[가-힣]{2,6}$/;
    #phoneRegExp = /^\d{3}-\d{4}-\d{4}$/;

    // 정규 표현식 검증 함수(객체 리터럴 형식)
    #fieldValidators = {
        id: value => this.#idRegex.test(value),
        password: value => this.#passwordRegExp.test(value),
        email: value => this.#emailRegExp.test(value),
        name: value => this.#nameRegExp.test(value),
        phone: value => this.#phoneRegExp.test(value)
    }
}

let formValidation = document.querySelector('#formValidation');
new FormValidation(formValidation);