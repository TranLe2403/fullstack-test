import React, { useEffect, useState } from "react";
import { Box, Grid } from "@chakra-ui/react";
import axios from "axios";

import User from "../../components/User";
import CustomButton from "../../components/CustomButton";
import { UserDetails } from "../../types/types";

type LimitLength = 3 | 2 | 1;

const Users = (): JSX.Element => {
  const getNumberOfItems = (): LimitLength => {
    const screenSize = window.innerWidth;

    if (screenSize > 1280) {
      return 3;
    } else if (screenSize < 1280 && screenSize >= 768) {
      return 2;
    }
    return 1;
  };

  const [limitLength, setLimitLength] = useState<LimitLength>(
    getNumberOfItems()
  );
  const [userList, setUserList] = useState<UserDetails[]>([]);

  useEffect(() => {
    window.addEventListener("resize", reportWindowSize);
    return () => {
      window.removeEventListener("resize", reportWindowSize);
    };
  });

  const reportWindowSize = (): void => {
    setLimitLength(getNumberOfItems());
  };

  const getUserList = async (): Promise<void> => {
    try {
      const { data: allUsers } = await axios.get<UserDetails[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUserList(allUsers);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    void getUserList();
  }, []);

  return (
    <Grid
      templateColumns={`repeat(${limitLength}, 1fr)`}
      gap={10}
      ml={10}
      mr={10}
      data-testid="test-all-users"
    >
      {userList.map((item) => (
        <Box
          key={item.id}
          bg="tomato"
          w="100%"
          color="white"
          m="30px auto"
          p="30px"
          borderRadius="lg"
          boxShadow="2xl"
          maxW="350px"
        >
          <User user={item} />
          <CustomButton title="More Detail" getId={item.id} />
        </Box>
      ))}
    </Grid>
  );
};

export default Users;
