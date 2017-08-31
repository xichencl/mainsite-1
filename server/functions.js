
const fs = require('fs');
const functions = module.exports = {};
const format = require('string-format')
const googleMapEmbedKey = "AIzaSyCfEjPR7_o-MseJ4z3yxVxQNq15v6gJcio";

functions.small_claims_court_lookup = function(params){
// let params = JSON.parse(para);
	console.log("params: %s", params);
	let locale;
	if ('locator' in params){
		const entity = params.locator;
		if ('county' in entity){
			locale = entity.county;
		}else if ('city' in entity){
			locale = entity.city;
		}else if ('zip-code' in entity){
			locale = entity.zip-code;
		}else{
			return "I'm sorry, but your entry was invalid. Please enter or say a city or county name or a valid CA zip code.";
		}
	}
	locale = court_addresses[locale];
	console.log("localeIdx: %s", locale);
	//load court_addresses
	const court_addresses = JSON.parse(fs.readFileSync('./server/small_claims_court_addresses.json'));
	// console.log("court addresses: %s", court_addresses);
	let fulfillment = {"speech":"", "messages": []};
	if (locale in court_addresses){
		if (court_addresses[locale].placeId){
			fulfillment.speech = "The small claims court for {0} is located at {1} {2}.".format(locale, court_addresses[locale].name, court_addresses[locale].address);
			fulfillment.messages.push({"type":0, "speech":fulfillment.speech});
			fulfillment.messages.push({"type":4, "payload":{"map":{"src": "https://www.google.com/maps/embed/v1/place?key={0}&q=place_id:{1}".format(googleMapEmbedKey, court_addresses[locale].placeId), 
			"name": court_addresses[locale].name
			}}});
			
			return fulfillment;
		}else {
			fulfillment.speech = court_addresses[locale].name+ " are located at "+court_addresses[locale].address+".";
			fulfillment.messages.push({"type":0, "speech":fulfillment.speech});
			fulfillment.messages.push({"type":4, "payload":{"map":{"src":"https://www.google.com/maps/embed/v1/search?key={0}&q={1}".format(googleMapEmbedKey, court_addresses[locale].name.split(/\s+/).join("+"),
			"name": court_addresses[locale].name
			}}});
			
			return fulfillment;
		}
			
	}
	else{
		fulfillment.speech= "I cannot find any court location for "+locale+" in the State of California. Please double-check your entry.";
		return fulfillment;
	}	
};

functions.small_claims_sue_gov_resource = function(params){
	let locale;
	if ('locator' in params){
		const entity = params.locator;
		if ('county' in entity){
			locale = entity.county;
		}else if ('city' in entity){
			locale = entity.city;
		}else{
			return "I'm sorry, but your entry was invalid. Please enter or say a city or county name.";
		}
	}
	const sue_gov_resources = JSON.parse(fs.readFileSync('./server/small_claims_sue_gov_resources.json'));
	// console.log("court addresses: %s", court_addresses);
	
	if (locale in sue_gov_resources){
		return "Here's a few links to relevant information regarding filing a claim aginst "+ locale + ": "+sue_gov_resources[locale] + ". Please let me know if you have more questions.";
	}else{
		return "I'm currently unable to find anything on "+locale+" in my database. But a simple search online may turn up some relevant information. Feel free to let me know if you have other questions.";
	}	
};



