<script>
</script>

<div class="footer">
	<div class="right">
		<div class="link">
			<a href="https://www.greenrabbitgame.io/privacy-policy" target="_blank">PRIVACY</a>
			<div class="divider" />
			<a href="https://www.greenrabbitgame.io/terms-of-use" target="_blank">TERMS OF USE</a>
			<div class="divider" />
			<a href="https://www.greenrabbitgame.io/partner-program" target="_blank"
				>PARTNERSHIP PROGRAM</a
			>
		</div>
		<div class="main-site">
			<a href="https://www.greenrabbitgame.io" target="_blank">WWW.GREENRABBITGAME.IO</a>
		</div>
	</div>
	<div class="company-info">
		©{new Date().getFullYear()} GREEN RABBIT HOLDINGS, LLC - All rights reserved
	</div>
</div>

<style>
	.gr-text-logo {
		top: 0;
		left: 0;
		right: 0;
		margin: 34px auto 0;
		position: absolute;
		width: 250px;
		height: 33px;
	}
	.divider {
		border-left: 1px solid white;
		height: 10px;
		margin: auto;
	}
	.link {
		margin: 0 0 18px 0;
		padding: 0 10px;
		width: 100%;
		justify-content: space-between;
		display: flex;
	}
	.link a {
		font-size: 13px;
		font-weight: 900;
	}
	.main-site {
		font-size: 13px;
		font-weight: 900;
		margin-bottom: 24px;
	}
	.footer {
		max-width: 375px;
		color: white;
		margin: 0 auto;
		background: #000;
		bottom: 0;
		position: absolute;
		left: 0;
		right: 0;
	}
	.right {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.company-info {
		font-size: 12px;
		margin-bottom: 14px;
	}
	.wrapper {
		background-image: url('https://res.cloudinary.com/green-rabbit-holdings/image/upload/f_auto,q_auto/v1629087116/GreenRabbit/gr-login-bg.png');
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		height: 100vh;
		width: 100vw;
		position: absolute;
		top: 0;
		z-index: 9;
	}
	.wrapper img.bg {
		height: 83vh;
		width: 100vw;
		object-fit: cover;
	}

	.login {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -75%);
		top: 400px;
		background-color: #000;
		color: white;
		width: 310px;
		height: 305px;
		padding: 0 54px;
		box-shadow: 0 0 15px 0 rgba(54, 255, 192, 0.4);
		border: solid 2px var(--primary-teal);
		display: flex;

		flex-direction: column;
		align-items: center;
	}

	.login h1 {
		margin-top: 36px;
		font-size: 15px;
		text-align: center;
		font-weight: 900;
		margin-bottom: 16px;
	}
	.wrapper .login img.shellos {
		width: 142px;
		height: 30px;
	}

	@media (min-width: 768px) {
		.gr-text-logo {
			width: 480px;
			height: 63px;
			margin-top: 85px;
		}

		.login {
			width: 460px;
			height: 320px;
			top: 65vh;
		}
		.login h1 {
			margin-top: 46px;
			margin-bottom: 20px;
		}
		.wrapper .login img.shellos {
			margin-bottom: 11px;
			width: 158px;
			height: 34px;
		}
	}

	@media (min-width: 1200px) {
		.company-info {
			position: fixed;
			left: 54px;
			bottom: 34px;
			font-size: 16px;
			margin: 0;
		}

		.footer {
			max-width: none;

			bottom: 0;
		}
		.right {
			flex-direction: row;

			position: fixed;
			right: 54px;
			bottom: 34px;
			font-size: 16px;
		}
		.main-site {
			margin: 0 0 0 70px;
		}
		.link {
			margin: 0;
			width: 375px;
		}
	}
</style>
