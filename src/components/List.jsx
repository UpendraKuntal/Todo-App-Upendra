import { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import TodoItems from "./TodoItems";

const List = () => {
  const todos = useSelector((state) => state.todos || []);
  const filter = useSelector((state) => state.filter);
  const search = useSelector((state) => state.search.toLowerCase());

  const [visibleCount, setVisibleCount] = useState(3); // Initial visible todos

  // Filtering the todos based on the filter type and search query
  const filteredTodos = useMemo(() => {
    return todos
      .filter((todo) => {
        // Apply the filter (COMPLETED, INCOMPLETED, ALL)
        if (filter === 'COMPLETED') return todo.completed;
        if (filter === 'INCOMPLETED') return !todo.completed;
        return true; // If filter is 'ALL', return all todos
      })
      .filter((todo) => {
        // Apply the search query
        return todo.text.toLowerCase().includes(search);
      });
  }, [todos, filter, search]);

  // Get only the first 'visibleCount' todos
  const visibleTodos = filteredTodos.slice(0, visibleCount);

  return (
    <div>
      <ul>
        {visibleTodos.map((todo, i) => (
          <TodoItems key={i} todo={todo} index={i} />
        ))}
      </ul>
      {visibleCount < filteredTodos.length && (
        <button
          className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-800 focus:outline-none"
          onClick={() => setVisibleCount(visibleCount + 3)}
        >
          Show More
        </button>
      )}
    </div>
  );
};

export default List;
