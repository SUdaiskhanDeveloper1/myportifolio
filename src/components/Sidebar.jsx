import {
  Box,
  VStack,
  Text,
  Button,
  HStack,
  Icon,
  Image,
  useBreakpointValue,
  Separator,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import pic from "../assets/pic.png";

const MotionBox = motion(Box);
const MotionImage = motion(Image);
const MotionHStack = motion(HStack);

export default function Sidebar() {
  const sidebarWidth = useBreakpointValue({
    base: "95%",
    sm: "95%",
    md: "90%",
    lg: "28%",
    xl: "20%",
  });

  const sidebarMt = useBreakpointValue({ base: 4, md: "40px" });
  // const sidebarPadding = useBreakpointValue({ base: 6, md: 10, lg: 0 });

  return (
    <MotionBox
      height={{ base: "100%", sm: "96%", md: "98%", lg: "91%" }}
      // width={sidebarWidth}
      width={{ base: "88%", sm: "80%", md: "45%", lg: "25%" }}
      bg="white"
      // p={sidebarPadding}
      rounded="xl"
      boxShadow="md"
      mt={sidebarMt}
      ml={{ base: "auto", md: 10 }}
      mx="auto"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <VStack w="100%">

        <MotionImage
          src={pic}
          boxSize="140px"
          borderRadius="md"
          fit="cover"
          alt="Profile"
          // whileHover={{ scale: 1.07 }}
          // transition={{ duration: 0.99 }}
          p={"14px"}
          rounded="xl"
        />
        {/* </MotionHStack> */}

        <div >
          <Text textAlign="center" fontSize={{ base: "2xl", sm: "xl", md: "xl", lg: "xl" }} fontWeight="bold">
            Sudais Khan
          </Text>
          <Text color="gray.500" fontSize={{ base: "1xl", sm: "2xl", md: "md", lg: "lg" }} fontWeight="bold">
            Frontend Developer
          </Text>
        </div>


        <HStack gap={{ base: "4", sm: "10", md: "3", lg: "5" }}>
          {[

            { icon: FaLinkedin, color: "blue.600", bg: "blue.100" },
            { icon: FaTwitter, color: "blue.400", bg: "blue.100" },
            { icon: FaGithub, color: "gray.600", bg: "gray.100" },
          ].map((item, i) => (
            <MotionBox
              key={i}
              bg={item.bg}
              p={3}
              rounded="md"
              cursor="pointer"
              whileHover={{ scale: 1.15, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <Icon as={item.icon} boxSize={5} color={item.color} />
            </MotionBox>
          ))}
        </HStack>


        <MotionBox
          boxShadow="md"
          // bg="#F2F5F9"


          // bg="red"
          rounded="xl"
          minH={{ base: "10vh", sm: "18vh", md: "18vh", lg: "35vh" }}
          w={{ base: "90%", sm: "90%", md: "90%", lg: "90%" }}
          // minW={{ base: "100%", md: 60 }}
          gap={0}
          p={4}

        >
          <VStack
            alignItems="flex-start"
          >

            <HStack gap={6}>
              <Icon
                as={FiPhone}
                boxSize={{ base: 6, md: 7, lg: 6 }}
                color="orange.400"
              />

              <VStack alignItems="flex-start" spacing={0}gap={0}>
                <Text fontWeight="bold" fontSize={{ base: "xl", md: "base", lg: "md" }}>
                  Phone:
                </Text>
                <Text fontSize={{ base: "xl", md: "base", lg: "md" }}>
                  +92 0315 3633503
                </Text>
              </VStack>
            </HStack>


            <HStack gap={6}>
              <Icon as={FiMail} boxSize={{ base: 6, md: 7, lg: 6 }} color="orange.400" />

              <VStack alignItems="flex-start" spacing={2} gap={0}>
                <Text fontWeight="bold" fontSize={{ base: "xl", md: "base", lg: "sm" }}>Email:</Text>
                <Text fontSize={{ base: "xl",sm:"base", md: "base", lg: "md" }}>Sudais875@gmail.com</Text>
              </VStack>
            </HStack>
             
            <HStack gap={6}>
              <Icon as={FiMapPin} boxSize={{ base: "6", md: "7", lg: "6" }} color="orange.400" />
              <VStack alignItems="flex-start" spacing={2} gap={0}>
                <Text fontWeight="bold" fontSize={{ base: "xl", md: "base", lg: "sm" }}>Location:</Text>
                <Text fontSize={{ base: "xl", md: "base", lg: "md" }}>Islamabad, Pakistan</Text>
              </VStack>
            </HStack>


          </VStack>
          <VStack alignItems="center"
            textAlign="left">
            <MotionBox
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.7 }}
            >
              <Button
                mt={4}
                // bg="orange.400"
                bg="#F65C12"
                color={"white"}
                rounded="2xl"
                _hover={{ bg: "orange.500" }}
                px={{ base: 4, md: 5, lg: 4 }}
                py={{ base: 2, md: 5, lg: 4 }}
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/cv.pdf";
                  link.download = "Sudais-Khan-CV.pdf";
                  link.click();
                }}
              >
                Download Resume
              </Button>
            </MotionBox>
          </VStack>


        </MotionBox>
      </VStack>
    </MotionBox>
  );
}
