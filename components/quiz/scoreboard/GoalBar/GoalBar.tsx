import React, { FC } from "react";
import { Flex, FlexProps, Divider, Text } from "@chakra-ui/react";

interface Props extends FlexProps {}

const GoalBar: FC<Props> = ({ ...props }) => {
  return (
    <Flex
      position={"relative"}
      flexDir={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      {...props}
    >
      <Text width={"5rem"} fontSize={"2xl"} fontFamily={"montserrat, 'Noto Sans KR'"}>
        GOAL!
      </Text>
      <Divider
        height="100%"
        borderColor={"#844F00"}
        borderLeftWidth={"medium"}
        orientation="vertical"
        variant="dashed"
      />
    </Flex>
  );
};

export default GoalBar;
