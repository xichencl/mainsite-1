import React from 'react';
// import ReactHtmlParser from 'react-html-parser';

class ThemeIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = { on: false };
  }
  toggleOnOff() {
    this.setState({ on: !this.state.on });
  }

  render() {
    let className = this.state.on ? 'on' : '';
    className += ' test-button2';
    return (
      <div className={className} onClick={this.toggleOnOff.bind(this)}>
        <div className="icon-size-O">
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
      </div>
    );
  }
}

export default ThemeIcon;
