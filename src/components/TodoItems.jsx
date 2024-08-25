import { useDispatch } from "react-redux";
import { FaTrash } from "react-icons/fa";
import { useState } from "react";
import { removeTodo } from "../Redux/Action/actions";

const TodoItems = ({ todo, index }) => {
  const dispatch = useDispatch();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <li className="grid grid-cols-3 items-center py-2 border-b border-black">
      {/* Task Column */}
      <div className="flex flex-col items-start px-2">
        <span className="mr-4 text-blue-500">{index + 1}</span>
        <span
          className={`mr-4 ${todo.completed ? 'line-through text-blue-500' : ''} ${
            isExpanded ? '' : 'truncate'
          }`}
          style={{ maxWidth: '300px' }} // Adjust max width as needed
        >
          {todo.text}
        </span>
        {!isExpanded && todo.text.length > 50 && (
          <button
            onClick={() => setIsExpanded(true)}
            className="bg-red-500 text-white text-xs px-2 py-1 rounded mt-2 hover:bg-red-600"
          >
            Show More
          </button>
        )}
        {isExpanded && (
          <button
            onClick={() => setIsExpanded(false)}
            className="bg-red-500 text-white text-xs px-2 py-1 rounded mt-2 hover:bg-red-600"
          >
            Show Less
          </button>
        )}
      </div>

      {/* Deadline Column */}
      <div className="text-center px-2">
        <span className={`${todo.completed ? 'line-through text-red-500' : ''}`}>
          Deadline: {todo.date}
        </span>
      </div>

      {/* Delete Button Column */}
      <div className="flex justify-end px-2">
        <button
          onClick={() => dispatch(removeTodo(index))}
          className="text-sm bg-red-500 text-white px-2 py-1 rounded"
        >
          <FaTrash title='Delete Todo' />
        </button>
      </div>
    </li>
  );
};

export default TodoItems;