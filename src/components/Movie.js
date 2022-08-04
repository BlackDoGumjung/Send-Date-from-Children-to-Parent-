import React, { useState, useEffect } from 'react';
import { useEffect } from 'react';

export default function Movie(props) {
  return (
    <div>
      <div>{props.movie.title}</div>
      <div>{props.movie.year}</div>
    </div>
  );
}
