import React, { useState } from 'react';

const MovieForm = ({ addMovie }) => {
  const [mTitle, setMTitle] = useState('');
  const [mYear, setMYear] = useState('');
  const [movies, setMovies] = useState([
    { title: 'coder1', year: 2001 },
    { title: 'coder2', year: 2002 },
    { title: 'coder3', year: 2003 },
  ]);

  const resetForm = () => {
    setMTitle('');
    setMYear('');
  };
  const onSubmit = (event) => {
    addMovie({
      title: mTitle,
      year: mYear,
    }); // 파라미터에 title이랑 year 넣어주는 방식
    resetForm();
  };
  return (
    <form onSubmit={addMovie}>
      <input
        type="text"
        value={mTitle}
        placeholder="Movie Title"
        onChange={(e) => setMTitle(e.target.value)}
      />
      <input
        type="text"
        value={mYear}
        placeholder="Release Year"
        onChange={(e) => setMYear(e.target.value)}
      />
      <button type="submit" onClick={onSubmit}>
        add Movie
      </button>
    </form>
  );
};
export default MovieForm;

//자식 컴포넌트 -> 부모 컴포넌트로 value 값 보내기
//1. onchange 이벤트와 onsubmit 이벤트를 사용하기
//2. e.target.value를 일단 뽑아서 기존 스테이트를 변경
//3. app 쪽의 변경 함수 (무비 add하는 함수) 가져오기 (파라미터에 특정 프롭스값만 뽑아올 때면 props 사용하는 대신 {특정값})
//4. 내 경우 새로 만든 애를 기존 애로 교체해주는 것만 하면 돼서... 리스트 푸시는 필요 x
