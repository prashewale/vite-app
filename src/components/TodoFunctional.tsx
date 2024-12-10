import { useState } from "react";

type TodoProps = {
  username: string;
};

const INITIAL_TODOS = [
  {
    id: 1,
    action: "Buy Flowers",
    done: false,
  },
  {
    id: 2,
    action: "Get Shoes",
    done: false,
  },
  {
    id: 3,
    action: "Collect Tickets",
    done: true,
  },
];

const TodoFunc = ({ username }: TodoProps) => {
  // state hook
  const [taskName, setTaskName] = useState("");
  const [todoItems, setTodoItems] = useState(INITIAL_TODOS);

  return (
    <div>
      <div className="bg-primary text-white text-center p-2">
        {username}'s Todo List
      </div>

      <div className="p-2 d-flex gap-2">
        <span>{taskName.length} chars</span>
        <input
          type="text"
          className="form-control"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            const newTask = {
              id: todoItems.length + 1,
              action: taskName,
              done: false,
            };

            setTodoItems([...todoItems, newTask]);

            setTaskName("");
          }}
        >
          Add
        </button>
      </div>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th scope="col">Id</th>
            <th scope="col">Action</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {todoItems.map((item, index) => (
            <tr key={index}>
              <td>
                <input
                  type="checkbox"
                  checked={item.done}
                  onChange={() => {
                    const newTodoItems = todoItems.map((x) => {
                      if (x.id === item.id) {
                        x.done = !x.done;
                      }
                      return x;
                    });
                    setTodoItems(newTodoItems);
                  }}
                />
              </td>
              <td scope="row" className="fw-bold">
                {item.id}
              </td>
              <td>{item.action}</td>
              <td>{item.done ? "Done" : "Pending"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoFunc;
