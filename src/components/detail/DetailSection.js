import React from "react";
import Image from "next/image";
import styles from "./DetailSection.module.css";
import PlayLogo from "public/assets/images/icon/play.svg";
function DetailSection({ data, imageUrl }) {
  return (
    <section className="preview">
      <div className={styles.imageBox}>
        <Image
          src={imageUrl + "/" + data.backdrop_path}
          width={375}
          height={415}
          className={styles.image}
        />
      </div>
      <div className={styles.buttonWrapper}>
        <button className={styles.playButton}>
          <PlayLogo />
          <span className={styles.playText}>Play</span>
        </button>
      </div>
      <div className={styles.previewContent}>
        <h1 className={styles.previewTitle}>Previews</h1>
        <div className={styles.previewText}>
          {data.overview}
        </div>
      </div>
    </section>
  );
}

export default DetailSection;
