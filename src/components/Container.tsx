import clsx from "clsx";
import { Button as MUIButton } from "@mui/material";
import { Box } from "@mui/system";

const Container = (props) => {
  return (
    <Box
      {...props}
      className={clsx(props.className, "mx-auto px-6 max-w-7xl")}
    />
  );
};

export default Container;
