import { useState } from "react";
import "./App.css"; 

const GroceryList = () => {

  const [item, setItem] = useState("");
  const [cost, setCost] = useState("");

  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const row = { item: item, cost: cost};
    const newList = { ...list, row};
    setList(newList);
  }

  const totalCost = () => {
    return list.reduce((total, row) => {
      return total + parseFloat(item.row);
    }, 0);
  };

  return (
    <div className="container">
      <div className="card card-body bg-light mb-2">
        <form method="POST" className="row g-3" onSubmit={handleSubmit}>
          <div className="col">
            <input
              className="form-control"
              type="text"
              placeholder="Name of grocery item..."
              aria-label="Name of grocery item..."
              value={item}
              onChange={(e) => setItem(e.target.value)}
            />
          </div>
          <div className="col">
            <input
              className="form-control"
              type="number"
              min="0"
              step=".01"
              placeholder="Cost of grocery item..."
              aria-label="Cost of grocery item..."
              value={cost}
              onChange={(e) => setCost(e.target.value)}
            />
          </div>
          <div className="col-md-auto">
            <button type="submit" className="btn btn-success" onClick={newItem}>
              Add
            </button>
          </div>
        </form>
      </div>
      <div className="card card-body border-white">
        <h1 className="h4">Grocery List</h1>
        <table className="table table-sm">
          <thead>
            <tr>
              <th>Item</th>
              <th>Cost</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/**
             * Complete me. (You can use something else instead of a table if you like)
             * @example
             * <tr>
             *   <td>Toilet Paper</td>
             *   <td>$1.99</td>
             *   <td>
             *     <button aria-label="Delete" title="Delete" ... >
             *       &times;
             *     </button>
             *   </td>
             * </tr>
             */}
            {list.map((row, index) => {
              return (
                <tr key={`row-${index}`}>
                  <td>{row.item}</td>
                  <td>${row.cost.toFixed(2)}</td>
                  <td>
                    <button aria-label="Delete" title="Delete"
                      className="btn"
                      onClick={() => deleteFromList(index)}
                    >
                      &times;
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <p className="lead">
          <strong>Total Cost: ${totalCost().toFixed(2)}</strong>
        </p>
        <div className="d-flex justify-content-end">
          <button type="button" className="btn btn-outline-success" onClick={() => deleteItem(index)}>
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroceryList;
