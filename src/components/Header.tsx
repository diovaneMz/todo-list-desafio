import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div>
        <img src="/assets/rocket-logo.svg" />
        <h1>
          to
          <span>do</span>
        </h1>
      </div>
    </header>
  );
}
