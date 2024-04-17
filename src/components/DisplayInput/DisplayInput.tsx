import styles from "./styles.module.css";

function DisplayInput({
  dummyArray,
  input,
  readonly = false,
  displayFocus = false,
}: {
  dummyArray: 0[];
  input: string;
  readonly: boolean;
  displayFocus: boolean;
}) {
  return (
    <div className={`${styles.displayInput} ${styles.inputContainer}`}>
      {dummyArray.map((_element: 0, index: number) => {
        const displayValue = input[index];
        const isFocussed =
          (displayFocus &&
            !readonly &&
            displayValue === undefined &&
            input.length === index) ||
          (displayFocus &&
            !readonly &&
            displayValue !== undefined &&
            index === 5 &&
            input.length === 6);

        return (
          <span
            className={`${styles.singleBlock} ${
              readonly ? `${styles.noBorder}` : ""
            } ${isFocussed ? `${styles.focus}` : ""}`}
          >
            {displayValue}
            {isFocussed && <span className={styles.blink}>|</span>}
          </span>
        );
      })}
    </div>
  );
}

export default DisplayInput;
