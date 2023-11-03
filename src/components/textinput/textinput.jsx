import styles from "./textinput.module.css"
function TextInput(props) {
  return (
  <div className={styles.textInputWrapper}>
<input {...props} />
{props.error && <p className={styles.errormessage}>{props.errormessage}</p>}

  </div>
  );
}
export default TextInput;
