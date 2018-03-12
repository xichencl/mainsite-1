import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import TitleLine from '../template/title-line';
import { fetchVideos } from '../../actions/content.js';


class Videos extends Component {
  componentWillMount() {
    if (!this.props.videos) {
      this.props.fetchVideos()
      console.log(this.props.videos, 'this.props.videos')
    }
  }

  renderVideos() {
    return this.props.videos.map((unit, index) => {
      return (
        <div className="Square-box-container" key={unit.sys.id}>
          <Link to={'videos/' + unit.fields.title}>
            <h1>{unit.fields.title}</h1>
          </Link>
        </div>
      );
    });
  }
	render() {
		return (
			<div>
        <TitleLine title="Video Resources" />
        <div className="grid grid-pad">
          {this.renderVideos()}
        </div>
      </div>
		)
	}
}

function mapStateToProps(state) {
  return { videos: state.content.videos,
           assets: state.content.assets
   };
}

export default connect(mapStateToProps, { fetchVideos })(Videos);
