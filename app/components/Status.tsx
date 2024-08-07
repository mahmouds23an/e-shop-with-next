import { IconType } from "react-icons";

interface StatusProps {
  text: string;
  icon: IconType;
  bg: string;
  color: string;
}

const Status: React.FC<StatusProps> = ({ text, icon: Icon, bg, color }) => {
  return (
    <div
      className={`flex h-6 w-30 mt-3 justify-center items-center -ml-3 mr-2 gap-1 rounded-full px-1 ${bg} ${color}`}
    >
      {text} <Icon size={15} />
    </div>
  );
};

export default Status;
