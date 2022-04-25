import { ReactNode } from "react";

interface SocialIconsProps {
  icon: ReactNode;
  href: string;
}

export function SocialIcon({icon, href}: SocialIconsProps) {
  return(
    <a href={href} className="SocialIconContainer">
      {icon}
    </a>
  )
}