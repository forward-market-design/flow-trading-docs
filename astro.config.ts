import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: "Flow Trading Service",
    social: {
      github: "https://github.com/forward-market-design/",
    },
    logo: {
      src: "./src/assets/logo.svg",
    },
    tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 2 },
    sidebar: [
      {
        label: "Guides",
        autogenerate: { directory: "guides" },
      },
			{
        label: "Concepts",
        autogenerate: { directory: "bidding" },
      },
			{
				label: "Examples",
				autogenerate: { directory: "examples" },
			},
			{
				label: "Advanced",
				autogenerate: { directory: "advanced" },
			}
    ],
  })]
});