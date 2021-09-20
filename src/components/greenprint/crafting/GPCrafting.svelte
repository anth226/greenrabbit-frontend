<script>
	import ComponentCrafting from './ComponentCrafting.svelte';
	import FigureCrafting from './FigureCrafting.svelte';

	import { afterUpdate, getContext, onMount } from 'svelte';
	import MobileGreenPrintInventory from '../overlays/MobileGreenPrintInventory.svelte';

	const { open, close } = getContext('simple-modal');

	let currentTab = 'Component';

	import ModalClose from 'src/components/modal/ModalClose.svelte';
	import ResetCrafting from '../overlays/ResetCrafting.svelte';
	import SimpleModal from 'src/components/SimpleModal.svelte';
	import AwaitingAuth from 'src/components/flashdrive/AwaitingAuth.svelte';
	import { allAssetsStore, inventoryOpen } from 'src/stores/store';
	import GreenPrintInventory from '../overlays/GreenPrintInventory.svelte';
	import GpInventoryModal from 'src/components/modals/GPInventoryModal.svelte';
	const { openInventory, closeInventory } = getContext('notsimple-modal');

	import lodash from 'lodash';

	import AuxInventory from '../overlays/AuxInventory.svelte';
	import CraftingStatus from '../overlays/CraftingStatus.svelte';
	import ScreenOne from '../confirmation/ScreenOne.svelte';
	import GpConfirmation from '../confirmation/GPConfirmation.svelte';

	const { debounce } = lodash;
	let innerWidth;
	let stylingResetCD;
	let stylingAuxInv;
	let stylingCraftStatus;
	let prevWidth;

	onMount(() => {
		innerWidth = window.innerWidth;

		stylingCraftStatus =
			innerWidth < 830
				? {
						styleWindow: {
							margin: '0',
							borderRight: 'none',
							borderLeft: 'none',
							borderBottom: 'none',
							height: '100%',
							width: '100vw',
							display: 'flex'
						},
						styleWindowWrap: {
							height: ' 100vh',
							width: '100vw',
							position: 'absolute',
							left: 0,
							right: 0,
							bottom: 0,
							margin: 0,
							padding: 0
						},
						styleContent: {
							maxHeight: '100vh!important',

							height: '100%',
							width: '100%',
							paddingRight: 0,
							paddingLeft: 0,
							paddingTop: 0
						}
				  }
				: {
						styleWindowWrap: { height: '550px', width: '830px', margin: '0 auto' },
						styleWindow: { height: '550px', width: '830px' },
						styleContent: {
							height: '100%',
							width: '100%',
							paddingBottom: '0',
							paddingRight: '0',
							paddingLeft: '0',
							paddingTop: '0'
						}
				  };
	});

	afterUpdate(() => {
		stylingResetCD =
			innerWidth < 1024
				? {
						styleWindow: {
							margin: '0',
							borderRight: 'none',
							borderLeft: 'none',
							borderBottom: 'none',
							height: '100%',
							width: '100%',
							display: 'flex'
						},
						styleWindowWrap: {
							height: ' 90vh',
							width: '100vw',
							position: 'absolute',
							left: 0,
							right: 0,
							bottom: 0,
							margin: 0,
							padding: 0
						},
						styleContent: {
							height: '100%',
							width: '100%'
						}
				  }
				: {
						styleWindow: {
							height: '450px',
							width: '400px'
						},
						styleContent: {
							height: '100%',
							width: '100%'
						}
				  };

		stylingAuxInv =
			innerWidth < 1024
				? {
						styleWindow: {
							margin: '0',
							borderRight: 'none',
							borderLeft: 'none',
							borderBottom: 'none',
							height: '100%',
							width: '100%',
							display: 'flex'
						},
						styleWindowWrap: {
							height: ' 90vh',
							width: '100vw',
							position: 'absolute',
							left: 0,
							right: 0,
							bottom: 0,
							margin: 0,
							padding: 0
						},
						styleContent: {
							height: '100%',
							width: '100%',
							paddingRight: 0,
							paddingLeft: 0,
							paddingTop: 0
						}
				  }
				: {
						styleWindow: {
							height: 'auto',
							width: '800px'
						},
						styleContent: {
							width: '100%',
							paddingBottom: '0',
							paddingRight: '0',
							paddingLeft: '0'
						}
				  };
	});

	$: {
		stylingCraftStatus =
			innerWidth < 1024
				? {
						styleWindow: {
							margin: '0',
							borderRight: 'none',
							borderLeft: 'none',
							borderBottom: 'none',
							height: '100%',
							width: '100vw',
							display: 'flex'
						},
						styleWindowWrap: {
							height: ' 100vh',
							width: '100vw',
							position: 'absolute',
							left: 0,
							right: 0,
							bottom: 0,
							margin: 0,
							padding: 0
						},
						styleContent: {
							maxHeight: '100vh!important',

							height: '100%',
							width: '100%',
							paddingRight: 0,
							paddingLeft: 0,
							paddingTop: 0
						}
				  }
				: {
						styleWindowWrap: { height: '550px', width: '830px', margin: '0 auto' },
						styleWindow: { height: '550px', width: '830px' },
						styleContent: {
							height: '100%',
							width: '100%',
							paddingBottom: '0',
							paddingRight: '0',
							paddingLeft: '0',
							paddingTop: '0'
						}
				  };
	}
	$: {
		if ($inventoryOpen) {
			let newWidth = innerWidth < 1024 ? 'mobile' : 'desktop';
			if (newWidth !== prevWidth) {
				prevWidth = newWidth;
				closeInventory();
				newWidth === 'desktop' ? toggleDesktopIventory() : toggleMobileIventory();
			}
		}
	}
	const toggleDesktopIventory = debounce((e) => {
		openInventory(GreenPrintInventory);
	}, 100);
	const toggleMobileIventory = debounce((e) => {
		openInventory(MobileGreenPrintInventory);
	}, 100);

	$: {
		if ($inventoryOpen) {
			if (innerWidth < 1024) {
				closeInventory();
				toggleMobileIventory();
			} else {
				closeInventory();
				toggleDesktopIventory();
			}
		}
	}
