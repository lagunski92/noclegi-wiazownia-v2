import { MainBanner } from "../components/MainBanner/MainBanner";
import { Description } from "../components/Description/Description";
import { Rooms } from "../components/Rooms/Rooms";
import { About } from "../components/About/About";
import { Kontakt } from "../components/Kontakt/Kontakt";

export const MainPage = () => {
  return (
    <>
      <MainBanner />
      <Description />
      <Rooms />
      <About />
      <Kontakt />
    </>
  );
};