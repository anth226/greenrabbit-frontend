<script>
	import { getContext, onMount } from 'svelte';
	import CTAButton from 'src/components/CTAButton.svelte';
	import FilterDropdown from 'src/components/FilterDropdown.svelte';
	import GreenprintCard from 'src/components/greenprint/GreenprintCard.svelte';
	import { slide, fly } from 'svelte/transition';
	import { quintInOut } from 'svelte/easing';
	import { allAssetsStore, now } from 'src/stores/store';
	export let isCrafting = false;
	const { openInventory, closeInventory } = getContext('notsimple-modal');

	let selectedSph = { name: 'All', id: 1, min: 0, max: 0 };
	let selectedStatus = { name: 'All', id: 1, matcher: 'All' };
	export let selectedType, selectedRarity;
	export let onOkay = (data) => {};

	let typeFilter = [
		{ name: 'All', id: 1, matcher: 'All' },
		{ name: 'T420 Art Diorama', id: 2, matcher: 'Diorama' },
		{ name: 'T420 Art Action', id: 3, matcher: 'Action' },
		{ name: 'T420 Art Coin', id: 4, matcher: 'Coin' },
		{ name: 'Lore Tablet', id: 5, matcher: 'Lore Tablet' },
		{ name: '3D Figure', id: 6, matcher: 'Figure' }
	];

	let shellFilter = [
		{ name: 'All', id: 1, min: 0, max: 0 },
		{ name: '1 - 499', id: 2, min: 1, max: 499 },
		{ name: '500 - 1,999', id: 3, min: 500, max: 1999 },
		{ name: '2000 - 9,999', id: 4, min: 2000, max: 9999 },
		{ name: '10,000 - 49,999', id: 5, min: 10000, max: 49999 },
		{ name: '50,000 - 99,999', id: 6, min: 50000, max: 99999 },
		{ name: '100,000+', id: 7, min: 100000, max: 0 }
	];

	let rarityFilter = [
		{ name: 'All', id: 1, matcher: 'All' },
		{ name: 'Common - 4 bits', id: 2, matcher: 'Common' },
		{ name: 'Uncommon - 16 bits', id: 3, matcher: 'Uncommon' },
		{ name: 'Epic - 64 bits', id: 4, matcher: 'Epic' },
		{ name: 'Legendary - 256 bits', id: 5, matcher: 'Legendary' },
		{ name: 'Mythic - 512 bits', id: 6, matcher: 'Mythic' }
	];
	let statusFilter = [
		{ name: 'All', id: 1, matcher: 'All' },
		{ name: 'Staked', id: 2, matcher: 'isStaked' },
		{ name: 'On cooldown', id: 3, matcher: 'onCooldown' },
		{ name: 'Available', id: 4, matcher: 'available' }
	];
	let inventoryRef;

	onMount(() => {
		// document.addEventListener('click', function (event) {
		// 	if (inventoryRef) {
		// 		var isClickInside = inventoryRef.contains(event.target);
		// 		if (!isClickInside) {
		// 			closeInventory();
		// 		}
		// 	}
		// });

		window.refreshAssets(false, 1);
	});

	function clearSelects() {
		$allAssetsStore.forEach((e) => {
			e.isSelected = false;
		});
	}

	let isSelected = false;
</script>

<div
	bind:this={inventoryRef}
	class="wrapper"
	in:fly={{ x: 200, duration: 450, easing: quintInOut }}
	out:fly={{ x: 200, duration: 200, easing: quintInOut }}
