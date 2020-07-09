import React, { Component } from "react";
import "./album.css";

export default class album extends Component {
  constructor(props) {
    super(props);
    this.state = { numPages: 21, pageNumber: 1 };
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
          <div className={pageNumber === 1 ? "img-div-book active" : "img-div-book"}>
            <img
              alt="album"
              className="img-page-book"
              src={"/img/LasChicasdelCable_Album_interactivo-1.png"}
            ></img>
          </div>
          <div className={pageNumber === 2 ? "img-div active" : "img-div"}>
            <img
              alt="album"
              className="img-page"
              src={"/img/LasChicasdelCable_Album_interactivo-2-2.png"}
            ></img>
          </div>
          <div className={pageNumber === 3 ? "img-div active" : "img-div"}>
            <img
              alt="album"
              className="img-page"
              src={"/img/LasChicasdelCable_Album_interactivo-2-3.png"}
            ></img>
          </div>

          <div className={pageNumber === 4 ? "img-div active" : "img-div"}>
            <img
              alt="album"
              className="img-page"
              src={"/img/LasChicasdelCable_Album_interactivo-2-4.png"}
            ></img>
          </div>
          <div className={pageNumber === 5 ? "img-div active" : "img-div"}>
            <img
              alt="album"
              className="img-page"
              src={"/img/LasChicasdelCable_Album_interactivo-2-5.png"}
            ></img>
          </div>
          <div className={pageNumber === 6 ? "img-div active" : "img-div"}>
            <img
              alt="album"
              className="img-page"
              src={"/img/LasChicasdelCable_Album_interactivo-2-6.png"}
            ></img>
          </div>
          <div className={pageNumber === 7 ? "img-div active" : "img-div"}>
            <img
              alt="album"
              className="img-page"
              src={"/img/LasChicasdelCable_Album_interactivo-2-7.png"}
            ></img>
          </div>
          <div className={pageNumber === 8 ? "img-div active" : "img-div"}>
            <img
              alt="album"
              className="img-page"
              src={"/img/LasChicasdelCable_Album_interactivo-2-8.png"}
            ></img>
          </div>
          <div className={pageNumber === 9 ? "img-div active" : "img-div"}>
            <img
              alt="album"
              className="img-page"
              src={"/img/LasChicasdelCable_Album_interactivo-2-9.png"}
            ></img>
          </div>
          <div className={pageNumber === 10 ? "img-div active" : "img-div"}>
            <img
              alt="album"
              className="img-page"
              src={"/img/LasChicasdelCable_Album_interactivo-2-10.png"}
            ></img>
          </div>
          <div className={pageNumber === 11 ? "img-div active" : "img-div"}>
            <img
              alt="album"
              className="img-page"
              src={"/img/LasChicasdelCable_Album_interactivo-2-11.png"}
            ></img>
          </div>
          <div className={pageNumber === 12 ? "img-div active" : "img-div"}>
            <img
              alt="album"
              className="img-page"
              src={"/img/LasChicasdelCable_Album_interactivo-2-12.png"}
            ></img>
          </div>
          <div className={pageNumber === 13 ? "img-div active" : "img-div"}>
            <img
              alt="album"
              className="img-page"
              src={"/img/LasChicasdelCable_Album_interactivo-2-13.png"}
            ></img>
          </div>
          <div className={pageNumber === 14 ? "img-div active" : "img-div"}>
            <img
              alt="album"
              className="img-page"
              src={"/img/LasChicasdelCable_Album_interactivo-2-14.png"}
            ></img>
          </div>
          <div className={pageNumber === 15 ? "img-div active" : "img-div"}>
            <img
              alt="album"
              className="img-page"
              src={"/img/LasChicasdelCable_Album_interactivo-2-15.png"}
            ></img>
          </div>
          <div className={pageNumber === 16 ? "img-div active" : "img-div"}>
            <img
              alt="album"
              className="img-page"
              src={"/img/LasChicasdelCable_Album_interactivo-2-16.png"}
            ></img>
          </div>
          <div className={pageNumber === 17 ? "img-div active" : "img-div"}>
            <img
              alt="album"
              className="img-page"
              src={"/img/LasChicasdelCable_Album_interactivo-2-17.png"}
            ></img>
          </div>
          <div className={pageNumber === 18 ? "img-div active" : "img-div"}>
            <img
              alt="album"
              className="img-page"
              src={"/img/LasChicasdelCable_Album_interactivo-2-18.png"}
            ></img>
          </div>
          <div className={pageNumber === 19 ? "img-div active" : "img-div"}>
            <img
              alt="album"
              className="img-page"
              src={"/img/LasChicasdelCable_Album_interactivo-2-19.png"}
            ></img>
          </div>
          <div className={pageNumber === 20 ? "img-div active" : "img-div"}>
            <img
              alt="album"
              className="img-page"
              src={"/img/LasChicasdelCable_Album_interactivo-2-20.png"}
            ></img>
          </div>
          <div
            className={pageNumber === numPages ? "img-div-book active" : "img-div-book"}
          >
            <img
              alt="album"
              className="img-page-book"
              src={"/img/LasChicasdelCable_Album_interactivo-2-21.png"}
            ></img>
          </div>
        </div>

        <div>
          {pageNumber === 1 ? (
            ""
          ) : (
            <div className="btn-album-left" onClick={this.goToPrevPage}>
              <img alt="album" src={"/img/flecha_izq.png"} />
            </div>
          )}

          {pageNumber === numPages ? (
            ""
          ) : (
            <button className="btn-album-right" onClick={this.goToNextPage}>
              <img alt="album" src={"/img/flecha_der.png"} />
            </button>
          )}
       

          {pageNumber === 1 || pageNumber === 21 ? (
            ""
          ) : (
            <div className="index-div">
              <h2>
                {pageNumber - 1} <span>de</span> {numPages - 2}
              </h2>
            </div>
          )}
       </div>
      </div>
    );
  }
}
