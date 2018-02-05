import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCategories } from '../../actions/content.js';
import Squarebox from '../template/square-box';
import Asset from '../template/responsive-image';
 
class TestHomePage extends React.Component {
  componentWillMount() {
    this.props.fetchCategories('category')
    console.log(this.props.content)
  }


  renderCategories() {
    return this.props.content.map((category, index) => {
      return (
        <div key={category.sys.id}>
          <Link to={category.fields.url}>
            <Squarebox 
              id={category.sys.id}
              boxTitle={category.fields.title}  
              assetId={category.fields.image.sys.id}
            />

          </Link>

            
        </div>
      );
    });
  }

  render() {
    return (
      <div className="mainpage">
        <div className="mainpage-title">
          <hr className="mainpage-title-line" />
          <h1>Self-Help Law Center</h1>
          <hr className="mainpage-title-line"/>
        </div>
        <div className="grid grid-pad">
          {this.renderCategories()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { content: state.content.all };
}

export default connect(mapStateToProps, { fetchCategories })(TestHomePage);
