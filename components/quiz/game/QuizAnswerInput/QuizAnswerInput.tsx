import { Input, InputProps } from "@chakra-ui/react";
import { FC } from "react";

interface Props extends InputProps {}

const QuizAnswerInput: FC<Props> = (props) => {
  return (
    <Input
      variant="flushed"
      placeholder="정답을 입력해 주세요"
      textAlign={"center"}
      colorScheme={"whiteAlpha"}
      focusBorderColor={"whiteAlpha.900"}
      id="answer"
      name="answer"
      {...props}
    />
  );
};

export default QuizAnswerInput;
