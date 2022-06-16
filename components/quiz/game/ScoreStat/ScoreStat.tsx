import { Stat, StatLabel, StatNumber, StatProps } from "@chakra-ui/react";
import { FC } from "react";

interface Props extends StatProps {
  score: number;
}

const ScoreStat: FC<Props> = ({ score, fontSize, ...props }) => {
  return (
    <Stat textAlign={"center"} fontSize={fontSize} {...props}>
      <StatLabel fontSize={fontSize}>내 점수</StatLabel>
      <StatNumber fontSize={fontSize}>{score}</StatNumber>
    </Stat>
  );
};

export default ScoreStat;
