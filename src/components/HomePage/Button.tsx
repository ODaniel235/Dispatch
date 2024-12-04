import React from "react";

interface ButtonProps {
  text: string;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string; // New borderColor property
  onClick?: () => void;
  padding?: string;
  borderRadius?: string;
  width?: string;
  height?: string;
  whiteSpace?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  backgroundColor = "#001132",
  textColor = "white",
  borderColor = "transparent", // Default border color
  onClick = () => console.log("Button clicked!"),
  padding = "10px 20px",
  borderRadius = "77px",
  width = "158px",
  height = "48px",
  whiteSpace = "nowrap",
}) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor,
        color: textColor,
        padding,
        borderRadius,
        border: `2px solid ${borderColor}`, // Set border with the given color
        cursor: "pointer",
        width,
        height,
        whiteSpace,
      }}
      className="md:w-[211px] md:h-[64px]"
    >
      {text}
    </button>
  );
};

export default Button;
