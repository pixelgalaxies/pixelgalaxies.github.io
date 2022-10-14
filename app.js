const app = Vue.createApp({
	data() {
		return {
			projects: [
				{
					year: "2021",
					list: [
						{
							text: "Burn It All",
							gitLink: "https://www.dustinclark.ninja",
							liveLink: "https://www.google.com"
						},
						{
							text: "Crescendo v3",
							gitLink: "https://www.dustinclark.ninja",
							liveLink: "https://www.google.com"
						},
					]
				},
				{
					year: "2020",
					list: [
						{
							text: "Burn It All",
							gitLink: "https://www.dustinclark.ninja",
							liveLink: "https://www.google.com"
						},
						{
							text: "Crescendo v2",
							gitLink: "https://www.dustinclark.ninja",
							liveLink: "https://www.google.com"
						},
					]
				},
				{
					year: "2019",
					list: [
						{
							text: "Burn It All",
							gitLink: "https://www.dustinclark.ninja",
							liveLink: "https://www.google.com"
						},
						{
							text: "Crescendo ",
							gitLink: "https://www.dustinclark.ninja",
							liveLink: "https://www.google.com"
						},
					]
				},
				{
					year: "2018",
					list: [
						{
							text: "Fizzbuzz Demo",
							gitLink: "https://www.dustinclark.ninja",
							liveLink: "https://www.google.com"
						},
						{
							text: "JS 30 - Drumkit",
							gitLink: "https://www.dustinclark.ninja",
							liveLink: "https://www.google.com"
						},
						{
							text: "JS 30 - Clock",
							gitLink: "https://www.dustinclark.ninja",
							liveLink: "https://www.google.com"
						},
						{
							text: "JS 30 - CSS / JS",
							gitLink: "https://www.dustinclark.ninja",
							liveLink: "https://www.google.com"
						},
						{
							text: "JS 30 - Arrary Cardio",
							gitLink: "https://www.dustinclark.ninja",
							liveLink: "https://www.google.com"
						},
						{
							text: "JS 30 - Flex Panel",
							gitLink: "https://www.dustinclark.ninja",
							liveLink: "https://www.google.com"
						},
					]
				},
				{
					year: "2017",
					list: [
						{
							text: "CCC '17",
							gitLink: "https://www.dustinclark.ninja",
							liveLink: "https://www.google.com"
						},
						{
							text: "Portfolio - has been updated since",
							gitLink: "https://www.dustinclark.ninja",
							liveLink: "https://www.google.com"
						},
						{
							text: "Atropos",
							gitLink: "https://www.dustinclark.ninja",
							liveLink: "https://www.google.com"
						},
					]
				},
				{
					year: "2016",
					list: [
						{
							text: "Burn It All",
							gitLink: "https://www.dustinclark.ninja",
							liveLink: "https://www.google.com"
						},
						{
							text: "Crescendo - has been updated since",
							gitLink: "https://www.dustinclark.ninja",
							liveLink: "https://www.google.com"
						}
					]
				},
				{
					year: "2015",
					list: [
						{
							text: "50 Shades Greener",
							gitLink: "https://www.dustinclark.ninja",
							liveLink: "https://www.google.com"
						},
						{
							text: "808 Bakery - Links not available",
							gitLink: "https://www.dustinclark.ninja",
							liveLink: "https://www.google.com"
						}
					]
				}
			]
		};
	},
	methods: {

	}

});

app.mount('#app');