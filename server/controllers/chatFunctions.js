
const fs = require('fs');
const functions = module.exports = {};
const format = require('string-format');
format.extend(String.prototype);
const googleMapEmbedKey = "AIzaSyCfEjPR7_o-MseJ4z3yxVxQNq15v6gJcio";
const https = require('https');
const cheerio = require('cheerio');
const path = require('path');

const agentOfServiceHost = 'businesssearch.sos.ca.gov';
const agentOfServicePath = '/CBS/SearchResults?';

functions.small_claims_court_lookup = function(params, respondToAPI){
// let params = JSON.parse(para);
	console.log("params: %s", params);
	let response = {};
	let locale;
	if ('locator' in params){
		const entity = params.locator;
		console.log("ENTITYT:", entity);
		if ('county' in entity){
			locale = entity.county;
		}else if ('city' in entity){
			locale = entity.city;
		}else if ('zip-code' in entity){
			locale = entity['zip-code'];
		}else{
			response.speech = "I'm sorry, but your entry was invalid. Please enter or say a city or county name or a valid CA zip code.";
			respondToAPI(response);
			// return;
		}
	}
	
	
	//load court_addresses
	console.log("curr path", __dirname);
	console.log("file path", __filename);
	const court_addresses = JSON.parse(fs.readFileSync(path.join(__dirname, '../static_files/small_claims_court_addresses.json')));
	// console.log("Court addresses: ", court_addresses);
	// console.log("Place:" locale);
	
	if (court_addresses[locale]){
		
		locale_id = court_addresses[locale];
		console.log("localeIdx: %s", locale_id);	
		console.log(court_addresses[locale_id].placeId);
		if (court_addresses[locale_id].placeId){
			response.speech = "The small claims court for {0} is located at {1} {2}.".format(locale, court_addresses[locale_id].name, court_addresses[locale_id].address);
			console.log(response.speech);
			// response.displayText = response.speech;
			// response.data = {};
			response.data = {"map":{"src": "https://www.google.com/maps/embed/v1/place?key={0}&q=place_id:{1}".format(googleMapEmbedKey, court_addresses[locale_id].placeId), 
			"name": court_addresses[locale_id].name
			}};
			response.source = "server";
			
			// return response;
		}else {
			response.speech = court_addresses[locale_id].name+ " are located at "+court_addresses[locale_id].address+".";
			response.data = {"map":{"src":"https://www.google.com/maps/embed/v1/search?key={0}&q={1}".format(googleMapEmbedKey, court_addresses[locale_id].name.split(/\s+/).join("+")),
			"name": court_addresses[locale_id].name
			}};
			response.source= "server";
			
			// return response;
		}
			
	}
	else{
		response.speech= "I cannot find any court location for "+locale+" in the State of California. Please double-check your entry.";
		// return response;
	}	
	respondToAPI(response);
};

//needs to update
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
	const sue_gov_resources = JSON.parse(fs.readFileSync(path.join(__dirname, '../static_files/small_claims_sue_gov_resources.json')));
	// console.log("court addresses: %s", court_addresses);
	
	if (locale in sue_gov_resources){
		return "Here's a few links to relevant information regarding filing a claim aginst "+ locale + ": "+sue_gov_resources[locale] + ". Please let me know if you have more questions.";
	}else{
		return "I'm currently unable to find anything on "+locale+" in my database. But a simple search online may turn up some relevant information. Feel free to let me know if you have other questions.";
	}	
};


functions.agent_of_service_lookup = function(contexts, searchType, respondToAPI){
	let response = {};
	// const searchType1 = "LPLLC", searchType2="CORP";
	// let searchType;
	/*if ('business_type' in contexts[0]){
		searchType = contexts[0].business_type
	}else{ //for unspecified search
		// try LPLLC
		response.speech = "Please select a business type.";
		response.data = {'buttons': ["Sole Proprietorship",
						"Partnership",
						"Corporation/Association",
						"LLC/LLP/LP"]};
		response.source = "server";
		respondToAPI(response);		
	}*/
	const origEntry = contexts[0].parameters.any;
	let searchTerms = origEntry.toLowerCase().trim().split(/\s+/);
	searchTerms = searchTerms.join('+');
	
	// let path = agentOfServiceHost+agentOfServicePath+'SearchType='+searchType+'&SearchCriteria='+searchTerms+'&SearchSubType=Keyword'
	let options = {
	  hostname: agentOfServiceHost,
	  path: agentOfServicePath+'SearchType='+searchType+'&SearchCriteria='+searchTerms+'&SearchSubType=Keyword',
	  method:'GET'
	  
	};
	
	let result = [];
	console.log("url: ", options.hostname+options.path);
	
	
	const loadCheerio = (options, retrieveText)=> {
		
	
		const req = https.request(options);
		req.on('error', (e)=>{
			console.log("Error: "+e.message);
		});
		req.on('response', (res)=>{
			let chunks = [];
			res.on('data', chunks.push.bind(chunks));
			res.on('end', ()=> {
				const data = Buffer.concat(chunks);
				const str = data.toString();
				retrieveText(cheerio.load(str), sendResponse);
			});
			res.on('error', sendResponse);
		});
		req.end();
	};
	
	let numEntriesFound = 0;
	const retrieveText = (cheerioObj, sendResponse)=>{
		const $= cheerioObj;
		const activeRegistrs = $('tr', 'tbody').filter(function(){
			// console.log($(this).children().eq(2).text().trim());
			return $(this).children().eq(2).text().trim() === 'ACTIVE';
		});
		numEntriesFound = activeRegistrs.length;
		activeRegistrs.slice(0,5).children('td')
		.each(function(){
			// if (!(/^\s*$/.test($(this).text()))){
				// result.push($(this).text());
			// }
			result.push($(this).text().trim());
		});
		
		
		sendResponse();
	};
	
	const sendResponse = ()=>{
		let listOfResults;
		if (result){
			listOfResults = formatResult();
		}
		console.log("NO OF ENTRIES: ", numEntriesFound);
		if (numEntriesFound>5){
			response.speech = "I have found {} companies matching the name \"{}\", whose registration is currently active. Here's the top five matches. If you would like more information, simply click on the table below and you will be taken to the California Secretary of State website.".format(numEntriesFound, origEntry);
			response.source = "server";			
			response.data = {'table': listOfResults, 'url':'https://'+options.hostname+options.path};
			console.log(listOfResults);
		}else if (numEntriesFound>0 && numEntriesFound<6){
			
			response.speech = "I have found {} company/ies matching the name \"{}\", whose registration is currently active. If you would like more information, simply click on the table below and you will be taken to the California Secretary of State website.".format(numEntriesFound, origEntry);
			response.source = "server";			
			response.data = {'table': listOfResults, 'url':'https://'+options.hostname+options.path};
			console.log(listOfResults);
		}else{
			response.speech = "Sorry, I cannot find a match for the company under the name {} and business type {}, whose registration is currently active. You may try an alternative business type or name, or consult the company website.".format(origEntry, searchType);
			response.data = {'buttons': ["Sole Proprietorship",
						"Partnership",
						"Corporation/Association",
						"LLC/LLP/LP"]};
			response.source = "server";
		}
		respondToAPI(response);
			
	};
	
	const formatResult = () =>{
		let list = [];
		for (i=0; i<result.length; i+=6){
			let row = result.slice(i, i+6);
			list.push({'entityNum': row[0], 'companyName': row[3].split(/\n\s*/)[1], 'jurisdiction': row[4], 'agentOfService': row[5]}); 
		}
		return list;
	};
	
	loadCheerio(options, retrieveText);
	
		
	
	
	
	
	
	 
	
};
