import {
  Box,
  VStack,
  Text,
  Button,
  HStack,
  Icon,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaFacebook, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import pic from "../assets/pic.png";

const MotionBox = motion(Box);
const MotionImage = motion(Image);
const MotionHStack = motion(HStack);

export default function Sidebar() {
  const sidebarWidth = useBreakpointValue({
    base: "95%",
    sm: "70%",
    md: "40%",
    lg: "28%",
    xl: "20%",
  });

  const sidebarMt = useBreakpointValue({ base: 4, md: "95px" });
  const sidebarPadding = useBreakpointValue({ base: 6, md: 10, lg:0 });

  return (
    <MotionBox
      height="auto"
      width={sidebarWidth}
      bg="white"
      p={sidebarPadding}
      rounded="xl"
      boxShadow="md"
      mt={sidebarMt}
      ml={{ base: "auto", md: 10 }}
      mx="auto"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <VStack w="100%"  spacing={2}>
        <MotionHStack
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <MotionImage
            src={pic}
            boxSize="120px"
            borderRadius="md"
            fit="cover"
            alt="Profile"
            whileHover={{ scale: 1.07 }}
            transition={{ duration: 0.99 }}
          />
        </MotionHStack>


        <Text fontSize="3xl" fontWeight="bold">
          Sudais Khan
        </Text>
        <Text color="gray.500" fontWeight="bold">
          Frontend Developer
        </Text>

        
        <HStack spacing={1}>
          {[
            { icon: FaFacebook, color: "blue.500", bg: "blue.100" },
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
          bg="#F2F5F9"
          rounded="xl"
          minH="30vh"
          minW={{ base: "100%", md: 60 }}
          p={4}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.9 }}
        >
          <VStack spacing={3} gap={4} mt={4}>

            <HStack>
              <Icon as={FiPhone} color="orange.400" />
              <Text fontWeight="bold" fontSize="sm">Phone:</Text>
              <Text fontSize="sm">+9203153633503</Text>
            </HStack>

            <HStack>
              <Icon as={FiMail} color="orange.400" />
              <Text fontWeight="bold" fontSize="sm">Gmail:</Text>
              <Text fontSize="sm">Sudais8075@gmail.com</Text>
            </HStack>

            <HStack>
              <Icon as={FiMapPin} color="orange.400" />
              <Text fontWeight="bold" fontSize="sm">Location:</Text>
              <Text fontSize="sm">Islamabad, Pakistan</Text>
            </HStack>

            <MotionBox
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.7 }}
            >
              <Button
                mt={4}
                bg="orange.400"
                color="white"
                rounded="2xl"
                _hover={{ bg: "orange.500" }}
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
