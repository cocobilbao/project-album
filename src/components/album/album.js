import React, { Component } from "react";
import "./album.css";

export default class album extends Component {
  constructor(props) {
    super(props);
    this.state = { numPages: 9, pageNumber: 1 };
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  goToPrevPage = () =>
    this.setState((state) => ({ pageNumber: state.pageNumber - 1 }));
  goToNextPage = () =>
    this.setState((state) => ({ pageNumber: state.pageNumber + 1 }));
  goToFirstPage = () => this.setState((state) => ({ pageNumber: 1 }));

  render() {
    const { pageNumber, numPages } = this.state;
    return (
      <div>
        <div className="div-group">
          <div className={pageNumber === 1 ? "img-div active" : "img-div"}>
            <img
              alt="album"
              className="img-page"
              style={{borderRadius:"4px"}}
              src={"/img/album1.png"}
            ></img>
          </div>
          <div className={pageNumber === 2 ? "img-div active" : "img-div"}>
            <img
              alt="album"
              className="img-page"
              style={{border:"5px solid #fff"}}
              src={"/img/foto6.png"}
            ></img>
          </div>
          <div className={pageNumber === 3 ? "img-div active" : "img-div"}>
            <img
              alt="album"
              className="img-page"
              style={{border:"5px solid #fff"}}
              src={"/img/foto1.png"}
            ></img>
          </div>

          <div className={pageNumber === 4 ? "img-div active" : "img-div"}>
            <img
              alt="album"
              className="img-page"
              style={{border:"5px solid #fff"}}
              src={"/img/foto2.png"}
            ></img>
          </div>
          <div className={pageNumber === 5 ? "img-div active" : "img-div"}>
            <img
              alt="album"
              className="img-page"
              style={{border:"5px solid #fff"}}
              src={"/img/foto3.png"}
            ></img>
          </div>
          <div className={pageNumber === 6 ? "img-div active" : "img-div"}>
            <img
              alt="album"
              className="img-page"
              style={{border:"5px solid #fff"}}
              src={"/img/foto4.png"}
            ></img>
          </div>
          <div className={pageNumber === 7 ? "img-div active" : "img-div"}>
            <img
              alt="album"
              className="img-page"
              style={{border:"5px solid #fff"}}
              src={"/img/foto5.png"}
            ></img>
          </div>
          <div className={pageNumber === 8 ? "img-div active" : "img-div"}>
            <img
              alt="album"
              className="img-page"
              style={{border:"5px solid #fff"}}
              src={"/img/foto7.png"}
            ></img>
          </div>
          <div
            className={pageNumber === numPages ? "img-div active" : "img-div"}
          >
            <img
              alt="album"
              className="img-page"
              style={{borderRadius:"4px"}}
              src={"/img/album2.png"}
            ></img>
          </div>
        </div>

        <div className="btn-group">
          {pageNumber === 1 ? (
            ""
          ) : (
            <button
              className="btn-album-left"
              onClick={this.goToPrevPage}
            >
              <img alt="album" src={"/img/arrow1.png"} />
            </button>
          )}

          {pageNumber === numPages ? (
            ""
          ) : (
            <button
              className="btn-album-right"
              onClick={this.goToNextPage}
            >
              <img alt="album" src={"/img/arrow2.png"} />
            </button>
          )}

          <div
            className="index-div"
          >
            <h3>
              {pageNumber} / {numPages}
            </h3>
          </div>
        </div>
      </div>
    );
  }
}
