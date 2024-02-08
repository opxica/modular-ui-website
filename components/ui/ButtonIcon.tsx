import { cn } from "@/utils/cn";
import { ClassValue } from "clsx";
import React, { ReactNode } from "react";

type ButtonIconProps = {
  onClick?: () => void;
  icon: ReactNode;
  label: string;
  className?: ClassValue;
};

const ButtonIcon: React.FC<ButtonIconProps> = ({
  onClick,
  icon,
  label,
  className,
}) => {
  const setIconSize = (size?: number) => (size ? size : 16);

  return (
    <button
      className={cn(
        "rounded-full bg-neutral-800/50 p-2.5 text-neutral-100 hover:text-neutral-100/85",
        className,
      )}
      onClick={onClick}
      aria-label={label}
    >
      {React.cloneElement(icon as React.ReactElement, {
        size: setIconSize((icon as React.ReactElement)?.props?.size),
      })}
    </button>
  );
};

export default ButtonIcon;
