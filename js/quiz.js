class Quiz {
	constructor (survey) {
		this.survey = survey;
		this.score = 0;
		this.currentQuestion = 0;

		this.indicator = document.querySelector('.quiz__indicator');
		this.info = document.querySelector('.quiz__question');
		this.list = document.querySelector('.quiz__list');
		this.button = document.querySelector('.quiz__button > button');
	}
}
