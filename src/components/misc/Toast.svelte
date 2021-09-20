<script>
	import { onMount } from 'svelte';
	import { fade, fly, slide } from 'svelte/transition';
	import { backOut } from 'svelte/easing';

	let toasts = [];
	let retainMs = 6000;

	let toastId = 0;
	const pushToast = (msg = '', icon = '', icon_color = 'white') => {
		// Handle adding better wording to the annoying chain permissions error
		if (
			msg.includes('transaction declares authority') &&
			msg.includes('does not have signatures for it under a provided delay')
		) {
			msg =
				'An unexpected error occured with the blockchain node, please close any transaction confirmation windows and try again';
		}

		toasts = [
			...toasts,
			{
				_id: ++toastId,
				msg,
				icon,
				icon_color
			}
		];
		setTimeout(() => {
			unshiftToast();
		}, retainMs);
	};

	const unshiftToast = () => {
		toasts = toasts.filter((a, i) => i > 0);
	};

	onMount(() => {
		window.pushToast = pushToast;
	});
</script>

<div class="toast-wrapper">
	{#each toasts as toast (toast._id)}
		<div
			class="toast-item"
			in:fly={{ delay: 0, duration: 300, x: 50, y: 0, opacity: 0.1, easing: backOut }}
			out:slide={{ duration: 500 }}
		>
			<div class="d-flex">
				<div class="mr-auto p-2">
					{#if toast.icon}<i style="color:{toast.icon_color}" class={toast.icon} />{/if}
				</div>

				<div class="p-2">{toast.msg}</div>
			</div>
		</div>
	{/each}
</div>

<style>
	.d-flex {
		display: -ms-flexbox !important;
		display: flex !important;
	}
	.p-2 {
		padding: 0.5rem !important;
	}
	.mr-auto,
	.mx-auto {
		margin-right: auto !important;
	}
	.toast-wrapper {
		position: fixed;
		text-align: right;
		z-index: 999999999;
		min-width: 293px;
		top: 83px;
		right: 16px;
		transition: all 2s;
	}
	.toast-item {
		padding: 10px 10px;
		margin: 10px auto;
		max-width: 400px;
		background: rgba(0, 0, 0, 0.822);
		border: 1px solid var(--primary-teal);
		color: #fff;
	}
</style>
