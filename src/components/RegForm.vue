<template>
    <form @submit.prevent="handleSubmit">
        <h2>Личные данные</h2>
        <div class="inputGroup" v-bind:class="{formError: $v.user.surname.$error}">
            <label for="surname">Фамилия<span>*</span></label>
            <input type="text" v-model.trim="$v.user.surname.$model" placeholder="Введите фамилию" id="surname">
            <div v-if="$v.user.surname.$error" class="invalid">Введите фамилию</div>
        </div>
        <div class="inputGroup" v-bind:class="{formError: $v.user.name.$error}">
            <label for="name">Имя<span>*</span></label>
            <input type="text" placeholder="Введите имя" id="name" v-model.trim="$v.user.name.$model">
            <div v-if="$v.user.name.$error" class="invalid">Введите имя</div>
        </div>
        <div class="inputGroup">
            <label for="patronymic">Отчество</label>
            <input type="text" placeholder="" id="patronymic">
        </div>
        <div class="inputGroup" v-bind:class="{formError: $v.user.birthDate.$error}">
            <label for="dateOfBirth">Дата рождения<span>*</span></label>
            <input type="date" id="dateOfBirth" v-model.trim="$v.user.birthDate.$model">
            <div v-if="$v.user.birthDate.$error" class="invalid">Введите свою дату рождения</div>
        </div>
        <div class="inputGroup" v-bind:class="{formError: $v.user.phoneNumber.$error}">
            <label for="phoneNumber">Номер телефона<span>*</span></label>
            <input type="tel" id="phoneNumber" v-model.trim="$v.user.phoneNumber.$model">
            <div v-if="$v.user.phoneNumber.$error" class="invalid">Введите телефон в формате +7 xxx xxx xx xx</div>
        </div>
        <div class="inputGroup">
            <label for="gender">Пол</label>
            <input type="text" id="gender" placeholder="Пол">
            <div></div>
        </div>
        <div class="inputGroup" v-bind:class="{formError: $v.user.clientsGroup.$error}">
            <label for="clientsGroup">Группа клиентов<span>*</span></label>
            <select v-model="$v.user.clientsGroup.$model" multiple id="clientsGroup">
                <option>VIP</option>
                <option>Проблемные</option>
                <option>ОМС</option>
            </select>
            <div v-if="$v.user.clientsGroup.$error" class="invalid">Выберите группу клиентов</div>
        </div>
        <div class="inputGroup">
            <label for="attendingDoc">Лечащий врач</label>
            <select id="attendingDoc">
                <option disabled selected>Укажите вашего лечащего врача</option>
                <option>Иванов</option>
                <option>Захаров</option>
                <option>Чернышева</option>
            </select>
            <div></div>
        </div>
        <div class="inputGroup checkboxGroup">
            <label for="smsCheckbox">Не отправлять СМС</label>
            <input type="checkbox" id="smsCheckbox">
        </div>

        <hr>
        <h2>Адрес</h2>
        <div class="inputGroup">
            <label for="addressIndex">Индекс</label>
            <input id="addressIndex" type="text">
            <div></div>
        </div>
        <div class="inputGroup">
            <label for="country">Страна</label>
            <input id="country" type="text">
            <div></div>
        </div>
        <div class="inputGroup">
            <label for="region">Область</label>
            <input id="region" type="text">
            <div></div>
        </div>
        <div class="inputGroup" v-bind:class="{formError: $v.user.city.$error}">
            <label for="city">Город<span>*</span></label>
            <input id="city" type="text" v-model.trim="$v.user.city.$model">
            <div v-if="$v.user.city.$error" class="invalid">Укажите город</div>
        </div>
        <div class="inputGroup">
            <label for="street">Улица</label>
            <input id="street">
            <div></div>
        </div>
        <div class="inputGroup">
            <label for="house">Дом</label>
            <input id="house">
            <div></div>
        </div>
        <hr>
        <h2>Документ, удостоверяющий личность</h2>
        <div class="inputGroup" v-bind:class="{formError: $v.user.typeOfDocs.$error}">
            <label for="typeOfDocs">Тип документа<span>*</span></label>
            <select id="typeOfDocs" name="Docs" v-model="$v.user.typeOfDocs.$model">
                <option value="" disabled selected>Выберите документ</option>
                <option>Паспорт</option>
                <option>Свидетельство о рождении</option>
                <option>Вод.удостоверение</option>
            </select>
            <div></div>
        </div>
        <div class="inputGroup">
            <label for="serialNumber">Серия</label>
            <input type="text" id="serialNumber">
            <div></div>
        </div>
        <div class="inputGroup">
            <label for="passportNumber">Номер</label>
            <input id="passportNumber" type="text">
            <div></div>
        </div>
        <div class="inputGroup">
            <label for="issued">Кем выдан</label>
            <input id="issued">
            <div></div>
        </div>
        <div class="inputGroup" v-bind:class="{formError: $v.user.dateOfIssue.$error}">
            <label for="dateOfIssue">Дата выдачи<span>*</span></label>
            <input id="dateOfIssue" type="date" v-model.trim="$v.user.dateOfIssue.$model">
            <div v-if="$v.user.dateOfIssue.$error" class="invalid">Укажите дату выдачи</div>
        </div>
        <button type="submit">Подтвердить</button>
    </form>
