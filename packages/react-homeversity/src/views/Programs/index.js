import Programss from "../../components/Programss";
import Search from "../../components/Search";
import React, { useState } from "react";
export const FilterContext = React.createContext({});
function Programs() {
  // const [listPrograms, setListPrograms] = useState([])

  // useEffect(() => {
  //   fetch('http://localhost:3001/api/programs/', {
  //     method: 'GET'
  //   })
  //     .then(res => {
  //       return res.json();
  //     })
  //     .then(response =>  {
  //       setListPrograms(response.programs)})
  // }, []);
  const [selectedFilter, setFilter] = useState("Nombre");
  const [renderBy, setRenderBy] = useState({
      Nombre: "",
      Category: "Cat1",
      Precio: "",
      Nivel: "Básico",
    });

  return (
    <div>
      <FilterContext.Provider
        value={{ selectedFilter, setFilter, renderBy, setRenderBy }}
      >
        <Search />
        <Programss />
      </FilterContext.Provider>
      {console.log(renderBy)}
    </div>
  );
}

export default Programs;
