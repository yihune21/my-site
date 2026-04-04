import React from "react";
import { Folder } from "lucide-react";

interface FolderIconProps {
  name: string;
  itemCount?: number;
  onClick?: () => void;
}

const FolderIcon: React.FC<FolderIconProps> = ({ name, itemCount, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="flex flex-col items-center group cursor-pointer w-24 p-2 rounded-lg
                 hover:bg-blue-50/50 dark:hover:bg-dark-hover transition-colors"
    >
      <div className="text-mint-500 relative">
        <Folder
          size={52}
          fill="currentColor"
          className="fill-mint-500/20 stroke-[1.5]"
        />
      </div>
      <span className="text-[12px] text-center font-medium mt-1 px-1.5 rounded-sm truncate w-full transition-colors
                       text-gray-800 group-hover:bg-blue-600 group-hover:text-white
                       dark:text-dark-text dark:group-hover:bg-blue-700 dark:group-hover:text-white">
        {name}
      </span>
      {itemCount !== undefined && (
        <span className="text-[10px] text-gray-400 dark:text-dark-text-muted">
          {itemCount} items
        </span>
      )}
    </div>
  );
};

export default FolderIcon;
