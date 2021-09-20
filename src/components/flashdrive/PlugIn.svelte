<script>
	import { assetsInPool } from 'src/stores/store';
	import { toFixedCurrency } from 'src/utils/toFixedCurrency';
	import { getContext } from 'svelte';
	import { fly } from 'svelte/transition';
	import SelectFlashdrive from './SelectFlashdrive.svelte';

	const { open } = getContext('plugin-modal');

	let opening = false;
	let opened = false;
	let closing = false;
	let closed = false;

	const showPopup = () => {
		open(SelectFlashdrive);
	};

	export let drive;
	let assets = [];
	let power = 0;
	export let onClick = null;
	$: {
		if (drive) {
			assets = $assetsInPool.filter((asset) => String(asset.drive_id) == String(drive.asset_id));
			assets.forEach((a) => {
				power += parseInt(a.weight);
			});
		}
	}
	/* 	let height = 0;
	setTimeout(() => {
		height = ((drive.space_used * 100) / drive.capacity).toFixed(0);
	}, 300); */
</script>

<div class="wrapper-plugin" class:empty={!drive} on:click={!drive && showPopup}>
	{#if !drive}
		<img class="add-drive-circle" src="/icons/add_usb.svg" alt="Flashdrive circles" />
		<div class="teal plugin">Plug-in Flash Drive</div>
	{:else}
		<!-- 	<div class="div-anim">
			<span /><span /><span /><span />
		</div> -->
		<!-- 	<div
			class="filler-mask"
			style="transition: max-height {2 * (height / 100)}s;max-height:{height}%"
		>
			<div
				class="filler"
				style="	background: linear-gradient(0deg, rgb(0, {100 * (height / 150)}, {50 *
					(height / 100)},0.7) 0%, rgba(54, 255, 192, 0) 100%);"
			/>
		</div> -->
		<div class="info-wrapper">
			<img
				class="flash-image"
				alt="flashdrive"
				src="https://res.cloudinary.com/green-rabbit-holdings/image/upload/f_auto,q_auto/c_scale/v1/GreenRabbit/nfts/{drive.media.split(
					':'
				)[1]}.png"
			/>
			<div class="teal">Storage</div>
			<div class="total-bits">{drive.space_used}/{drive.capacity} bits</div>
		</div>
		<div class="info-wrapper">
			<div class="teal">Generating</div>

			<div>{toFixedCurrency(power / 10000, 2)} Shell/h</div>
		</div>
		<div class="info-wrapper">
			<div class="teal">Staked NFTs</div>

			<div>{assets.length}</div>
		</div>
		<!-- 	<div class="info-wrapper">
			<div
				class="store-loader-wrap"
				style="width: 200px;
			min-height: 30px;
			position: relative;
			top: 15px;"
			>
				<div class="storage-bar-store">
					<div class="progress-done-store" style="width:{height}%" />
				</div>
			</div>
		</div> -->
	{/if}
</div>

