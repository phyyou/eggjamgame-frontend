import { FC } from "react";
import { Heading, Flex, Text, FlexProps, Icon, As } from "@chakra-ui/react";

interface SelectBoxProps extends FlexProps {
  icon: As<any>;
  title: string;
  description: string;
}

const SelectBox: FC<SelectBoxProps> = ({
  icon,
  title,
  description,
  ...props
}) => {
  return (
    <Flex
      bgColor={"#FFD494"}
      width={"25vw"}
      height={"70%"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDir={"column"}
      borderRadius={"3.125rem"}
      cursor={"pointer"}
      userSelect={"none"}
      transition={"all 0.3s ease-out"}
      _hover={{
        boxShadow: "dark-lg",
      }}
      {...props}
    >
      <Icon width={"10vh"} height={"10vh"} as={icon} />
      <Heading mt={"8"}>{title}</Heading>
      <Text mt={"4"}>{description}</Text>
    </Flex>
  );
};

export default SelectBox;
