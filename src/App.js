import React, { useState, useEffect } from 'react';
import { useEffect } from 'react';
import './style.css';
import MovieForm from './components/MovieForm';
import Movie from './components/Movie';

export default function App() {
  const [mTitle, setMTitle] = useState('');
  const [mYear, setMYear] = useState('');
  const [movies, setMovies] = useState([
    { title: 'coder1', year: 2001 },
    { title: 'coder2', year: 2002 },
    { title: 'coder3', year: 2003 },
  ]);
  useEffect(() => {
    console.log('render');
  });

  const renderMovies = movies.map((movie) => {
    return <Movie movie={movie} key={movie.title} />;
  });

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
    // setMTitle('');
    // setMYear('');
  };
  //무비 더하는 함수 : 기존 movies를 복사, 파라미터의 movie를 가져옴 (전체에 새 movie를 더하는 형식)

  return (
    <div className="App">
      <h1>Movie List</h1>
      <MovieForm addMovie={addMovie} />
      {renderMovies}
    </div>
  );
}
