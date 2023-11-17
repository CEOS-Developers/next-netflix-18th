import styles from "./TopSearch.module.css";
import Link from "next/link";
import Image from "next/image";
import PlayIcon from "public/assets/images/icon/play-search.svg";
export function TopSearch({ data, imageUrl }) {
  return (
    <div className={styles.container}>
      <div className={styles.textTop}>Top Searches</div>
      <div className={styles.cardList}>
        {data.map((item) => {
          return (
            <Link
              href={`/home/${item.id}`}
              key={item.id}
              style={{ textDecoration: "none" }}
            >
              <div className={styles.contentCard}>
                <Image
                  src={imageUrl + "/" + item.backdrop_path}
                  width={146}
                  height={76}
                />
                <div className={styles.textTitle}>{item.title}</div>
                <PlayIcon className={styles.playIcon} />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
