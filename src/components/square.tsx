interface SquareTypeDef { value: string, onSquareClick: (i: number) => void }

export default function Square({ value, onSquareClick }: SquareTypeDef) {
  return (
    <button className="square" onClick={() => onSquareClick}>
      {value}
    </button>
  );
}

// arrow function
/* const Square: FC<SquareInput> =({ value, onSquareClick })=> {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
} */