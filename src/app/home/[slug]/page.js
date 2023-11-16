import BottomNav from "@/components/Common/BottomNav";
import DetailSection from "@/components/detail/DetailSection";
import { useFetchDetailData } from "@/hooks/useFetchData";

import React from "react";
async function page({ params }) {
  const data = await useFetchDetailData(params.slug);
  const imageUrl = "https://image.tmdb.org/t/p/original";
  return (
    <>
      <DetailSection data={data} imageUrl={imageUrl} />
      <BottomNav />
    </>
  );
}

export default page;
