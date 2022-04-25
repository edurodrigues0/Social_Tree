import "./SocialButton.css";

interface SocialButtonProps {
  title: string;
}

export function SocialButton({title}: SocialButtonProps) {
  return(
    <button className="SocialButtonContainer">
      {title}
    </button>
  );
}