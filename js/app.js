(function() {
	var app = angular.module("resume", ["ui.bootstrap"]);

	app.controller("ResumeController", ["$http", function($http) {
		var resume = this;
		resume.config = [];
		$http.get("js/config.js").success(function(data) {
			resume.config = data;
		console.log(resume.config);
		});

		this.nyNameFull = "Joseph Carrington";
		this.myNameShort = "Joe";
		this.myEmail = "joseph.carrington@gmail.com";
		this.myTwitter = "http://twitter.com/joe_carrot";
		this.myLinkedIn = "https://www.linkedin.com/pub/joseph-carrington/97/152/294";
		this.whyYou = whyYou;
		this.skills = skills;
	}]);

	app.directive("mainAbilities", function() {
		return{
			restirct: "E",
			templateUrl: "main-abilities.html",
			controller: function() {
				this.abilitiesPerLine = 2;
				this.abilities = mainAbilities;
			},
			controllerAs: "abilityCtrl"
		};
	});
	
	app.directive("recentWork", function() {
		return{
			restrict: "E",
			templateUrl: "recent-work.html",
			controller: function() {
				this.slides = recentWork;
				this.interval = -1;
			},
			controllerAs: "carouselCtrl"
		};
	});

	app.directive("skills", function() {
		return{
			restrict: "E",
			templateUrl: "skills.html",
			controller: function() {
				this.skills = skills;
			},
			controllerAs: "skillCtrl"
		};
	});
	
	var mainAbilities = [
		{
			heading: "Happy Customers",
			icon: "img/front_end.png",
			description: "If you give me a design, or even just a style-guide, I can create responsive and best-practices driven websites at lightning speed by using a variety of frameworks on both the front and the back-end to create happy customers and maximize conversions.",
		},
		{
			heading: "Secure Interactivity",
			icon: "img/back_end.png",
			description: "I got my start creating custom CMS's from the ground up for small-scale organizations. From this background, I gained a rock-solid foundation in safe and secure ineractivity with the user's browser and data.",
		},
		{
			heading: "One Million Visitors",
			icon: "img/full_stack.png",
			description: "From the first server setup to the final polish, I've done it all. I can set up and run a LAMP stack with my eyes closed, and am even branching out into new technologies like Node.js to create even better customer experiences. I can test every aspect of the process to ensure that everything will run smoothly, whether for 100 visitors or one 1,000,000.",
		},
		{
			heading: "The Way We Communicate",
			icon: "img/new_tech.png",
			description: "I love to learn new technologies and frameworks. Whatever it is, if I can use it to iterate faster and more robustly, I'll learn it and use it. The way we communicate with people on the internet is constantly evolving, and if a developer gets stuck using one set of ideas, they can quickly become less useful. I try to avoid that by staying up-to-date on deisgn and development trends, and attempting to learn any new technologies I come across.",
			callout: "Tell me more."
		}
	]

	var recentWork = [
		{
			client: "Vinsource, LLC",
			description: "I created a custom B2B marketplace and wrapped it into WordPress. Everything from payments to shipping notifications is built into the software.",
			link: "http://vinsourceonline.com",
			image: "img/clients/vinsource.png"
		},
		{
			client: "The Bear",
			description: "The bear wanted a site that was responsive and all on one page. I created a curated guide through their work and their culture which looks good on any device.",
			link: "http://thebearmedia.com",
			image: "img/clients/thebear.png"
		},
		{
			client: "Blink.is",
			description: "Blink.is is a product that asks you questions about your personal style preferences and generates a style-guide for your home.",
			link: "http://blink.is",
			image: "img/clients/blinkis.png"
		},
		{
			client: "Graphic Granola",
			description: "Graphic Granola and I partnered up for a while, and when I was there I made their agency site for them.",
			link: "http://graphicgranola.com",
			image: "img/clients/granola.png"
		}
	]

	var whyYou = [
		{
			heading: "Your work is really good.",
			description: "I could help make the best software for your clients. My experience and my near maniacal obsession with being nice to the end-user have made a lot of people happy."
		},
		{
			heading: "Your clients are killer.",
			description: "And if you hire the best clients in the industry, you need to hire the best workers. I've got the dedication and creative-thinking skills to blow your clients away."
		},
		{
			heading: "We could go far together.",
			description: "Call your dad, because I want to make this official. The industry needs incredibly talented leaders like yourselves, and I want to help lift you up to being a boardroom name."
		},
		{
			heading: "We have similar interests.",
			description: "You're a digital agency and a game company. I'm a person with a lot of experience in the former, and who also wants to take part in the latter."
		},
		{
			heading: "I like the cut of your jib.",
			description: "If you haven't noticed, I also consider myself pretty decent at what I do, and am similarly eager to prove it."
		}
	]
	var skills = [
		skillsOld = [
			{
				name: "PHP",
				rating: 5,
				description: "I've been writing PHP since before, like, Facebook."
			},
			{
				name: "HTML5/CSS3",
				rating: 5,
				description: "IE6 is no longer supported on your device."
			},
			{
				name: "JavaScript",
				rating: 5,
				description: "Everything is an object."
			},
			{
				name: "SQL",
				rating: 3,
				description: "LEFT JOIN"
			},
			{
				name: "LAMP Administration",
				rating: 3,
				description: "I can set it up and fix problems."
			},
			{
				name: "Design",
				rating: 2,
				description: "I pay attention to current design, but am more useful coding."
			}
		],
		skillsNew = [
			{
				name: "OOP",
				rating: 4,
				description: "I cast Baleful Polymorphism"
			},
			{
				name: "C#, obj-C",
				rating: 3,
				description: "Mostly as it relates to game development."
			},
			{
				name: "Version Control",
				rating: 2,
				description: "I'll fork anything that moves."
			},
			{
				name: "Angular.js",
				rating: 2,
				description: "This resume thing is made with Angular."
			}
		],
		skillsDeep = [
			{
				name: "Unity",
				rating: 3,
				description: "Have I mentioned I'm working on being a game developer?"
			},
			{
				name: "Blender",
				rating: 2,
				description: "Topology is fun!"
			}
		]
	]
})();
