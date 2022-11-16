import { MainBanner } from "../components/MainBanner/MainBanner";
import { Description } from "../components/Description/Description";
import { Rooms } from "../components/Rooms/Rooms";

export const MainPage = () => {
  return (
    <div>
      <MainBanner />
      <Description />
      <Rooms />
    </div>
  );
};