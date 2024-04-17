// lib
import { ChangeEvent, useRef, useState, memo } from "react";

// components
import DisplayInput from "../DisplayInput";

// styles
import styles from "./styles.module.css";

// helpers
import { isNumber } from "../../utils";

// hooks
import useOutsideClick from "../../hooks/useOutsideClick";

// constants
const dummyArray = new Array(6).fill(0);

const MemoizedOTPInput = memo(function OTPInput({
  id = "",
  label = "",
  readonly = false,
  value = "",
  callback = () => {},
  error = "",
}: {
  id: string;
  label?: string;
  readonly?: boolean;
  value?: string;
  callback?: (value: string) => void;
  error?: string | null;
}) {
  const inputRef = useRef(null);
  const [input, setInput] = useState<string>(value);
  const [displayFocus, setDisplayFocus] = useState<boolean>(false);

  const handleOutsideClick = () => {
    if (!inputRef.current) return;
    const currentNode = inputRef.current as HTMLButtonElement;
    currentNode.blur();
    setDisplayFocus(false);
  };

  const handleChange = (
    e: ChangeEvent & {
      target: HTMLInputElement;
    }
  ) => {
    const value = e.target.value;
    if (value.length > 6) {
      return;
    }
    if (value.length === 0) {
      setInput("");
      return;
    }
    if (!isNumber(value)) {
      // error please enter valid OTP
      return;
    }
    setInput(value);
    callback(value);
  };

  const handleClick = () => {
    if (!inputRef.current) return;
    const currentNode = inputRef.current as HTMLButtonElement;
    currentNode.focus();
    setDisplayFocus(true);
  };

  useOutsideClick(inputRef, handleOutsideClick);

  return (
    <div role="form-field" className={styles.formField} onClick={handleClick}>
      {label && (
        <label className={styles.label} htmlFor={`otp-input-${id}`}>
          {label}
        </label>
      )}
      <div className={styles.container}>
        {!readonly && (
          <input
            ref={inputRef}
            className={`${styles.ogInput} ${styles.inputContainer}`}
            onChange={handleChange}
            value={input}
          />
        )}
        <DisplayInput
          dummyArray={dummyArray}
          input={input}
          readonly={readonly}
          displayFocus={displayFocus}
        />
      </div>
      <div className={styles.error}>{error}</div>
    </div>
  );
});

export default MemoizedOTPInput;
