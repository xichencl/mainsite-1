import React, {Component} from 'react';
import TitleLine from '../template/title-line';
import InfoBox from '../template/info-box';
import { fetchContactPage } from '../../actions/content.js';
import { connect } from 'react-redux';

const Directories = [
	{
		title: "Immigration Resources",
		url: "http://www.courts.ca.gov/immigration.htm"
	},
	{
		title: "Find My Court",
		url: "http://www.courts.ca.gov/find-my-court.htm"
	},
	{
		title: "National Domestic Violence Hotline",
		url: "http://www.thehotline.org/"
	}, 
	{
		title: "Find Free Legal Help in Your Area",
		url: "http://www.courts.ca.gov/documents/SIJS_Non-Profit_Legal_Organizations.pdf"
	},
	{
		title: "Ask a Law Librarian",
		url: "http://www.questionpoint.org/crs/servlet/org.oclc.admin.BuildForm?&page=frame&institution=11341&type=2&language=1"
	}
]
 
class Contact extends Component {
	constructor(props) {
		super(props)
		// this.renderSections = this.renderSections.bind(this)
	}

	componentWillMount() {
		this.props.fetchContactPage()
	}
	
	// renderSections() {
	// 				console.log(this.props.contact, 'this.props.contact')

	// 	return (
	// 		this.props.contact.fields.map((item) => {
	// 			return (
	// 				<InfoBox 
	// 					boxTitle={item.fields.title[lang]}
	// 					boxContent={item.fields.blockText[lang]}
	// 					key={item.sys.id} />
	// 			)
	// 		})
	// 	)
	// }

	render() {
		const lang = this.props.language
		//console.log(this.props.contact, 'contact')
		const renderedSections = this.props.contact.fields.map((item) => {
				return (
					<InfoBox 
						boxTitle={item.fields.title[lang]}
						boxContent={item.fields.blockText[lang]}
						key={item.sys.id} />
				)
			})

		return (
			<div>
				<TitleLine title={this.props.contact} />
				<div className="grid grid-pad">
					{/*{this.renderSections()}*/}
					{renderedSections}
						{/*<InfoBox 
							boxTitle="Give us Feedback!"
							boxContent="Answer our quick online survey​​ and help to make the Self-Help Law Center better! We are working to keep the Self-Help Law Center as updated as possible and will be using public feedback to make improvements to the site.​​​"
							buttonVisibilityClass="hidden"
						/>
						<InfoBox 
							boxTitle="Missing or Incorrect Content?"
							boxContent="If there is any content on the site that should be updated or if there is a link we should add, please let us know​!​​​​​"
							buttonVisibilityClass="hidden"
						/>*/}
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
  return { 
    contact: state.content.contact,
    language: state.content.language
   };
}

// export default connect(mapStateToProps)(HomePage);

export default connect(mapStateToProps, { fetchContactPage })(Contact);
