import { Text, Flex, Box, FlexProps, BackgroundProps } from "@chakra-ui/react";
import { Token } from "@chakra-ui/styled-system/dist/declarations/src/utils/types";
import { FC } from "react";
import { Property } from "csstype";

export interface Props {
  rank: number;
  score: number;
  nickname: string;
  barColor: Token<Property.Color, "colors">;
}

export const ScoreBoardItem: FC<Props> = ({
  rank,
  score,
  nickname,
  barColor,
}) => {
  return (
    <Flex alignItems={"flex-start"} flexWrap={"wrap"}>
      <Text
        flexBasis={"3.125rem"}
        textAlign={"center"}
        fontFamily={"montserrat, 'Noto Sans KR'"}
        fontWeight={"600"}
        fontSize={"4.5rem"}
        lineHeight={"2.8rem"}
      >
        {rank}
      </Text>
      <Text
        flexBasis={"2.5rem"}
        fontFamily={"montserrat, 'Noto Sans KR'"}
        fontWeight={"600"}
        fontSize={"2.5rem"}
      >
        위
      </Text>
      <Box
        width={"full"}
        flexGrow={1}
        flexShrink={1}
        flexBasis={"0%"}
        paddingInlineStart={"2rem"}
      >
        <Text mb={"5px"}>{nickname}</Text>
        {score === 0 ? (
          <Box
            w={`100%`}
            h={"2.5rem"}
            boxSizing={"border-box"}
            borderRadius={"full"}
            textAlign={"center"}
            lineHeight={"calc(2.5rem)"}
          >
            점수가 없어요...
          </Box>
        ) : (
          <Box
            w={`${10 * score}%`}
            h={"2.5rem"}
            border={"solid"}
            boxSizing={"border-box"}
            borderColor={"white"}
            borderRadius={"full"}
            textAlign={"center"}
            lineHeight={"calc(2.5rem - 3px)"}
            color={"white"}
            bgColor={barColor}
          >
            {score}
          </Box>
        )}
      </Box>
    </Flex>
  );
};

export default ScoreBoardItem;
