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
                <strong>¡PODER!</strong>
              </div>
            </div>

            <div className="right">
              <div className="description">
                <p className="text-header">
                  Contamos con los mejores cursos para relajarte, aprender y aportar de la mejor manera en el hogar.
                  Sorprende a tu familia con algo nuevo.
                </p>
                <div className="button2">Ver más</div>
              </div>
              {/* <div className="pages">
                <div className="page-n"></div>
                <div className="page-n"></div>
                <div className="page-n"></div>
                <div className="page-n"></div>
              </div> */}
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
