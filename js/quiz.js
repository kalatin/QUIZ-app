class Quiz {
	constructor (survey) {
		this.survey = survey;
		this.score = 0;
		this.currentQuestion = 0;

		this.indicator = document.querySelector('.quiz__indicator');
		this.info = document.querySelector('.quiz__question');
		this.image = document.querySelector('img');
		this.list = document.querySelector('.quiz__list');
		this.button = document.querySelector('.quiz__button > button');
	};

	render () {

		//Если это последний вопрос
		if(this.currentQuestion == this.survey.length){
			//Индикатор
			this.indicator.textContent = `Тест завершен`;
			//Сколько ответов
			this.info.textContent = `Вы ответили правильно на ${this.score} из ${this.survey.length} вопросов`;
			//Картинка убрать
			this.image.src = '';
			//Очистка листа
			this.list.innerHTML = '';
			//Кнопка ещё раз
			this.button.outerHTML = `<button onclick = "location.reload()">Пройти ещё раз</button>`;
		} 

		//Если нет
		else {
			//Индикатор
			this.indicator.textContent = `${this.currentQuestion + 1}/${this.survey.length}`;
			//Вопрос
			this.info.textContent = this.survey[this.currentQuestion].question;

			//Картинка
			this.image.src = `image/${this.survey[this.currentQuestion].image}`;
			//Ответы
			for (let i = 0; i < this.survey[this.currentQuestion].answers.length; i++) {
				let option = document.createElement('div');
				option.classList.add('quiz__option');
				option.innerHTML = `<label><input type="radio" name="ex1" value="${i + 1}"><p>${this.survey[this.currentQuestion].answers[i]}</p></label>`;
				this.list.insertAdjacentElement(
					'beforeend',
					option
				)
			};
			this.list.querySelectorAll('label').forEach(item =>{ 
				item.addEventListener('click', () =>{
					if (item.querySelector('input').checked) {
						this.list.querySelectorAll('label').forEach(el=>{ el.classList.remove('active'); });
						item.classList.add('active')
					}
				})
			})
			//Кнопка
			this.button.textContent = 'Ответить';
			this.button.addEventListener('click',() => {
				this.checkQuestion() 
			})
		}
		
	};
	
	checkQuestion () {
		//Выбран ли ответ
		let checkAns = this.list.querySelector('input[type="radio"]:checked');
		//Не выбран
		if(!checkAns) {
			return
		}
		//Выбран
		else {
			//Проверяем правильный ли ответ
			if(checkAns.value == this.survey[this.currentQuestion].correct) {
				this.score++;
			}
			//Переходим к следующему вопросу
			this.list.textContent = '';
			this.currentQuestion += 1;
			this.render()
		}
	}
}

let ex1 = new Quiz (survey_1);

window.addEventListener('DOMContentLoaded',() => {
	ex1.render();
});
