export const IPFS_URL_ONE = 'https://gateway.pinata.cloud/ipfs/';
export const IPFS_URL_TWO = 'https://ipfs.io/ipfs/';
export const ATOMIC_ASSET_URL = 'https://wax.atomichub.io/explorer/asset/';

export const TOOLTIP_FAILURE_RATE = {
	title: 'Failure rate',
	text:
		'When crafting a Greenprint, you will have a certain probability of failure on each attempt. The higher the crafting attempt within a 24 hour period, the higher the potential failure rate. This rate outlines what your current potential failure rate will be. Should your attempt fail, you will be refunded any base Shellinium costs, however you will not be refunded any of the SPU costs and your NFTs will go onto 12 hour cooldown.'
};

export const TOOLTIP_SHELLINIUM = {
	title: 'Shellinium',
	text:
		'This displays the base Shellinium cost that you will incur should you be successful in the crafting attempt once you have selected your desired NFT(s) to craft with. If you are unsuccessful in your attempt, this Shellinium cost will be refunded to you.'
};

export const TOOLTIP_POWER_COST = {
	title: 'SPU power cost',
	text:
		'As you progress into your second craft attempt of a 24 hour window and beyond, you will require additional crafting power that can be acquired through the leasing of a Shell Power Unit (SPU). This is not optional and is non-refundable. It will be dictated by both which attempt you are about to make within a 24 hour window as well as what NFT(s) were used in your previous craft attempt. Whether your attempt is successful or a failure, you will still incur this SPU cost.'
};

export const CRAFTING_STATE_INIT = {
	fourcomponent: { slot1: null, slot2: null, slot3: null, slot4: null, aux: null, status: 0 },
	figurecrafting: { slot1: null, status: 0 }
};
