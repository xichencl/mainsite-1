import React from 'react';
import { connect } from 'react-redux';
// import ReactHtmlParser from 'react-html-parser';

class ThemeIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = { on: false };
    // this.toggleTheme = this.toggleTheme.bind(this);
  }
  // toggleOnOff() {
  //   // this.setState({ on: !this.state.on });
  // }
  // toggleTheme(store){
  //   store.dispatch({type:'TOGGLE_THEME'});
  // }
  render() {
    // const {store} = this.context;
    // let className = this.state.on ? 'on' : '';
    // className += ' test-button2';
    return (
      // <div className={className} onClick={this.props.onClick.bind(this)}>
        <div className="icon-size-O" onClick={this.props.onClick.bind(this)}>
          <svg
            id="Symbol_14_1"
            data-name="Symbol 14 – 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="6461 -1056 500 500"
          >
            <defs>
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    '\n      .cls-1 {\n        fill: #F0F0F0;\n        stroke: #6f7273;\n        stroke-width: 2px;\n      }\n\n      .cls-2 {\n        stroke: none;\n      }\n\n      .cls-3 {\n        fill: none;\n      }\n    ',
                }}
              />
            </defs>
            <g
              id="Rectangle_35"
              data-name="Rectangle 35"
              className="cls-1"
              transform="translate(6461 -1056)"
            >
              <rect className="cls-2" width={500} height={500} />
              <rect className="cls-3" x={1} y={1} width={498} height={498} />
            </g>
            <path
              id="Path_57"
              data-name="Path 57"
              d="M499.5.5v499H.5Z"
              transform="translate(6461 -1056)"
            />
          </svg>
        </div>
      // </div>
    );
  }
}

// ThemeIcon.contextTypes = {
//   store: React.PropTypes.object
// };


const mapDispatchToProps = dispatch => ({
  onClick() {
    // console.log("current theme: ", this.props.theme);
    dispatch({type: "TOGGLE_THEME"});
  },
});
export default connect(null, mapDispatchToProps)(ThemeIcon);
