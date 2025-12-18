import {
  HStack,
  Heading,
  IconButton,
  Box

} from "@chakra-ui/react";


export default function Header() {


  return (
    <Box justify="space-around" w="100%" bg={"#f2f7fe"}   position="sticky"
       top="0px"  
              zIndex="1" >
    <HStack justify="space-between" 
      padding={5}
      // rounded={"lg"}
      // zIndex="10"
      // bg="  #b9c5deff"
       mb={4}
      
       >
        

      <Heading
        fontSize="3xl"
        fontWeight="bold"
        color={("gray.800", "gray.100")}
      >
        <span style={{ color: "#ff8c00" }}>My Profile</span>
      </Heading>


      <IconButton

        aria-label="toggle theme"

        rounded="full"
        bg={("white", "gray.700")}
        boxShadow="md"
        _hover={{ bg: ("gray.100", "gray.600") }}
      />
    </HStack>
    </Box>
  );
}
