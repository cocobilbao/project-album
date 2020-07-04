import React, { Component } from "react";
import album1 from "./img/album1.png";
import foto1 from "./img/foto1.png";
import foto2 from "./img/foto2.png";
import foto3 from "./img/foto3.png";
import foto4 from "./img/foto4.png";
import foto5 from "./img/foto5.png";
import album2 from "./img/album2.png";
import arrow1 from "./img/arrow1.png";
import arrow2 from "./img/arrow2.png";
import "./album.css";

export default class album extends Component {
  constructor(props) {
    super(props);
    this.state = { numPages: 7, pageNumber: 1 };
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
              src={album1}
            ></img>
          </div>
          <div className={pageNumber === 2 ? "img-div active" : "img-div"}>
            <img
              alt="album"
              className="img-page"
              src={foto1}
            ></img>
          </div>
          <div className={pageNumber === 3 ? "img-div active" : "img-div"}>
            <img
              alt="album"
              className="img-page"
              src={foto2}
            ></img>
          </div>

          <div className={pageNumber === 4 ? "img-div active" : "img-div"}>
            <img
              alt="album"
              className="img-page"
              src={foto3}
            ></img>
          </div>
          <div className={pageNumber === 5 ? "img-div active" : "img-div"}>
            <img
              alt="album"
              className="img-page"
              src={foto4}
            ></img>
          </div>
          <div className={pageNumber === 6 ? "img-div active" : "img-div"}>
            <img
              alt="album"
              className="img-page"
              src={foto5}
            ></img>
          </div>
          <div
            className={pageNumber === numPages ? "img-div active" : "img-div"}
          >
            <img
              alt="album"
              className="img-page"
              src={album2}
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
              <img alt="album" src={arrow1} />
            </button>
          )}

          {pageNumber === numPages ? (
            ""
          ) : (
            <button
              className="btn-album-right"
              onClick={this.goToNextPage}
            >
              <img alt="album" src={arrow2} />
            </button>
          )}

          <div
            className="index-div"
          >
            <h2>
              {pageNumber} / {numPages}
            </h2>
          </div>
        </div>
      </div>
    );
  }
}
