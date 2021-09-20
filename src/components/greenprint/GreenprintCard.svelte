<script>
	import { image, initialize } from 'svelte-cloudinary';
	import { browser } from '$app/env';
	import NfTcooldown from './overlays/NFTcooldown.svelte';
	import { convertHexToRGBA, getCooldownData } from 'src/utils/helpers';
	import NftStaked from './overlays/NFTStaked.svelte';
	import { now } from 'src/stores/store';

	const rarities = {
		common: '#878787',
		uncommon: '#F2B47D',
		epic: '#FFFFFF',
		legendary: '#FFD500',
		mythic: '#3CE900'
	};

	// Hardcoding because safari sucks
	const rarityWidths = {
		common: '65px',
		uncommon: '80px',
		epic: '43px',
		legendary: '72px',
		mythic: '57px'
	};
	export let nftData;
	let nftIsStaked = nftData.isStaked;
	let cooldownEnds;
	let end =
		Number(nftData.mutable_data['Last Used']) +
		3600 * (12 * Number(nftData.mutable_data['Status Type']));
	$: end =
		Number(nftData.mutable_data['Last Used']) +
		3600 * (12 * Number(nftData.mutable_data['Status Type']));
	let nftOnCooldown = false;

	$: {
		if ($now) {
			let cooldownEndsUnixTs = getCooldownData(nftData);
			cooldownEnds = cooldownEndsUnixTs;
			nftOnCooldown = new Date().getTime() / 1000 < cooldownEndsUnixTs;
		}
	}

	initialize({ cloud_name: 'green-rabbit-holdings' });

	let source = nftData?.data.img || nftData?.data.video;
	let src = `GreenRabbit/nfts/${source}.png`;

	let imageSource = `http://res.cloudinary.com/green-rabbit-holdings/image/upload/q_auto/v1/GreenRabbit/nfts/${source}.png`;
	let showImage = true;

	$: source = nftData?.data.img || nftData?.data.video;
	$: imageSource = `http://res.cloudinary.com/green-rabbit-holdings/image/upload/q_auto/v1/GreenRabbit/nfts/${source}.png`;

	// $: {
	// 	if (nftData) {
	// 		showImage = false;
	// 		source = nftData?.data.img || nftData?.data.video;
	// 		src = `GreenRabbit/nfts/${source}.png`;
	// 		setTimeout(() => {
	// 			showImage = true;
	// 		}, 100);
	// 	}
	// }
</script>

