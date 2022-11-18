import { Description } from "../components/Description/Description";
import { Rooms } from "../components/Rooms/Rooms";
import { About } from "../components/About/About";

export const MainPage = () => {
  return (
    <>
      <Description />
      <Rooms />
      <About />
    </>
  );
};