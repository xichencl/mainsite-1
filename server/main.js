const express = require('express');
const server = express();

const bodyParser = require('body-parser');
// const uuidv1 = require('uuid/v1');

const apiai = require('apiai');
const ai = apiai('8fcfe02fdf5b42628700e6458795e6d4');


const fs = require('fs');

const PORT = 3000;

//temporary fix: mapping button text to events in api.ai
const events = {"Small Claims": "small_claims_event", "Eviction": "eviction_event", "Traffic": "traffic_event", "Domestic Violence": "domestic_violence_event", "Family Law":"family_law_event", "Guardianship":"guardianship_event"};


server.use('/', express.static('./client'));
server.use(bodyParser.json());

server.get('/', (req, res) => {
	res.sendFile('index.html', {root:'./client'})
});

server.post('/message', (req, res) => {
	console.log('/message', req.body);
	
	// const id = uuidv1();
	const options = {sessionId:Math.random()*1000};
	// const options = {sessionId:req.body.sessionId};
	//sends event request to api.ai and response to front end
	if (req.body.type=='button'){
		const msg = req.body.message;
		const ev = {};
		if (msg in events){
			console.log(msg);
			ev.name=events[msg];
			console.log(ev.name);
		}else{
			return;
		}
		
		const request_to_ai = ai.eventRequest(ev, options);
		console.log(request_to_ai);
		request_to_ai.on('response', (response_from_ai) => {
			console.log('Response:', response_from_ai.result.fulfillment);
			const code = response_from_ai.status.code;
			res.writeHead(code);
			if (code == 200) {
			  res.end(response_from_ai.result.fulfillment.speech);
			}
		  });
		request_to_ai.on('error', (error)=> {
			console.error("Error:", error)
		} );
		request_to_ai.end();
	}
	//send text request to api.ai 
	else if (req.body.type=='text'){
		const request_to_ai = ai.textRequest(req.body, options);
		request_to_ai.on('response', (response_from_ai)=>{
			console.log('Response:', response_from_ai.result.fulfillment);
			const code = response_from_ai.status.code;
			res.writeHead(code);
			if (code == 200){
				res.end(response_from_ai.result.fulfillment.speech);
			}		
			res.end();
		});
		request_to_ai.on('error', (error)=> {
			console.error("Error:", error)
		} );
		request_to_ai.end();
		
	}
	//send voice request to api.ai
	else{
		const request_to_ai = ai.voiceRequest(options);
		request_to_ai.on('response', (response_from_ai)=>{
			console.log('Response:', response_from_ai.result.fulfillment);
			const code = response_from_ai.status.code;
			res.writeHead(code);
			if (code == 200){
				res.end(response_from_ai.result.fulfillment.speech);
			}		
			res.end();
		});
		request_to_ai.on('error', (error)=> {
			console.error("Error:", error)
		} );
		
		//req.body.message is supposed to be a audio file path
		fs.readFile(req.body.message, function(error, buffer) {
		if (error) {
			console.log(error);
		} else {
			request_to_ai.write(buffer);
		}

		request_to_ai.end();
		});
		
	}

});

server.post('/webhook', (req, res)=>{
	console.log('/webhook', req.body);
	const action = req.body.result.action;
	const response = {};
	if (action == 'small_claims.court_lookup'){
		//temporary test
		const court_addresses = {'Contra Costa':'101 Summer St., Martinez, CA'};
		
		const params = req.body.result.parameters;
		function get_court_address(params){
			let locale;
			if ('locator' in params){
				const entity = params.locator;
				if ('county' in entity){
					locale = entity.county;
				}else if ('city' in entity){
					locale = entity.city;
				}else{
					locale = entity.zip-code;
				}
			}
			if (locale in court_addresses){
				return "The small claims court for "+locale+" is located at "+court_addresses[locale];
			}else{
				return "I cannot find any court location for "+locale+" in the State of California. Please double-check your entry.";
			}
		}
		response.speech = get_court_address(params);
		console.log('speech:', response.speech);
		response.displayText = response.speech;
	}
	res.setHeader('Content-Type', 'application/json');
	res.end(JSON.stringify(response));	
	
} );

server.listen(PORT, () => {
  console.log('Listening on port', PORT);
});