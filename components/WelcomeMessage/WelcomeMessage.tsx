import { TWelcomeMessageProps } from "./types";
import ButtonStartDay from "../ButtonStartDay/ButtonStartDay";

const WelcomeMessage = ({ setLogger }: TWelcomeMessageProps) => {
  return (
    <div className="flex flex-col gap-8 justify-center items-center w-full h-full">
      <h2 className="text-4xl font-black uppercase">Hello World</h2>
      <ButtonStartDay setLogger={setLogger} />
    </div>
  );
};

export default WelcomeMessage;
