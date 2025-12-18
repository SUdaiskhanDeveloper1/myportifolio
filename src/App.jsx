import { Box, Stack, VStack } from "@chakra-ui/react";
import Sidebar from "./components/Sidebar";
import SkillsCards from "./components/SkillsCards";
import Header from "./components/Header";


export default function App() {
  return (
    <Box w="100%" h="99vh" display="flex" flexDirection="column" >
      <Header />
      <Stack direction={{ base: "column", sm:"column", md: "row", lg:"row" }} align="stretch"
       spacing={6} flex={1} minH={0}>
        <Sidebar />
        <VStack align="stretch" spacing={6} flex={1} minH={0}>
          <SkillsCards />
        </VStack>
      </Stack>
      
    </Box>
  );
}
