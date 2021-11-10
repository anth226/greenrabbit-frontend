<script>
	import Character from '../../../static/assets/mission/character.png';
	import Character1 from '../../../static/assets/mission/character2.png';
	import SquarePlus from '../../../static/assets/mission/square_plus.png';
	import SquareLock from '../../../static/assets/mission/square_lock.png';
	import PlantsFloria from '../../../static/assets/mission/Plants_Floria.png';
	import PlantsNanore from '../../../static/assets/mission/Plants_Nanore.png';
	import PlantsSap from '../../../static/assets/mission/Plants_Sap.png';
	import PlantsVersatopium from '../../../static/assets/mission/Plants_Versatopium.png';
	import Symbol from '../../../static/assets/mission/symbol.png';
	// import Arrow from '../../../static/assets/mission/arrow.png';
	import Shape1 from '../../../static/assets/mission/Shape1.png';
	import Shape2 from '../../../static/assets/mission/Shape2.png';
	import Shape3 from '../../../static/assets/mission/Shape3.png';
	import { Carousel, CarouselControl, CarouselIndicators, CarouselItem } from 'sveltestrap';

	export let plant_floria = 0;
	export let plant_sap = 0;
	export let plant_versatopium = 0;
	export let plant_nanore = 0;

	let activeIndex = 0;
	let items = [Character, Character1];

	$: {
		if (activeIndex > 0) {
			console.log('activeIndex', activeIndex);
		}
	}
</script>

<div class="container-box">
	<div class="wrapper">
		<div class="menu">
			<div class="menu-item">
				<img src={PlantsFloria} alt="PlantsFloria" class="menu-img" />
				<span>{plant_floria}</span>
			</div>
			<div class="menu-item">
				<img src={PlantsSap} alt="PlantsSap" class="menu-img" />
				<span>{plant_sap}</span>
			</div>
			<div class="menu-item">
				<img src={PlantsVersatopium} alt="PlantsVersatopium" class="menu-img" />
				<span>{plant_versatopium}</span>
			</div>
			<div class="menu-item">
				<img src={PlantsNanore} alt="PlantsNanore" class="menu-img" />
				<span>{plant_nanore}</span>
			</div>
		</div>
		<div class="main">
			<div class="left">
				<p class="left-title">YOUR FORAGERS</p>
				<div class="left-header">
					<Carousel {items} bind:activeIndex interval={1000000}>
						<div class="carousel-inner">
							{#each items as item, index}
								<CarouselItem bind:activeIndex itemIndex={index}>
									<img src={item} class="d-block w-100" alt={`${item} ${index + 1}`} />
								</CarouselItem>
							{/each}
						</div>
						<CarouselControl direction="prev" bind:activeIndex {items} />
						<CarouselControl direction="next" bind:activeIndex {items} />
					</Carousel>
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
	.container-box {
		background-image: url('/assets/mission/bg.png');
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		background-color: rgba(0, 0, 0, 0.3);
		background-blend-mode: soft-light;
		min-height: calc(100vh - 173px);
	}
	.wrapper {
		max-width: 1440px;
		color: white;
		width: 100%;
		height: auto;
		padding-bottom: 40px;
		margin: 0 auto;
	}
	.menu {
		width: 50%;
		margin: 0 auto;
		padding-top: 20px;
		justify-content: space-between;
		display: flex;
		align-items: center;
	}
	.main {
		width: 100%;
		display: flex;
		margin-top: 50px;
	}
	.left {
		width: 50%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.left-title {
		font-size: 24px;
		font-weight: bold;
		text-align: center;
		margin-bottom: 22px;
	}
	.left-header {
		position: relative;
		width: 100%;
		height: 370px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.symbol {
		position: absolute;
		top: 10px;
		right: 150px;
		width: 70px;
	}
	.left-footer {
		display: flex;
		height: 140px;
		flex-direction: column;
		margin-top: 25px;
		width: 100%;
		background-image: url('/assets/mission/bg_footer.png');
		position: relative;
	}
	.left-footer::after {
		position: absolute;
		content: '';
		width: 67%;
		height: 3px;
		left: 13%;
		background-repeat: no-repeat;
		background-size: contain;
		bottom: 0;
		background-image: url('/assets/mission/border_footer.png');
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
		padding-top: 15px;
	}

	.left-icon {
		display: flex;
	}
	.left-text {
		padding-left: 5px;
	}

	.btn {
		border: 1px solid #fff;
		outline: none;
		color: white;
		background-color: black;
		padding: 5px 30px;
		border-radius: 15px;
		margin-top: 7px;
	}

	.menu-item {
		width: 25%;
		justify-content: space-around;
		display: flex;
		align-items: center;
	}

	.menu-item span {
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

	.right {
		width: 50%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.right-grid {
		width: 70%;
		display: grid;
		grid-template-columns: 45% 45%;
		grid-gap: 30px;
	}
	.right-text {
		width: 70%;
		text-align: center;
		font-weight: bold;
		font-size: 24px;
		padding-bottom: 40px;
	}
	.text {
		font-size: 24px;
		font-weight: bold;
	}
	@media (max-width: 768px) {
		.container-box {
			background-image: url('/assets/mission/bg_mobile.png');
			background-size: 100% 60%;
			background-position: top;
		}
		.main {
			flex-direction: column;
			gap: 30px;
		}
		.left {
			width: 100%;
		}
		.left-footer::after {
			width: 75%;
		}
		.right {
			width: 100%;
			padding-top: 50px;
		}
		.arrow {
			display: none;
		}
		.symbol {
			right: 20px;
		}
		.menu {
			width: 100%;
		}
		.menu-item {
			flex-direction: column;
		}
		.menu-img {
			height: 50px;
			margin-bottom: 10px;
		}
		.right-grid {
			width: 100%;
			display: flex;
			overflow-x: scroll;
			padding: 0 20px;
		}
		.right-grid::-webkit-scrollbar {
			display: none;
		}
		.left-footer-icon {
			width: 65%;
		}
	}
</style>
