<script>
	import { goto } from '$app/navigation';

	import {
		drivesStore,
		dataLoaded,
		userBalance,
		assetsInPool,
		accountStore,
		storageStore,
		promoBalancesStore
	} from 'src/stores/store';

	import { toFixedCurrency } from 'src/utils/toFixedCurrency';
	import { fade, slide } from 'svelte/transition';
	import SimpleModal from '../SimpleModal.svelte';
	import ClaimButton from './ClaimButton.svelte';
	import ExclusiveStakingWrapper from './ExclusiveStakingWrapper.svelte';

	import PlugIn from './PlugIn.svelte';
	import PromoStakingWrapper from './PromoStakingWrapper.svelte';
	import UsbStakingInfo from './USBStakingInfo.svelte';
	let promoBalance = 0;
	let promoPower = 0;
	$: {
		let balanceTemp = 0;
		let powerTemp = 0;
		$promoBalancesStore.forEach((e) => {
			balanceTemp += Number(e.balance.balance);
			powerTemp += Number(e.balance.staked);
		});
		promoBalance = balanceTemp;
		promoPower = powerTemp;
	}
	$: totalCollected = Number($accountStore?.collected?.split(' ')[0]) + promoBalance;
</script>

{#if $dataLoaded}
	<div class="wrapper">
		<div class="header">
			<div>
				<img
					class="greentooth"
					alt="Greentooth Staking System"
					src="https://res.cloudinary.com/green-rabbit-holdings/image/upload/f_auto,q_auto/v1628689408/GreenRabbit/greentooth.png"
				/>
			</div>

			<img
				in:fade={{ delay: 500, duration: 1000 }}
				class="greentooth-desktop"
				alt="Greentooth Staking System"
				src="https://res.cloudinary.com/green-rabbit-holdings/image/upload/f_auto,q_auto/v1628692652/GreenRabbit/greentooth_desktop.png"
			/>
			<div class="shell-info">
				<div in:slide={{ delay: 300 }}>
					<span>Total <span class="bold">Shellinium</span></span>
					<span class="teal">{toFixedCurrency($userBalance, 2)}</span>
				</div>
				<div in:slide={{ delay: 500 }}>
					<span>Total Shell/h</span>
					<span class="teal"
						>{$storageStore.staked
							? toFixedCurrency((Number($storageStore.staked) + Number(promoPower)) / 10000, 2)
							: '0.00'}</span
					>
				</div>
			</div>
			<div in:slide={{ delay: 600 }} class="divider" />
			<div class="claim-info">
				{#if $accountStore}
					<div in:slide={{ delay: 700 }}>
						<span>Available to claim</span>
						<span class="teal">{toFixedCurrency(totalCollected, 2)}</span>
					</div>

					<div
						class:disabled={$accountStore.collected == '0.0000 SHELL' && promoBalance == 0.0}
						in:fade={{ delay: 900 }}
					>
						<ClaimButton
							disabled={$accountStore.collected == '0.0000 SHELL' && promoBalance == 0.0}
						/>
					</div>
				{/if}
			</div>
		</div>
		<UsbStakingInfo />
		<SimpleModal key="plugin-modal">
			<div class="usb">
				{#each { length: 5 } as _, i}
					<div in:fade={{ delay: i * 100 }}>
						{#if $drivesStore[i]}
							<div
								on:click={() => {
									goto(`/hub/${$drivesStore[i].asset_id}`);
								}}
							>
								<PlugIn drive={$drivesStore[i]} />
							</div>
						{:else}
							<PlugIn />
						{/if}
					</div>
				{/each}
			</div>
		</SimpleModal>

		<div>
			<PromoStakingWrapper />
		</div>
		<div>
			<ExclusiveStakingWrapper />
		</div>
	</div>
{/if}

<style>
	.divider {
		border-left: 1px solid white;
		height: 40px;
		margin: auto;
		display: none;
	}
	.wrapper {
		color: white;
	}
	.bold {
		font-weight: 900;
	}
	.teal {
		color: var(--primary-teal);
	}

	.shell-info,
	.claim-info {
		display: flex;
		justify-content: space-around;

		border-top: solid 1px #707070;
		padding: 18px 28px;
	}
	.shell-info div,
	.claim-info div {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		flex: 0 1 125px;
	}

	.header {
		display: flex;
		flex-direction: column;
		margin-bottom: 40px;
	}
	.greentooth-desktop {
		width: 250px;
		height: 60px;
		margin: 0 auto;
		display: none;
	}
	.greentooth {
		width: 300px;
		height: 32px;
		margin: 16px 32px;
	}
	.usb {
		max-width: 1264px;
		margin: 0 auto;
		margin-top: 80px;
		position: relative;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(155px, max-content));
		gap: 45px 18px;
		justify-content: center;
		padding: initial;
	}
	.disabled {
		cursor: not-allowed;
	}

	@media (min-width: 1024px) {
		.usb {
			gap: 80px 16px;
			grid-template-columns: repeat(auto-fit, minmax(240px, max-content));
		}
		.greentooth-desktop {
			display: block;
			margin: 0 200px 0 0;
		}
		.greentooth {
			display: none;
		}

		.shell-info {
			border: none;
			display: flex;
			flex: 1 0 auto;
			max-width: 300px;
			padding: 0;
			justify-content: space-between;
			align-items: center;
		}
		.claim-info {
			border: none;
			display: flex;
			flex: 1 0 auto;
			max-width: 350px;
			padding: 0;
			justify-content: space-between;
			align-items: center;
		}

		.header {
			flex-direction: row;
			max-width: 1264px;
			margin: 0 auto 42px;
			justify-content: space-between;
		}

		.divider {
			display: block;
		}
	}
</style>