</script>

<svelte:window bind:innerWidth />

<!-- <button
	style="margin-top: 100px; color:white; background:black;"
	on:click={() => {
		open(
			GpConfirmation,
			{},
			{
				styleWindowWrap: { height: '440px', width: '650px', margin: '0 auto' },
				styleWindow: { height: '440px', width: '650px' },
				styleContent: {
					height: '100%'
				}
			}
		);
	}}
>
	CONFIRM SCREEN 1</button
> -->
<!-- <button
	style="margin-top: 100px; color:white; background:black;"
	on:click={() => {
		open(ResetCrafting, {}, stylingResetCD);
	}}
>
	OPEN RESET COOLDOWN</button
> -->
<!-- <button
	style="margin-top: 100px; color:white; background:black;"
	on:click={() => {
		if ($inventoryOpen) {
			innerWidth < 1024 ? toggleMobileIventory() : toggleDesktopIventory();
		} else $inventoryOpen = true; // openInventory(GreenPrintInventory);
	}}
>
	OPEN GP INVENTORY</button
> -->
<!-- <button
	style="margin-top: 100px; color:white; background:black;"
	on:click={() => {
		open(AuxInventory, {}, stylingAuxInv);
	}}
>
	OPEN GP AUX INV</button
>

<button
	style="margin-top: 100px; color:white; background:black;"
	on:click={() => {
		open(CraftingStatus, {}, stylingCraftStatus);
	}}
>
	OPEN GP CRAFT STATUS</button
> -->
<div class="wrapper">
	<!-- <GreenPrintInventory {allAssetsStore} bind:showGreenprintInventory /> -->
	<div class="header">
		<div class="header-title">
			<h1>Greenprint Crafting</h1>
			<!-- <p class="help-btn">{innerWidth < 1240 ? '?' : 'How it works?'}</p> -->
		</div>
		<div class="tab">
			<div class="tab-wrap">
				<button
					class="tablinks"
					class:selected={currentTab === 'Component'}
					on:click={(e) => (currentTab = 'Component')}><span>4 COMPONENT CRAFTING</span></button
				>
				<button
					class="tablinks"
					class:selected={currentTab === 'Figure'}
					on:click={(e) => (currentTab = 'Figure')}><span>3D FIGURE CRAFTING</span></button
				>
			</div>
		</div>
	</div>
	{#if currentTab == 'Component'}
		<ComponentCrafting />
		<!-- disabled={selected == 0 || currentTab != 'Staking'} -->
	{:else if currentTab === 'Figure'}
		<FigureCrafting />
		<!-- disabled={selected == 0 || currentTab != 'Staked'} -->
	{/if}
</div>

<style>
	.wrapper {
		color: white;
		margin-top: 28px;
	}
	.header {
		position: relative;
		margin-bottom: 28px;
	}
	.header h1 {
		font-size: 28px;
		font-weight: 900;
	}
	.header-title {
		padding: 0 18px;
		margin-bottom: 24px;
	}
	p.help-btn {
		position: absolute;
		top: 0;
		right: 18px;
		transform: translateY(50%);

		cursor: pointer;
		color: var(--primary-teal);
		font-size: 10px;
		border: 2px solid var(--primary-teal);
		width: 22px;
		height: 22px;
		border-radius: 50px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.tab button {
		/* REMOVE DEFAULT STYLE */
		background: none;
		color: inherit;
		border: none;
		padding: 0;
		font: inherit;
		cursor: pointer;
		outline: inherit;

		/* NEW STYLE */

		color: white;
		font-size: 17px;
		text-transform: uppercase;
		max-width: 125px;
	}

	div > button.selected {
		font-weight: 900;
		border-bottom: 5px solid var(--primary-teal);
	}
	.tab {
		display: flex;
		justify-content: space-evenly;
		margin: 0 0;
		border-bottom: solid 1px #707070;
		margin-bottom: 32px;
	}
	.tab-wrap {
		width: 375px;
		display: flex;
		justify-content: space-evenly;
		min-height: 72px;
	}
	.tablinks {
		font-size: 17px;
		overflow: hidden;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		display: -webkit-box;
		width: 125px;
	}
	.tablinks span {
		height: 42px;
		letter-spacing: -1px;
		display: block;
		line-height: 20px;
	}

	.tabcontent {
		display: none;
		color: white;
		overflow: hidden;
		max-width: 1100px;
		max-height: 600px;
		margin: 0 auto 32px;
		padding: 20px 0 0;
		border: 1px solid var(--primary-teal);
	}
	.tabcontent.selected {
		display: block;
	}

	@media (min-width: 1240px) {
		.header-title {
			max-width: 1240px;
			margin: 0 auto;
			position: relative;
		}
		p.help-btn {
			font-weight: bold;
			font-size: 18px;
			border: none;
			white-space: nowrap;
			right: 43px;
		}
	}
</style>