</template>

<script>

  import {required, minLength, maxLength} from "vuelidate/lib/validators";

  export default {
    name: 'RegForm',
    data() {
      return {
        user: {
          name: '',
          surname: '',
          birthDate: '',
          phoneNumber: '+7',
          clientsGroup: '',
          city: '',
          typeOfDocs: '',
          dateOfIssue: '',
        },
      }
    },
    validations: {
      user: {
        name: {
          required,
        },
        surname: {
          required,
        },
        birthDate: {
          required
        },
        phoneNumber: {
          required,
          minLength: minLength(12),
          maxLength: maxLength(12),
        },
        clientsGroup: {
          required
        },
        city: {
          required
        },
        typeOfDocs: {
          required
        },
        dateOfIssue: {
          required
        }
      }

    },
    methods: {
      handleSubmit() {
        console.log(this.$v);
        console.log(this.$v.user.surname.$error)
        this.$v.$touch();
        if (this.$v.$invalid) {
          return
        } else (
          alert('Профиль успешно создан')
        )
      },
    }
  }
</script>

<style lang="scss" scoped>
    form {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid black;
        margin: 0 auto;
        border-radius: 10px;
        width: 320px;
        padding: 20px;
        flex-direction: column;
        font-size: 16px;
    }
    h2 {
        text-align: center;
    }
    .inputGroup {
        display: flex;
        flex-direction: column;
        width: max-content;

        select {
            width: 217px;
        }

        label {
            margin-bottom: 10px;

            span {
                color: #BE4444;
            }
        }

        div {
            font-size: 12px;

        }

        .invalid {
            display: block;

        }
    }

    .formError {
        color: #BE4444;
        animation-name: shakeError;
        animation-fill-mode: forwards;
        animation-duration: .6s;
        animation-timing-function: ease-in-out;
        @keyframes shakeError {
            0% {
                transform: translateX(0);
            }
            15% {
                transform: translateX(0.375rem);
            }
            30% {
                transform: translateX(-0.375rem);
            }
            45% {
                transform: translateX(0.375rem);
            }
            60% {
                transform: translateX(-0.375rem);
            }
            75% {
                transform: translateX(0.375rem);
            }
            90% {
                transform: translateX(-0.375rem);
            }
            100% {
                transform: translateX(0);
            }
        }

        input {
            border-color: #BE4444;
            transition: border .1s ease;
        }
    }

    input {
        margin-bottom: 10px;
        border: 1px solid #C3C3C5;
        width: 217px;
        height: 33px;
        box-sizing: border-box;
        padding: 5px;
        border-radius: 5px;
    }

    button {
        width: 150px;
        height: 40px;
    }

    .checkboxGroup {
        width: 217px;
        font-size: 12px;
        flex-direction: row;
        justify-content: space-between;

        input {

        }
    }
    @media screen and (max-width: 600px) {
        form {
            width: 100%;
        }
    }
</style>