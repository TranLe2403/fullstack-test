import { Button, Container } from "@chakra-ui/react";
import React from "react";
import { useHistory } from "react-router";

const CustomButton = ({
  getId,
  title,
}: {
  getId?: number;
  title: string;
}): JSX.Element => {
  let history = useHistory();

  const onClickHandler = (): void => {
    history.push(getId ? `/${getId}` : "/");
  };

  return (
    <Container display="flex" alignItems="flex" justifyContent="center">
      <Button
        onClick={onClickHandler}
        type="submit"
        colorScheme="teal"
        variant="solid"
        borderRadius="full"
        mt={4}
        data-testid="test-custom-button"
      >
        {title}
      </Button>
    </Container>
  );
};

export default CustomButton;
