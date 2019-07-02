import React, { Component } from "react";
import Button from "./buttons";
import "./App.css";
import Wrapper from "./wrapper";

class App extends Component {
	state = {
		hours: 0,
		minutes: 0,
		seconds: 0,
		timer: 3595
	};

	countDownInterval = 0;

	addTime = () => {
		let newTime = this.state.timer + 1;
		let newSecond = (this.state.timer % 60) + 1;
		console.log(this.state.seconds);
		if (newSecond == 60) {
			newSecond = 0;
		}

		let newMinute = Math.floor(this.state.timer / 60);
		let newHour = Math.floor(this.state.timer / 3600);

		this.setState({
			timer: newTime,
			seconds: newSecond,
			minutes: newMinute,
			hours: newHour
		});
	};

	startTimer = () => {
		clearInterval(this.countDownInterval);
		this.countDownInterval = setInterval(this.addTime, 1000);
	};

	stopTimer = () => {
		clearInterval(this.countDownInterval);
	};

	resetTimer = () => {
		clearInterval(this.countDownInterval);
		this.setState({
			timer: 0,
			seconds: 0,
			minutes: 0,
			hours: 0
		});
	};

	render() {
		const { hours } = this.state;
		const { seconds } = this.state;
		const { minutes } = this.state;
		const { timer } = this.state;
		return (
			<div className="App">
				<Wrapper>
					<p> Hours: {hours} |</p>
					<p> Minutes: {minutes} |</p>
					<p> Seconds: {seconds} |</p>
					<p> Timer: {timer} </p>
					<Button clickHandler={this.startTimer} name={"Start Timer"} />
					<Button clickHandler={this.stopTimer} name={"Stop Timer"} />
					<Button clickHandler={this.resetTimer} name={"Reset"} />
				</Wrapper>
			</div>
		);
	}
}

export default App;
