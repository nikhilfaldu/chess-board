// ChessBoard.js

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeColor } from '../redux/BoardSlice';
import './ChessBoard.css';

const ChessBoard = () => {
  const dispatch = useDispatch();
  const squares = useSelector((state) => state.board.squares);

  return (
    <div className="chessboard">
      {squares.map((square, index) => (
        <div
          key={index}
          className="square"
          style={{ backgroundColor: square.color }}
          onClick={() => dispatch(changeColor({ index }))}
        />
      ))}
    </div>
  );
};

export default ChessBoard;
