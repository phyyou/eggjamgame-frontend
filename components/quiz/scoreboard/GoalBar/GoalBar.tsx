import React, { FC } from "react";
import { Box, BoxProps, Divider, Text } from "@chakra-ui/react";

interface Props extends BoxProps {}

const GoalBar: FC<Props> = ({ ...props }) => {
  return (
    <Box {...props}>
      <Text>Goal!</Text>
      <Divider
        height="100%"
        borderLeftWidth="3px"
        borderColor="#844f00"
        orientation="vertical"
        variant="dashed"
      />
    </Box>
  );
};

export default GoalBar;
