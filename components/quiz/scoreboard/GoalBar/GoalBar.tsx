import React, { FC } from "react";
import { Box, BoxProps, Divider, Text } from "@chakra-ui/react";

interface Props extends BoxProps {}

const GoalBar: FC<Props> = ({ ...props }) => {
  return (
    <Box {...props}>
      <Text>Goal!</Text>
      <Divider orientation="vertical" />
    </Box>
  );
};

export default GoalBar;
