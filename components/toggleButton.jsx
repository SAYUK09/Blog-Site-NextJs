import { useTheme } from "../themeContext";
import styles from "../styles/toggleButton.module.css";

const ToggleButton = () => {
  const { darkTheme, setDarkTheme } = useTheme();

  return (
    <div>
      {/* <button
        onClick={() => {
          setDarkTheme(!darkTheme);
        }}
      >
        DARK
      </button> */}
      <label className={styles.switch}>
        <i className={styles.fas}></i>
        <div>
          <input
            onClick={() => {
              setDarkTheme(!darkTheme);
            }}
            type="checkbox"
          />
          <span className={`${styles.slider} ${styles.slider}`}></span>
        </div>
      </label>
    </div>
  );
};

export default ToggleButton;
