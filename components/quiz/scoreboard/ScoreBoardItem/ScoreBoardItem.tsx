import { Text, Flex, Box } from "@chakra-ui/react";
import { FC } from "react";

export const ScoreBoardItem: FC = () => {
  return (
    <Flex alignItems={"flex-start"}>
      <Text
        fontFamily={"montserrat, 'Noto Sans KR'"}
        fontWeight={"600"}
        fontSize={"4.5rem"}
        lineHeight={"2.8rem"}
      >
        1
      </Text>
      <Text
        fontFamily={"montserrat, 'Noto Sans KR'"}
        fontWeight={"600"}
        fontSize={"2.5rem"}
      >
        위
      </Text>
      <Box width={"full"} ml={"3rem"}>
        <Text mb={"5px"}>19년 모쏠</Text>
        <Box
          w={`calc(80*10)px`}
          h={"2.5rem"}
          border={"solid"}
          boxSizing={"border-box"}
          borderColor={"white"}
          borderRadius={"full"}
          textAlign={"center"}
          lineHeight={"calc(2.5rem - 3px)"}
          color={"white"}
          bgColor={"#9A8AFF"}
        >
          10
        </Box>
      </Box>
    </Flex>
  );
};

export default ScoreBoardItem;
