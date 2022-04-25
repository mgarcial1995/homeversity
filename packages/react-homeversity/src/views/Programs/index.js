import Programss from "../../components/Programss";
import { Link } from "react-router-dom";
import Search from "../../components/Search";
import React, { useState, useEffect } from "react";
import "./styles.sass";
export const FilterContext = React.createContext({});
function Programs() {
  const [listPrograms, setListPrograms] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/api/programs/', {
      method: 'GET'
    })
      .then(res => {
        return res.json();
      })
      .then(response =>  {
        setListPrograms(response.programs)})
  }, []);
  // let programs = [
  //   {
  //     id: "1",
  //     name: "MyFirtsProgram",
  //     description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur",
  //     duration: "3 months",
  //     phoho: "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  //     category: "category1",
  //     price: "100.00",
  //     learning: [
  //       {
  //         about: "Lorem Ipsum is not simply random text"
  //       },
  //       {
  //         about: "Lorem Ipsum is not simply random text"
  //       },
  //       {
  //         about: "Lorem Ipsum is not simply random text"
  //       }
  //     ]
  //   },
  //   {
  //     id: "2",
  //     name: "MySecondProgram",
  //     description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur",
  //     duration: "3 months",
  //     phoho: "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  //     category: "category1",
  //     price: "100.00",
  //     learning: [
  //       {
  //         about: "Lorem Ipsum is not simply random text"
  //       },
  //       {
  //         about: "Lorem Ipsum is not simply random text"
  //       },
  //       {
  //         about: "Lorem Ipsum is not simply random text"
  //       }
  //     ]
  //   }
  // ]
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
      <div className="programs-container">
      {listPrograms.map((program) =>(
        <Link to={`infoprogram/${program.id}`}>
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
