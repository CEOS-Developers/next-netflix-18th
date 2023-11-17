"use client";
import styles from "./SearchInput.module.css";
import SearchIcon from "public/assets/images/icon/search-input.svg";
import DeleteIcon from "public/assets/images/icon/delete.svg";
export const SearchInput = ({ input, setInput }) => {
  const handleDelete = () => {
    setInput("");
  };
  const handleOnChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className={styles.container}>
      <SearchIcon className={styles.searchIcon} />

      <input
        placeholder="Search for a show, movie, genre, e.t.c."
        className={styles.searchInput}
        value={input}
        onChange={handleOnChange}
      />

      <DeleteIcon className={styles.deleteIcon} onClick={handleDelete} />
    </div>
  );
};
