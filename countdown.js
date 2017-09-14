var Countdown = (function() {

	function CD(date) {
		this.date = date;

		this.selectors = {
 			weeks:		'cd-weeks',
 			days:		'cd-days',
 			hours:		'cd-hours',
 			minutes:	'cd-minutes',
 			seconds:	'cd-seconds'
 		};

 		this.elements = {};
 		this.timeVal = {};
 		this.remaining = {};

 		this.timeVal.second = 1000;
		this.timeVal.minute = this.timeVal.second * 60;
		this.timeVal.hour = this.timeVal.minute * 60;
		this.timeVal.day = this.timeVal.hour * 24;
		this.timeVal.week = this.timeVal.day * 7;

		this.convertEndDate();

 		this.init();
	}

	CD.prototype.init = function() {
		this.bindElements();

		this.startTicking();
	}

	CD.prototype.bindElements = function() {
		for (var selector in this.selectors ) {
			this.elements[selector] = document.getElementById(this.selectors[selector]);
		}
	}

	CD.prototype.convertEndDate = function() {
		this.endDate = new Date(this.date);
	}

	CD.prototype.startTicking = function() {
		this.tick();

		this.timeInterval = setInterval(this.tick.bind(this), 1000);
	}

	CD.prototype.tick = function() {
		this.updateTimeDistance();

		//Check if the countdown is over
		if (this.timeDistance < 0) {
			this.stopTicking();

			this.end();

			return;
		}

		this.getRemaining();

		this.writeResult();
	}

	//Calculate the difference between the target time and now
	CD.prototype.updateTimeDistance = function() {
		var now = new Date();

		this.timeDistance = this.endDate - now;
	}

	CD.prototype.getRemaining = function() {
		this.remaining.weeks = Math.floor(this.timeDistance / this.timeVal.week);
		this.remaining.days = Math.floor(this.timeDistance / this.timeVal.day);
		this.remaining.hours = Math.floor((this.timeDistance % this.timeVal.day) / this.timeVal.hour);
		this.remaining.minutes = Math.floor((this.timeDistance % this.timeVal.hour) / this.timeVal.minute);
		this.remaining.seconds = Math.floor((this.timeDistance % this.timeVal.minute) / this.timeVal.second);
	}

	CD.prototype.writeResult = function() {
		for ( var selector in this.remaining ) {

			//Check if the element exists
			if ( this.elements[selector] != null ) {
				this.elements[selector].textContent = leadingZero(this.remaining[selector]);
			}
		}
	}

	CD.prototype.stopTicking = function() {
		clearInterval(this.timeInterval);
	}

	CD.prototype.end = function() {
		//Shout "cdOver" when the countdown reaches 0
		window.dispatchEvent(new Event('cdOver'));
	}

	function leadingZero(number) {
		return number < 10 ? '0' + number : number;
	}

	return CD;
})();
