import { useEffect, useMemo, useState } from "react";
import "../App.css";

const ALPHABET = " ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.,!?-+";

// change board size
const BOARD_EXTRA_COLUMNS = 6;   //  right
const BOARD_EXTRA_EMPTY_ROWS = 4; // blank rows 

const TEXT_INDENT_COLUMNS = 4;

type SplitFlapProps = {
  lines: string[];
};

export function SplitFlap({ lines }: SplitFlapProps) {
  //  uppercase
  const contentLines = useMemo(
    () => lines.map((l) => l.toUpperCase()),
    [lines]
  );

  //  how many columns the board has
  const maxLen = useMemo(
    () =>
      Math.max(
        0,
        ...contentLines.map((l) => l.length + TEXT_INDENT_COLUMNS)
      ) + BOARD_EXTRA_COLUMNS,
    [contentLines]
  );

  //   "target" lines 
  const logicalLines = useMemo(() => {
    const blankRow = "".padEnd(maxLen, " ");

    const filledRows = contentLines.map((line) => {
      const withIndent = " ".repeat(TEXT_INDENT_COLUMNS) + line;
      return withIndent.padEnd(maxLen, " ");
    });

    return [
      ...Array(BOARD_EXTRA_EMPTY_ROWS / 2).fill(blankRow),
      ...filledRows,
      ...Array(Math.ceil(BOARD_EXTRA_EMPTY_ROWS / 2)).fill(blankRow)
    ];
  }, [contentLines, maxLen]);

  const targetMatrix: string[][] = useMemo(
    () => logicalLines.map((row) => row.split("")),
    [logicalLines]
  );

  // currently displayed on the board
  const [displayMatrix, setDisplayMatrix] = useState<string[][]>(() =>
    targetMatrix.map((row) => row.map(() => " "))
  );

  // spin each cell through random characters until it hits the target
  useEffect(() => {
    const timers: number[] = [];

    targetMatrix.forEach((row: string[], r: number) => {
      row.forEach((targetChar: string, c: number) => {
        const spins = 6 + Math.floor(Math.random() * 4); 

        for (let i = 0; i <= spins; i++) {
          const delay = (r * maxLen + c) * 10 + i * 35;
          const char =
            i === spins
              ? targetChar
              : ALPHABET[Math.floor(Math.random() * ALPHABET.length)];

          const id = window.setTimeout(() => {
            setDisplayMatrix((prev) => {
              const copy = prev.map((rowInner) => [...rowInner]);
              copy[r][c] = char;
              return copy;
            });
          }, delay);

          timers.push(id);
        }
      });
    });

    return () => {
      timers.forEach((id) => clearTimeout(id));
    };
  }, [targetMatrix, maxLen]);

  return (
    <div className="splitflap-board">
      {displayMatrix.map((row, rowIndex) => (
        <div className="splitflap-row" key={rowIndex}>
          {row.map((ch, colIndex) => (
            <span
              className="splitflap-cell"
              key={`${rowIndex}-${colIndex}-${ch}`}
            >
              <span className="splitflap-cell-inner">
                {ch === " " ? "\u00A0" : ch}
              </span>
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}
