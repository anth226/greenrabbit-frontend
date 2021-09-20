export const numberWithCommas = (x) => {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const isStaked = (asset, stakedAssets) => {
	let c = 0;
	while (c < stakedAssets.length) {
		if (stakedAssets[c].asset_id === asset.asset_id) {
			return stakedAssets[c].drive_id;
		}
		c++;
	}
	return null;
};
export const isPromoStaked = (asset, stakedAssets) => {
	let c = 0;
	while (c < stakedAssets.length) {
		if (stakedAssets[c].asset_id === asset.asset_id) {
			return true;
		}
		c++;
	}
	return null;
};
export const isEmpty = (obj) => {
	return Object.keys(obj).length === 0;
};
export const zeroPad = (num, places) => String(num).padStart(places, '0');

export const convertHexToRGBA = (hexCode, opacity) => {
	let hex = hexCode.replace('#', '');

	if (hex.length === 3) {
		hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
	}

	const r = parseInt(hex.substring(0, 2), 16);
	const g = parseInt(hex.substring(2, 4), 16);
	const b = parseInt(hex.substring(4, 6), 16);

	return `rgba(${r},${g},${b},${opacity / 100})`;
};
export function resolveAfterSeconds(s) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve();
		}, s * 1000);
	});
}

export function resolveAfterMS(ms) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve();
		}, ms);
	});
}
export function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
const nameToTotem = {
	Cat: ['Cat Totem', 'Cat', 'Felicia'],
	Snake: ['Snake Totem', 'Snake', 'General Saw-Scale'],
	Turtle: ['Turtle Totem', 'Turtle', 'Mark Tortuga'],
	Rabbit: ['Rabbit Totem', 'Rabbit', 'Albert'],
	Wormhole: ['Wormhole'],
	Shellinium: ['Shellinium']
};

export function getTotemByName(name) {
	for (let totem of Object.keys(nameToTotem)) {
		let matches = nameToTotem[totem];
		for (let match of matches) {
			if (name.includes(match)) {
				return totem;
			}
		}
	}
	return '';
}

export function get_spu_fee(base_fee_percent, first_craft_amount, attempt_num) {
	let spu_fee = (first_craft_amount * base_fee_percent) / 100;

	// if second attempt, just return 5% fee
	if (attempt_num == 2) {
		return spu_fee;
	}

	// double fee for each attempt after second attempt
	for (let i = 3; i <= attempt_num; i++) {
		spu_fee = spu_fee * 2;
	}

	return spu_fee;
}
export function get_diff_hours_left(cooldown_time, current_epoch_secs) {
	const seconds_in_hour = 3600;
	const diff = cooldown_time - current_epoch_secs;

	// ceil the diff, so we only count fully elapsed hours
	const rounded_seconds = Math.ceil(diff / seconds_in_hour);

	const hours_between = rounded_seconds;

	return hours_between;
}

export function getCooldownData(nftData) {
	let cooldownAmount = Number(nftData.mutable_data['Status Type']) === 1 ? 12 : 24;

	let lastUsedUnixTs = new Date(Number(nftData.mutable_data['Last Used']) * 1000).getTime() / 1000;
	return (
		new Date(Number(nftData.mutable_data['Last Used']) * 1000).getTime() / 1000 +
		3600 * cooldownAmount
	);
}

// Helper for checking if a craft is empty or in progress
export function isCraftEmpty(craft) {
	if (!craft) {
		return true;
	}
	return (
		craft.asset_ids.length === 0 &&
		craft.aux_slot.length === 0 &&
		craft.boost_asset_ids.length === 0
	);
}

export function getFormattedCost(nftData, qty = 1) {
	let amt = Number(nftData.itemcost.split(' ')[0]);

	amt = amt * qty;

	return amt.toLocaleString(undefined, {
		// minimumFractionDigits: 4,
		maximumFractionDigits: 4
	});
}
