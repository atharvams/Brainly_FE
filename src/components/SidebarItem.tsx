import { ReactElement } from "react";

interface SidebarItemProps {
  text: string;
  icon: ReactElement;
}

function SidebarItem({ text, icon }: SidebarItemProps) {
  return (
    <div className="flex text-gray-700 font-semibold items-center h-12 hover:bg-slate-300 p-4 transition delay-100 duration-200 ease-in">
      <div className="pr-4">{icon}</div>
      <div>{text}</div>
    </div>
  );
}

export default SidebarItem;
