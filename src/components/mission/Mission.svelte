<script>
	import Character from '../../../static/assets/mission/character.png';
	import SquarePlus from '../../../static/assets/mission/square_plus.png';
	import SquareLock from '../../../static/assets/mission/square_lock.png';
	import PlantsFloria from '../../../static/assets/mission/Plants_Floria.png';
	import PlantsNanore from '../../../static/assets/mission/Plants_Nanore.png';
	import PlantsSap from '../../../static/assets/mission/Plants_Sap.png';
	import PlantsVersatopium from '../../../static/assets/mission/Plants_Versatopium.png';
	import Symbol from '../../../static/assets/mission/symbol.png';
	import Arrow from '../../../static/assets/mission/arrow.png';
	import Shape1 from '../../../static/assets/mission/Shape1.png';
	import Shape2 from '../../../static/assets/mission/Shape2.png';
	import Shape3 from '../../../static/assets/mission/Shape3.png';
</script>

<div class="container">
	<div class="wrapper">
		<div class="menu">
			<div class="menu-item">
				<img src={PlantsFloria} alt="PlantsFloria" class="menu-img" />
				<input class="input" value="0" />
			</div>
			<div class="menu-item">
				<img src={PlantsSap} alt="PlantsSap" class="menu-img" />
				<input class="input" value="0" />
			</div>
			<div class="menu-item">
				<img src={PlantsVersatopium} alt="PlantsVersatopium" class="menu-img" />
				<input class="input" value="0" />
			</div>
			<div class="menu-item">
				<img src={PlantsNanore} alt="PlantsNanore" class="menu-img" />
				<input class="input" value="0" />
			</div>
		</div>
		<div class="main">
			<div class="left">
				<p class="left-title">YOUR FORAGERS</p>
				<div class="left-header">
					<img src={Arrow} alt="arrow" class="arrow" />
					<img src={Character} alt="character" class="character" />
					<img src={Symbol} alt="symbol" class="symbol" />
				</div>
				<div class="left-footer">
					<div class="left-footer-icon">
						<div class="left-group-item">
							<div class="left-icon">
								<img src={Shape1} alt="Shape1" class="" />
							</div>
							<div class="left-text">10</div>
						</div>
						<div class="left-group-item">
							<div class="left-icon">
								<img src={Shape2} alt="Shape1" class="" />
								<img src={Shape2} alt="Shape1" class="" />
								<img src={Shape2} alt="Shape1" class="" />
							</div>
							<div class="left-text">7</div>
						</div>
						<div class="left-group-item">
							<div class="left-icon">
								<img src={Shape3} alt="Shape1" class="" />
							</div>
							<div class="left-text">13</div>
						</div>
					</div>
					<div class="left-group-text">
						<p class="text">Samil The Totem Snatcher</p>
						<button class="btn">Epic</button>
					</div>
				</div>
			</div>
			<div class="right">
				<p class="right-text">MISSIONS</p>
				<div class="right-grid">
					<img src={SquarePlus} alt="square plus" />
					<img src={SquarePlus} alt="square plus" />
					<img src={SquareLock} alt="square lock" />
					<img src={SquareLock} alt="square lock" />
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.arrow {
		position: absolute;
		top: 50%;
	}
	.character {
		padding-left: 55px;
	}
	.btn {
		border: 1px solid #fff;
		outline: none;
		color: white;
		background-color: black;
		padding: 5px 30px;
		border-radius: 15px;
	}
	.input {
		width: 80px;
		height: 30px;
		line-height: 30px;
		background-color: black;
		color: #fff;
		font-weight: bold;
		text-align: center;
		border-radius: 2px;
		border: #f0eded17 solid 0.5px;
	}
	.left {
		width: 50%;
	}
	.left-footer {
		display: flex;
		flex-direction: column;
		position: relative;
		top: -125px;
	}
	.left-footer-icon {
		display: flex;
		margin: 0 auto;
		width: 40%;
		position: relative;
		justify-content: space-around;
		align-items: center;
	}
	.left-group-item {
		display: flex;
		align-items: center;
	}
	.left-group-text {
		justify-content: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-top: 20px;
	}
	.left-header {
		position: relative;
		display: flex;
		align-items: center;
		height: 90%;
		padding-left: 140px;
	}
	.left-icon {
		display: flex;
	}
	.left-text {
		padding-left: 5px;
	}
	.left-title {
		font-size: 24px;
		position: relative;
		font-weight: bold;
		top: 150px;
		display: flex;
		justify-content: center;
	}
	.main {
		width: 100%;
		display: flex;
		justify-content: center;
	}
	.menu {
		width: 50%;
		margin: 0 auto;
		padding-top: 20px;
		justify-content: space-between;
		display: flex;
		align-items: center;
	}
	.menu-item {
		width: 25%;
		justify-content: space-around;
		display: flex;
		align-items: center;
	}
	.right {
		width: 50%;
		padding-top: 150px;
	}
	.right-grid {
		width: 70%;
		display: grid;
		grid-template-columns: 50% 50%;
		grid-gap: 30px;
	}
	.right-text {
		width: 70%;
		text-align: center;
		font-weight: bold;
		font-size: 24px;
		padding-bottom: 40px;
	}
	.symbol {
		position: relative;
		top: -140px;
		left: -50px;
	}
	.text {
		font-size: 24px;
		font-weight: bold;
	}
	.wrapper {
		max-width: 1440px;
		color: white;
		width: 100%;
		height: auto;
		padding-bottom: 40px;
		margin: 0 auto;
	}
	.container {
		background: url('/assets/mission/bg.png');
		background-repeat: no-repeat;
		background-size: cover;
	}

	@media (max-width: 767px) {
		.arrow {
			display: none;
		}
		.character {
			padding-left: 0;
		}
		.left {
			width: 100%;
			height: auto;
			background: url('/assets/mission/bg.png');
			background-position: 15%;
			padding-bottom: 20px;
		}
		.left-footer {
			top: 0;
		}
		.left-footer-icon {
			padding-top: 20px;
		}
		.left-group-text {
			padding-top: 60px;
		}
		.left-header {
			height: auto;
		}
		.left-title {
			top: 0;
			padding-top: 60px;
		}
		.main {
			flex-direction: column;
		}
		.menu {
			width: 100%;
		}
		.right {
			padding: 30px;
			width: 100%;
		}
		.right-grid {
			width: 90%;
			margin: 0 auto;
			grid-gap: 20px;
			padding-bottom: 20px;
		}
		.right-text {
			width: 100%;
			padding-bottom: 20px;
		}
		.wrapper {
			background: none;
		}
		.container {
			background: none;
		}
	}
	@media (min-width: 768px) and (max-width: 1280px) {
		.main {
			flex-direction: column;
		}
		.left {
			margin: 0 auto;
			width: 100%;
			height: auto;
			background: url('/assets/mission/bg.png');
			background-position: 0;
			padding-bottom: 20px;
		}
		.left-header {
			padding-top: 155px;
			width: 100%;
			padding-left: 0;
			justify-content: center;
		}
		.left-footer {
			top: 0px;
		}
		.left-title {
			top: 125px;
		}
		.right {
			width: 80%;
			margin: 0 auto;
			padding-top: 40px;
			padding-bottom: 20px;
		}
		.right-text {
			width: 100%;
		}
		.right-grid {
			width: 80%;
			margin: 0 auto;
		}
		.menu {
			width: 80%;
		}
		.wrapper {
			background: none;
		}
		.container {
			background: none;
		}
	}
	@media (max-width: 550px) {
		.character {
			padding-left: 65px;
		}
		.input {
			width: 40px;
		}

		.left {
			height: auto;
			padding-bottom: 20px;
		}
		.left-header {
			width: 100%;
			padding-left: 0;
		}
		.menu-img {
			width: 30%;
		}
		.symbol {
			top: -120px;
			left: -120px;
		}
	}
	@media (max-width: 420px) {
		.right {
			overflow: hidden;
		}
		.right-grid {
			display: flex;
		}
		.symbol {
			top: -90px;
		}
	}
</style>
