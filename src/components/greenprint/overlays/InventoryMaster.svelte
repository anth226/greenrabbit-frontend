<script>
	import GreenPrintInventory from './GreenPrintInventory.svelte';
	import MobileGreenPrintInventory from './MobileGreenPrintInventory.svelte';

	let innerWidth;
	export let hasForm = false;
	export let onCancel = () => {};
	export let onOkay = () => {};
	export let filterType;
	export let type;
	export let rarity;
	const types = {
		action: { name: 'T420 Art Action', id: 3, matcher: 'Action' },
		diorama: { name: 'T420 Art Diorama', id: 2, matcher: 'Diorama' },
		tablet: { name: 'Lore Tablet', id: 5, matcher: 'Lore Tablet' },
		coin: { name: 'T420 Art Coin', id: 4, matcher: 'Coin' },
		aux: { name: 'T420 Art Coin', id: 4, matcher: 'Coin' },
		figure: { name: '3D Figure', id: 6, matcher: 'Figure' },
		credit: { name: 'Credit', id: 6, matcher: 'Credit' }
	};
	const rarityTypes = {
		auxcomponent: { name: '3D Figure', id: 6, matcher: '4-Component' },
		figureCommon: { name: '3D Figure', id: 6, matcher: '3D Common' },
		figureUncommon: { name: '3D Figure', id: 6, matcher: '3D Uncommon' },
		figureEpic: { name: '3D Figure', id: 6, matcher: '3D Epic' },
		figureLegendary: { name: '3D Figure', id: 6, matcher: '3D Mythic' },
		figureMytic: { name: '3D Figure', id: 6, matcher: '3D Uncommon' }
	};
	import { getContext } from 'svelte';
	const { openInventory, closeInventory } = getContext('notsimple-modal');

	let selRarity;
	selRarity = rarity ? rarityTypes[rarity] : { name: 'All', id: 1, matcher: 'All' };
</script>

<svelte:window bind:innerWidth />
{#if innerWidth < 1024}
	<MobileGreenPrintInventory selectedType={types[filterType]} selectedRarity={selRarity} {onOkay} />
{:else}
	<GreenPrintInventory
		selectedRarity={selRarity}
		selectedType={types[filterType]}
		isCrafting
		{onOkay}
	/>
{/if}
