import CustomSlider from "./components/Slider/CustomSlider";
import getMovies from "./queries/getMovies";
import { getMainSliderMovieResponse } from "./queries/dto/get-popular-movie";
import Header from "../common/components/Header";
import Footer from "../common/components/Footer";
import PlayBar from "../common/components/PlayBar";
import ImageSlider from "./components/Slider/ImageSlider";

export default async function Main() {
  const sliderInfo = [
    {
      text: "Popular on Netflix",
      url: "https://api.themoviedb.org/3/movie/popular",
    },
    {
      text: "Now Playing",
      url: "https://api.themoviedb.org/3/movie/now_playing",
    },
    {
      text: "Top Rated",
      url: "https://api.themoviedb.org/3/movie/top_rated",
    },
    {
      text: "Upcoming Contents",
      url: "https://api.themoviedb.org/3/movie/upcoming",
    },
  ];
  return (
    <div className="bg-background-main">
      <Header />
      <ImageSlider<getMainSliderMovieResponse>
        data={await getMovies(sliderInfo[0].url)}
      />
      <PlayBar />
      {sliderInfo.map(async (slider, index) => (
        <CustomSlider<getMainSliderMovieResponse>
          key={slider.url}
          text={slider.text}
          data={await getMovies(slider.url)}
          className={`mt-[2.2rem] pl-[0.5rem] ${
            sliderInfo.length === index + 1 ? "pb-[7rem]" : null
          }`}
        />
      ))}
      <Footer />
    </div>
  );
}
