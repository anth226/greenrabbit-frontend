<script>
</script>

<div class="center-text">
	<div class="clip-wrap">
		<div class="clip-each border-style-gradient">
			<button class="btn btn-add"> + </button>
		</div>
	</div>
</div>

<style>
	.center-text {
		text-align: center;
	}

	.clip-wrap {
		display: inline-block;
		vertical-align: top;
		padding: 10px;
	}

	.clip-each {
		width: 257px;
		height: 240px;
		position: relative;
	}

	.clip-each:after {
		content: '';
		position: absolute;
		background: #000;
	}

	.clip-each,
	.clip-each:after {
		clip-path: polygon(16% 0, 100% 0, 100% 83%, 86% 100%, 0 99%, 0 16%);
	}

	.border-style-gradient {
		background: #36ffc0;
	}

	.border-style-gradient:after {
		top: 3px;
		left: 3px;
		right: 3px;
		bottom: 3px;
	}
	.btn-add {
		color: #36ffc0;
		position: relative;
		z-index: 10;
		width: 48px;
		height: 48px;
		border-radius: 50%;
		border-color: #36ffc0;
		top: 40%;
		border-width: 3px;
		font-size: 26px;
		font-weight: 900;
		padding: 0;
	}
</style>
