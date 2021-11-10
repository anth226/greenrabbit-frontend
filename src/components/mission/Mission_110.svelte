<script>
	import Character110 from '../../../static/assets/mission/character110.png';
	import Symbol100 from '../../../static/assets/mission/symbol100.png';
</script>

<div class="container">
	<div class="wrapper">
		<div class="content">
			<div class="left">
				<img src={Character110} class="character" alt="character" />
			</div>
			<div class="right">
				<div class="symbol">
					<img src={Symbol100} alt="symbol" class="symbol-img" />
				</div>
				<div class="group">
					<p class="text">Your Forager has Leveled Up!</p>
					<div class="btn">GREAT!</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.btn {
		width: 195px;
		height: 45px;
		display: flex;
		justify-content: center;
		align-items: center;
		font-weight: bold;
		font-size: 16px;
		background-color: #36ffc0;
	}
	.content {
		width: 750px;
		height: 510px;
		border: 2px solid #36ffc0;
		margin: 0 auto;
		display: flex;
		background: #0000006e;
	}
	.group {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.left {
		width: 55%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.right {
		margin: auto;
		width: 45%;
		height: 55%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
		background: #0000000d;
	}
	.text {
		font-weight: bold;
		font-size: 20px;
		margin-bottom: 20px;
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



	@media (max-width: 768px) {
		.left {
			width: 100%;
			height: auto;
		}
		.right {
			width: 100%;
			margin: 0;
			height: auto;
			padding-bottom: 20px;
		}
		.container {
			height: 75vh;
		}
		.content {
			width: 100%;
			height: 100%;
			border: none;
			margin: 0 auto;
			display: flex;
			flex-direction: column;
			background: #0000006e;
		}
	}
	@media (max-width: 480px) {
		.container {
			height: 98vh;
		}
	}
</style>