<style>
	.empty {
		padding: 36px 12px !important;
	}
	.add-drive-circle {
		width: 40px;
		height: 40px;
		/* background: url('/icons/add_usb.svg');  */
		background-repeat: no-repeat;
		margin: 0 auto 20px;
	}
	.filler-mask {
		margin: -14px;
		position: absolute;
		width: 100%;
		overflow: hidden;
		transform: rotate(180deg);
		max-height: 0%;
		transition: max-height 5s;
	}
	.filler {
		width: 100%;

		height: 240px;
		z-index: 0;
	}
	.flash-image {
		width: 72px;
		height: 72px;
		object-fit: contain;
		border: solid 3px #36ffc0;
		background-color: #000;
		border-radius: 50%;
		position: absolute;
		top: calc(0px - 72px / 2);
	}
	.teal {
		color: var(--primary-teal);
		white-space: nowrap;
		margin: 0 auto;
	}
	.div-anim {
		position: absolute;
		top: 50%;
		left: 50%;

		overflow: hidden;
		font-size: 30px;
		color: #1779ff;
		text-decoration: none;
		text-transform: uppercase;
		letter-spacing: 2px;
		box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
		transform: translate(-50%, -50%);
		width: 100%;
		height: 100%;
	}
	.wrapper-plugin {
		position: relative;
		width: 155px;
		height: 155px;
		display: flex;
		justify-content: flex-end;
		flex-direction: column;

		font-weight: 900;
		font-size: 10px;
		padding: 14px;
		color: var(--pure-white);
		background-image: linear-gradient(to bottom, #343434, #0e0e0e), url('/icons/add_usb.svg');
	}
	.wrapper-plugin:hover {
		box-shadow: 0 0 0 3px var(--primary-teal);
		cursor: pointer;
	}
	.info-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		z-index: 1;
		margin-bottom: 4px;
	}
	.info-wrapper:last-child {
		margin-bottom: 0;
	}
	/* 	.info-wrapper div :first-of-type {
		margin-bottom: 14px;
	} */
	.wrapper-plugin span {
		position: absolute;
	}
	.wrapper-plugin span:nth-child(1) {
		border-radius: 4px;
		top: 0;
		left: 0;
		width: 100%;
		height: 4px;
		background: linear-gradient(to right, #0c002b00, #36ffbf);
		-webkit-animation: snake-animate1 4s linear infinite;
		animation: snake-animate1 4s linear infinite;
	}
	.wrapper-plugin span:nth-child(2) {
		border-radius: 4px;
		top: 0;
		left: 0;
		width: 4px;
		height: 100%;
		background: linear-gradient(to top, #0c002b00, #36ffbf);
		-webkit-animation: snake-animate2 4s linear infinite;
		animation: snake-animate2 4s linear infinite;
	}
	.wrapper-plugin span:nth-child(3) {
		border-radius: 4px;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 4px;
		background: linear-gradient(to left, #0c002b00, #36ffbf);
		-webkit-animation: snake-animate3 4s linear infinite;
		animation: snake-animate3 4s linear infinite;
	}
	.wrapper-plugin span:nth-child(4) {
		border-radius: 4px;
		top: 0;
		right: 0;
		width: 4px;
		height: 100%;
		background: linear-gradient(to bottom, #0c002b00, #36ffbf);
		-webkit-animation: snake-animate4 4s linear infinite;
		animation: snake-animate4 4s linear infinite;
	}

	@-webkit-keyframes snake-animate1 {
		0% {
			transform: translateX(-100%);
		}
		100% {
			transform: translateX(100%);
		}
	}

	@keyframes snake-animate1 {
		0% {
			transform: translateX(-100%);
		}
		100% {
			transform: translateX(100%);
		}
	}
	@-webkit-keyframes snake-animate2 {
		0% {
			transform: translateY(100%);
		}
		100% {
			transform: translateY(-100%);
		}
	}
	@keyframes snake-animate2 {
		0% {
			transform: translateY(100%);
		}
		100% {
			transform: translateY(-100%);
		}
	}
	@-webkit-keyframes snake-animate3 {
		0% {
			transform: translateX(100%);
		}
		100% {
			transform: translateX(-100%);
		}
	}
	@keyframes snake-animate3 {
		0% {
			transform: translateX(100%);
		}
		100% {
			transform: translateX(-100%);
		}
	}
	@-webkit-keyframes snake-animate4 {
		0% {
			transform: translateY(-100%);
		}
		100% {
			transform: translateY(100%);
		}
	}
	@keyframes snake-animate4 {
		0% {
			transform: translateY(-100%);
		}
		100% {
			transform: translateY(100%);
		}
	}
	@media (min-width: 1024px) {
		.wrapper-plugin {
			width: 240px;
			height: 240px;
			font-size: 16px !important;
		}

		.add-drive-circle {
			width: 60px;
			height: 60px;

			left: 0;
			right: 0;
			top: 0;
			bottom: 0;
			margin: auto;
		}

		.plugin {
			font-size: 20px;
		}

		.total-bits {
			/* margin-bottom: 21px; */
		}

		.flash-image {
			width: 127px;
			height: 127px;
			top: calc(0px - 127px / 2);
		}
	}
	.store-loader-wrap {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0 auto;
	}
	.storage-bar-store {
		background-color: #2e2e2e;
		border-radius: 20px;
		position: relative;
		margin: 0 0 15px;
		height: 10px;
		width: 100%;
	}
	.progress-done-store {
		background: var(--primary-teal);
		box-shadow: 0 0 6px 0 #36ffc0;
		border-radius: 20px;
		color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
		width: 0%;
		opacity: 1;
		transition: 1s ease 0.7s;
		margin: 0;
	}
</style>
