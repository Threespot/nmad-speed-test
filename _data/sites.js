module.exports = {
	diplomacy: {
		name: "diplomacy.state.gov", // optional, falls back to object key
		description: "National Museum of American Diplomacy",
		options: {
			frequency: 60 * 24, // 24 hours
			freshChrome: "site"
		},
		urls: [
			"https://diplomacy.state.gov/",
      "https://diplomacy.state.gov/about/",
      "https://diplomacy.state.gov/explore-online-exhibits/faces-of-diplomacy/",
		]
	}
};
