import classNames from "classnames";
import React, { useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";

type Props = {
  open: boolean;
  setOpen(open: boolean): void;
};

const DashboardSideBar = ({ open, setOpen }: Props) => {
  const ref = useRef<HTMLDivElement>(null)
  useOnClickOutside(ref, (e) => {
    console.log("clicked the outher thingy")
    setOpen(false)
  }
  )

  return (
    <div
      className={classNames({
        "flex flex-col justify-between": true, // layout
        "bg-indigo-700 text-zinc-50": true, // colors
        "md:w-full md:sticky md:top-16 md:z-0 top-0 z-20 fixed": true, // positioning
        "md:h-[calc(100vh_-_64px)] h-full w-[300px]": true, // for height and width
        "transition-transform .3s ease-in-out md:translate-x-0": true, //animations
        "-translate-x-full ": !open, //hide sidebar to the left when closed
      })}
      ref={ref}
    >
      <nav className="md:sticky top-0 md:top-16">
        {/* nav items */}
        <ul className="py-2 flex flex-col gap-2">
          <li>links here</li>
        </ul>
      </nav>
    </div>
  );
};
export default DashboardSideBar;
