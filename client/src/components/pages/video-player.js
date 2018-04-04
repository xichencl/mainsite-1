import React, {Component} from 'react';
import { connect } from 'react-redux';
import TitleLine from '../template/title-line';
import { fetchAsset, fetchVideos } from '../../actions/content.js';

class VideoPlayer extends Component {
  componentWillMount() {
    if (!this.props.videos || this.props.videos.length <= 0) {
      this.props.fetchVideos()
      console.log(this.props.videos, 'this.props.videos')
    }

    this.props.fetchAsset(this.props.videoID)
    console.log('componentwillmount in videoplayer')
  }

	render() {
    const videoID = this.props.match.params.videoID;
    const url = 'http:' + this.props.videoURLs[videoID];

		return (
			<div className="Square-box-container">
        <TitleLine title={videoID} />

        <div className="Square-box-container">
          <object type="application/x-shockwave-flash" 
            data={url} 
            width="800vw" height="500vh">
            <param name="movie" value={url} />
            <param name="quality" value="high"/>
          </object>
        </div>
      </div>
		)
	}
}

function mapStateToProps(state) {
  return { videoURLs: state.content.videoURLs,
           assets: state.content.assets
   };
}

export default connect(mapStateToProps, { fetchAsset, fetchVideos })(VideoPlayer)
