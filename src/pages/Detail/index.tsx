import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Text, Box, Container, Link } from "@chakra-ui/react";
import axios from "axios";

import { UserDetails } from "../../types/types";

type LimitWidth = "40%" | "55%" | "70%";

const Detail = (): JSX.Element => {
  const getLimitWidth = (): LimitWidth => {
    const screenSize = window.innerWidth;

    if (screenSize > 1280) {
      return "40%";
    } else if (screenSize < 1280 && screenSize >= 768) {
      return "55%";
    }
    return "70%";
  };

  const [limitWidth, setLimitWidth] = useState<LimitWidth>(getLimitWidth());
  let { id } = useParams<{ id: string }>();
  const [data, setData] = useState<UserDetails>();

  useEffect(() => {
    window.addEventListener("resize", reportWindowSize);
    return () => {
      window.removeEventListener("resize", reportWindowSize);
    };
  });

  const reportWindowSize = (): void => {
    setLimitWidth(getLimitWidth());
  };

  useEffect(() => {
    const getDetailUser = async (): Promise<void> => {
      try {
        const { data: userDetails } = await axios.get<UserDetails>(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        setData(userDetails);
      } catch (err) {
        console.log(err);
      }
    };
    void getDetailUser();
  }, [id]);

  const NewText = ({
    text,
    children,
  }: {
    text: string;
    children?: any;
  }): JSX.Element => {
    return (
      <Text>
        <strong>{text}</strong>: {children}
      </Text>
    );
  };

  return (
    <Box
      w={limitWidth}
      direction="column"
      m="10px auto"
      p="30px 30px"
      bg="tomato"
      color="white"
      borderRadius="lg"
      boxShadow="2xl"
      maxW="400px"
    >
      {data ? (
        <>
          <NewText text="Name">{data.name}</NewText>
          <NewText text="UserName">{data.username}</NewText>
          <NewText text="Email">{data.email}</NewText>
          <NewText text="Phone">{data.phone}</NewText>
          <NewText text="Company">{data.company.name}</NewText>
          <NewText text="Website">
            <Link href="#">{data.website}</Link>
          </NewText>
          <NewText text="Address"></NewText>
          <Container pl={3}>
            <li>Street: {data.address.street}</li>
            <li>Suite: {data.address.suite}</li>
            <li>City: {data.address.city}</li>
            <li>Zipcode: {data.address.zipcode}</li>
          </Container>
        </>
      ) : (
        <>Loading...</>
      )}
    </Box>
  );
};

export default Detail;
