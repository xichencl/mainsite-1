import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAsset } from '../../actions/content';

class Asset extends Component {
  componentWillMount() {
    this.props.fetchAsset(this.props.assetId)
    console.log('componentwillmount in asset')
  }
  // renderAsset() {
  //   // return this.props.assets.map((asset) => {
  //   //   console.log('render asset in asset')
  //   //   if (typeof asset !== 'undefined' && asset.sys.id == this.props.assetId) {
  //   //     return (
  //   //       <img src={asset.fields.file.url} alt={asset.fields.file.fileName} key={`${asset.sys.id}`}/>
  //   //     );
  //   //   }
  //   // });
  //   const asset = this.props.assets.find( asset => asset.assetId === this.props.assetId);
  //   return (
  //         <img src={asset.url} alt={asset.alt} />
  //       );
  // }
  render() {
    const asset = this.props.assets.find( asset => asset.assetId === this.props.assetId);
    return asset !== undefined && (
      <div>
        <img src={asset.url} alt={asset.alt} />
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