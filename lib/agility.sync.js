const agilityContentSync = require("@agility/content-sync")
const agilityFileSystem = require("@agility/content-sync/src/store-interface-filesystem")

export default ({ guid, apiKey, isPreview, languages, channelName, rootPath }) => {

	if (!guid) {
		console.log("AgilityCMS => No GUID was provided.");
		return null;
	}


	let cachePath = `${rootPath}/node_modules/@agility/.cache/${guid}/${isPreview ? "preview" : "live" }`;

	return agilityContentSync.getSyncClient({
		guid,
		apiKey,
		isPreview,
		languages,
		channels: [channelName],
		store: {
			interface: agilityFileSystem,
			options: {
				rootPath: cachePath
			},
		},
	});
};
