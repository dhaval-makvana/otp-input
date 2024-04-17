// styles
import styles from "./styles.module.css";

// helper function
function checkFocus(
  displayFocus: boolean,
  readonly: boolean,
  input: string,
  index: number
) {
  return displayFocus && !readonly && input.length === index;
}

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
        const isFocussed = checkFocus(displayFocus, readonly, input, index);
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
