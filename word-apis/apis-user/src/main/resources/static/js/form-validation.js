let formValidation = document.querySelector('#formValidation');

class FormValidation {
    // 접근 제어자 private
    #form;

    #idRegex = /^[a-z0-9]{6,15}$/;
    #passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#%^&*])[A-Za-z\d!@#%^&*]{8,20}$/;
    #emailRegExp = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}$/;
    #nameRegExp = /^[가-힣]{2,6}$/;
    #phoneRegExp = /^\d{3}-\d{4}-\d{4}$/;

    // 객체 리터럴
    #fieldValidators = {
        id: value => this.#idRegex.test(value),
        password: value => this.#passwordRegExp.test(value),
        email: value => this.#emailRegExp.test(value),
        name: value => this.#nameRegExp.test(value),
        phone: value => this.#phoneRegExp.test(value)
    }

    constructor(form) {
        this.#form = form;
        this.#form.onclick = this.#onClick.bind(this);
    }

    #checkFieldsNotEmpty() {
        let isEmpty = true;
        const emptyElements = this.#form.querySelectorAll('.empty');    // 빈 값 확인 대상

        emptyElements.forEach(element => {
            const value = element.value.trim();

            if (!value) {
                isEmpty = false;
            }
        });
    }

    #checkFieldsRegex() {
        const regexElements = this.#form.querySelectorAll('.regex');    // 정규 표현식 확인 대상
        
        // TODO #validateFieldValue 함수 사용
    }

    #validateFieldValue(id, value) {
        const validator = this.#fieldValidators[id];
        return validator ? validator(value) : false;
    }

    #onClick() {
        let isChecked = true;
    }
}

new FormValidation(formValidation);