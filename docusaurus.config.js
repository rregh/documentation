/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
	title: 'wemogy',
	tagline: 'Dinosaurs are cool',
	url: 'https://wemogy.github.io/docs/',
	baseUrl: '/docs/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.ico',
	organizationName: 'wemogy', // Usually your GitHub org/user name.
	projectName: 'docs', // Usually your repo name.
	themeConfig: {
		navbar: {
			title: 'wemogy Docs',
			logo: {
				alt: 'My Site Logo',
				src: 'img/wemogy.png' // TODO: Use SVG
			},
			items: [
				{
					type: 'doc',
					docId: 'intro',
					position: 'left',
					label: 'Tutorial'
				},
				{ to: '/blog', label: 'Blog', position: 'left' },
				{
					href: 'https://github.com/facebook/docusaurus',
					label: 'GitHub',
					position: 'right'
				}
			]
		},
		footer: {
			style: 'dark',
			links: [
				{
					title: 'Docs',
					items: [
						{
							label: 'Tutorial',
							to: '/docs/intro'
						}
					]
				},
				{
					title: 'Community',
					items: [
						{
							label: 'Stack Overflow',
							href: 'https://stackoverflow.com/questions/tagged/docusaurus'
						},
						{
							label: 'Discord',
							href: 'https://discordapp.com/invite/docusaurus'
						},
						{
							label: 'Twitter',
							href: 'https://twitter.com/docusaurus'
						}
					]
				},
				{
					title: 'More',
					items: [
						{
							label: 'Blog',
							to: '/blog'
						},
						{
							label: 'GitHub',
							href: 'https://github.com/facebook/docusaurus'
						}
					]
				}
			],
			copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`
		}
	},
	presets: [
		[
			'@docusaurus/preset-classic',
			{
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					// Please change this to your repo.
					editUrl: 'https://github.com/wemogy/docs/edit/main/'
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					editUrl: 'https://github.com/wemogy/docs/edit/main/blog/'
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css')
				}
			}
		]
	]
};
