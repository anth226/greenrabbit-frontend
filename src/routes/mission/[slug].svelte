<script>
	import { page } from '$app/stores';
	let id = $page.params.slug;
</script>

<div class="wrapper">
	<h1>{id}</h1>
</div>

<style>
	.wrapper {
		width: 100%;
	}
	.wrapper h1 {
		color: white;
	}
</style>
