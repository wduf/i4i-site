<svelte:head>
	<link rel="icon" href="./favicon.png" type="image/png" />
	<title>Immigration4Iran | {component.title.getText()}</title>
</svelte:head><main>
    <PageWrapper>
        <Header/>
        <p class="comm-title"> {component.title.getText()}</p>
		<div class="block-wrapper">

			<!-- DISCORD EMBED IN ANOTHER LANGUAGE? -->
			<!-- TODO: FIGURE OUT HOW TO STYLE DISCORD EMBED, RN HAS MAP CLASS -->
			<!-- <TextBlock>
				<a slot="title" href="https://discord.gg/ur5qMP9WEE" target="_blank" rel="noreferrer"> {component.disc_title.getText()} </a>
				<p slot="languages"> {component.available_langs.getText()} {component.disc_lang.getText()} </p>
				<div class="discord-wrapper" slot="body"> 
					<p align="center">
						<iframe
						class="map"
						title="I4I Discord"
						src="https://discord.com/widget?id=1089878589115224074&theme=dark"
						allowtransparency="true"
						frameborder="0"
						sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"/>
					</p>
					{component.disc_body.getText()} 
				</div>
			</TextBlock>  -->

			<TextBlock>
				<a slot="title" href={`${base}/forum`} target="_blank" rel="noreferrer">{component.disc_title.getText()}</a>
				<p slot="languages">{component.available_langs.getText()} {component.disc_lang.getText()}</p>
				<p slot="body">{component.disc_body.getText()}</p>
			</TextBlock>

			<TextBlock>
				<a slot="title" href="https://www.berlin.de/en/events/" target="_blank" rel="noreferrer"> {component.be_title.getText()} </a>
				<p slot="languages"> {component.available_langs.getText()} {component.be_lang.getText()} </p>
				<p slot="body"> {component.be_body.getText()} </p>
			</TextBlock>

			<TextBlock>
				<a slot="title" href="http://www.farenet.org/campaigns/refugees-football-database/" target="_blank" rel="noreferrer"> {component.fnet_title.getText()} </a>
				<p slot="languages"> {component.available_langs.getText()} {component.fnet_lang.getText()} </p>
				
				<div slot="body"> 
					<p align="center">
						<iframe
						class= "map" 
						title="Local Programs for Refugees" 
						src="https://www.google.com/maps/d/embed?mid=1d3pP5NOJ5WP7Qox-V3ewqk_gnc8&ehbc=2E312F"/>
					</p>
					{component.fnet_body.getText()} 
				</div>
			</TextBlock>

		</div>
    </PageWrapper>
</main>

<style>
    *
    {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

	.comm-title
	{
		font-size: 3rem;
		font-weight: 700;
		text-align: center;
		margin: 3%;
	}

	.block-wrapper
	{
		margin: 1% 5%;
	}

	.map
	{
		width: 100%;
		height: 20rem;
	}

	/* media queries */
	@media (min-width: 1800px)
	{
		.comm-title
		{
			font-size: 4rem;
			margin: 5%
		}
	}

	@media (max-width: 900px)
	{
		.comm-title
		{
			font-size: 2.5rem;
			margin: 8%;
		}
	}

	@media (max-width: 600px)
	{
		.comm-title
		{
			margin: 10%;
		}
	}
</style>

<script>
    import { base } from "$app/paths";
    import Header from "../header.svelte";
    import TextBlock from "../textBlock.svelte";
    import * as component from "./communityText.js";
    import PageWrapper from "../pageWrapper.svelte";
</script>