import { Box, Link, Text } from "@chakra-ui/layout";
import React from "react";
import { UserDetails } from "../../types/types";

const User = ({  user }: { user: UserDetails }): JSX.Element => {
  return (
    <Box display="flex" alignItems="center" flexDirection="column">
      <Box
        w="100px"
        h="100px"
        borderRadius="50px"
        bg="#cecece"
        m="10px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        fontSize="40px"
      >
        {user.name.charAt(0)}
      </Box>
      <Text fontSize="2xl">{user.name}</Text>
      <p>@{user.username}</p>
      <Link href="#">http://{user.website}</Link>
    </Box>
  );
};

export default User;
