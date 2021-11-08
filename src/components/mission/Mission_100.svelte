<script>
	import image_8 from '../../../static/assets/mission/image_8.png';
	import Rectangle_24 from '../../../static/assets/mission/Rectangle_24.png';
	import Rectangle_25 from '../../../static/assets/mission/Rectangle_25.png';
	import Group_34_1 from '../../../static/assets/mission/Group_34_1.png';
	import Rectangle_35 from '../../../static/assets/mission/Rectangle_35.png';
	import Rectangle_36 from '../../../static/assets/mission/Rectangle_36.png';
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
	import Group_1565 from '../../../static/assets/mission/Group_1565.png';
	import Group_1490 from '../../../static/assets/mission/Group_1490.png';

	import Group_1521 from '../../../static/assets/mission/Group_1521.png';
	import Vector_14 from '../../../static/assets/mission/Vector_14.png';
</script>

<div class="mission-content">
	<div class="bg-image" />
	<div class="ts-wrapper">
		<button class="back-button">
			<img src="../../../static/assets/back.png" alt="arrow" class="arrow-back" />
			Back
		</button>
		<div class="main">
			<div class="left">
				<div class="left-header">
					<img src={Arrow} alt="arrow" class="arrow" />
					<img src={image_8} alt="character" class="image_8" />
					<img src={Group_34_1} alt="character" class="Group_34_1" />
				</div>
				<div class="left-footer">
					<div class="left-group-text">
						<p class="text">Samil The Totem Snatcher</p>
						<button class="btn">Epic</button>
					</div>
				</div>
			</div>
			<div class="right">
				<div class="box-container">
					<img src={Rectangle_35} alt="square plus" />
					<img src={Vector_14} class="line" alt="" />
					<div class="box-content">
						<p class="box-title">LEVEL</p>
						<div class="box-info">
							<p class="exp-num">15 / 50 EXP</p>
							<div class="exp-img">
								<img src={Symbol} alt="symbol" class="symbol" />
								<div class="bogbas">
									<img src={Group_1490} alt="bogbas" />
									<img src={Group_1521} class="bogbas-width" alt="bogbas" />
								</div>
							</div>
							<button class="level-up">READY TO LEVEL UP</button>
						</div>
					</div>
				</div>
				<div class="box-container">
					<img src={Rectangle_36} alt="square plus" />
					<div class="line-box">
						<img src={Vector_14} alt="" />
						<img src={Vector_14} class="mt-40" alt="" />
						<img src={Vector_14} class="mt-40" alt="" />
						<img src={Vector_14} class="mt-40" alt="" />
					</div>
					<div class="box-content">
						<div class="stats-header">
							<p class="box-title">STAST</p>
							<p class="stats-point">
								Stat points:
								<span>10</span>
							</p>
						</div>
						<div class="box-info">
							<div class="stats-content strenght-box">
								<div class="line-title">
									<img src={Shape1} alt="strenght" class="icon-stats" />
									<p>Strenght</p>
								</div>
								<div class="strenght line-content">
									<div class="bogbas-sub">
										<img src={Rectangle_25} alt="bogbas" />
										<img src={Rectangle_24} class="bogbas-width-sub" alt="bogbas" />
									</div>
									<p class="score">10</p>
									<button class="btn-add">+</button>
								</div>
							</div>
							<div class="stats-content speed-box">
								<div class="line-title">
									<img src={Group_1565} alt="speed" class="icon-stats" />
									<p>Speed</p>
								</div>
								<div class="speed line-content">
									<div class="bogbas-sub">
										<img src={Rectangle_25} alt="bogbas" />
										<img src={Rectangle_24} class="bogbas-width-sub" alt="bogbas" />
									</div>
									<p class="score">7</p>
									<button class="btn-add">+</button>
								</div>
							</div>
							<div class="stats-content luck-box">
								<div class="line-title">
									<img src={Shape3} alt="luck" class="icon-stats" />
									<p>Luck</p>
								</div>
								<div class="luck line-content">
									<div class="bogbas-sub">
										<img src={Rectangle_25} alt="bogbas" />
										<img src={Rectangle_24} class="bogbas-width-sub" alt="bogbas" />
									</div>
									<p class="score">13</p>
									<button class="btn-add">+</button>
								</div>
							</div>
							<div>
								<button class="level-up">Apply</button>
							</div>
							<button class="btn-reset">Reset all stats</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.arrow {
		position: absolute;
		top: 40%;
		right: 20px;
	}
	.image_8 {
		position: absolute;
		top: 20%;
		right: 40px;
		z-index: 10;
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
		position: relative;
	}
	.left-footer {
		display: flex;
		flex-direction: column;
		position: absolute;
		bottom: 25%;
		left: 250px;
	}
	.left-group-text {
		justify-content: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-left: 20px;
	}
	.left-header {
		position: relative;
		display: flex;
		align-items: center;
		height: 100%;
		padding-top: 100px;
		padding-left: 140px;
	}
	.main {
		width: 100%;
		display: flex;
		justify-content: center;
	}
	.right {
		width: 50%;
		padding-top: 150px;
	}
	.box-container {
		position: relative;
	}
	.box-title {
		font-size: 20px;
		line-height: 48px;
		font-weight: 900;
	}
	.box-content {
		position: absolute;
		top: 50px;
		left: 70px;
		width: 493px;
	}
	.box-info {
		text-align: center;
		display: block;
		margin-top: 20px;
	}
	.exp-num {
		font-size: 18px;
		font-weight: 700;
		position: absolute;
		left: 45%;
	}
	.exp-img {
		display: flex;
		align-items: center;
		position: relative;
	}
	.stats-content {
		display: flex;
		margin-bottom: 30px;
		justify-content: space-between;
	}
	.line-title {
		display: flex;
		width: 10%;
	}
	.line-title p {
		margin-left: 15px;
	}
	.score {
		margin-right: 25px;
		width: 10%;
	}
	.btn-add {
		font-size: 30px;
		font-weight: 900;
		background-color: #36ffc0;
		color: #ffffff;
		padding: 5px;
		line-height: 20px;
	}
	.bogbas-width {
		position: absolute;
		top: 41%;
	}
	.bogbas-sub {
		position: relative;
		margin: 0 15px;
	}
	.bogbas-width-sub {
		position: absolute;
		top: 0;
	}
	.text {
		font-size: 24px;
		font-weight: bold;
	}
	.mission-content {
		position: relative;
		width: 100%;
	}
	.bg-image {
		background: url('/assets/mission/bg.png');
		background-repeat: no-repeat;
		width: 100%;
		height: 100%;
		opacity: 0.2;
		position: absolute;
	}

	.ts-wrapper {
		width: 100%;
		color: #ffffff;
	}
	.back-button {
		background-color: transparent;
		border: 1px solid #36ffc0;
		color: #ffffff;
		padding: 10px 25px 10px 10px;
		display: flex;
		font-size: 16px;
		font-weight: 900;
		margin-top: 42px;
		margin-left: 175px;
		position: absolute;
	}
	.arrow-back {
		padding-right: 10px;
	}
	.Group_34_1 {
		position: absolute;
		top: 58%;
		left: 150px;
	}
	.level-up {
		background-color: #36ffc0;
		padding: 13px 20px;
		font-size: 16px;
		font-weight: 900;
		font-family: Lato;
		color: #ffffff;
		margin-top: 30px;
	}
	.line {
		position: absolute;
		bottom: 110px;
		left: 30px;
	}
	.line-content {
		display: flex;
		align-items: center;
		width: 80%;
	}
	.line-box {
		position: absolute;
		top: 100px;
		left: 30px;
	}
	.stats-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.mt-40 {
		margin-top: 60px;
	}
	.btn-reset {
		background-color: transparent;
		color: #36ffc0;
		font-size: 20px;
		margin-top: 30px;
	}
</style>
