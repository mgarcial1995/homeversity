import React from "react";
import "./styles.sass";

class Header extends React.Component {
  render() {
    return (
      <header class="background">
        <div class="background-2">
          <div class="background-3">
            <div class="left">
              <div class="photo"></div>
              <div class="button">
                {" "}
                <strong>50% OFF!</strong>
              </div>
            </div>

            <div class="right">
              <div class="description">
                <p class="text-header">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Assumenda, laboriosam? Distinctio a dolor voluptatum tempore
                  saepe amet unde eius, doloremque porro sed quas, rerum fugit
                  temporibus hic modi recusandae? Consequatur.
                </p>
                <div class="button2">Read more</div>
              </div>
              <div class="pages">
                <div class="page-n"></div>
                <div class="page-n"></div>
                <div class="page-n"></div>
                <div class="page-n"></div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
