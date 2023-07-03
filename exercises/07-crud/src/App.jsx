import { useState } from "react";
import "./App.css";

const GroceryList = () => {

  const [groceryItems, setGroceryItems] = useState();

  const newItem = () => {
    setGroceryItems([...groceryItems, ""]);
  };

  const updateItem = (userInput, index) => {
    const newGrouceryItems = [...groceryItems];
    newGrouceryItems[index] = userInput;
    setGroceryItems(newGrouceryItems);
  };

  const deleteItem = (index) => {
    setGroceryItems(
      groceryItems.filter((item, currentIndex) => currentIndex !== index)
    );
  };

//   return (
//     <div>
//       {groceryItems.map((item, index) => {})}
// </div>)

  return (
    {groceryItems.map((item, index) => {
    // })});
    <div className="container">
      <div className="card card-body bg-light mb-2">
        <form method="POST" className="row g-3">
          <div className="col">
            <input
              className="form-control"
              type="text"
              placeholder="Name of grocery item..."
              aria-label="Name of grocery item..."
              onChange={(e) => updateItem(e.target.value, index)}
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
              onChange={(e) => updateItem(e.target.value, index)}
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
            //  Add
             return (
              <div>
                <h3>Grocery Items</h3>
                {groceryItems.map((item, index) => {
                  const { task } = item;
                  return (
                    <div key={`action-item-${index}`}>
                      <input
                        value={task}
                        onChange={e => updateItem(e.target.value, index)}
                      />
                    </div>
                  );
                  //Delete
                  return (
                    <div>
                      <h3>Delete Grocery ITems</h3>
                      {groceryItems.map((item, index) => {
                        return (
                          <div key={`grocery-item-${index}`}>
                            <input value={item} />
                            <button onClick={() => deleteItem(index)}>
                              Delete
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  );
          </tbody>
        </table>
        <p className="lead">
          <strong>Total Cost: {/* Complete me */}</strong>
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
