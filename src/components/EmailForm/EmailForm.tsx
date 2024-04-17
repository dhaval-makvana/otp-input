// lib
import { useState, useCallback } from "react";

// styles
import styles from "./styles.module.css";

// global component
import OTPInput from "../OTPInput";

// constant
const OTP = "123456";
const TEXT = {
  GIVEN_OTP_ID: "given-otp",
  GIVEN_OTP_LABEL: "Given OTP",
  USER_OTP_ID: "user-otp",
  USER_OTP_LABEL: "Please enter the OTP sent to your Email",
};

function EmailForm() {
  const [input, setInput] = useState<string>("");
  const [otpError, setOTPError] = useState<string | null>(null);

  const handleSubmit = () => {
    // validate the inputs
    if (input === OTP) {
      alert("You've submitted the form successfully!");
    }
  };

  const getInputValue = useCallback((value: string) => {
    // get the value from controlled input component to parent
    setInput(value);

    // simultaneously do the validation and set error states
    // for real time error UI update for the user
    if (value.length < 6) {
      return;
    }
    if (value !== OTP) {
      setOTPError("Values are not matching");
    } else {
      setOTPError("");
    }
  }, []);

  const isEnabled = input == OTP;

  return (
    <form className={styles.container}>
      <h3 className={styles.heading}>OTP Form</h3>
      <OTPInput
        id={TEXT.GIVEN_OTP_ID}
        value={OTP}
        readonly
        label={TEXT.GIVEN_OTP_LABEL}
      />
      <OTPInput
        id={TEXT.USER_OTP_ID}
        callback={getInputValue}
        label={TEXT.USER_OTP_LABEL}
        error={otpError}
      />
      <br />
      <button
        disabled={!isEnabled}
        className={styles.submit}
        onClick={handleSubmit}
      >
        Submit OTP
      </button>
    </form>
  );
}

export default EmailForm;
