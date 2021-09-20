<script>
	import { fly, slide } from 'svelte/transition';

	import FilterDropdown from './FilterDropdown.svelte';
	import LeaderboardTable from './LeaderboardTable.svelte';

	let currentTab = 'fail';
	let available;
	let staked;
	let data = [];
	let overallData = [];
	/* 	let typeFilter = [
		{ name: 'Last 24 hours', id: 1, matcher: 'day' },
		{ name: 'Last 7 days', id: 2, matcher: 'week' },
		{ name: 'Current week', id: 3, matcher: 'current week' },
		{ name: 'Previous week', id: 3, matcher: 'previous week' },
		{ name: 'Current month', id: 3, matcher: 'current month' },
		{ name: 'Previous month', id: 3, matcher: 'previous month' },
		{ name: 'Last 30 days', id: 4, matcher: 'month' }
	]; */
	let typeFilter = [
		{ name: 'Current week', id: 3, matcher: 'current week' },
		{ name: 'Previous week', id: 3, matcher: 'previous week' },
		{ name: 'Current month', id: 3, matcher: 'current month' },
		{ name: 'Previous month', id: 3, matcher: 'previous month' }
	];
	let selectedType;
	let x = 200;
	const lastUpdate = async () => {
		const res = await fetch(`https://api.greenrabbitgame.io/v1/crafting/last-sync`);

		const data = await res.json();

		const date = new Date(data.lastSync * 1000);
		updatedAt = date;
	};

	let updatedAt = null;
	const getData = async (craft_type, timeframe, outcome, overall = false) => {
		const res = await fetch(
			`https://api.greenrabbitgame.io/v1/crafting/leaderboard?craft_type=${craft_type}&timeframe=${timeframe}&outcome=${outcome}`
		);
		const resData = await res.json();
		if (resData) {
			if (overall) overallData = resData;
			else data = resData;
		} else {
			if (overall) overallData = [];
			else data = [];
		}
	};
	let craft_types = {
		'4 comp': '4-Component',
		'3d common': '3D Common',
		'3d uncommon': '3D Uncommon',
		'3d epic': '3D Epic',
		'3d legendary': '3D Legendary',
		'3d mythic': '3D Mythic'
	};
	let activeCat = '4 comp';

	$: {
		if (activeCat && selectedType) {
			lastUpdate();
			getData(craft_types[activeCat], selectedType.matcher, currentTab);
			getData('', selectedType.matcher, currentTab, true);
		}
	}
	let innerWidth;
</script>

<svelte:window bind:innerWidth />
<div class="wrapper">
	<div class="header">
		<div class="header-column">
			<img src="/assets/leaderboard/banner.png" alt="Leaderboard visualization" />
			<h1>Leaderboard</h1>
			{#if updatedAt}
				<p style="margin-bottom:10px;">Last update: {updatedAt}</p>
			{/if}

			<div class="filter-wrap">
				<FilterDropdown width="190px" bind:selected={selectedType} filterItems={typeFilter} />
			</div>
		</div>
	</div>
	<div class="tab">
		<div class="tab-wrap">
			<div class="button-wrap">
				<button
					class="tablinks"
					class:selected={currentTab === 'fail'}
					on:click={() => {
						x = 200;
						currentTab = 'fail';
					}}>FAILED GP CRAFTS</button
				>
			</div>
			<div class="button-wrap">
				<button
					class="tablinks"
					class:selected={currentTab === 'success'}
					on:click={() => {
						x = -200;
						currentTab = 'success';
					}}>SUCCESSFUL GP CRAFTS</button
				>
			</div>
			{#if innerWidth > 1390}
				<div
					style="position: relative;display:flex;justify-content:center;transition:all 0.2s;  right: {currentTab ===
					'fail'
						? '487'
						: '185'}px; top: 39px;"
				>
					<div style="background:var(--primary-teal);width:76px;height:6px;" />
				</div>
			{/if}
		</div>
	</div>
	{#if data && overallData}{#if currentTab === 'fail'}
			<div
				class="table-wrapper"
				in:fly={{ x: -x, delay: 200, duration: 190 }}
				out:fly={{ x, duration: 190 }}
			>
				<LeaderboardTable data={overallData} />
				<LeaderboardTable bind:activeCat {data} view="category" />
			</div>
		{:else}
			<div
				class="table-wrapper"
				in:fly={{ x: -x, delay: 200, duration: 190 }}
				out:fly={{ x, duration: 190 }}
			>
				<LeaderboardTable data={overallData} type="success" />
				<LeaderboardTable bind:activeCat {data} view="category" type="success" />
			</div>
		{/if}{/if}
</div>

<style>
	.wrapper {
		margin-bottom: 100px;
	}
	.table-wrapper {
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-top: 104px;
	}
	.button-wrap {
		display: flex;
		flex-direction: column;
	}
	.filter-wrap {
		display: flex;
		justify-content: center;
	}
	.header-column {
		display: flex;
		flex-direction: column;
		margin-bottom: 48px;
	}
	.no__items {
		max-height: 920px;
		min-height: 920px;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.header {
		color: var(--pure-white);
		margin: -46px auto 28px;
		padding: 0 18px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		max-width: 421px;
		position: relative;
	}
	.back-btn {
		position: absolute;
		top: 16px;
		left: 0;
	}

	.header h1 {
		font-size: 36px;
		text-align: center;
		font-weight: 900;
		margin-bottom: 28px;
	}

	.header .promo-info {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	.header .promo-info div {
		flex-direction: column;
		display: flex;
		direction: rtl;
		justify-content: space-between;
	}

	.generating {
		flex: 0 0 115px;
	}
	.available {
		flex: 0 0 93px;
	}

	.header .info {
		color: var(--primary-teal);
	}
	.grid {
		position: relative;
		padding: 0 20px 40px;
		justify-items: center;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 10px;
		max-height: 920px;
		min-height: 920px;
		overflow-y: auto;
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
		font-size: 18px;

		color: white;
		font-size: 17px;
		text-transform: uppercase;
		min-width: 149px;
	}

	div > button.selected {
		font-weight: 900;
		/* border-bottom: 5px solid var(--primary-teal); */
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
		min-height: 45px;
	}

	.tabcontent {
		display: none;
		color: white;
		overflow: hidden;
		max-width: 1100px;
		max-height: 920px;
		margin: 0 auto 32px;
		padding: 20px 0 0;
		border: 1px solid var(--primary-teal);
	}
	.tabcontent.selected {
		display: block;
	}

	@media (min-width: 575px) {
		.grid {
			grid-template-columns: 1fr 1fr 1fr;
		}

		.tabcontent {
			padding: 20px;
		}
	}
	@media (min-width: 768px) {
		.tab-wrap {
			max-width: 600px;
		}
		.grid {
			grid-template-columns: 1fr 1fr 1fr 1fr;
		}

		.header {
			max-width: none;
			flex-direction: row;
		}
		.header h1 {
			font-size: 46px;
			text-align: center;
		}

		.back-btn {
			top: 0;
			bottom: 105px;
			top: auto;
		}
	}

	@media (min-width: 1024px) {
		.header {
			max-width: 1100px;
			padding: 0;
		}
		.promo-info {
			flex: 0 1 500px;
		}
		.promo-info div {
			height: 55px;
			flex: 1 0 auto;
		}
	}
	@media (min-width: 1390px) {
		.table-wrapper {
			display: flex;
			flex-direction: row;
			justify-content: center;
			margin-top: 104px;
		}
		.tab button {
			/* REMOVE DEFAULT STYLE */

			min-width: 300px;
		}
	}
</style>
