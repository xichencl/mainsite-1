import React, {Component} from 'react';
import TitleLine from '../template/title-line';
import InfoBox from '../template/info-box';

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


export default class Contact extends Component {
	
	render() {

		const renderedDirectories = Directories.map((item) => {
      return (
        <div>
          <a href={item.url} target="_blank">{item.title}</a>
        </div>
      )
    })

		return (
			<div>
				<TitleLine title="Contact Information" />
				<div className="grid grid-pad">
						<InfoBox 
							boxTitle="Directories"
							boxContent={renderedDirectories}
							buttonVisibilityClass="hidden"
						/>
						<InfoBox 
							boxTitle="Give us Feedback!"
							boxContent="Answer our quick online survey​​ and help to make the Self-Help Law Center better! We are working to keep the Self-Help Law Center as updated as possible and will be using public feedback to make improvements to the site.​​​"
							buttonVisibilityClass="hidden"
						/>
						<InfoBox 
							boxTitle="Missing or Incorrect Content?"
							boxContent="If there is any content on the site that should be updated or if there is a link we should add, please let us know​!​​​​​"
							buttonVisibilityClass="hidden"
						/>
				</div>
			</div>
		)
	}
}