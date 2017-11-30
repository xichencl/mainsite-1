{
	selectedChecklist: 'smallClaims',
	tasksByChecklistType: {
		smallClaims: {
			isFetching: true, // store to show spinner
			didInvalidate: false,
			tasks: []
		}, 
		reactjs: {
			isFetching: false, // store to hide spinner
			didInvalidate: false, // store to toggle spinner if data refresh needed
			tasks: [
				{	title: "Mediation",
					blockText: "Mediation is a process for resolving disputes informally.  It is voluntary and confidential.  It works like this:  You and the other person would meet with a third person who is neutral – a trained mediator. That person would help the two of you talk things over in an attempt to resolve your dispute. Usually, mediation of a small claims dispute lasts between 30 minutes and 2 hours. It can be tried before or after filing a lawsuit.    \tMediation can really help if you have an on-going relationship with the person you have the dispute with. If you are suing a family member, neighbor, business partner, landlord, or tenant, mediation may help you work out your problems and keep your relationship.  \tMediation allows people to make their own decisions about how they will resolve their disputes.   If you decide that mediation might resolve your dispute, ask a court clerk if the small claims court offers a mediation program.  If not, the clerk may know of a publicly funded program in your county.  You can also locate a mediation program by looking in the business section of your telephone directory, on the website of the California Department of Consumer Affairs.  If you DO settle your dispute, write down what was agreed to. Include:    \tThe names and addresses of the two people, \tA brief description of the “what,” “when” and “where” of the dispute that has been resolved, \tA statement of what the person giving up a claim is getting in return, \tThe date the agreement is being signed, and \tThe signatures of everyone involved.   Make sure everyone has a copy of the agreement, and keep your copy of the agreement in a safe place.",
					id: 0,
					completed: false,
					before: true
				},
				
			]
		}
	}
}