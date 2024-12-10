import React from "react";

class Todo extends React.Component {
  constructor(props: any) {
    super(props);

    this.state = {
      todoItems: [
        { id: 1, action: "Buy Flowers", done: false },
        { id: 2, action: "Get Shoes", done: false },
        { id: 3, action: "Collect Tickets", done: true },
      ],

      newItem: "",

      username: "Rahul",
    };
  }

  componentDidMount() {
    console.log("Todo is mounted");
  }

  componentDidUpdate(
    prevProps: Readonly<{}>,
    prevState: Readonly<{}>,
    snapshot?: any
  ): void {
    console.log("Todo is updated");
  }

  componentWillUnmount() {
    console.log("Todo is unmounted");
  }

  render() {
    const { todoItems, username } = this.state as any;

    return (
      <div>
        <div className="bg-primary text-white text-center p-2">
          {username}'s Todo List
          <span>
            ({todoItems.filter((x: any) => !x.done).length} are pending)
          </span>
          {/* <button
            type="button"
            className="btn btn-secondary"
            onClick={() => {
              const newusername = username === "Rahul" ? "Rohit" : "Rahul";
              this.setState({ ...this.state, username: newusername });
            }}
          >
            Change
          </button> */}
        </div>
        <div className="p-2">
          <input
            type="text"
            onChange={(e) =>
              this.setState({ ...this.state, newItem: e.target.value })
            }
            value={(this.state as any).newItem}
          />
          <button
            type="button"
            onClick={() => {
              const { newItem, todoItems } = this.state as any;

              const newItems = [
                ...todoItems,
                { id: todoItems.length + 1, action: newItem, done: false },
              ];

              this.setState({
                ...this.state,
                todoItems: newItems,
                newItem: "",
              });
            }}
          >
            Add
          </button>
        </div>
        <div className="container-fluid">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Action</th>
                <th>Done</th>
              </tr>
            </thead>
            <tbody>
              {todoItems.map((item: any, index: number) => (
                <tr key={index}>
                  <td>{item.action}</td>
                  <td>
                    <input
                      type="checkbox"
                      checked={item.done}
                      onChange={() => {
                        const { id } = item;

                        const newItems = todoItems.map((item: any) => {
                          if (item.id === id) {
                            return { ...item, done: !item.done };
                          }
                          return item;
                        });

                        const newState = { ...this.state, todoItems: newItems };

                        this.setState(newState);
                      }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Todo;