>
	<div class="content">
		<div class="header">
			<h1>Inventory</h1>
			<div class="close" on:click={() => closeInventory()} />
			<div class="filter-desktop">
				<!-- <FilterDropdown
					width="180px"
					text="Status"
					bind:selected={selectedStatus}
					filterItems={statusFilter}
				/> -->
				<!-- <FilterDropdown
					width="180px"
					text="Rarity"
					bind:selected={selectedRarity}
					filterItems={rarityFilter}
				/> -->
				<!-- <FilterDropdown
					width="180px"
					text="Totem"
					bind:selected={selectedSph}
					filterItems={shellFilter}
				/> -->
				<!-- <FilterDropdown
					width="180px"
					text="Totem"
					bind:selected={selectedType}
					filterItems={typeFilter}
				/> -->
				<!-- 	<FilterDropdown
					margin="0 0 0 40px"
					width="180px"
					text="Relevance"
					bind:selected={selectedType}
					filterItems={typeFilter}
				/> -->
			</div>
		</div>
		<div class="cards">
			<div class="grid">
				{#if selectedRarity && selectedSph && selectedType}
					{#each $allAssetsStore.filter((asset) => (asset.data.Rarity == selectedRarity.matcher || selectedRarity.matcher == 'All') && (asset.data.Class == selectedType.matcher || selectedType.matcher == 'All') && ((asset.weight / 10000 >= selectedSph.min && asset.weight / 10000 <= selectedSph.max) || selectedSph.name == 'All')) as nftData}
						<div
							style="height: 330px;"
							on:click={() => {
								isSelected = false;
								clearSelects();
								nftData.isSelected = true;

								if (!nftData.isStaked) {
									if (
										!nftData.mutable_data['Last Used'] ||
										Number(nftData.mutable_data['Last Used']) +
											3600 * (12 * Number(nftData.mutable_data['Status Type'])) -
											$now <
											0
									) {
										isSelected = nftData;
									}
								}
							}}
						>
							<GreenprintCard {nftData} />
						</div>
					{/each}
				{/if}
			</div>
		</div>
		<div class="greenprint-footer" in:slide={{ duration: 200, delay: 500 }}>
			<CTAButton
				disabled={!isSelected}
				onClick={() => {
					clearSelects();
					onOkay(isSelected);
					closeInventory();
				}}
				text="SELECT"
			/>
		</div>
	</div>
</div>

<style>
	.content .header {
		padding: 44px 28px 0px;
		border-bottom: solid 1px #333;
	}
	.content .header h1 {
		font-size: 30px;
		font-weight: 900;
		margin-bottom: 55px;
	}
	.filter-desktop {
		display: flex;
	}
	.content {
		position: relative;
		height: 100%;
	}

	.cards {
		height: 100vh;
		color: white;
		padding-bottom: 135px;
		overflow: scroll;
	}
	.greenprint-footer {
		width: 100%;
		max-width: 895px;
		height: 100%;
		position: fixed;
		z-index: 1001;
		bottom: 0;
		height: 90px;
		box-shadow: 0 -2px 4px 0 rgba(0, 0, 0, 0.27);
		background-color: #171717;

		display: flex;
		justify-content: center;
		align-items: center;
	}
	.wrapper {
		border-left: 1px solid var(--primary-teal);
		z-index: 1010;
		position: fixed;
		right: 0;
		top: 0;
		background-color: #000;
		color: white;

		width: 895px;
	}

	.grid {
		margin: 0 auto;
		position: relative;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(155px, 165px));
		gap: 6px;
		justify-content: center;
		padding: 20px 0 110px;

		overflow-y: auto;
	}

	.close {
		display: block;
		box-sizing: border-box;
		position: absolute;
		z-index: 1000;
		top: 1rem;
		right: 1rem;
		margin: 0;
		padding: 0;
		width: 29px;
		height: 29px;
		border: 0;
		color: black;
		border-radius: 1.5rem;
		background: url('/assets/close.png');
		background-size: contain;
		box-shadow: 0 0 0 1px black;
		transition: transform 0.2s cubic-bezier(0.25, 0.1, 0.25, 1),
			background 0.2s cubic-bezier(0.25, 0.1, 0.25, 1);
		-webkit-appearance: none;
		position: absolute;
		top: 50px;
		right: 50px;
		cursor: pointer;
	}
	@media (min-width: 1024px) {
		.wrapper {
			display: block;
		}
		.grid {
			grid-template-columns: repeat(auto-fit, minmax(195px, max-content));
			gap: 18px;
		}
	}
</style>
