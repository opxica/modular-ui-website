import React from "react";
import Link from "next/link";
import { cn } from "@/utils/cn";
import { ClassValue } from "clsx";

type SocialLinkProps = {
  href: string;
  icon?: React.ReactNode;
  text?: string;
  label: string;
  className?: ClassValue;
};

const SocialLink: React.FC<SocialLinkProps> = ({
  href,
  icon,
  text,
  label,
  className,
}) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className={cn(
      "flex items-center text-neutral-100 transition hover:text-neutral-100/85",
      className,
    )}
  >
    {icon && <span className={text ? "mr-2" : ""}>{icon}</span>}
    {text && <span>{text}</span>}
  </Link>
);

export default SocialLink;
