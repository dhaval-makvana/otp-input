// lib
import { useState, useEffect } from "react";

// styles
import styles from "./styles.module.css";

// global component
import OTPInput from "../OTPInput";

// constant
const OTP = "123456";

function EmailForm({}) {
  const [input, setInput] = useState("");
  const [otpError, setOTPError] = useState<string | null>(null);

  useEffect(() => {
    if (input.length < 6) {
      return;
    }
    if (input !== OTP) {
      setOTPError("Value are not matching");
    } else {
      setOTPError("");
    }
  }, [input]);

  const handleSubmit = () => {
    // validate the inputs
    if (input === OTP) {
      alert("You've submitted the form successfully!");
    }
  };

  const getInputValue = (value: string) => {
    setInput(value);
  };

  const isEnabled = input == OTP;

  return (
    <form className={styles.container}>
      <h3 className={styles.heading}>OTP Form</h3>
      <OTPInput id="given-otp" value={OTP} readonly label="Given OTP" />
      <OTPInput
        id="user-otp"
        callback={getInputValue}
        label="Please enter OTP sent"
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
