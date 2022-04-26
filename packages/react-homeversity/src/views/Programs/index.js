import Programss from "../../components/Programss";
import { Link } from "react-router-dom";
import Search from "../../components/Search";
import React, { useState, useEffect } from "react";
import "./styles.sass";
export const FilterContext = React.createContext({});
function Programs() {
  const [listPrograms, setListPrograms] = useState([])
  const [selectedFilter, setFilter] = useState("Nombre");
  const [renderBy, setRenderBy] = useState({
    Nombre: "",
    Category: "Cat1",
    Precio: "",
    Nivel: "Básico",
  });

  useEffect(() => {
    fetch('http://localhost:3001/api/programs/', {
      method: 'GET'
    })
      .then(res => {
        return res.json();
      })
      .then(response => {
        setListPrograms(response.programs)
      })
  }, []);



  return (
    <div>
      <FilterContext.Provider
        value={{ selectedFilter, setFilter, renderBy, setRenderBy }}
      >
        <Search />
        <div className="programs-container">
          {listPrograms.map((program) => (
            <Link className="programs-container-program" to={`infoprogram/${program._id}`}>
              <Programss program={program} />
            </Link> 
          ))}
        </div>
      </FilterContext.Provider>
      {console.log(renderBy)}
    </div>
  );
}

export default Programs;
