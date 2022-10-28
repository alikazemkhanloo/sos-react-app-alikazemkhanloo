import clsx from "clsx";
import { Button as MUIButton } from "@mui/material";

const Button = (props) => {
  return (
    <MUIButton
      {...props}
      className={clsx(
        props.className,
        "bg-blue-700 text-white hover:bg-blue-800"
      )}
    />
  );
};

export default Button;
