const express = require('express');
const server = express();

const bodyParser = require('body-parser');
// const uuidv1 = require('uuid/v1');

const apiai = require('apiai');
const ai = apiai('8fcfe02fdf5b42628700e6458795e6d4');

const functions = require('./functions.js')
const fs = require('fs');

const PORT = 80;

//temporary fix: mapping button text to events in api.ai
const events = {"Small Claims": "small_claims_event", "Eviction": "eviction_event", "Traffic": "traffic_event", "Domestic Violence": "domestic_violence_event", "Family Law":"family_law_event", "Guardianship":"guardianship_event"};


server.use('/', express.static('./client'));
server.use(bodyParser.json());

server.get('/', (req, res) => {
	res.sendFile('index.html', {root:'./client'});
	// res.sendFile('index.html');
});

// server.get('/', (req, res) => {
  // res.writeHead(200);
  // res.send('It works!');
// });

server.post('/message', (req, res) => {
	console.log('/message', req.body);
	const options = {sessionId: req.body.id};
	// const id = uuidv1();
	// const options = {sessionId:Math.random()*1000};
	// const options = {sessionId:req.body.sessionId};
	//sends event request to api.ai and response to front end
	if (req.body.payload.type=='button'){
		const msg = req.body.payload.message;
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
			console.log('Response:', response_from_ai);
			const code = response_from_ai.status.code;
			res.writeHead(code);
			if (code == 200) {
			  res.end(JSON.stringify(response_from_ai.result.fulfillment));
			}
		  });
		request_to_ai.on('error', (error)=> {
			console.error("Error:", error)
		} );
		request_to_ai.end();
	}
	//send text request to api.ai 
	else if (req.body.payload.type=='text'){
		const request_to_ai = ai.textRequest(req.body.payload.message, options);
		request_to_ai.on('response', (response_from_ai)=>{
			console.log('Response:', response_from_ai.result.fulfillment);
			const code = response_from_ai.status.code;
			res.writeHead(code);
			if (code == 200){
				res.write(JSON.stringify(response_from_ai.result.fulfillment));
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
				res.end(JSON.stringify(response_from_ai.result.fulfillment));
			}		
			res.end();
		});
		request_to_ai.on('error', (error)=> {
			console.error("Error:", error)
		} );
		
		//req.body.message is supposed to be a audio file path
		fs.readFile(req.body.payload.message, function(error, buffer) {
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
	
	switch (action){
		case 'small_claims.court_lookup':
			console.log("court_lookup chosen");
			response.speech = functions.small_claims_court_lookup(req.body.result.parameters);
			console.log('speech:', response.speech);
			response.displayText = response.speech;
			break;
		case 'small_claims.sue_gov.resources':
			response.speech = functions.small_claims_sue_gov_resource(req.body.result.parameters);
			console.log('speech:', response.speech);
			response.displayText = response.speech;
			break;
		default:
			console.log("Error: no such function exists.");
	}		
	
	res.setHeader('Content-Type', 'application/json');
	res.end(JSON.stringify(response));	
	
} );

server.listen(PORT, () => {
  console.log('Listening on port', PORT);
});