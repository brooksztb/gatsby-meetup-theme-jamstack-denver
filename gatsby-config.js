module.exports = {
	plugins: [
		{
			resolve: '@matthieuauger/gatsby-theme-meetup',
			options: {
				meetupName: 'JAMstack Denver',
				meetupHomepageHeadline: 'The JAMstack meetup a mile high.',
				meetupDotComGroupUrlName: 'JAMstack-Denver',
				displayVideosLink: true,
				meetupVideosUrl:
					'https://www.youtube.com/channel/UCkvjCJHilRhXoalNm9pNPYg',
				talkProposalUrl: 'https://forms.gle/dK3nGYXZtEVJP9vp9',
				textBlocksPath: `${__dirname}/src/text-blocks`,
				dateFormat: `MMMM DD YYYY`,
				translations: {
					PROPOSE_A_TALK: 'Propose a talk →',
					FETCH_VIDEOS: 'See videos →',
					LAST_MEETUPS: 'Last meetups',
					REGISTER_ON_MEETUP: 'Register on Meetup →',
				},
			},
		},
	],
};
