(function(){
	var app = angular.module('store', [ ]); /* store : name of the application */
	app.controller('StoreController', function(){ /* StoreController : name of the controller */
		this.product = gems; /* this gem become a property of this controller */
	});
	/* Array of gems */
	var gems =
	[
		{
			name: 'Dodecahedron Gem',
			price: 2.00,
			description: 'A common Gem',
			canPurchase: true,
			soldOut: true,
			/* Array of images */
			images: 
			[
				{
					full: 'https://raw.githubusercontent.com/fatpandadesigns/codeschool-shwang/master/images/full/gem-01-full.jpg',
					thumb: 'dodecahedron-01-thumb.jpg'
				}
			],
			reviews:
			[
				{
					stars:5,
					body:'I love this product!',
					author:'shaun@kosijer.com'
				},
				{
					stars:1,
					body:'This product sucks!',
					author:'kevin@hater.com'
				}
			]
		},
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: 'A rare Gem',
			canPurchase: true,
			soldOut: true,
			images: 
			[
				{
					full: 'https://raw.githubusercontent.com/fatpandadesigns/codeschool-shwang/master/images/full/gem-03-full.jpg',
					thumb: 'dodecahedron-01-thumb.jpg'
				}
			]
		}
	];
	app.controller('PanelController', function(){
		this.tab = 0; /* no tab selected (not 1,2 or 3) */
		this.selectTab = function(setTab)
		{
			this.tab = setTab || 0; /* if tab selected activate the panel else no tab selected - replace if & else*/			
		};
		this.isSelected = function(checkTab)
		{
			return this.tab === checkTab;
		};
	});
})();