import React from "react";
import Image from "next/image";
function DetailSection({ data, imageUrl }) {
  return (
    <section className="preview">
      <div className="image-box">
        <Image
          src={imageUrl + "/" + data.backdrop_path}
          width={375}
          height={415}
        />
      </div>
      <div className="button-wrapper">
        <button className="play-button">
          <span>Play</span>
        </button>
      </div>
      <div className="preview-content">
        <h1>Previews</h1>
        <div className="preview-text" style={{ color: "white" }}>
          {data.overview}
        </div>
      </div>
    </section>
  );
}

export default DetailSection;
