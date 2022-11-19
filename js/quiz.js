class Quiz {
	constructor (survey) {
		this.survey = survey;
		this.score = 0;
		this.currentQuestion = 0;

		this.indicator = document.querySelector('.quiz__indicator');
		this.info = document.querySelector('.quiz__question');
		this.list = document.querySelector('.quiz__list');
		this.button = document.querySelector('.quiz__button > button');
	};

	render () {
		//Индикатор
		this.indicator.textContent = `${this.currentQuestion + 1}/${this.survey.length}`;
		//Вопрос
		this.info.textContent = this.survey[this.currentQuestion].question;
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
		this.button.textContent = 'Ответить'
	}
}

let ex1 = new Quiz (survey_1);

ex1.render()
