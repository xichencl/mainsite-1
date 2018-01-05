const checklistTemplate = [
	{
   "title": "Read SC-100-INFO",
   "blockText": "<p>The information sheet for SC-100 has helpful general information about small claims court. It explains important rules and processes you should know. You should read it before you file a claim.</p>",
   "completed": false,
   "stage": 0,
   "id": 1
	},
	{
	 "title": "Ask for Payment",
	 "blockText": "<p>Before you can sue, you must ask the other person to pay you. You can ask in person, by phone, or by writing a letter or email. If there is a very good reason you did not ask before suing, you may still be able to sue, but you’ll have to explain why you never asked to the court.</p>",
	 "completed": false,
	 "stage": 0,
	 "id": 2
	},
	{
	 "title": "Write a Letter Asking for Payment",
	 "blockText": "<p>You can ask the other person to pay in person or over the phone, but sometimes it helps to ask in writing. By writing a letter or email, you can take the time to clearly explain to the other person why he or she owes you the money and why that amount is owed. If you need help to write a letter, the State has a <a href=\"http://www.courts.ca.gov/11145.htm\" target=\"_blank\" >computer program</a> that can help you write the letter.</p>",
	 "completed": false,
	 "stage": 0,
	 "id": 3
	},
	{
	 "title": "Consider Mediation",
	 "blockText": "<p>If talking to the person and asking for payment does not work, you may want to consider mediation. Mediation is when you and the other person meet with a neutral person to try to find a solution. For information on mediation and fining a mediator, read <a href=\"http://www.cc-courthelp.org/default.aspx?Lang=ENG&Parent=268\" target=\"_blank\">“What is Mediation?”</a></p>",
	 "completed": false,
	 "stage": 0,
	 "id": 4
	},
	{
	 "title": "Decide Where to File Your Claim",
	 "blockText": "<p>In order to sue in small claims, you have to first know where you can file your claim. Every County has a small claims court. There are rules about which one you can sue in. To learn more about where you can file you claim, read <a href=\" http://www.cc-courthelp.org/?Lang=ENG&Parent=222\" target=\"_blank\"> Find the Right Court to File Your Claim</a>. You can also talk to a small claims advisor.</p>",
	 "completed": false,
	 "stage": 0,
	 "id": 5
	},
	{
	 "title": "Find Out How to Name the Defendant",
	 "blockText": "<p>In order to file a small claims case, you will need to name the Defendant the proper way. This can sometimes be tricky for s business or corporation. To learn more read <a href=\"http://www.cc-courthelp.org/default.aspx?Lang=ENG&Parent=268\" target=\"_blank\">How Do I Name the Defendant in My Court Papers?</a>.</p>",
	 "completed": false,
	 "stage": 0,
	 "id": 6
	},
	{
	 "title": "Get and Fill-out Court Forms",
	 "blockText": "<p>To start a case in small claims court you will need to fill out:</p><ul><li>SC-100</li><li>Depending on which boxes you check on SC-100, you may need other forms such as SC-100A if you are suing more than two people, or SC-103 if you are suing a business with a fictitious business name.</li></ul> <p>In some counties, you may also need to fill out “local forms.” If there are any local forms, you can find them on your <a href=\"http://www.courts.ca.gov/find-my-court.htm\" target=\"_blank\">court’s website</a>. </p>",
	 "completed": false,
	 "stage": 0,
	 "id": 7
	},
	{
	 "title": "Check-in with Small Claims Advisor",
	 "blockText": "<p>You can ask your court’s <a href=\"http://www.courts.ca.gov/selfhelp-advisors.htm\" target=\"_blank\">small claims advisor</a> to look over the forms you filled out. Some small claims advisors also hold workshops you can attend.</p>",
	 "completed": false,
	 "stage": 0,
	 "id": 8
	},
	{
	 "title": "Fee Waivers",
	 "blockText": "<p>There is a filing fee to start a small claims case. If you are low-income you may qualify for a fee waiver. To find out if you qualify, read a <a href=\"http://www.courts.ca.gov/documents/fw001info.pdf\" target=\"_blank\">Fee Waiver Information Sheet</a>. If you do qualify, you’ll need to fill out <a href=\"http://www.courts.ca.gov/documents/fw001.pdf\" target=\"_blank\">FW-001.</a></p>",
	 "completed": false,
	 "stage": 0,
	 "id": 9
	},
	{
		"title": "File SC-100 to start your Small Claims case",
		"blockText": "text2After",
		"id": 10,
		"completed":false,
		"stage": 1
	},
	{
		"title": "Serve the Defendant form SC-100",
		"blockText": "text3After",
		"id": 11,
		"completed":false,
		"stage": 1
	},
	{
		"title": "File Proof of Service form SC-104",
		"blockText": "text1After",
		"id": 12,
		"completed":false,
		"stage": 1
	},
	{
		"title": "Prepare for Trial",
		"blockText": "text2After",
		"id": 13,
		"completed":false,
		"stage": 1
	},
	{
		"title": "(opt) Request to Postpone Trial",
		"blockText": "text3After",
		"id": 14,
		"completed":false,
		"stage": 1
	}, 
	{
		"title": "(opt) How to Subpoena a Witness for Evidence",
		"blockText": "text1After",
		"id": 15,
		"completed":false,
		"stage": 1
	},
	{
		"title": "Review the Judgement (Notice of Entry of Judement)",
		"blockText": "text2After",
		"id": 16,
		"completed":false,
		"stage": 2
	},
	{
		"title": "Read form SC-200-INFO",
		"blockText": "text3After",
		"id": 17,
		"completed":false,
		"stage": 2
	},
	{
		"title": "(opt) Acknowledgement of Satisfaction of Judgement",
		"blockText": "text2After",
		"id": 18,
		"completed":false,
		"stage": 2
	},
	{
		"title": "(opt) Submit a Motion to Vacate the judgement",
		"blockText": "text3After",
		"id": 19,
		"completed":false,
		"stage": 2
	},
	{
		"title": "(opt) Appeal the Judgement",
		"blockText": "text3After",
		"id": 20,
		"completed":false,
		"stage": 2
	},
	{
		"title": "(opt) Review Judgement Debtor's Statement",
		"blockText": "text3After",
		"id": 21,
		"completed":false,
		"stage": 2
	}
];
export default checklistTemplate;