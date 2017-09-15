import React from 'react';
// import ReactHtmlParser from 'react-html-parser';

class LangRadios extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      // <div className="lang">
      //   <h1>Espa&ntilde;ol</h1>
      //   {/*espanol*/}
      // </div>

      <form>
        <div className="radio">
          <label>
            <input type="radio" value="option1" checked={true} />
            <div className="lang">
              <div onClick={this.closeModal}>
                <h1>Espa&ntilde;ol</h1>
                {/*espanol*/}
              </div>
            </div>
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="option2" />
            Option 2
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="option3" />
            Option 3
          </label>
        </div>
      </form>
    );
  }
}

export default LangRadios;
