import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAsset } from '../../actions/content';

class Asset extends Component {
  componentWillMount() {
    this.props.fetchAsset(this.props.assetId)
  }
  renderAsset() {
    return this.props.assets.map((asset) => {
      if (asset.sys.id == this.props.assetId) {
        return (
          <img src={asset.fields.file.url} alt={asset.fields.file.fileName} key={`${asset.sys.id}`}/>
        );
      }
    });
  }
  render() {
    return (
      <div>
        {this.renderAsset()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    assets: state.assets
  };
}

export default connect(mapStateToProps, { fetchAsset })(Asset)



// import React, { PropTypes } from 'react'
// // import CSSModules from 'react-css-modules'
// // import styles from './ResponsiveImage.css'

// class ResponsiveImage extends React.Component {
//   constructor (props) {
//     super(props)

//     this.state = { src: props.src, alt: props.alt, mounted: false }
//   }

//   componentDidMount () {
//     this.setState({
//       width: Math.round(this.node.getBoundingClientRect().width),
//       mounted: true
//     })
//   }

//   render () {
//     return (
//       <img styleName="responsiveImage"
//         src={ this.state.mounted && `${this.state.src}?w=${this.state.width}`}
//         alt={this.state.alt}
//       />
//     )
//   }
// }

// ResponsiveImage.propTypes = { src: PropTypes.string, alt: PropTypes.string }

// export default ResponsiveImage;