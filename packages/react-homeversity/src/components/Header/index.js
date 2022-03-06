import React from "react";
import "./styles.sass";

class Header extends React.Component {
  render() {
    return (
      <header className="background">
        <div className="background-2">
          <div className="background-3">
            <div className="left">
              <div className="photo"></div>
              <div className="button">
                {" "}
                <strong>50% OFF!</strong>
              </div>
            </div>

            <div className="right">
              <div className="description">
                <p className="text-header">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Assumenda, laboriosam? Distinctio a dolor voluptatum tempore
                  saepe amet unde eius, doloremque porro sed quas, rerum fugit
                  temporibus hic modi recusandae? Consequatur.
                </p>
                <div className="button2">Read more</div>
              </div>
              <div className="pages">
                <div className="page-n"></div>
                <div className="page-n"></div>
                <div className="page-n"></div>
                <div className="page-n"></div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
