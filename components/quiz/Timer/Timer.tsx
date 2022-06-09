import React, { FC } from "react";
import { Heading, Box, BoxProps } from "@chakra-ui/react";
import { TimerIcon } from "./TimerIcon";

interface Props extends BoxProps {
  remainingTime: number;
}

const Timer: FC<Props> = ({ remainingTime, ...props }) => {
  return (
    <Box
      display={{ base: "none", sm: "flex" }}
      justifyContent={"center"}
      alignItems={"center"}
      gap={"1rem"}
      position={"absolute"}
      top={"2rem"}
      left={"3rem"}
      {...props}
    >
      <TimerIcon width={"64.9px"} height={"72.6px"} />
      <Heading
        fontWeight={"700"}
        fontFamily={"montserrat"}
        color={"#FFF1DC"}
        fontSize={"3rem"}
      >
        {remainingTime?.toString().padStart(2)}
      </Heading>
    </Box>
  );
};
export default Timer;
