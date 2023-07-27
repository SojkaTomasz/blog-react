const articles = [
	{
		source: {
			id: null,
			name: "Jalopnik",
		},
		author: "Erin Marquis",
		title:
			"Fired Tesla Employee Posts New Video Of Full Self-Driving Running A Red Light",
		description:
			"In March of last year, a Tesla employee was fired for posting a video of his private Model 3 running into bollards while in Full Self-Driving Mode Beta. Well, he’s back and with a much more disturbing video.Read more...",
		url:
			"https://jalopnik.com/fired-tesla-employee-posts-video-fsd-running-red-light-1850678098",
		urlToImage:
			"https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/66eeeaddd654096fc954dd2e402e9221.png",
		publishedAt: "2023-07-26T15:13:00Z",
		content:
			"In March of last year, a Tesla employee was fired for posting a video of his private Model 3 running into bollards while in Full Self-Driving Mode Beta. Well, hes back and with a much more disturbing… [+1685 chars]",
	},
	{
		source: {
			id: null,
			name: "Motor Authority",
		},
		author: "news@motorauthority.com (Joel Feder), Joel Feder",
		title: "GMC Hummer EV, Toyota Land Cruiser, Mopar '23: Today's Car News",
		description:
			"We drove the GMC Hummer EV again and came to realize the electric truck raises the peak pickup truck bar. The best way to sum it? If America were a vehicle it would be the GMC Hummer EV pickup truck. Toyota announced the new Land Cruiser will be unveiled on A…",
		url:
			"https://www.motorauthority.com/news/1140311_gmc-hummer-ev-toyota-land-cruiser-mopar-23-today-s-car-news",
		urlToImage: "https://images.hgmsites.net/hug/gmc-hummer-ev_100890097_h.webp",
		publishedAt: "2023-07-26T15:00:00Z",
		content:
			"We drove the GMC Hummer EV again and came to realize the electric truck raises the peak pickup truck bar. The best way to sum it? If America were a vehicle it would be the GMC Hummer EV pickup truck.… [+1033 chars]",
	},
	{
		source: {
			id: null,
			name: "PCMag.com",
		},
		author: "Emily Dreibelbis",
		title: "7 Automakers Team Up for New EV Charging Network: Can It Top Tesla?",
		description:
			"BMW, GM, Honda, Hyundai, and others announce a new joint venture: A network of 30,000 public fast chargers coming to the US in 2024.\nTesla Superchargers may be the undisputed champion of EV charging networks in the US at the moment, but seven major automakers…",
		url:
			"https://me.pcmag.com/en/cars-auto/18432/7-automakers-team-up-for-new-ev-charging-network-can-it-top-tesla",
		urlToImage:
			"https://sm.pcmag.com/t/pcmag_me/news/7/7-automake/7-automakers-team-up-for-new-ev-charging-network-can-it-top_c15f.1200.jpg",
		publishedAt: "2023-07-26T14:59:25Z",
		content:
			"Tesla Superchargers may be the undisputed champion of EV charging networks in the US at the moment, but seven major automakers have teamed up to develop their own network, which will launch in the US… [+3207 chars]",
	},
	{
		source: {
			id: null,
			name: "FRANCE 24 English",
		},
		author: "FRANCE24",
		title: "Automakers form N.America EV charging network alliance",
		description:
			'BMW, General Motors, Honda, Hyundai, Kia, Mercedes-Benz and Stellantis said in a statement their alliance would make "EV charging more convenient, accessible and reliable".\n\nThe network is set to install at least 30,000 high-powered chargers, the companies sa…',
		url:
			"https://www.france24.com/en/live-news/20230726-automakers-form-n-america-ev-charging-network-alliance",
		urlToImage:
			"https://s.france24.com/media/display/8f8c8786-2bc4-11ee-8063-005056a90284/w:1280/p:16x9/af81bf8abf7c1025c911ef949dbb66a2426c31f9.jpg",
		publishedAt: "2023-07-26T14:56:12Z",
		content:
			"Berlin (AFP) Seven major global automakers said on Wednesday they were creating a joint venture for an extensive North American charging network in a bid to boost demand for electric vehicles. BMW, G… [+2270 chars]",
	},
	{
		source: {
			id: "ars-technica",
			name: "Ars Technica",
		},
		author: "Jonathan M. Gitlin",
		title:
			"Seven major automakers to build EV charging network with 30,000 chargers",
		description:
			"The chargers will support both CCS1 and NACS, with deployment starting in 2024.",
		url:
			"https://arstechnica.com/cars/2023/07/seven-major-automakers-to-build-ev-charging-network-with-30000-chargers/",
		urlToImage:
			"https://cdn.arstechnica.net/wp-content/uploads/2023/07/GettyImages-1175391474-760x380.jpg",
		publishedAt: "2023-07-26T14:55:35Z",
		content:
			"12 with \r\nGood news, electric road-trippers: DC fast chargers are about to become a lot more common. On Wednesday, a group of seven major automakers announced a plan to create a new charging network … [+3160 chars]",
	},
	{
		source: {
			id: null,
			name: "Biztoc.com",
		},
		author: "theglobeandmail.com",
		title:
			"Seven major automakers unite to build North American EV charging network",
		description:
			"Seven major automakers say they’re joining forces to build a North American electric vehicle charging network that would rival Tesla’s TSLA-Q and nearly double the number of fast-charging plugs in the U.S. and Canada. General Motors GM-N, BMW, Honda, Hyundai,…",
		url: "https://biztoc.com/x/47e66b60ecd68089",
		urlToImage: "https://c.biztoc.com/p/47e66b60ecd68089/s.webp",
		publishedAt: "2023-07-26T14:54:03Z",
		content:
			"Seven major automakers say theyre joining forces to build a North American electric vehicle charging network that would rival Teslas TSLA-Q and nearly double the number of fast-charging plugs in the … [+291 chars]",
	},
	{
		source: {
			id: null,
			name: "City A.M.",
		},
		author: "Jess Jones",
		title:
			"Musk’s mad superapp-etite: Why his ‘everything app’ might miss the mark",
		description:
			"Another week, another Elon Musk melodrama. In yet another episode of his theatrics, the tech-obsessed billionaire unveiled his latest surprise this week: a dramatic overhaul of Twitter and rebrand of it as ‘X’. Musk said the name ‘Twitter’ “does not make sens…",
		url:
			"https://www.cityam.com/musks-mad-superapp-etite-why-his-everything-app-might-miss-the-mark/",
		urlToImage:
			"https://www.cityam.com/wp-content/uploads/2023/07/F1yPk5VXoAA3rGZ.jpeg",
		publishedAt: "2023-07-26T14:53:29Z",
		content:
			"Wednesday 26 July 2023 3:53 pm\r\nTwitter has become X\r\nAnother week, another Elon Musk melodrama.\r\nIn yet another episode of his theatrics, the tech-obsessed billionaire unveiled his latest surprise t… [+5560 chars]",
	},
	{
		source: {
			id: null,
			name: "PRNewswire",
		},
		author: null,
		title:
			"ZeroSum Market First Report July 2023: New and Used Car Inventory is Down from June, but the Market is in a Much Stronger Place than One Year Ago",
		description:
			"GRAND RAPIDS, Mich., July 26, 2023 /PRNewswire/ -- The ZeroSum Market First Report is the automotive industry's first source to predict month-end vehicle movement, providing vital supply and demand trend data to automotive marketers and dealers. ZeroSum uses …",
		url:
			"https://www.prnewswire.com/news-releases/zerosum-market-first-report-july-2023-new-and-used-car-inventory-is-down-from-june-but-the-market-is-in-a-much-stronger-place-than-one-year-ago-301886409.html",
		urlToImage:
			"https://mma.prnewswire.com/media/2162770/MarketFirst_Inventory_At_a_Glance_July_2023_Infographic.jpg?p=facebook",
		publishedAt: "2023-07-26T14:53:00Z",
		content:
			"GRAND RAPIDS, Mich., July 26, 2023 /PRNewswire/ -- The ZeroSum Market First Reportis the automotive industry's first source to predict month-end vehicle movement, providing vital supply and demand tr… [+5669 chars]",
	},
	{
		source: {
			id: null,
			name: "Biztoc.com",
		},
		author: "aol.com",
		title: "In challenge to Tesla, major automakers launch EV charging network",
		description:
			"A group of major automakers on Wednesday said they were forming a new company to provide electric vehicle charging in the United States in a challenge to Tesla and a bid to take advantage of Biden administration subsidies. The group includes General Motors, S…",
		url: "https://biztoc.com/x/8c80b6c4713781df",
		urlToImage: "https://c.biztoc.com/p/8c80b6c4713781df/s.webp",
		publishedAt: "2023-07-26T14:52:10Z",
		content:
			"A group of major automakers on Wednesday said they were forming a new company to provide electric vehicle charging in the United States in a challenge to Tesla and a bid to take advantage of Biden ad… [+281 chars]",
	},
	{
		source: {
			id: null,
			name: "Marketscreener.com",
		},
		author: "MarketScreener with dpa-AFX Analyser",
		title: "UPS : Barclays sticks Neutral",
		description:
			"(marketscreener.com) In a research note published by Brandon Oglenski, Barclays gives a Neutral rating to the stock. The target price continues to be set at USD 172.https://www.marketscreener.com/quote/stock/UNITED-PARCEL-SERVICE-INC-14758/news/UPS-Barclays-s…",
		url:
			"https://www.marketscreener.com/quote/stock/UNITED-PARCEL-SERVICE-INC-14758/news/UPS-Barclays-sticks-Neutral-44426252/",
		urlToImage: "https://www.marketscreener.com/images/twitter_MS_fdnoir.png",
		publishedAt: "2023-07-26T14:46:02Z",
		content:
			"In a research note published by Brandon Oglenski, Barclays gives a Neutral rating to the stock. The target price continues to be set at USD 172.\r\n© MarketScreener with dpa-AFX Analyser - 2023\r\n<table… [+3796 chars]",
	},
	{
		source: {
			id: null,
			name: "Coolmaterial.com",
		},
		author: "Cool Material",
		title: "The Best Trunk Organizers For Both Cars and SUVs",
		description:
			"Few things impress a date, colleague, or new buddy more than a spiffy ride. This stretches to the rear of the vehicle, particularly if you’re heading out on a day trip that requires hauling some…\nThe post The Best Trunk Organizers For Both Cars and SUVs first…",
		url: "https://coolmaterial.com/rides/best-trunk-organizers/",
		urlToImage:
			"https://coolmaterial.com/wp-content/uploads/2023/07/thebest-trunk-organizers-for-both-cars-and-SUVs.jpg",
		publishedAt: "2023-07-26T14:44:04Z",
		content:
			"Few things impress a date, colleague, or new buddy more than a spiffy ride. This stretches to the rear of the vehicle, particularly if youre heading out on a day trip that requires hauling some gear.… [+9483 chars]",
	},
	{
		source: {
			id: null,
			name: "Biztoc.com",
		},
		author: "thestreet.com",
		title: "Twitter's Community Notes Defends Tesla Against Dangerous Accusation",
		description:
			"Elon Musk has his hands full with a lot of projects at the moment. Between his big money maker Tesla (TSLA) - Get Free Report, the success of SpaceX, the Boring Company, and now X (formerly Twitter), Musk is in charge of quite a few big name companies. DON'T …",
		url: "https://biztoc.com/x/18bca31fe302ce9d",
		urlToImage: "https://c.biztoc.com/p/18bca31fe302ce9d/s.webp",
		publishedAt: "2023-07-26T14:42:11Z",
		content:
			"Elon Musk has his hands full with a lot of projects at the moment. Between his big money maker Tesla (TSLA) - Get Free Report, the success of SpaceX, the Boring Company, and now X (formerly Twitter),… [+287 chars]",
	},
	{
		source: {
			id: "the-verge",
			name: "The Verge",
		},
		author: "Umar Shakir",
		title:
			"Seven major automakers are teaming up on a North American EV charging network",
		description:
			"A new joint venture from BMW, GM, Honda, Hyundai, Kia, Mercedes-Benz, and Stellantis plans to bring 30,000 electric vehicle charging stations to the US and Canada.",
		url:
			"https://www.theverge.com/2023/7/26/23808270/bmw-honda-gm-joint-venture-north-american-ev-charging-network",
		urlToImage:
			"https://cdn.vox-cdn.com/thumbor/ymD8AIP95EJakOw4fF4hBxxg-mk=/0x0:3024x2016/1200x628/filters:focal(1512x1008:1513x1009)/cdn.vox-cdn.com/uploads/chorus_asset/file/24733284/1F11A77C_B1E5_4CD4_8A92_4A61A220EF10.JPG",
		publishedAt: "2023-07-26T14:39:53Z",
		content:
			"Seven major automakers are teaming up on a North American EV charging network\r\nSeven major automakers are teaming up on a North American EV charging network\r\n / BMW, GM, Honda, Hyundai, Kia, Mercedes… [+2766 chars]",
	},
	{
		source: {
			id: null,
			name: "Biztoc.com",
		},
		author: "aol.com",
		title:
			"Major automakers unite to build electric vehicle charging network they say will rival Tesla's",
		description:
			"Seven major automakers say they're joining forces to build a North American electric vehicle charging network that would rival Tesla's and nearly double the number of fast-charging plugs in the U.S. and Canada. General Motors, BMW, Honda, Hyundai, Kia, Merced…",
		url: "https://biztoc.com/x/c7ef6ee2d9255745",
		urlToImage: "https://c.biztoc.com/p/c7ef6ee2d9255745/s.webp",
		publishedAt: "2023-07-26T14:38:09Z",
		content:
			"Seven major automakers say they're joining forces to build a North American electric vehicle charging network that would rival Tesla's and nearly double the number of fast-charging plugs in the U.S. … [+268 chars]",
	},
	{
		source: {
			id: null,
			name: "MarketWatch",
		},
		author: "Tomi Kilgore",
		title:
			"XPeng’s stock rockets after Volkswagen invests $700 million, announces cooperation agreements",
		description:
			"Volkswagen will work with XPeng on new EVs for China market, and Audi will work with China's SAIC.",
		url:
			"https://www.marketwatch.com/story/xpengs-stock-soars-after-volkswagen-invests-700-million-announces-cooperation-agreements-2a8cb9b4",
		urlToImage: "https://images.mktw.net/im-824083/social",
		publishedAt: "2023-07-26T14:31:00Z",
		content:
			"Shares of XPeng Inc. skyrocketed toward an 11-month high Wednesday, after Germany-based Volkswagen Group said it was investing $700 million in the China-based electric vehicle maker as it follows its… [+1981 chars]",
	},
	{
		source: {
			id: null,
			name: "Biztoc.com",
		},
		author: "apnews.com",
		title:
			"Major automakers unite to build electric vehicle charging network they say will rival Tesla's",
		description:
			"Seven major automakers say they're joining forces to build a North American electric vehicle charging network that would rival Tesla's and nearly double the number of fast-charging plugs in the U.S. and Canada. General Motors, BMW, Honda, Hyundai, Kia, Merced…",
		url: "https://biztoc.com/x/4d87100f3e556f9f",
		urlToImage: "https://c.biztoc.com/p/4d87100f3e556f9f/s.webp",
		publishedAt: "2023-07-26T14:30:04Z",
		content:
			"Seven major automakers say they're joining forces to build a North American electric vehicle charging network that would rival Tesla's and nearly double the number of fast-charging plugs in the U.S. … [+273 chars]",
	},
	{
		source: {
			id: null,
			name: "Biztoc.com",
		},
		author: "reuters.com",
		title: "In challenge to Tesla, major automakers launch EV charging network",
		description:
			"A group of major automakers on Wednesday said they were forming a new company to provide electric vehicle charging in the United States in a challenge to Tesla and a bid to take advantage of Biden administration subsidies. The group includes General Motors (G…",
		url: "https://biztoc.com/x/c2bdd198856c91a1",
		urlToImage: "https://c.biztoc.com/p/c2bdd198856c91a1/s.webp",
		publishedAt: "2023-07-26T14:30:04Z",
		content:
			"A group of major automakers on Wednesday said they were forming a new company to provide electric vehicle charging in the United States in a challenge to Tesla and a bid to take advantage of Biden ad… [+279 chars]",
	},
	{
		source: {
			id: null,
			name: "Autoblog",
		},
		author: "Byron Hurd",
		title: "7 major automakers to build open EV charging network",
		description:
			"Filed under:\nGreen,Acura,Alfa Romeo, BMW, Buick, Cadillac, Chevrolet, Chrysler, Dodge, Genesis, Honda, Hyundai, Jeep, Kia, Mercedes-Benz, MINI,RAM,Electric,Infrastructure\n\nContinue reading 7 major automakers to build open EV charging network\n\n7 major automakers to build o…",
		url:
			"https://www.autoblog.com/2023/07/26/7-major-automakers-to-build-open-ev-charging-network/",
		urlToImage:
			"https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/1062x597/format/jpg/quality/100/https://s.aolcdn.com/os/ab/_cms/2023/07/26100958/image001-2.jpg",
		publishedAt: "2023-07-26T14:24:00Z",
		content:
			"A new joint venture established by BMW, GM, Honda, Hyundai, Kia, Mercedes-Benz and Stellantis will build a new North American electric vehicle charging network on a scale designed to compete with Tes… [+3088 chars]",
	},
	{
		source: {
			id: null,
			name: "Electrek",
		},
		author: "Fred Lambert",
		title: "Tesla finally confirms Supercharger V4 has 350 kW output",
		description:
			"Tesla has finally confirmed that its new Supercharger V4 has a power output of 350 kW as deployment appears to be ramping up.\n more…\nThe post Tesla finally confirms Supercharger V4 has 350 kW output appeared first on Electrek.",
		url:
			"https://electrek.co/2023/07/26/tesla-confirms-supercharger-v4-350-kw-output/",
		urlToImage:
			"https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2023/07/Tesla-Supercharger-V4-official.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
		publishedAt: "2023-07-26T14:23:01Z",
		content:
			"Tesla has finally confirmed that its new Supercharger V4 has a power output of 350 kW as deployment appears to be ramping up.\r\nSupercharger V4 has been revealed in construction plans for over a year … [+1785 chars]",
	},
	{
		source: {
			id: null,
			name: "Investing.com",
		},
		author: "Reuters",
		title: "In challenge to Tesla, major automakers launch EV charging network",
		description:
			"In challenge to Tesla, major automakers launch EV charging network",
		url:
			"https://www.investing.com/news/stock-market-news/in-challenge-to-tesla-major-automakers-launch-ev-charging-network-3134795",
		urlToImage: "https://i-invdn-com.investing.com/news/LYNXMPEB320ES_L.jpg",
		publishedAt: "2023-07-26T14:21:40Z",
		content:
			"(Reuters) - A group of major automakers on Wednesday said they were forming a new company to provide electric vehicle charging in the United States in a challenge to Tesla (NASDAQ:TSLA) and a bid to … [+2656 chars]",
	},
	{
		source: {
			id: null,
			name: "Electrek",
		},
		author: "Scooter Doll",
		title:
			"7 auto giants unite to build universal network of 30K+ clean-energy-powered fast chargers to North America",
		description:
			"And yes, it’ll have NACS accessibility. In a shocking but exciting announcement this morning, a group of some of the world’s largest automakers has combined forces into a new joint venture to deliver a new “high-powered” charger network across cities and high…",
		url:
			"https://electrek.co/2023/07/26/auto-giants-unite-build-universal-network-clean-energy-fast-charger-north-america/",
		urlToImage:
			"https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2023/07/Charging-Network-EV-no-names.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
		publishedAt: "2023-07-26T14:19:15Z",
		content:
			"And yes, it’ll have NACS accessibility. In a shocking but exciting announcement this morning, a group of some of the world’s largest automakers has combined forces into a new joint venture to deliver… [+5949 chars]",
	},
	{
		source: {
			id: null,
			name: "Biztoc.com",
		},
		author: "finance.yahoo.com",
		title:
			"UPDATE 1-Volkswagen to expand China EV line-up with Xpeng, SAIC partnerships",
		description:
			"Volkswagen on Wednesday announced two agreements aimed at strengthening the German automaker's position in the Chinese market, including a partnership between the Volkswagen brand and China's Xpeng Inc to build two new models. Volkswagen and Xpeng agreed to d…",
		url: "https://biztoc.com/x/5af67ad78723db6c",
		urlToImage: "https://c.biztoc.com/210/og.png",
		publishedAt: "2023-07-26T14:18:08Z",
		content:
			"Volkswagen on Wednesday announced two agreements aimed at strengthening the German automaker's position in the Chinese market, including a partnership between the Volkswagen brand and China's Xpeng I… [+273 chars]",
	},
	{
		source: {
			id: null,
			name: "Forbes",
		},
		author:
			"Sam Abuelsamid, Senior Contributor, \n Sam Abuelsamid, Senior Contributor\n https://www.forbes.com/sites/samabuelsamid/",
		title: "7 Automakers To Form EV Charging Joint Venture With 30,000 Chargers",
		description:
			"General Motors, BMW Group, Mercedes-Benz, Honda, Hyundai, Kia, and Stellantis are creating a joint venture to build a network of 30,000 DC fast chargers for EVs",
		url:
			"https://www.forbes.com/sites/samabuelsamid/2023/07/26/7-automakers-to-form-ev-charging-joint-venture-with-30000-chargers/",
		urlToImage:
			"https://imageio.forbes.com/specials-images/imageserve/64c129258a969cb33a264b73/0x0.jpg?format=jpg&width=1200",
		publishedAt: "2023-07-26T14:16:51Z",
		content:
			"7 automakers to form EV charging joint venture with 30,000 chargers across North America\r\nHonda, General Motors, BMW, Hyundai, Kia, Mercedes-Benz, Stellantis\r\nIn addition to vehicle affordability, th… [+4530 chars]",
	},
	{
		source: {
			id: null,
			name: "Marketscreener.com",
		},
		author: "Reuters",
		title: "In challenge to Tesla, major automakers launch EV charging network",
		description:
			"(marketscreener.com) A group of major automakers on Wednesday said they were forming a new company to provide electric vehicle charging in the United States in a challenge to Tesla and a bid to take advantage of Biden administration subsidies.https://www.mark…",
		url:
			"https://www.marketscreener.com/quote/stock/TESLA-INC-6344549/news/In-challenge-to-Tesla-major-automakers-launch-EV-charging-network-44425903/",
		urlToImage:
			"https://img.zonebourse.com/reuters/2023-07/2023-07-26T141640Z_1_LYNXMPEJ6P0QM_RTROPTP_3_AUTOS-ELECTRIC-CHARGING.JPG",
		publishedAt: "2023-07-26T14:16:40Z",
		content:
			"(Reuters) - A group of major automakers on Wednesday said they were forming a new company to provide electric vehicle charging in the United States in a challenge to Tesla and a bid to take advantage… [+2709 chars]",
	},
	{
		source: {
			id: null,
			name: "CNA",
		},
		author: null,
		title: "In challenge to Tesla, major automakers launch EV charging network",
		description:
			"A group of major automakers on Wednesday said they were forming a new company to provide electric vehicle charging in the United States in a challenge to Tesla and a bid to take advantage of Biden administration subsidies.The group includes General Motors, St…",
		url:
			"https://www.channelnewsasia.com/business/challenge-tesla-major-automakers-launch-ev-charging-network-3656366",
		urlToImage:
			"https://onecms-res.cloudinary.com/image/upload/s--UwO3NrBy--/fl_relative,g_south_east,l_one-cms:core:watermark:reuters,w_0.1/f_auto,q_auto/c_fill,g_auto,h_676,w_1200/v1/one-cms/core/2023-07-26t141640z_1_lynxmpej6p0qm_rtroptp_3_autos-electric-charging.jpg?itok=bk9Tj9Df",
		publishedAt: "2023-07-26T14:16:40Z",
		content:
			"A group of major automakers on Wednesday said they were forming a new company to provide electric vehicle charging in the United States in a challenge to Tesla and a bid to take advantage of Biden ad… [+2623 chars]",
	},
	{
		source: {
			id: null,
			name: "Motley Fool",
		},
		author: "newsfeedback@fool.com (Brett Schafer)",
		title: "Is There Any Hope Left for Lyft Stock?",
		description:
			"The shares are still down more than 80% from their all-time highs.",
		url:
			"https://www.fool.com/investing/2023/07/26/is-there-any-hope-left-for-lyft-stock/",
		urlToImage: "https://g.foolcdn.com/editorial/images/740809/used-car.jpg",
		publishedAt: "2023-07-26T14:15:00Z",
		content:
			"There are a lot of fallen angels from the pandemic-era stock market bubble. Ride-sharing platform Lyft(LYFT 1.30%) is a textbook example of a pandemic bubble stock.\r\nIts shares are off 85% from their… [+4114 chars]",
	},
	{
		source: {
			id: "fortune",
			name: "Fortune",
		},
		author: "Farnoush Amiri, The Associated Press",
		title:
			"House Republicans want to hold Mark Zuckerberg in contempt, saying he 'willfully refused' to comply with a subpoena",
		description:
			'“For many months, Meta has operated in good faith with this committee’s sweeping requests for information," spokesperson Andy Stone said in a statement.',
		url:
			"https://fortune.com/2023/07/26/mark-zuckerberg-contempt-congress-jim-jordan-house-republicans-subpoena/",
		urlToImage:
			"https://content.fortune.com/wp-content/uploads/2023/07/AP23201619761532-e1690380666736.jpg?resize=1200,600",
		publishedAt: "2023-07-26T14:12:59Z",
		content:
			"The Republican chairman of the House Judiciary Committee is threatening to hold Meta CEO Mark Zuckerberg in contempt of Congress for failing to supply documents related to an investigation into suppo… [+2388 chars]",
	},
	{
		source: {
			id: null,
			name: "Motley Fool",
		},
		author: "newsfeedback@fool.com (Nicholas Rossolillo)",
		title:
			"Nvidia's Newest Service Makes It Easier Than Ever to Train AI -- What Investors Need to Know",
		description:
			"Nvidia announced that its DGX Cloud AI training service is now available.",
		url:
			"https://www.fool.com/investing/2023/07/26/nvidias-newest-service-makes-it-easier-than-ever-t/",
		urlToImage:
			"https://g.foolcdn.com/editorial/images/741221/data-center-infrastructure-information-technology.jpg",
		publishedAt: "2023-07-26T14:05:45Z",
		content:
			"Nvidia (NVDA -0.76%), the company traditionally known for designing chips for high-end video game graphics on PCs, has ushered in a new era of AI. The generative AI chatbot ChatGPT quickly picked up … [+4989 chars]",
	},
	{
		source: {
			id: null,
			name: "Drive.com.au",
		},
		author: "Alex Misoyannis",
		title: "2023 Tesla Model 3 RWD review",
		description:
			"With more choice than ever in the EV market, is the Tesla Model 3 still Australia’s best electric car in 2023?",
		url: "https://www.drive.com.au/reviews/2023-tesla-model-3-rwd-review/",
		urlToImage:
			"https://images.drive.com.au/driveau/image/upload/c_fill,f_auto,g_auto,h_675,q_auto:good,w_1200/cms/uploads/onyergk5iutpggal8uiu",
		publishedAt: "2023-07-26T14:01:00Z",
		content:
			"Standard features in the base Model 3 include synthetic leather-look upholstery, LED headlights, a 15-inch touchscreen, tinted panoramic glass roof, dual wireless phone charging pads, power-adjustabl… [+107 chars]",
	},
	{
		source: {
			id: null,
			name: "Barron's",
		},
		author: "Al Root",
		title: "XPeng Stock Soars on Bombshell Investment by Volkswagen",
		description:
			"The German auto maker is investing $700 million in the Chinese EV start-up. The companies will develop two electric vehicles together.",
		url:
			"https://www.barrons.com/articles/xpeng-stock-investment-volkswagen-aa6ed4b8",
		urlToImage: "https://images.barrons.com/im-810004/social",
		publishedAt: "2023-07-26T13:56:28Z",
		content:
			"If you cant beat em, joint em. Thats the tack \r\n Volkswagen\r\n (VOW3. Germany) seems to be taking with electric vehicles in China. The German auto maker is investing $700 million in Chinese EV start-u… [+1636 chars]",
	},
	{
		source: {
			id: "nbc-news",
			name: "NBC News",
		},
		author: "David Ingram",
		title:
			"Evidence-free conspiracy theories about the Obamas’ chef get a boost on X, formerly known as Twitter",
		description:
			"The social media platform X, newly renamed from Twitter, is hosting wild conspiracy theories without evidence claiming that there was foul play in the death of the Obamas’ personal chef on a Martha’s Vineyard pond.",
		url:
			"https://www.nbcnews.com/tech/internet/evidence-free-conspiracy-theories-obamas-chef-get-boost-x-formerly-kno-rcna96255",
		urlToImage:
			"https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2023-07/230725-tafari-campbell-obama-chef-se-539p-898fca.jpg",
		publishedAt: "2023-07-26T13:56:24Z",
		content:
			"The social media platform X, newly renamed from Twitter, is hosting wild conspiracy theories without evidence claiming that there was foul play in the death of the Obamas personal chef on a Marthas V… [+6024 chars]",
	},
	{
		source: {
			id: null,
			name: "Android Headlines",
		},
		author: "Sumit Adhikari",
		title: "Elon Musk to take his SEC case to the Supreme Court",
		description:
			"Elon Musk is reportedly considering taking his fight with the Securities and Exchange Commission (SEC) to the Supreme Court. Attorney Alex Spiro, who is a lawyer for Musk, confirmed on Tuesday that the Tesla CEO plans to ask the highest court in the country t…",
		url:
			"https://www.androidheadlines.com/2023/07/elon-musk-sec-case-supreme-court.html",
		urlToImage:
			"https://www.androidheadlines.com/wp-content/uploads/2022/07/Elon-Musk-Image.png",
		publishedAt: "2023-07-26T13:50:31Z",
		content:
			"Elon Musk is reportedly considering taking his fight with the Securities and Exchange Commission (SEC) to the Supreme Court. Attorney Alex Spiro, who is a lawyer for Musk, confirmed on Tuesday that t… [+2278 chars]",
	},
	{
		source: {
			id: null,
			name: "Yahoo Entertainment",
		},
		author: "Vance Cariaga",
		title:
			"How Much Do Musk, Buffett and Other Billionaires Pay in Social Security Taxes?",
		description:
			"Most Americans will spend the full year paying Social Security payroll taxes, but for some billionaires, that obligation is met in a matter of seconds. For...",
		url:
			"https://finance.yahoo.com/news/much-musk-buffett-other-billionaires-134725246.html",
		urlToImage:
			"https://s.yimg.com/ny/api/res/1.2/4AQnFhkRjSHHkGDaASf2lQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://media.zenfs.com/en/gobankingrates_644/820c5a3f3dd3c23adc8a52816ba6ec43",
		publishedAt: "2023-07-26T13:47:25Z",
		content:
			"ROMUALD MEIGNEUX/SIPA/Shutterstock / ROMUALD MEIGNEUX/SIPA/Shutterstock\r\nMost Americans will spend the full year paying Social Security payroll taxes, but for some billionaires, that obligation is me… [+3466 chars]",
	},
	{
		source: {
			id: null,
			name: "ZyCrypto",
		},
		author: "Aliyu Pokima",
		title:
			"Rebranding Twitter to X Sends Dogecoin On A Rally — Here’s Why DOGE Could Explode to $1",
		description:
			"At the start of the week, Twitter ditched the bird logo for X in a rebrand that has sent the community buzzing, but amid the chatter, Dogecoin (DOGE) has ridden the wave to go on a strong rally.",
		url:
			"https://zycrypto.com/rebranding-twitter-to-x-sends-dogecoin-on-a-rally-heres-why-doge-could-explode-soon/",
		urlToImage:
			"https://zycrypto.com/wp-content/uploads/2022/10/Dogecoin-Set-For-Gargantuan-Gains-As-Elon-Musk-Moves-To-Proceed-With-44B-Twitter-Purchase-Agreement.jpg",
		publishedAt: "2023-07-26T13:45:22Z",
		content:
			"At the start of the week, Twitter ditched the bird logo for X in a rebrand that has sent the community buzzing, but amid the chatter, Dogecoin (DOGE) has ridden the wave to go on a strong rally.\r\nWit… [+2613 chars]",
	},
	{
		source: {
			id: null,
			name: "Biztoc.com",
		},
		author: "aol.com",
		title:
			"I got an early look at Volvo's $34,950 electric SUV and saw why it's one of the best Tesla rivals yet",
		description:
			"None I got an early look at Volvo's $35,000 electric SUV coming in 2024. • None The little EX30 packs an estimated 275 miles of range and a stylish, minimalist interior. • None It's one of the most exciting Tesla rivals yet. Elon Musk's Tesla has been untouch…",
		url: "https://biztoc.com/x/f189bf56cca15deb",
		urlToImage: "https://c.biztoc.com/p/f189bf56cca15deb/s.webp",
		publishedAt: "2023-07-26T13:40:14Z",
		content:
			"None I got an early look at Volvo's $35,000 electric SUV coming in 2024.None The little EX30 packs an estimated 275 miles of range and a stylish, minimalist interior.None It's one of the most excitin… [+268 chars]",
	},
	{
		source: {
			id: null,
			name: "Biztoc.com",
		},
		author: "zerohedge.com",
		title:
			"Tesla Cars Banned From World University Games Prior To Visit From Chinese President Xi Jinping",
		description:
			"Tesla Cars Banned From World University Games Prior To Visit From Chinese President Xi Jinping The Chinese government appears to be treating Tesla Inc. as a national security risk (again). On Wednesday, Bloomberg reported people familiar with the matter said …",
		url: "https://biztoc.com/x/cd71797d2ab3e626",
		urlToImage: "https://c.biztoc.com/p/cd71797d2ab3e626/s.webp",
		publishedAt: "2023-07-26T13:24:03Z",
		content:
			"Tesla Cars Banned From World University Games Prior To Visit From Chinese President Xi Jinping\r\nThe Chinese government appears to be treating Tesla Inc. as a national security risk (again).On Wednesd… [+305 chars]",
	},
	{
		source: {
			id: null,
			name: "Marketscreener.com",
		},
		author: "MarketScreener with dpa-AFX Analyser",
		title: "ROCHE HOLDINGS AG : JP Morgan reiterates its Sell rating",
		description:
			"(marketscreener.com) JP Morgan reiterate its Sell rating. The target price remains set at CHF 275.https://www.marketscreener.com/quote/stock/ROCHE-HOLDING-AG-9364975/news/ROCHE-HOLDINGS-AG-JP-Morgan-reiterates-its-Sell-rating-44425118/?utm_medium=RSS&utm_cont…",
		url:
			"https://www.marketscreener.com/quote/stock/ROCHE-HOLDING-AG-9364975/news/ROCHE-HOLDINGS-AG-JP-Morgan-reiterates-its-Sell-rating-44425118/",
		urlToImage: "https://www.marketscreener.com/images/twitter_MS_fdblanc.png",
		publishedAt: "2023-07-26T13:23:06Z",
		content:
			"JP Morgan reiterate its Sell rating. The target price remains set at CHF 275.\r\n© MarketScreener with dpa-AFX Analyser - 2023\r\n<table><tr><td>\r\n ROCHE HOLDINGS AG : JP Morgan reiterates its Sell ratin… [+4277 chars]",
	},
	{
		source: {
			id: null,
			name: "Marketscreener.com",
		},
		author: "MarketScreener with dpa-AFX Analyser",
		title: "UPS : JP Morgan reiterates its Neutral rating",
		description:
			"(marketscreener.com) Brian Ossenbeck from JP Morgan retains his Neutral opinion on the stock. The target price remains set at USD 181.https://www.marketscreener.com/quote/stock/UNITED-PARCEL-SERVICE-INC-14758/news/UPS-JP-Morgan-reiterates-its-Neutral-rating-4…",
		url:
			"https://www.marketscreener.com/quote/stock/UNITED-PARCEL-SERVICE-INC-14758/news/UPS-JP-Morgan-reiterates-its-Neutral-rating-44425112/",
		urlToImage: "https://www.marketscreener.com/images/twitter_MS_fdblanc.png",
		publishedAt: "2023-07-26T13:23:02Z",
		content:
			"Brian Ossenbeck from JP Morgan retains his Neutral opinion on the stock. The target price remains set at USD 181.\r\n© MarketScreener with dpa-AFX Analyser - 2023\r\n<table><tr><td>\r\n UPS : JP Morgan rei… [+3816 chars]",
	},
	{
		source: {
			id: null,
			name: "Biztoc.com",
		},
		author: "thestreet.com",
		title: "Analyst Dan Ives Believes Google and Microsoft Are Worth Betting On",
		description:
			"Big Tech earnings season has begun. Netflix and Tesla kicked things off last week; Google and Microsoft kept it going July 25. Microsoft (MSFT) - Get Free Report reported a 20.6% rise in adjusted earnings at $2.69 per share. Revenue from its cloud division, M…",
		url: "https://biztoc.com/x/65037c72ba2df278",
		urlToImage: "https://c.biztoc.com/p/65037c72ba2df278/s.webp",
		publishedAt: "2023-07-26T13:18:22Z",
		content:
			"Big Tech earnings season has begun. Netflix and Tesla kicked things off last week; Google and Microsoft kept it going July 25. Microsoft (MSFT) - Get Free Report reported a 20.6% rise in adjusted ear… [+298 chars]",
	},
	{
		source: {
			id: "business-insider",
			name: "Business Insider",
		},
		author: "nnaughton@insider.com (Nora Naughton)",
		title:
			"A big clash is coming for Detroit's Big 3 automakers as the their workers' union gears up for another round of contentious negotiations",
		description:
			"Ford, GM, and Stellantis have returned to the bargaining table to hash out a four-year deal with the United Auto Workers and avoid a possible strike.",
		url:
			"https://www.businessinsider.com/uaw-auto-workers-union-negotiations-contract-strike-ford-gm-stellantis-2023-7",
		urlToImage:
			"https://i.insider.com/64c008a6ed4f460019635a56?width=1200&format=jpeg",
		publishedAt: "2023-07-26T13:13:43Z",
		content:
			"The automotive industry's labor union, the United Auto Workers, is gearing up for a fight with Detroit's Big Three car companies this summer and fall.\r\nFord, GM, and Stellantis (the owner of Chrysler… [+4298 chars]",
	},
	{
		source: {
			id: null,
			name: "Biztoc.com",
		},
		author: "businessinsider.com",
		title:
			"I got an early look at Volvo's $34,950 electric SUV and saw why it's one of the best Tesla rivals yet",
		description:
			"The Volvo EX30 starts at a bargain-bin $34,950. Tim Levin/Insider I got an early look at Volvo's $35,000 electric SUV coming in 2024. The little EX30 packs an estimated 275 miles of range and a stylish, minimalist interior. It's one of the most exciting Tesla…",
		url: "https://biztoc.com/x/a5661cbd466a40e6",
		urlToImage: "https://c.biztoc.com/p/a5661cbd466a40e6/s.webp",
		publishedAt: "2023-07-26T13:12:05Z",
		content:
			"The Volvo EX30 starts at a bargain-bin $34,950.Tim Levin/InsiderI got an early look at Volvo's $35,000 electric SUV coming in 2024. The little EX30 packs an estimated 275 miles of range and a stylish… [+302 chars]",
	},
	{
		source: {
			id: null,
			name: "CNBC",
		},
		author: "Ana Teresa Solá",
		title:
			"New and used EV prices have dropped. But 'it's not a consumer-friendly market,' analyst warns",
		description:
			"Both new and used electric vehicle prices have declined substantially since last year. Yet prices are still pretty high; consider your options before buying.",
		url:
			"https://www.cnbc.com/2023/07/26/new-and-used-ev-prices-have-dropped-but-dont-rush-to-buy.html",
		urlToImage:
			"https://image.cnbcfm.com/api/v1/image/106830629-1611749736008-gettyimages-1180954684-dscf6529_20191014113311407.jpeg?v=1690377046&w=1920&h=1080",
		publishedAt: "2023-07-26T13:10:00Z",
		content:
			"Prices for both used and new electric vehicles have dropped substantially from a year ago. But don't rush to buy: Costs are still relatively high.\r\n\"It's not a consumer-friendly market right now,\" sa… [+5190 chars]",
	},
	{
		source: {
			id: "rt",
			name: "RT",
		},
		author: "RT",
		title: "Why Elon Musk rebranded Twitter to X",
		description:
			"The billionaire’s bid to turn the social media platform into an everything app was a bold but foolhardy decision Read Full Article at RT.com",
		url: "https://www.rt.com/news/580328-elon-musk-twitter-x/",
		urlToImage:
			"https://mf.b37mrtl.ru/files/2023.07/article/64c1193c85f540223941052a.jpg",
		publishedAt: "2023-07-26T13:03:12Z",
		content:
			"Elon Musk, the billionaire and business magnate with a weird obsession with the letter X, changed the famous Twitter brand to ‘X’ seemingly overnight. Many are suggesting, rightfully, that this will … [+5648 chars]",
	},
	{
		source: {
			id: null,
			name: "UPROXX",
		},
		author: "Derrick Rossignol",
		title:
			"Jack White, Who’s Had Issues With Elon Musk Lately, Is Auctioning Off His Tesla",
		description:
			"Getty Image\r\n\n\nThe car is being auctioned as part of the Third Man Garage Sale through White's Third Man Records label.",
		url: "https://uproxx.com/indie/jack-white-auctioning-tesla-elon-musk/",
		urlToImage:
			"https://uproxx.com/wp-content/uploads/2023/07/jack-white-elon-musk.jpg?w=1024",
		publishedAt: "2023-07-26T12:50:14Z",
		content:
			"Elon Musk hasn’t exactly been the most endearing businessman in the world in light of some of the head-scratching decisions he’s made since taking over Twitter. Jack White has been a vocal critic, an… [+1776 chars]",
	},
	{
		source: {
			id: "business-insider",
			name: "Business Insider",
		},
		author: "Tim Levin",
		title:
			"I got an early look at Volvo's $34,950 electric SUV and saw why it's one of the best Tesla rivals yet",
		description:
			"The Volvo EX30 has 275 miles of range and one of the coolest interiors I've seen — all for a low starting price.",
		url:
			"https://www.businessinsider.com/volvo-ex30-electric-suv-tesla-rival-photos-2023-7",
		urlToImage:
			"https://i.insider.com/64bff0aebea3440019613412?width=1200&format=jpeg",
		publishedAt: "2023-07-26T12:47:40Z",
		content:
			"The Volvo EX30 starts at a bargain-bin $34,950.Tim Levin/Insider\r\n<ul>\n<li>I got an early look at Volvo's $35,000 electric SUV coming in 2024. </li>\n<li>The little EX30 packs an estimated 275 miles o… [+5705 chars]",
	},
	{
		source: {
			id: null,
			name: "Biztoc.com",
		},
		author: "vox.com",
		title: "Biden’s $250 billion lure to clean up the dirty legacy of fossil fuels",
		description:
			"Twenty-eight-year-old New Jersey coal-fired power plant Logan Generating Station was demolished last year in pursuit of cleaner electricity. | Hannah Beier/Bloomberg via Getty Images There’s hidden climate potential in overlooked fossil fuel infrastructure. T…",
		url: "https://biztoc.com/x/1c7928c75863e99a",
		urlToImage: "https://c.biztoc.com/p/1c7928c75863e99a/s.webp",
		publishedAt: "2023-07-26T12:40:04Z",
		content:
			"Twenty-eight-year-old New Jersey coal-fired power plant Logan Generating Station was demolished last year in pursuit of cleaner electricity. | Hannah Beier/Bloomberg via Getty Images\r\nTheres hidden c… [+299 chars]",
	},
	{
		source: {
			id: null,
			name: "Biztoc.com",
		},
		author: "fortune.com",
		title: "Elon Musk cuts ad prices to lure companies back to Twitter/X",
		description:
			"Elon Musk is looking for advertisers. And quick. Thanks to heavy interest payments on $13 billion in takeover-related debt and a 50% plunge in ad revenue, Musk’s company continues to bleed cash even after he sacked roughly eight out of every 10 Twitter employ…",
		url: "https://biztoc.com/x/49f0d64279bdd59d",
		urlToImage: "https://c.biztoc.com/p/49f0d64279bdd59d/s.webp",
		publishedAt: "2023-07-26T12:40:03Z",
		content:
			"Elon Musk is looking for advertisers. And quick.Thanks to heavy interest payments on $13 billion in takeover-related debt and a 50% plunge in ad revenue, Musks company continues to bleed cash even af… [+292 chars]",
	},
	{
		source: {
			id: null,
			name: "Motley Fool",
		},
		author: "newsfeedback@fool.com (RJ Fulton)",
		title:
			"Tesla's Record-Breaking Earnings Report: What Every Investor Needs to Know",
		description:
			"Tesla's most recent earnings was a mixed bag, but one thing is clear.",
		url:
			"https://www.fool.com/investing/2023/07/26/teslas-record-breaking-earnings-report-what-every/",
		urlToImage:
			"https://g.foolcdn.com/editorial/images/740649/an-engineer-uses-computer-software-to-design-a-car.jpg",
		publishedAt: "2023-07-26T12:35:00Z",
		content:
			"Tesla's (TSLA -1.41%) recent Q2 2023 earnings report was met with mixed feelings. The company once again set new records in various metrics, such as quarterly vehicle production, deliveries, and reve… [+6136 chars]",
	},
	{
		source: {
			id: null,
			name: "Forbes",
		},
		author:
			"Billy Bambrough, Senior Contributor, \n Billy Bambrough, Senior Contributor\n https://www.forbes.com/sites/billybambrough/",
		title:
			"Elon Musk Has Quietly Primed Crypto For An ‘Absolute Game-Changer’ That Could Cause Chaos For The Price Of Bitcoin, Ethereum, XRP And Dogecoin",
		description:
			"Dogecoin, the meme-based cryptocurrency that owes much of its success over the last few years to Tesla billionaire and X (Twitter) owner Elon Musk, has seen a price su...",
		url:
			"https://www.forbes.com/sites/digital-assets/2023/07/26/elon-musk-has-quietly-primed-crypto-for-an-absolute-game-changer-that-could-cause-chaos-for-the-price-of-bitcoin-ethereum-xrp-and-dogecoin/",
		urlToImage:
			"https://imageio.forbes.com/specials-images/imageserve/64c10bb30b927e102fea0a55/0x0.jpg?format=jpg&width=1200",
		publishedAt: "2023-07-26T12:32:11Z",
		content:
			"BitcoinBTC\r\n and ethereum, the two largest cryptocurrencies by market capitalization, have been thrust back into the limelight by first Ripple's XRPXRP\r\n and now dogecoin following a shock Wall Stree… [+3901 chars]",
	},
	{
		source: {
			id: null,
			name: "Vox",
		},
		author: "Rebecca Leber",
		title: "Biden’s $250 billion lure to clean up the dirty legacy of fossil fuels",
		description:
			"Pipelines, power plants, and even gas stations could be candidates for the Department of Energy Loan Programs Office.",
		url:
			"https://www.vox.com/climate/23771835/biden-ira-climate-fossil-fuel-energy-investment",
		urlToImage:
			"https://cdn.vox-cdn.com/thumbor/OSJ2xZmtnut8XQYNUv9pJeuy60U=/0x392:5472x3257/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24809610/GettyImages_1245582733.jpg",
		publishedAt: "2023-07-26T12:30:00Z",
		content:
			"The International Energy Agency expects the world to invest about a billion dollars a day into solar in 2023, marking the first time the renewable has surpassed global investment in oil production. I… [+10580 chars]",
	},
	{
		source: {
			id: null,
			name: "Socialmediaexplorer.com",
		},
		author: "Adam",
		title:
			"Elon Musk Changes X Logo—And Then Changes It Back Again—As Twitter Rebrand Evolves",
		description:
			"Topline Elon Musk on Tuesday changed X’s logo—and changed it back again—just days after replacing Twitter’s blue bird, as he embarks on the platform’s swift rebrand into an “everything app” that has surprised onlookers with...read more\nThe post Elon Musk Chan…",
		url:
			"https://socialmediaexplorer.com/content-sections/news-and-noise/elon-musk-changes-x-logo-and-then-changes-it-back-again-as-twitter-rebrand-evolves/",
		urlToImage:
			"https://socialmediaexplorer.com/wp-content/uploads/2023/07/1690374371_0x0.jpg",
		publishedAt: "2023-07-26T12:25:11Z",
		content:
			"Elon Musk on Tuesday changed Xs logoand changed it back againjust days after replacing Twitters blue bird, as he embarks on the platforms swift rebrand into an everything app that has surprised onloo… [+4063 chars]",
	},
	{
		source: {
			id: "fortune",
			name: "Fortune",
		},
		author: "Christiaan Hetzner",
		title: "Elon Musk cuts ad prices to lure companies back to Twitter/X",
		description:
			"Despite the turmoil surrounding his management of the social media platform, Musk remains convinced that 'X will become the most valuable brand on Earth.'",
		url:
			"https://fortune.com/2023/07/26/elon-musk-twitter-advertising-price-cuts-rebranding/",
		urlToImage:
			"https://content.fortune.com/wp-content/uploads/2023/07/GettyImages-1499013206-e1690372293481.jpg?resize=1200,600",
		publishedAt: "2023-07-26T12:24:08Z",
		content:
			"Elon Musk is looking for advertisers. And quick.Thanks to heavy interest payments on $13 billion in takeover-related debt and a 50% plunge in ad revenue, Musks company continues to bleed cash even af… [+4076 chars]",
	},
	{
		source: {
			id: null,
			name: "road.cc",
		},
		author: "Simon_MacMichael",
		title:
			"Whose ULEZ is it anyway? Political chicanery as clean air zone set to expand to outer London",
		description:
			"Opposition to the forthcoming expansion of the Ultra-low Emissions Zone (ULEZ) to cover the whole of Greater London has been singled out as the single biggest reason the Conservatives held onto Boris Johnson’s former Uxbridge & South Ruislip in last Thursday’…",
		url: "https://road.cc/content/blog/whose-ulez-it-anyway-302795",
		urlToImage:
			"https://cdn.road.cc/sites/default/files/styles/main_width/public/ulez-signs-licensed-cc-20-matt-brown-flickr.jpg",
		publishedAt: "2023-07-26T12:21:00Z",
		content:
			"Opposition to the forthcoming expansion of the Ultra-low Emissions Zone (ULEZ) to cover the whole of Greater London has been singled out as the single biggest reason the Conservatives held onto Boris… [+8961 chars]",
	},
	{
		source: {
			id: null,
			name: "Biztoc.com",
		},
		author: "washingtonpost.com",
		title: "San Francisco once courted Twitter. Now it’s a headache",
		description:
			"Since Musk took ownership last October, the company formerly known as Twitter has been sued for failing to pay millions in rent and investigated for illegally converting offices into bunk rooms after Musk said he was sleeping on a couch on the seventh floor. …",
		url: "https://biztoc.com/x/6d6fc5aa30bcdbb5",
		urlToImage: "https://c.biztoc.com/p/6d6fc5aa30bcdbb5/s.webp",
		publishedAt: "2023-07-26T12:16:34Z",
		content:
			"Since Musk took ownership last October, the company formerly known as Twitter has been sued for failing to pay millions in rent and investigated for illegally converting offices into bunk rooms after… [+299 chars]",
	},
	{
		source: {
			id: null,
			name: "Biztoc.com",
		},
		author: "aol.com",
		title:
			"Stocks will tumble, recession will strike, and dollar dominance is at risk, Thomas Peterffy warns",
		description:
			"None Thomas Peterffy expects stocks to tumble and a recession to hit, and sees threats to the US dollar. • None The Interactive Brokers founder says his sizeable bitcoin wager could be worth a lot or nothing. • None Many of his customers have made bank on Big…",
		url: "https://biztoc.com/x/3ab719e4d59f701a",
		urlToImage: "https://c.biztoc.com/210/og.png",
		publishedAt: "2023-07-26T12:16:12Z",
		content:
			"None Thomas Peterffy expects stocks to tumble and a recession to hit, and sees threats to the US dollar.None The Interactive Brokers founder says his sizeable bitcoin wager could be worth a lot or no… [+308 chars]",
	},
	{
		source: {
			id: null,
			name: "Ozbargain.com.au",
		},
		author: "jimojr",
		title: "30 Day Kogan FIRST Membership for $1 (Renews at $99 Annually) @ Kogan",
		description:
			"Get 30 days of FIRST membership for just $1, after your first 30 days, Kogan FIRST will be automatically billed at $99 annually. Cancel anytime.\n\nJoin Kogan FIRST now for just $1 and you could win a Tesla or $60,000 cash! Entries close on August 21st. (You mu…",
		url: "https://www.ozbargain.com.au/node/790321",
		urlToImage: "https://files.ozbargain.com.au/n/21/790321l.jpg?h=075ae06a",
		publishedAt: "2023-07-26T12:15:20Z",
		content:
			"Get 30 days of FIRST membership for just $1, after your first 30 days, Kogan FIRST will be automatically billed at $99 annually. Cancel anytime.\r\nJoin Kogan FIRST now for just $1 and you could win a … [+111 chars]",
	},
	{
		source: {
			id: null,
			name: "Investing.com",
		},
		author: "Reuters",
		title: "Stellantis CEO says Tesla margins hurt as EV maker faces reality check",
		description:
			"Stellantis CEO says Tesla margins hurt as EV maker faces reality check",
		url:
			"https://www.investing.com/news/stock-market-news/stellantis-ceo-says-tesla-margins-hurt-as-ev-maker-faces-reality-check-3134609",
		urlToImage: "https://i-invdn-com.investing.com/news/LYNXMPEB5B115_L.jpg",
		publishedAt: "2023-07-26T12:10:49Z",
		content:
			"MILAN (Reuters) - Stellantis head Carlos Tavares said on Wednesday that the profitability of Tesla (NASDAQ:TSLA) was declining as the rival U.S. automaker entered the real world of manufacturing and … [+1460 chars]",
	},
	{
		source: {
			id: null,
			name: "Biztoc.com",
		},
		author: "reuters.com",
		title: "Stellantis CEO says Tesla margins hurt as EV maker faces reality check",
		description:
			'head Carlos Tavares said on Wednesday that the profitability of Tesla (TSLA.O) was declining as the rival U.S. automaker entered the real world of manufacturing and competition. "They are entering my world, the world of tight pricing, cost competitiveness, an…',
		url: "https://biztoc.com/x/86b2f35ed95aa197",
		urlToImage: "https://c.biztoc.com/p/86b2f35ed95aa197/s.webp",
		publishedAt: "2023-07-26T12:10:04Z",
		content:
			"Stellantis (STLAM.MI) head Carlos Tavares said on Wednesday that the profitability of Tesla (TSLA.O) was declining as the rival U.S. automaker entered the real world of manufacturing and competition.… [+264 chars]",
	},
	{
		source: {
			id: null,
			name: "Marketscreener.com",
		},
		author: "Reuters",
		title: "Stellantis CEO says Tesla margins hurt as EV maker faces reality check",
		description:
			"(marketscreener.com) Stellantis head Carlos Tavares said on Wednesday that the profitability of Tesla was declining as the rival U.S. automaker entered the real world of manufacturing and competition. https://www.marketscreener.com…",
		url:
			"https://www.marketscreener.com/quote/stock/TESLA-INC-6344549/news/Stellantis-CEO-says-Tesla-margins-hurt-as-EV-maker-faces-reality-check-44423846/",
		urlToImage:
			"https://img.zonebourse.com/reuters/2021-05/2021-05-18T100834Z_1_LYNXNPEH4H0IU-OCABS_RTROPTP_3_CBUSINESS-US-STELLANTIS-FOXCONN-PARTNERSHIP.JPG",
		publishedAt: "2023-07-26T12:06:00Z",
		content:
			"MILAN (Reuters) - Stellantis head Carlos Tavares said on Wednesday that the profitability of Tesla was declining as the rival U.S. automaker entered the real world of manufacturing and competition.\r\n… [+1505 chars]",
	},
	{
		source: {
			id: null,
			name: "Yahoo Entertainment",
		},
		author: "Reuters",
		title: "Stellantis CEO says Tesla margins hurt as EV maker faces reality check",
		description:
			"Stellantis head Carlos Tavares said on Wednesday that the profitability of Tesla was declining as the rival U.S. automaker entered the real world of...",
		url:
			"https://finance.yahoo.com/news/stellantis-ceo-says-tesla-margins-120600748.html",
		urlToImage:
			"https://media.zenfs.com/en/reuters-finance.com/eeb9c795cedeefd6d20e3c9c9fea79d5",
		publishedAt: "2023-07-26T12:06:00Z",
		content:
			"MILAN (Reuters) - Stellantis head Carlos Tavares said on Wednesday that the profitability of Tesla was declining as the rival U.S. automaker entered the real world of manufacturing and competition.\r\n… [+1502 chars]",
	},
	{
		source: {
			id: null,
			name: "Motley Fool",
		},
		author: "newsfeedback@fool.com (Timothy Green)",
		title: "General Motors Boosts Guidance: Time to Buy the Stock?",
		description: "GM's profits are soaring.",
		url:
			"https://www.fool.com/investing/2023/07/26/general-motors-boosts-guidance-time-to-buy-the-sto/",
		urlToImage:
			"https://g.foolcdn.com/editorial/images/741113/2024-silverado-ev-rst-041.jpg",
		publishedAt: "2023-07-26T12:05:00Z",
		content:
			"Despite heavy investments in electric vehicles and autonomous driving, General Motors(GM -3.51%) is having no trouble churning out impressive profits. The company grew revenue by 25.1% year over year… [+4010 chars]",
	},
	{
		source: {
			id: null,
			name: "Thelineofbestfit.com",
		},
		author: "Tyler Damara Kelly",
		title:
			"Jack White to auction White Stripes guitar and his personal Tesla to help revive Detroit’s Clark Park",
		description:
			"Jack White to auction White Stripes guitar and his personal Tesla to help revive Detroit’s Clark Park, in partnership with Third Man Records and Everything But The House.",
		url:
			"https://www.thelineofbestfit.com/news/jack-white-to-auction-white-stripes-guitar-and-his-personal-tesla-to-help-revive-detroits-clark-park",
		urlToImage:
			"https://optimise2.assets-servd.host/best-fit/production/images/jack-white-2021-third-man-records-olivia-jean.jpeg?w=1200&h=799&q=100&auto=format&fit=crop&dm=1642799208&s=942c0e0d3a8e69ae66e3aee4036e60d2",
		publishedAt: "2023-07-26T12:00:00Z",
		content:
			"Jack White and Third Man Records have partnered with Everything But The House to auction memorabilia from his garage and the labels archives.\r\nSome of the items included in the auction are an acousti… [+770 chars]",
	},
	{
		source: {
			id: null,
			name: "Forbes",
		},
		author:
			"Ian Wilding, Forbes Councils Member",
		title: "Touching Lives: The Art Of Creating Micro-Impacts With Your Product",
		description:
			"In the long run, micro-impacts can translate into macro returns for businesses.",
		url:
			"https://www.forbes.com/sites/forbesbusinesscouncil/2023/07/26/touching-lives-the-art-of-creating-micro-impacts-with-your-product/",
		urlToImage:
			"https://imageio.forbes.com/specials-images/imageserve/64bfdbb19c80d822afb8ceda/0x0.jpg?format=jpg&width=1200",
		publishedAt: "2023-07-26T12:00:00Z",
		content:
			"Ian Wilding is the CEO of Hangar 75, a Global Venture Accelerator committed to sustainable impact. \r\ngetty\r\nIn an era where customer choices are abundant, the ventures that thrive are those that touc… [+4952 chars]",
	},
	{
		source: {
			id: null,
			name: "Biztoc.com",
		},
		author: "billboard.com",
		title:
			"Jack White Selling Personal Tesla, White Stripes, Raconteurs Gear to Benefit Detroit Park",
		description:
			"Jack White is putting some of his classic White Stripes and Raconteurs gear up for auction for a very good cause. White’s Third Man label has teamed up with Cincinnati-based re-seller Everything But the House for a “Third Man Garage Sale” auction of memorabil…",
		url: "https://biztoc.com/x/6335a620722ea21b",
		urlToImage: "https://c.biztoc.com/p/6335a620722ea21b/s.webp",
		publishedAt: "2023-07-26T11:54:09Z",
		content:
			"Jack White is putting some of his classic White Stripes and Raconteurs gear up for auction for a very good cause. Whites Third Man label has teamed up with Cincinnati-based re-seller Everything But t… [+313 chars]",
	},
	{
		source: {
			id: null,
			name: "Motley Fool",
		},
		author: "newsfeedback@fool.com (Daniel Sparks)",
		title:
			"Tesla Deliveries Could Jump Next Year, but the Growth Rate May Be Lower",
		description:
			"There's good reason to expect more strong growth from the electric car maker next year.",
		url:
			"https://www.fool.com/investing/2023/07/26/tesla-deliveries-could-jump-next-year-but-the-grow/",
		urlToImage: "https://g.foolcdn.com/editorial/images/740947/tesla-stock.jpg",
		publishedAt: "2023-07-26T11:31:00Z",
		content:
			"Given Tesla's (TSLA -1.41%) extremely pricey valuation, with a price-to-earnings (P/E) ratio of 75, investors need to constantly assess the likelihood of continued strong growth. A valuation like thi… [+3154 chars]",
	},
	{
		source: {
			id: null,
			name: "Biztoc.com",
		},
		author: "asiafinancial.com",
		title: "China’s CATL Posts Record Profit Even As Slowing Demand Bites",
		description:
			"Chinese battery giant CATL saw profits jump more than 63% in the second quarter of the year, taking its income for the first half of the year to record highs despite slowing demand and increasing competition. The battery-maker’s filings on Tuesday showed it c…",
		url: "https://biztoc.com/x/7065237bb39304a4",
		urlToImage: "https://c.biztoc.com/p/7065237bb39304a4/s.webp",
		publishedAt: "2023-07-26T11:30:07Z",
		content:
			"Chinese battery giant CATL saw profits jump more than 63% in the second quarter of the year, taking its income for the first half of the year to record highs despite slowing demand and increasing com… [+312 chars]",
	},
	{
		source: {
			id: null,
			name: "Motley Fool",
		},
		author: "newsfeedback@fool.com (RJ Fulton)",
		title: "3 Reasons Every Investor Should Own at Least a Little Bitcoin",
		description:
			"The original cryptocurrency continues to prove why it's a unique asset.",
		url:
			"https://www.fool.com/investing/2023/07/26/3-reasons-every-investor-should-own-at-least-a-lit/",
		urlToImage:
			"https://g.foolcdn.com/editorial/images/740885/bitcoin-cryptocurrency-smashing-through-dollar-bill-2.jpg",
		publishedAt: "2023-07-26T11:30:00Z",
		content:
			"In a financial and political landscape filled with uncertainties, one asset has emerged as a beacon of hope for investors seeking a truly decentralized and resilient asset: Bitcoin (BTC 0.18%). With … [+5049 chars]",
	},
	{
		source: {
			id: null,
			name: "Biztoc.com",
		},
		author: "barrons.com",
		title: "TE Connectivity Beat Earnings Estimates. Tesla Helped",
		description:
			"Electrical components supplier TE Connectivity does a little of everything, serving customers in industries from aerospace to cars to telecommunications. #teconnectivity",
		url: "https://biztoc.com/x/5f3b7a3c117bcd1f",
		urlToImage: "https://c.biztoc.com/p/5f3b7a3c117bcd1f/s.webp",
		publishedAt: "2023-07-26T11:28:18Z",
		content:
			"Electrical components supplier TE Connectivity does a little of everything, serving customers in industries from aerospace to cars to telecommunications.\r\n#teconnectivity\r\nThis story appeared on barr… [+9 chars]",
	},
	{
		source: {
			id: null,
			name: "Barron's",
		},
		author: "Al Root",
		title: "TE Connectivity Beat Earnings Estimates. Tesla Helped.",
		description:
			"The electrical components supplier reported earnings per share of $1.77 for its fiscal third quarter. Wall Street was looking for $1.66.",
		url:
			"https://www.barrons.com/articles/te-connectivity-earnings-stock-tesla-ev-e262fe23",
		urlToImage: "https://images.barrons.com/im-473746/social",
		publishedAt: "2023-07-26T11:26:55Z",
		content:
			"Electrical components supplier \r\n TE Connectivity\r\n does a little of everything, serving customers in industries from aerospace to cars to telecommunications. Its earnings are a good read on whats go… [+2931 chars]",
	},
	{
		source: {
			id: "business-insider",
			name: "Business Insider",
		},
		author: "tmohamed@insider.com (Theron Mohamed)",
		title:
			"Stocks will tumble, recession will strike, and dollar dominance is at risk, Thomas Peterffy warns",
		description:
			"Interactive Brokers' billionaire founder says his bitcoin bet could be treasure or trash, and many investors are sitting on massive Big Tech gains.",
		url:
			"https://markets.businessinsider.com/news/stocks/thomas-peterffy-interactive-brokers-stock-market-outlook-recession-dollar-bitcoin-2023-7",
		urlToImage:
			"https://i.insider.com/64c0ea04671ed60019154bbd?width=1200&format=jpeg",
		publishedAt: "2023-07-26T11:25:46Z",
		content:
			"Prepare for stocks to plunge, a recession to hit, and the US dollar to falter, Thomas Peterffy has warned.\r\nThe billionaire founder of Interactive Brokers also said his bitcoin bet could be worth a f… [+2891 chars]",
	},
	{
		source: {
			id: null,
			name: "Investing.com",
		},
		author: "Reuters",
		title: "In Mexico, private cash races to plug nearshoring energy crunch",
		description: "In Mexico, private cash races to plug nearshoring energy crunch",
		url:
			"https://www.investing.com/news/commodities-news/in-mexico-private-cash-races-to-plug-nearshoring-energy-crunch-3134438",
		urlToImage: "https://i-invdn-com.investing.com/news/LYNXNPEBA206K_L.jpg",
		publishedAt: "2023-07-26T11:06:59Z",
		content:
			"By Isabel Woodford\r\nMEXICO CITY (Reuters) - For Mexican industrial park owners like Sergio Bermudez, business is booming amid a wave of U.S businesses setting up over the border.\r\nSo-called nearshori… [+5828 chars]",
	},
	{
		source: {
			id: null,
			name: "Motley Fool",
		},
		author: "newsfeedback@fool.com (Royston Yang)",
		title: "3 Soaring Stocks I'd Buy Now With No Hesitation",
		description:
			"These three stocks boast great prospects and can enjoy multiyear growth.",
		url:
			"https://www.fool.com/investing/2023/07/26/3-soaring-stocks-id-buy-now-with-no-hesitation/",
		urlToImage:
			"https://g.foolcdn.com/editorial/images/740892/driver-charging-electric-vehicle.jpg",
		publishedAt: "2023-07-26T11:05:00Z",
		content:
			"It has been a surprising year for growth stocks as the Nasdaq Composite index roared back after losing a third of its value last year.\r\nThe bellwether technology stock index delivered its best first-… [+5351 chars]",
	},
	{
		source: {
			id: null,
			name: "CleanTechnica",
		},
		author: "Zachary Shahan",
		title:
			"SK Signet To Provide 1,000 Ultra-Fast 400-kW EV Chargers To Francis Energy",
		description:
			"SK Signet has announced that it has signed an agreement with EV charging network Francis Energy to supply it with 1,000 of the company’s 400 kW EV charging dispensers (chargers). Francis Energy may not be as familiar a name as Electrify America, EVgo, or Tesl…",
		url:
			"https://cleantechnica.com/2023/07/26/sk-signet-to-provide-1000-ultra-fast-400-kw-ev-chargers-to-francis-energy/",
		urlToImage:
			"https://cleantechnica.com/files/2023/07/SK-Signet-Francis-Energy-Charging-Station-Agreement-800x417.png",
		publishedAt: "2023-07-26T11:03:58Z",
		content:
			"SK Signet has announced that it has signed an agreement with EV charging network Francis Energy to supply it with 1,000 of the company’s 400 kW EV charging dispensers (chargers). Francis Energy may n… [+3584 chars]",
	},
	{
		source: {
			id: null,
			name: "Yahoo Entertainment",
		},
		author: "Isabel Woodford",
		title: "In Mexico, private cash races to plug nearshoring energy crunch",
		description:
			"For Mexican industrial park owners like Sergio Bermudez, business is booming amid a wave of U.S businesses setting up over the border.  So-called nearshoring...",
		url:
			"https://finance.yahoo.com/news/mexico-private-cash-races-plug-110326240.html",
		urlToImage:
			"https://media.zenfs.com/en/reuters-finance.com/69e46bd331f6af52c419166590b0f692",
		publishedAt: "2023-07-26T11:03:26Z",
		content:
			"By Isabel Woodford\r\nMEXICO CITY (Reuters) - For Mexican industrial park owners like Sergio Bermudez, business is booming amid a wave of U.S businesses setting up over the border.\r\nSo-called nearshori… [+5843 chars]",
	},
	{
		source: {
			id: null,
			name: "Marketscreener.com",
		},
		author: "Reuters",
		title: "In Mexico, private cash races to plug nearshoring energy crunch",
		description:
			"(marketscreener.com) For Mexican industrial park owners like Sergio Bermudez, business is booming amid a wave of U.S businesses setting up over the border.https://www.marketscreener.com/quote/stock/GRID-INC-155977427/news/In-Mexico-private-cash-races-to-plug-…",
		url:
			"https://www.marketscreener.com/quote/stock/GRID-INC-155977427/news/In-Mexico-private-cash-races-to-plug-nearshoring-energy-crunch-44422818/",
		urlToImage:
			"https://img.zonebourse.com/reuters/2023-07/2023-07-26T110326Z_1_LYNXMPEJ6P0HR_RTROPTP_3_MEXICO-ENERGY.JPG",
		publishedAt: "2023-07-26T11:03:26Z",
		content:
			"MEXICO CITY (Reuters) - For Mexican industrial park owners like Sergio Bermudez, business is booming amid a wave of U.S businesses setting up over the border.\r\n So-called nearshoring has pulled over … [+5858 chars]",
	},
	{
		source: {
			id: null,
			name: "MarketWatch",
		},
		author: "Steve Goldstein",
		title:
			"Inflation is heading to zero, according to the one factor Jerome Powell absolutely will not discuss",
		description:
			"The one thing you won't hear Fed Chair Jerome Powell discuss on Wednesday is the money supply, which is falling at a precipitous rate.",
		url:
			"https://www.marketwatch.com/story/inflation-is-heading-to-zero-according-to-the-one-factor-jerome-powell-absolutely-will-not-discuss-5fb6811b",
		urlToImage: "https://images.mktw.net/im-823951/social",
		publishedAt: "2023-07-26T10:50:00Z",
		content:
			"Happy Fed day to all who observe. Market expectations are for a quarter-point rate hike from the Federal Open Market Committee, and some weaselly language pointing to the possibility of future rate h… [+6478 chars]",
	},
	{
		source: {
			id: null,
			name: "NDTV News",
		},
		author: "NDTV Sports Desk",
		title:
			"On Cardiac Arrest Of LeBron's Teenager Son, Musk Hints At 'Vaccine' Role",
		description:
			"The entire basketball community was left in shock after NBA superstar LeBron James' eldest son, Bronny, suffered a cardiac arrest on Monday.",
		url:
			"https://sports.ndtv.com/basketball/on-cardiac-arrest-of-lebron-james-teenager-son-elon-musk-hints-at-vaccine-role-4241643",
		urlToImage:
			"https://c.ndtvimg.com/2023-07/a32t9n8_elon-musk-and-bronny-james_625x300_26_July_23.jpg?im=FitAndFill,algorithm=dnn,width=1200,height=675",
		publishedAt: "2023-07-26T10:49:45Z",
		content:
			"The entire basketball community was left in shock after NBA superstar LeBron James' eldest son, Bronny, suffered a cardiac arrest on Monday. The incident took place when the 18-year-old Bronny was tr… [+1921 chars]",
	},
	{
		source: {
			id: null,
			name: "Paul Tan's Automotive News",
		},
		author: "Anthony Lim",
		title:
			"Government’s decision to retain approved permit (AP) system a regressive move, according to economists",
		description:
			"Last week, minister of investment, trade and industry Tengku Datuk Seri Zafrul Abdul Aziz reiterated that the government has no intention of phasing out the approved permit (AP) system for vehicle imports despite providing a […]\nThe post Government’s decision…",
		url:
			"https://paultan.org/2023/07/26/governments-decision-to-retain-approved-permit-ap-system-a-regressive-move-according-to-economists/",
		urlToImage: "https://paultan.org/image/2019/03/Recon-car-showroom-1200x785.jpg",
		publishedAt: "2023-07-26T10:36:57Z",
		content:
			"Last week, minister of investment, trade and industry Tengku Datuk Seri Zafrul Abdul Aziz reiterated that the government has no intention of phasing out the approved permit (AP) system for vehicle im… [+1936 chars]",
	},
	{
		source: {
			id: null,
			name: "GlobeNewswire",
		},
		author: "SkyQuest Technology Consulting Pvt. Ltd.",
		title: "Solar-Powered Success: How the Solar Cell Market is Taking Over",
		description:
			"The forecast period (2023-2030) is expected to witness significant growth in the Solar Cells market, reaching USD 317.93 billion at a CG road of 15.8%. This growth is fueled by various factors such as government subsidies and incentives, technological advance…",
		url:
			"https://www.globenewswire.com/news-release/2023/07/26/2711120/0/en/Solar-Powered-Success-How-the-Solar-Cell-Market-is-Taking-Over.html",
		urlToImage:
			"https://ml.globenewswire.com/Resource/Download/c673c6fa-f0e7-47bf-8490-fe528c593820",
		publishedAt: "2023-07-26T10:30:00Z",
		content:
			"Westford, USA, July 26, 2023 (GLOBE NEWSWIRE) -- Additionally, the latest research findings reveal that solar energy is the cheapest form of electricity in history, with the cost of solar power decli… [+6463 chars]",
	},
	{
		source: {
			id: null,
			name: "Forbes",
		},
		author:
			"Robert Hart, Forbes Staff, \n Robert Hart, Forbes Staff\n https://www.forbes.com/sites/roberthart/",
		title:
			"Elon Musk Changes X Logo—And Then Changes It Back Again—As Twitter Rebrand Evolves",
		description:
			"In a response to critics, Musk promised “X will become the most valuable brand on Earth.”",
		url:
			"https://www.forbes.com/sites/roberthart/2023/07/26/elon-musk-changes-x-logo-and-then-changes-it-back-again-as-twitter-rebrand-evolves/",
		urlToImage:
			"https://imageio.forbes.com/specials-images/imageserve/64c0eee9b26575296516a7fe/0x0.jpg?format=jpg&crop=3099,1743,x1438,y2280,safe&width=1200",
		publishedAt: "2023-07-26T10:23:22Z",
		content:
			"Elon Musk on Tuesday changed Xs logoand changed it back againjust days after replacing Twitters blue bird, as he embarks on the platforms swift rebrand into an everything app that has surprised onloo… [+4030 chars]",
	},
	{
		source: {
			id: null,
			name: "Biztoc.com",
		},
		author: "fortune.com",
		title:
			"Teslas barred from China’s World University Games in Chengdu ahead of a Xi visit",
		description:
			"Tesla Inc. vehicles are barred from parts of a major Chinese city as it prepares for a visit by President Xi Jinping for the start of the World University Games on Friday, according to people familiar with the matter. Authorities in Chengdu, a city of 21 mill…",
		url: "https://biztoc.com/x/6aa11e838d46806a",
		urlToImage: "https://c.biztoc.com/p/6aa11e838d46806a/s.webp",
		publishedAt: "2023-07-26T10:20:03Z",
		content:
			"Tesla Inc. vehicles are barred from parts of a major Chinese city as it prepares for a visit by President Xi Jinping for the start of the World University Games on Friday, according to people familia… [+308 chars]",
	},
	{
		source: {
			id: null,
			name: "Biztoc.com",
		},
		author: "foxbusiness.com",
		title: "Bitcoin on track to challenge U.S. dollar?",
		description:
			'Despite a recent dip, bitcoin has been building its staying power, according to Draper Associates founder Tim Draper, who says the asset is distinguishing itself from other cryptocurrencies. "I think we are going to see bitcoin rise above the other cryptos," …',
		url: "https://biztoc.com/x/217135fe93fefc31",
		urlToImage: "https://c.biztoc.com/p/217135fe93fefc31/s.webp",
		publishedAt: "2023-07-26T10:18:18Z",
		content:
			'Despite a recent dip, bitcoin has been building its staying power, according to Draper Associates founder Tim Draper, who says the asset is distinguishing itself from other cryptocurrencies. "I think… [+317 chars]',
	},
	{
		source: {
			id: null,
			name: "Biztoc.com",
		},
		author: "reuters.com",
		title: "Marketmind: Tech splits, banks merge and Fed decides",
		description:
			"A look at the day ahead in U.S. and global markets from Mike Dolan Alphabet outshone Microsoft as the latest two of the tech giants reported earnings overnight, with another regional bank merger exciting financial stocks as the Fed decides on interest rates. …",
		url: "https://biztoc.com/x/a42f247d5aaae68a",
		urlToImage: "https://c.biztoc.com/p/a42f247d5aaae68a/s.webp",
		publishedAt: "2023-07-26T10:18:06Z",
		content:
			"A look at the day ahead in U.S. and global markets from Mike DolanAlphabet outshone Microsoft as the latest two of the tech giants reported earnings overnight, with another regional bank merger excit… [+286 chars]",
	},
	{
		source: {
			id: null,
			name: "Investing.com",
		},
		author: "Reuters",
		title: "Marketmind: Tech splits, banks merge and Fed decides",
		description: "Marketmind: Tech splits, banks merge and Fed decides",
		url:
			"https://www.investing.com/news/commodities-news/marketmind-tech-splits-banks-merge-and-fed-decides-3134253",
		urlToImage:
			"https://i-invdn-com.investing.com/news/SP500StandardandPoors500Index_800x533_L_1657544297.jpg",
		publishedAt: "2023-07-26T10:07:08Z",
		content:
			"A look at the day ahead in U.S. and global markets from Mike Dolan\r\nAlphabet (NASDAQ:GOOGL) outshone Microsoft (NASDAQ:MSFT) as the latest two of the tech giants reported earnings overnight, with ano… [+4211 chars]",
	},
	{
		source: {
			id: null,
			name: "Motley Fool",
		},
		author: "newsfeedback@fool.com (Rich Smith)",
		title:
			"Electric Truck Wars: Tesla Cybertruck vs Ford F150 Lightning vs Chevy Silverado EV",
		description:
			"Electric trucks from Tesla, Ford, and GM compete for buyers' -- and investors' -- attention, but how realistic are these numbers?",
		url:
			"https://www.fool.com/investing/2023/07/26/electric-truck-wars-tesla-cybertruck-vs-ford-f150/",
		urlToImage:
			"https://g.foolcdn.com/editorial/images/740692/tesla-cybertruck-is-tesla.jpg",
		publishedAt: "2023-07-26T10:06:00Z",
		content:
			'The age of the Cybertruck is upon us.\r\nNearly four years after Elon Musk famously unveiled "Cybertruck," the Tesla(TSLA -1.41%) CEO\'s vision of how a 21st Century electric pickup truck should look, t… [+4874 chars]',
	},
	{
		source: {
			id: null,
			name: "Biztoc.com",
		},
		author: "teslarati.com",
		title: "Tesla sales in California outpace the world's best-selling car company",
		description:
			"Tesla outsold Toyota in California in the second quarter of 2023 by nearly 2,000 units, overtaking the automaker in terms of total registrations. The dominance was driven by the Model 3 and Model Y. Tesla registered 69,212 cars throughout the second quarter o…",
		url: "https://biztoc.com/x/b7cba0de8bd8f61d",
		urlToImage: "https://c.biztoc.com/p/b7cba0de8bd8f61d/og.webp",
		publishedAt: "2023-07-26T10:04:05Z",
		content:
			"Tesla outsold Toyota in California in the second quarter of 2023 by nearly 2,000 units, overtaking the automaker in terms of total registrations. The dominance was driven by the Model 3 and Model Y.T… [+276 chars]",
	},
	{
		source: {
			id: null,
			name: "Yahoo Entertainment",
		},
		author: "Reuters",
		title: "Marketmind: Tech splits, banks merge and Fed decides",
		description:
			"Alphabet outshone Microsoft as the latest two of the tech giants reported earnings overnight, with another regional bank merger exciting financial stocks as ...",
		url:
			"https://finance.yahoo.com/news/marketmind-tech-splits-banks-merge-100243018.html",
		urlToImage:
			"https://media.zenfs.com/en/reuters-finance.com/73377ade8bbd9df31bb0c2ca707088d9",
		publishedAt: "2023-07-26T10:02:43Z",
		content:
			"A look at the day ahead in U.S. and global markets from Mike Dolan\r\nAlphabet outshone Microsoft as the latest two of the tech giants reported earnings overnight, with another regional bank merger exc… [+3934 chars]",
	},
	{
		source: {
			id: null,
			name: "Marketscreener.com",
		},
		author: "Reuters",
		title: "Tech splits, banks merge and Fed decides",
		description:
			"(marketscreener.com) A look at the day ahead in U.S. and global markets from Mike Dolanhttps://www.marketscreener.com...",
		url:
			"https://www.marketscreener.com/quote/currency/AUSTRALIAN-DOLLAR-US-DO-2373531/news/Tech-splits-banks-merge-and-Fed-decides-44422066/",
		urlToImage:
			"https://img.zonebourse.com/reuters/2023-01/2023-01-20T182649Z_1_LYNXMPEJ0J0QM_RTROPTP_3_ALPHABET-LAYOFFS.JPG",
		publishedAt: "2023-07-26T10:02:43Z",
		content:
			"A look at the day ahead in U.S. and global markets from Mike Dolan\r\n Alphabet outshone Microsoft as the latest two of the tech giants reported earnings overnight, with another regional bank merger ex… [+3945 chars]",
	},
	{
		source: {
			id: "fortune",
			name: "Fortune",
		},
		author: "Bloomberg",
		title:
			"Teslas barred from China’s World University Games in Chengdu ahead of a Xi visit",
		description:
			"Teslas have been prevented from entering Chinese military complexes and housing compounds in recent years, as well as facing bans from a district that hosts Communist Party summer retreats.",
		url:
			"https://fortune.com/2023/07/26/tesla-cars-barred-china-world-university-games-xi-visit-worries-cameras-collect-sensitive-data/",
		urlToImage:
			"https://content.fortune.com/wp-content/uploads/2023/07/GettyImages-1543384359-e1690365529228.jpg?resize=1200,600",
		publishedAt: "2023-07-26T10:02:36Z",
		content:
			"Tesla Inc. vehicles are barred from parts of a major Chinese city as it prepares for a visit by President Xi Jinping for the start of the World University Games on Friday, according to people familia… [+1571 chars]",
	},
	{
		source: {
			id: null,
			name: "Biztoc.com",
		},
		author: "blockworks.co",
		title: "Twitter ‘X’ rebrand spurs hype around potential crypto integration",
		description:
			"Twitter rebranding to “X” has fueled fresh speculation about CEO Elon Musk integrating payments directly with the platform, including crypto options. Musk, whose $44 billion buyout stirred crypto proponents last year, is betting his vision for an “everything …",
		url: "https://biztoc.com/x/2d20157bab4a4a4d",
		urlToImage: "https://c.biztoc.com/p/2d20157bab4a4a4d/s.webp",
		publishedAt: "2023-07-26T10:02:04Z",
		content:
			"Twitter rebranding to X has fueled fresh speculation about CEO Elon Musk integrating payments directly with the platform, including crypto options.Musk, whose $44 billion buyout stirred crypto propon… [+266 chars]",
	},
	{
		source: {
			id: null,
			name: "Space.com",
		},
		author: "mwall@space.com (Mike Wall)",
		title:
			"Watch SpaceX's Falcon Heavy rocket launch on record-breaking mission tonight",
		description:
			"SpaceX's brawny Falcon Heavy rocket will launch for the seventh time ever tonight (July 26), sending a huge communications satellite skyward. Watch it live here.",
		url: "https://www.space.com/spacex-falcon-heavy-jupiter-3-satellite-launch",
		urlToImage:
			"https://cdn.mos.cms.futurecdn.net/PskyzPhdLLqaBoMj3LNmQB-1200-80.jpeg",
		publishedAt: "2023-07-26T10:00:03Z",
		content:
			"SpaceX's powerful Falcon Heavy rocket will launch for the seventh time ever tonight (July 26), and you can watch the epic action live.\r\nThe Falcon Heavy is scheduled to lift off tonight at 11:04 p.m.… [+2366 chars]",
	},
	{
		source: {
			id: "cbc-news",
			name: "CBC News",
		},
		author: "Brittany Greenslade",
		title:
			"EV drivers say lack of charging stations on main route to northern Manitoba leaves them stranded",
		description:
			"There are roughly 2,000 battery-electric passenger vehicles in Manitoba according to the Manitoba Electric Vehicle Association.",
		url:
			"https://www.cbc.ca/news/canada/manitoba/electric-vehicle-charging-stations-thompon-1.6917124",
		urlToImage:
			"https://i.cbc.ca/1.6917280.1690308170!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/roman-briones.jpg",
		publishedAt: "2023-07-26T10:00:00Z",
		content:
			"Electric vehicle owners and advocates in Thompson, Man., say the province is ignoring the north with a lack of charging stations and infrastructure along highways. \r\nRoman Briones moved to Thompson f… [+4948 chars]",
	},
	{
		source: {
			id: "the-verge",
			name: "The Verge",
		},
		author: "Andrew J. Hawkins",
		title: "The ‘monster’ car that almost broke Tesla",
		description:
			"Episode one of Land of the Giants: The Tesla Shock Wave dives deep into the production of the Model 3, the car that introduced the company to the world.",
		url:
			"https://www.theverge.com/2023/7/26/23807447/tesla-model-3-production-elon-musk-land-of-the-giants",
		urlToImage:
			"https://cdn.vox-cdn.com/thumbor/ftQ6dGW3gsYMTqFw9gx8ajM9QD8=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/23986648/acastro_STK086_03.jpg",
		publishedAt: "2023-07-26T10:00:00Z",
		content:
			"The monster car that almost broke Tesla\r\nThe monster car that almost broke Tesla\r\n / Episode one of Land of the Giants: The Tesla Shock Wave dives deep into the production of the Model 3, the car tha… [+2878 chars]",
	},
	{
		source: {
			id: null,
			name: "Motley Fool",
		},
		author: "newsfeedback@fool.com (Leo Sun)",
		title: "Will Nikola Be Worth More Than Tesla by 2030?",
		description:
			"Could this out-of-juice electric and hydrogen truck maker mount a massive comeback?",
		url:
			"https://www.fool.com/investing/2023/07/26/will-nikola-be-worth-more-than-tesla-by-2030/",
		urlToImage: "https://g.foolcdn.com/editorial/images/740904/nikola-fcev.jpg",
		publishedAt: "2023-07-26T09:37:00Z",
		content:
			"When Nikola(NKLA -14.71%) went public by merging with a special purpose acquisition company (SPAC) three years ago, many investors dismissed it as a blatant attempt to ride the coattails of Tesla's (… [+4358 chars]",
	},
	{
		source: {
			id: null,
			name: "Motley Fool",
		},
		author: "newsfeedback@fool.com (Daniel Foelber, Scott Levine, and Lee Samaha)",
		title: "3 Growth Stocks That Could Double From Here",
		description:
			"These companies are betting big on EV charging, solid-state batteries, and digital transformation.",
		url:
			"https://www.fool.com/investing/2023/07/26/3-growth-stocks-that-could-double-from-here/",
		urlToImage:
			"https://g.foolcdn.com/editorial/images/740528/a-person-waves-their-hands-with-excitement-while-sitting-at-a-table-and-looking-at-a-computer.jpg",
		publishedAt: "2023-07-26T09:30:00Z",
		content:
			"The best investments are lifelong compounders -- stocks that have the potential to grow several-fold over time. Nearly every powerful brand and influential company started out as a far smaller entity… [+6861 chars]",
	},
	{
		source: {
			id: null,
			name: "Marketscreener.com",
		},
		author: "MarketScreener with dpa-AFX Analyser",
		title: "JUST EAT TAKEAWAY.COM : Bernstein reiterates its Neutral rating",
		description:
			"(marketscreener.com) Bernstein analyst William Woods maintains his Neutral opinion on the stock. The target price is still set at EUR 27.https://www.marketscreener.com/quote/stock/JUST-EAT-TAKEAWAY-COM-N-V-31472057/news/JUST-EAT-TAKEAWAY-COM-Bernstein-reitera…",
		url:
			"https://www.marketscreener.com/quote/stock/JUST-EAT-TAKEAWAY-COM-N-V-31472057/news/JUST-EAT-TAKEAWAY-COM-Bernstein-reiterates-its-Neutral-rating-44421633/",
		urlToImage: "https://www.marketscreener.com/images/twitter_MS_fdblanc.png",
		publishedAt: "2023-07-26T09:18:13Z",
		content:
			"Bernstein analyst William Woods maintains his Neutral opinion on the stock. The target price is still set at EUR 27.\r\n© MarketScreener with dpa-AFX Analyser - 2023\r\n<table><tr><td>\r\n JUST EAT TAKEAWA… [+3823 chars]",
	},
	{
		source: {
			id: null,
			name: "Biztoc.com",
		},
		author: "adage.com",
		title:
			"Stellantis marketing VP on Twitter and Threads strategies and its ‘free market’ agency approach",
		description:
			"Automakers have a reason to take a more cautious approach to X compared with other advertisers, given Musk also runs electric vehicle giant Tesla, which has become more of a competitor to traditional automakers as they plow more investments into EVs. General …",
		url: "https://biztoc.com/x/2b50ccf1f7290208",
		urlToImage: "https://c.biztoc.com/p/2b50ccf1f7290208/s.webp",
		publishedAt: "2023-07-26T09:18:07Z",
		content:
			"Automakers have a reason to take a more cautious approach to X compared with other advertisers, given Musk also runs electric vehicle giant Tesla, which has become more of a competitor to traditional… [+269 chars]",
	},
	{
		source: {
			id: null,
			name: "Biztoc.com",
		},
		author: "euronews.com",
		title:
			"‘Hands-off, eyes on’: Ford deploys 'hands-free' driving in cars on UK motorways",
		description:
			"Driving hands-free on the motorway is now possible in the UK. The UK has given the green light to US carmaker Ford to deploy its “hands-free” cars on motorways. Ford’s electric flagship Mustang Mach-E has this month become the first autonomous car model to cr…",
		url: "https://biztoc.com/x/90bc6c10eb865090",
		urlToImage: "https://c.biztoc.com/p/90bc6c10eb865090/s.webp",
		publishedAt: "2023-07-26T09:16:04Z",
		content:
			"Driving hands-free on the motorway is now possible in the UK.The UK has given the green light to US carmaker Ford to deploy its hands-free cars on motorways.Fords electric flagship Mustang Mach-E has… [+290 chars]",
	},
	{
		source: {
			id: null,
			name: "Motley Fool",
		},
		author: "newsfeedback@fool.com (John Ballard)",
		title: "2 Unstoppable Growth Stocks to Buy on the Dip",
		description:
			"Investors can count on these leaders to deliver profitable growth for years to come.",
		url:
			"https://www.fool.com/investing/2023/07/26/2-unstoppable-growth-stocks-to-buy-on-the-dip/",
		urlToImage:
			"https://g.foolcdn.com/editorial/images/740955/financial-graph-with-up-trend-line-candlestick-chart-in-stock-market.jpg",
		publishedAt: "2023-07-26T09:09:00Z",
		content:
			"The strongest companies can sometimes see their stock prices fall, but companies that can sustain improving revenue and profits over many years are unstoppable. \r\nTesla(TSLA -1.41%) and Netflix(NFLX … [+4899 chars]",
	},
	{
		source: {
			id: null,
			name: "TechNode",
		},
		author: "TechNode Feed",
		title: "Indonesia reaches out to BYD and Tesla for EV investment",
		description:
			"Indonesia is in the final stages of developing a set of incentives aimed at attracting investment from electric vehicle (EV) manufacturers, an Indonesian senior minister said on Tuesday. The government is currently engaged in discussions with major companies …",
		url:
			"http://technode.com/2023/07/26/indonesia-reaches-out-to-byd-and-tesla-for-ev-investment/",
		urlToImage:
			"https://i0.wp.com/technode.com/wp-content/uploads/2021/08/technode-news-feed-1-1.png?fit=540%2C540&ssl=1",
		publishedAt: "2023-07-26T09:03:00Z",
		content:
			"Indonesia is in the final stages of developing a set of incentives aimed at attracting investment from electric vehicle (EV) manufacturers, an Indonesian senior minister said on Tuesday. The governme… [+928 chars]",
	},
]

export default articles
