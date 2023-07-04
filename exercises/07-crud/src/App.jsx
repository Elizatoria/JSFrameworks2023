import { useState } from "react";
import "./App.css"; 

const GroceryList = () => {

  const [item, setItem] = useState("");
  const [cost, setCost] = useState("");

  const [list, setList] = useState([]);

  const [itemError, setItemError] = useState("");
  const [costError, setCostError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (item) setItemError("");

    if (cost) setCostError("");

    if (item && cost) {
    const row = { item: item, cost: cost};
    const newList = { ...list, row};
    setList(newList);
    setItem("");
    setCost("");
    } else
    if (!item) {
      setItemError("Please, add Grocery Item!");
    }
    if (!cost) {
      setCostError("Please, add Cost of Item!");
    }
  }

  const totalCost = () => {
    return list.reduce((total, row) => {
      return total + parseFloat(item.row);
    }, 0);
  };

  const deleteTheThing = (deleteIndex) => {
    const newList = list.filter((row, theLoopIndex) => {
      if (theLoopIndex !== deleteIndex) {
        return true;
      } else return false;
    });
    setList([...newList]);
  };

  const clear = () => {
    setList([]);
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
            {itemError}
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
            {costError}
          </div>
          <div className="col-md-auto">
            <button type="submit" className="btn btn-success">
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
          {list.map((items, index) => {
              return (
                <tr key={`items-${index}`}>
                  <td>{items.name}</td>
                  <td>${items.cost.toFixed(2)}</td>
                  <td>
                    <button
                      aria-label="Delete"
                      title="Delete"
                      className="btn"
                      onClick={() => deleteTheThing(index)}
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
          <button type="button" className="btn btn-outline-success" onClick={clear}>
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroceryList;
