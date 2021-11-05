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

<div class="wrapper">
	<div class="menu">
		<div class="menu-item">
			<img src={PlantsFloria} alt="PlantsFloria" />
			<p>0</p>
		</div>
		<div class="menu-item">
			<img src={PlantsNanore} alt="PlantsNanore" />
			<p>0</p>
		</div>
		<div class="menu-item">
			<img src={PlantsSap} alt="PlantsSap" />
			<p>0</p>
		</div>
		<div class="menu-item">
			<img src={PlantsVersatopium} alt="PlantsVersatopium" />
			<p>0</p>
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
	.left {
		width: 50%;
	}
	.left-footer {
		display: flex;
		flex-direction: column;
	}
	.left-footer-icon {
		display: flex;
		margin: 0 auto;
		width: 40%;
		position: relative;
		top: -40px;
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
	}
	.left-header {
		position: relative;
		display: flex;
		align-items: center;
		height: 100%;
		padding-top: 100px;
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
		top:150px;
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
	.right-grid{
		width: 70%;
		display: grid;
		grid-template-columns: 50% 50%;
		grid-gap: 30px;
	}
	.right-text{
		width: 70%;
		text-align: center;
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
		color: white;
		width: 100%;
		min-height: 120vh;
		background: url('/assets/mission/bg.png');
	}
</style>
