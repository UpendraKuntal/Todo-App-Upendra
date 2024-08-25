import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { BsSearch } from 'react-icons/bs';
import { addTodo, updateSearchTodo } from '../Redux/Action/actions';
import FilterButton from './FilterButton';

const Todo = () => {
  const dispatch = useDispatch();
  const [todoText, setTodoText] = useState('');
  const [todoDate, setTodoDate] = useState('');
  const [searchText, setSearchText] = useState('');
  const [error, setError] = useState(''); // State for error messages

  const handleAddTodo = (text, date) => {
    if (date === '') {
      setError('Please enter the date'); // Set error message if date is not provided
      return;
    }
    
    dispatch(addTodo(text, date));
    setTodoText('');
    setTodoDate('');
    setError(''); // Clear error message on successful add
  };

  const saveTodo = () => {
    if (todoText.trim() === '') {
      setError('Task text is required'); // Set error message if task text is empty
      return;
    }
    handleAddTodo(todoText, todoDate);
  };

  const handleSearchTodo = (value) => {
    setSearchText(value);
    dispatch(updateSearchTodo(value));
  };

  return (

    <div className='max-w-7xl mx-auto sm:mt-1 p-4 bg-blue-200 rounded'>
      <h2 className='mt-3 mb-6 text-2xl font-bold text-center text-blue-700'>
        TODO LIST APP
      </h2>
      <div className='flex flex-col sm:flex-row items-center mb-4'>
        <input
          type='text'
          placeholder='Enter your Task'
          className='flex-grow p-2 border-b-2 border-gray-300 rounded focus:outline-none focus:border-blue-500'
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <label className='ml-4 text-white font-bold text-xl' >Deadline :</label>
        <input
          type="datetime-local"
          className='m-2 p-2 rounded'
          value={todoDate}
          onChange={(e) => setTodoDate(e.target.value)}
        />
        <button
          className='ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-800 focus:outline-none'
          onClick={saveTodo}
        >
          <FaArrowAltCircleRight title='Add Todo' />
        </button>
      </div>
      {error && (
        <div className='text-red-500 text-center mb-4'>
          {error}
        </div>
      )}
      <div className='flex items-center justify-between flex-wrap'>
        <FilterButton />
        <div className='flex items-center justify-end mt-4 sm:mt-0'>
          <input
            type='text'
            placeholder='Search'
            value={searchText}
            onChange={(e) => handleSearchTodo(e.target.value)}
            className='flex-grow rounded p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 sm:mr-4'
          />
          <button
            className='p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none'
          >
            <BsSearch />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
