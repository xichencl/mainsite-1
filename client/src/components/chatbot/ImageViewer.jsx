import React from 'react';
// import ReactHtmlParser from 'react-html-parser';

class ImageViewer extends React.Component {
  constructor(props) {
    super(props);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.myModal.style.display = 'block';
    this.modalImg.src = this.smallImg.src;
    // this.caption.innerHtml=this.smallImg.alt;
    // console.log(this.smallImg.alt);
  }
  closeModal() {
    this.myModal.style.display = 'none';
  }

  render() {
    return (
      <div>
        <img
          ref={img => (this.smallImg = img)}
          onClick={this.openModal}
          id="myImg"
          src={this.props.src}
          alt={this.props.alt}
        />
        <div ref={mod => (this.myModal = mod)} className="modal-P">
          <span className="close-R" onClick={this.closeModal}>
            &times;
          </span>
          <img className="modal-content-Q" ref={img => (this.modalImg = img)} />
          <div ref={cap => (this.caption = cap)} id="caption">
            {this.props.alt}
          </div>
        </div>
      </div>
    );
  }
}
export default ImageViewer;
