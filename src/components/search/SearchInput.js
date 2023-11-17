import styles from "./SearchInput.module.css";
import SearchIcon from "public/assets/images/icon/search-input.svg";
export const SerachInput = () => {
  return (
    <div className={styles.container}>
      <SearchIcon className={styles.searchIcon} />
      <input
        placeholder="Search for a show, movie, genre, e.t.c."
        className={styles.searchInput}
      />
    </div>
  );
};