{#if nftData}
	{#if nftData.data.Rarity}
		<div
			class="wrapper"
			class:selected={nftData.isSelected}
			style="--rarity-color: {rarities[nftData.data.Rarity.toLowerCase()]};"
		>
			<div class="top">
				{#if nftIsStaked}
					<NftStaked {nftData} />
				{/if}
				{#if nftOnCooldown}
					<NfTcooldown {nftData} {cooldownEnds} />
				{/if}

				<div class="mint">#{nftData.template_mint}</div>
				{#if showImage}
					<img
						class:staked={nftIsStaked || nftOnCooldown}
						alt={nftData.data.name}
						src={imageSource}
						class="image"
					/>
				{/if}
				<!-- <img
				
				alt="robot"
				src="https://res.cloudinary.com/green-rabbit-holdings/image/upload/f_auto,q_auto/c_scale/v1/GreenRabbit/nfts/QmdzDJ3eBwARsbK5VhK6fe6osjeYCiXfZCrjZNQ3ApWWue.png"
			/> -->
				<div
					class="rarity"
					style="border-color:{nftIsStaked || nftOnCooldown
						? convertHexToRGBA(rarities[nftData.data.Rarity.toLowerCase()], 30)
						: rarities[nftData.data.Rarity.toLowerCase()]};
				--width:{rarityWidths[nftData.data.Rarity.toLowerCase()]};"
				>
					{nftData.data.Rarity.toLowerCase()}
				</div>
				<div
					style="--border-color:{nftIsStaked || nftOnCooldown
						? convertHexToRGBA('#a3a3a3', 30)
						: '#a3a3a3'};"
					class="token"
				>
					{nftData.totem ? nftData.totem : ''}
				</div>
			</div>

			<div class="bottom">
				<span class="nft-name">{nftData.name}</span>
				{#if nftData.weight && nftData.weight > 0}
					<span class="shell-hr">{nftData.weight / 10000} SHELL/hr</span>
				{/if}
				<span class="type">{nftData.totem ? nftData.totem : ''}</span>
			</div>
		</div>
	{/if}
{/if}

<style>
	.staked {
		opacity: 0.2;
	}
	.wrapper {
		border: 2px solid rgba(255, 255, 255, 0.3);
		border-radius: 4px;
		min-width: 155px;
		max-width: 155px;
		/* max-width: xyz px; USE THIS scaling to tablet */
		height: 300px;
		max-height: 300px;
		position: relative;
		overflow: hidden;
	}
	.wrapper:hover {
		box-shadow: 0 0 0 2px var(--primary-teal);
		cursor: pointer;
	}
	.selected {
		box-shadow: 0 0 0 3px var(--primary-teal) !important;
	}
	/* .wrapper:before {
		content: '';
		position: absolute;
		margin: -25px;
		width: 50px;
		height: 50px;
		transform: rotate(45deg);
		background-color: var(--rarity-color);
		z-index: 3;
	} */

	.top {
		height: 215px;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: var(--dark-grey);
		position: relative;
		display: flex;
		flex-direction: column;
	}

	.bottom {
		display: flex;
		flex-direction: column;
		font-size: 11px;
		color: var(--pure-white);
		height: 85px;
		background-color: var(--dark-grey);
		bottom: 0;
		padding: 0 8px 0;
	}

	.bottom span {
		width: 100%;
		text-align: center;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		font-size: 15px;
	}
	.bottom span:first-of-type {
		color: var(--primary-teal);
		margin-bottom: 4px;
		font-weight: 900;
	}
	.bottom span:not(:first-of-type) {
		margin-bottom: 10px;
	}
	.bottom span:last-of-type {
		font-weight: 600;
	}

	.mint {
		position: absolute;
		top: 6px;
		right: 10px;
		background-color: rgba(0, 0, 0, 0.5);
		font-size: 12px;
		color: var(--pure-white);
		width: 57px;
		height: 25px;
		border-radius: 25px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.rarity {
		/* position: absolute; */
		bottom: -15px;
		right: 0;
		left: 0;
		margin: 0 auto;
		width: 140px;
		height: 25px;

		border: 2px solid red;
		border-radius: 25px;
		z-index: 2;
		color: var(--pure-white);
		background-color: var(--dark-grey);
		font-size: 13px;
		font-weight: 600;
		text-align: center;
	}
	.token {
		/* position: absolute; */
		bottom: -15px;
		height: 25px;
		margin: 6px auto 0;
		width: 140px;
		border: 2px solid var(--border-color);
		border-radius: 25px;
		z-index: 2;
		color: var(--pure-white);
		background-color: var(--dark-grey);
		font-size: 13px;
		font-weight: 600;
		text-align: center;
	}

	.image {
		object-fit: scale-down;
		width: 95px;
		height: 135px;
	}

	/* @media (min-width: 481px) {
		.wrapper {
			height: 275px;
		}

		.top {
			height: calc(275px - 95px);
		}

		.bottom {
			height: 95px;
			font-size: 14px;
		}

		.image {
			width: 100px;
			height: 130px;
		}

		.wrapper:before {
			margin: -30px;
			width: 60px;
			height: 60px;
		}
	} */

	@media (min-width: 1024px) {
		.wrapper {
			height: 330px;
			width: 195px;

			max-height: 330px;
			max-width: 195px;
		}
		.bottom {
			height: 110px;
		}
		.top {
			background-color: #343434;
			height: calc(330px - 110px);
		}
		.image {
			width: 140px;
			height: 170px;
		}

		.rarity {
			left: 10px;
			margin: 0;
			font-size: 12px;
			position: absolute;
			width: var(--width);
			padding: 4px 12px;
			font-size: 9px;
			font-weight: bold;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		.token {
			position: absolute;
			width: 140px;
			margin: 0;
			right: 10px;
			font-size: 12px;
			display: flex;
			align-items: center;
			justify-content: center;
			margin: 0 auto;
			width: 80px;
			padding: 4px 12px;
			font-size: 9px;
			font-weight: bold;
		}

		.shell-hr {
			margin-top: 10px;
			font-size: 15px;
		}
		.type {
			margin-top: 5px;
			margin-bottom: 16px;
			font-size: 15px;
		}

		span.nft-name {
			margin-top: 26px;
			font-size: 16px;
		}
		.mint {
			top: 12px;
			right: 12px;
		}

		.bottom span {
			line-height: 15px;
		}
	}
</style>
