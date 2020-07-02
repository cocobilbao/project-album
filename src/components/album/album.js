import React, { Component } from "react";
import foto1 from "./img/foto1.png";
import foto2 from "./img/foto2.png";
import foto3 from "./img/foto3.png";
import foto4 from "./img/foto4.png";
import foto5 from "./img/foto5.png";
import arrow1 from "./img/arrow1.png";
import arrow2 from "./img/arrow2.png";
import "./album.css";

export default class album extends Component {
  constructor(props) {
    super(props);
    this.state = { numPages: 5, pageNumber: 1, show: false };
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  goToPrevPage = () =>
    this.setState((state) => ({ pageNumber: state.pageNumber - 1 }));
  goToNextPage = () =>
    this.setState((state) => ({ pageNumber: state.pageNumber + 1 }));
  goToFirstPage = () => this.setState((state) => ({ pageNumber: 1 }));

  showIndexIn = () => this.setState((state) => ({ show: true }));
  showIndexOut = () => this.setState((state) => ({ show: false }));

  render() {
    const { pageNumber, numPages, show } = this.state;
console.log("show", show)
    return (
      <div>
        <div className="div-group">
          <div className={pageNumber === 1 ? "img-div active" : "img-div"}>
            <img 
            alt="album"
              className="img-page"
              style={pageNumber === 1 ? { opacity: "1" } : { opacity: "0" }}
              src={foto1}
            ></img>
          </div>
          <div className={pageNumber === 2 ? "img-div active" : "img-div"}>
            <img 
            alt="album"
              className="img-page"
              style={pageNumber === 2 ? { opacity: "1" } : { opacity: "0" }}
              src={foto2}
            ></img>
          </div>
          <div className={pageNumber === 3 ? "img-div active" : "img-div"}>
            <img 
            alt="album"
              className="img-page"
              style={pageNumber === 3 ? { opacity: "1" } : { opacity: "0" }}
              src={foto3}
            ></img>
          </div>

          <div className={pageNumber === 4 ? "img-div active" : "img-div"}>
            <img 
            alt="album"
              className="img-page"
              style={pageNumber === 4 ? { opacity: "1" } : { opacity: "0" }}
              src={foto4}
            ></img>
          </div>
          <div
            className={pageNumber === numPages ? "img-div active" : "img-div"}
          >
            <img 
            alt="album"
              className="img-page"
              style={
                pageNumber === numPages ? { opacity: "1" } : { opacity: "0" }
              }
              src={foto5}
            ></img>
          </div>
        </div>

        <div className="btn-right">
          {pageNumber === 1 ? (
            ""
          ) : (
            <button
              className="btn-album"
              onMouseEnter={this.showIndexIn}
              onMouseLeave={this.showIndexOut}
              onClick={this.goToPrevPage}
            >
              <img 
              alt="album" src={arrow2} />
            </button>
          )}
        </div>
        <div className="btn-left">
          {pageNumber === numPages ? (
            ""
          ) : (
            <button
              className="btn-album"
              onMouseEnter={this.showIndexIn}
              onMouseLeave={this.showIndexOut}
              onClick={this.goToNextPage}
            >
              <img 
              alt="album" src={arrow1} />
            </button>
          )}
        </div>
        <div className="index-div" style={show === true ? {opacity: "1"} : {opacity: "0"}}>
          <h2>
            {pageNumber} / {numPages}
          </h2>
        </div>
      </div>
    );
  }
}
