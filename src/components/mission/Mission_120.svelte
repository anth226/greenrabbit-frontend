<script>
	import Character2 from '../../../static/assets/mission/character2.png';
	import btnFailed from '../../../static/assets/mission/btn_failed.png';
	import Ellipse from '../../../static/assets/mission/Ellipse.png';
	import expText from '../../../static/assets/mission/exp_text.png';
	import ellipseImg from '../../../static/assets/mission/eclipse_img.png';
	import flower30 from '../../../static/assets/mission/flower30.png';
	import Injured from '../../../static/assets/mission/injured.png';
</script>

<div class="container">
	<div class="wrapper">
		<div class="content">
			<div class="top">
				<p class="top-text">Samil The Totem Snatcher has returned!</p>
				<img alt="btn failed" src={btnFailed} />
			</div>
			<div class="bottom">
				<div class="b-left">
					<img src={Character2} class="character" alt="character" />
					<img src={Injured} class="injured" alt="injured" />
				</div>
				<div class="b-right">
					<div class="ellipse">
						<div class="ellipse-group">
							<div class="ellipse-item">
								<img src={Ellipse} class="ellipse-img" alt="ellipse-img" />
								<img src={expText} class="ellipse-text" alt="ellipse-text" />
							</div>
							<div class="ellipse-footer">
								<p>14</p>
							</div>
						</div>
						<div class="ellipse-group">
							<div class="ellipse-item">
								<img src={Ellipse} class="ellipse-img" alt="ellipse-img" />
								<img src={ellipseImg} class="ellipse-text" alt="ellipse-text" />
							</div>
							<div class="ellipse-footer">
								<p>35</p>
								<img src={flower30} alt="flower 30" />
							</div>
						</div>
					</div>
					<div class="e-btn">CLAIM</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.bottom {
		height: 53%;
		width: 100%;
		display: flex;
	}
	.b-left {
		width: 50%;
		height: 100%;
		display: flex;
		justify-content: center;
		position: relative;
	}
	.b-right {
		width: 50%;
		height: 100%;
	}
	.character {
		width: 80%;
		height: 120%;
		position: relative;
		top: -80px;
		left: 20px;
	}
	.content {
		width: 750px;
		height: 510px;
		border: 2px solid #36ffc0;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
	}
	.e-btn {
		width: 195px;
		height: 45px;
		background-color: #36ffc0;
		font-weight: bold;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.ellipse {
		height: 68%;
		align-items: center;
		display: flex;
	}
	.ellipse-footer {
		height: 90px;
		align-items: center;
		display: flex;
		font-size: 20px;
		font-weight: bold;
		justify-content: center;
	}
	.ellipse-group {
		margin-right: 40px;
	}
	.ellipse-item {
		margin-top: 45px;
		position: relative;
	}

	.ellipse-text {
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		position: absolute;
	}
	.injured {
		position: absolute;
		width: 304px;
		height: 70px;
		top: 28%;
		left: 10%;
	}
	.top {
		height: 47%;
		width: 100%;
		background: url('/assets/mission/bg119_top.png');
		background-size: cover;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.top-text {
		font-size: 18px;
		font-weight: bold;
		text-align: center;
	}

	.wrapper {
		max-width: 1440px;
		color: white;
		width: 100%;
		display: flex;
		align-items: center;
		height: 100%;
		margin: 0 auto;
	}
	.container {
		height: 90vh;
		background: url('/assets/mission/bg119.png');
		background-repeat: no-repeat;
		background-size: cover;
	}

	@media (max-width: 550px) {
		.b-left {
			width: 70%;
			margin: 0 auto;
		}
		.b-right {
			width: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
		}
		.bottom {
			height: 76%;
			flex-direction: column;
		}
		.character {
			top: 0;
			left: 0;
		}
		.content {
			height: 100%;
		}
		.container {
			height: 110vh;
		}
		.ellipse {
			width: 70%;
			margin-top: 18px;
			display: flex;
			justify-content: space-around;
		}
		.ellipse-group {
			margin-right: 0;
		}
		.injured {
			top: 50%;
			left: 50%;
			transform: translate(-50%, 25%);
		}
	}
	@media (min-width: 551px) and (max-width: 768px) {
		.injured {
			left: 0;
		}
	}
</style>
