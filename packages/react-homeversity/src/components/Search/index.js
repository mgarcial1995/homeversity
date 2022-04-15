import { useContext } from "react";
import { FilterContext } from "../../views/Programs";
import "./styles.sass";

const Search = () => {
  const filterOptions = ["Nombre", "Categoría", "Precio", "Nivel"];
  const { selectedFilter, setFilter, renderBy, setRenderBy } =
    useContext(FilterContext);

  const updateFilter = (e) => {
    setRenderBy({
      Nombre: "",
      Category: "cat1",
      Precio: "",
      Nivel: "Básico",
    });
    return setFilter(e.target.value);
  };

  const renderByField = (e) => {
    e.preventDefault();
    switch (selectedFilter) {
      case "Nombre":
        console.log(selectedFilter, renderBy.Nombre);
        break;
      case "Categoría":
        console.log(selectedFilter, renderBy.Category);
        break;
      case "Precio":
        console.log(selectedFilter, renderBy.Precio);
        break;
      case "Nivel":
        console.log(selectedFilter, renderBy.Nivel);
        break;
      default:
        console.log("error");
    }
  };

  const renderSwitchFind = () => {
    switch (selectedFilter) {
      case "Nombre":
        return (
          <input
            className="search-field-name"
            placeholder="Ingrese nombre"
            onChange={(e) =>
              setRenderBy({
                Nombre: e.target.value,
                Category: "Cat1",
                Precio: "",
                Nivel: "Básico",
              })
            }
          ></input>
        );
      case "Categoría":
        return (
          <select
            className="search-field-category"
            onChange={(e) =>
              setRenderBy({
                Nombre: "",
                Category: e.target.value,
                Precio: "",
                Nivel: "Básico",
              })
            }
          >
            <option value="cat1">Category 1</option>
            <option value="cat2">Category 2</option>
            <option value="cat3">Category 3</option>
          </select>
        );
      case "Precio":
        return (
          <input
            className="search-field-price"
            placeholder="Ingrese precio"
            type="number"
            onChange={(e) =>
              setRenderBy({
                Nombre: "",
                Category: "cat1",
                Precio: e.target.value,
                Nivel: "Básico",
              })
            }
          ></input>
        );
      case "Nivel":
        return (
          <select
            className="search-field-level"
            onChange={(e) =>
              setRenderBy({
                Nombre: "",
                Category: "cat1",
                Precio: "",
                Nivel: e.target.value
              })
            }
          >
            <option>Básico</option>
            <option>Intermedio</option>
            <option>Avanzado</option>
          </select>
        );
      default:
        "Error";
    }
  };
  return (
    <div className="search">
      <form className="search-filter">
        <select
          className="search-filter-select"
          value={selectedFilter}
          onChange={updateFilter}
        >
          {filterOptions.map((opc, i) => {
            return (
              <option value={opc} key={i}>
                {opc}
              </option>
            );
          })}
        </select>
        <div className="search-field">{renderSwitchFind()}</div>
        <button
          className="search-button"
          onClick={(e) => renderByField(e)}
        ></button>
      </form>
    </div>
  );
};
export default Search;
