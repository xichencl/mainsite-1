import React from 'react';
// import ReactHtmlParser from 'react-html-parser';

class LanguageIcon extends React.Component {
  constructor(props) {
    super(props);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.myModal.style.display = 'block';
    //this.modalImg.src = this.smallImg.src;
  }
  closeModal() {
    this.myModal.style.display = 'none';
  }

  render() {
    return (
      <div>
        <img onClick={this.openModal} id="myImg" />
        <div ref={mod => (this.myModal = mod)} className="modal">
          <span className="close" onClick={this.closeModal}>
            &times;
          </span>
          <img className="modal-content" ref={img => (this.modalImg = img)} />
        </div>
      </div>
    );
  }
}
export default LanguageIcon;
