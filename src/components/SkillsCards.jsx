import { useState } from "react";
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  HStack,
  Icon,
  VStack,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";

import { FaCode, FaMobileAlt, FaPenFancy, FaUsers } from "react-icons/fa";
import { MdHome, MdWork, MdDescription, MdContactMail } from "react-icons/md";
import { motion } from "framer-motion";
const MotionBox = motion(Box);

const homeItems = [
  {
    icon: FaCode,
    title: "Web Development",
    desc: "As a developers, I find myself most captivated by the power find myself myself most captivated by the power find myself most captivated by the power find myself most captivated by the power find myself most captivated by the power find myself most captivated by the power find myself most captivated by the power find myself most captivated by the power  & flexibility of NEXT.js...",
    color: "orange.100",
  },
  {
    icon: FaMobileAlt,
    title: "Problem Solving",
    desc: "I love creating find myself most captivated by the power find myself most captivated by the power find myself most captivated by the powerfind myself most captivated by the powerfind myself most captivated by the powerfind myself most captivated by the powerfind myself most captivated by the powerfind myself most captivated by the power intuitive & efficient applications...",
    color: "blue.100",
  },
  {
    icon: FaPenFancy,
    title: "UI/UX Designing",
    desc: "Crafting intuitive & visually appealing UI/UX find myself most captivated by the power find myself most captivated by the powerfind myself most captivated by the powerfind myself most captivated by the power",
    color: "yellow.100",
  },
  {
    icon: FaUsers,
    title: "Mentorship",
    desc: "I enjoy sharing knowledge with upcoming developers find myself most captivated by the power find myself most captivated by the power find myself most captivated by the power find myself most captivated by the power",
    color: "red.100",
  },
];

const resumeData = [
  {
    category: "Experience",
    items: [

      {
        title: "Junior Frontend Developer",
        company: "Weather Walay",
        duration: "July 2025 - Current",
        desc: "Developed user interfaces & implemented features for various web projects",
      },
      {
        title: "Junior Frontend Developer",
        company: "CodePackets",
        duration: "Apr 2023- Oct 2023",
        desc: "Developed user interfaces & implemented features for various web projects",
      },
    ],
  },
  {
    category: "Education",
    items: [
      {
        title: "Master of Computer Science",
        company: "University of Engineering & Technology",
        duration: "2024 - 2026",
        desc: "Specialized in Web Development & AI",
      },
      {
        title: "Bachelor of Computer Science",
        company: "University of Engineering & Technology",
        duration: "2019 - 2023",
        desc: "Specialized in Web Development & Software Engineering",
      },
    ],
  },
  {
    category: "Soft Skills",
    items: [
      { title: "Communication", desc: "Excellent verbal & written communication" },
      { title: "Problem Solving", desc: "Strong analytical & problem-solving abilities" },
      { title: "Team Collaboration", desc: "Effective team player & leadership Qualities" },
      { title: "Time Management", desc: "Efficient project & time management" },
    ],
  },
];

const workData = [
  {
    title: "E-Commerce Platform",
    desc: "Built a responsive e-commerce platform using React & Firebase with features like product filtering, cart management, & payment integration.",
    tech: "React, Firebase, Vite",
  },
  {
    title: "Task Management App",
    desc: "Developed a full-stack task management application with real-time updates & user authentication.",
    tech: "Next.js, FireBase, React",
  },
  {
    title: "Portfolio Website",
    desc: "Created a modern portfolio website showcasing projects & skills with smooth animations.",
    tech: "React, Chakra UI, Framer Motion",
  },
];

export default function SkillsCards() {
  const [activeTab, setActiveTab] = useState("Home");

  const menu = [
    { label: "Home", icon: MdHome },
    { label: "Resume", icon: MdDescription },
    { label: "Work", icon: MdWork },
    { label: "Contact", icon: MdContactMail },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "Home":
        return (
          <>
            <Box p={4} rounded="lg">
              <Heading size="2xl">ABOUT ME</Heading>
              <Text color="gray.700" mt={2}>
                I'm a frontend developer specializing in building dynamic, responsive, & user-friendly web applications
                using React,Next.js, HTML, CSS, & JavaScript. Skilled in state management, API integration, & modern UI
                frameworks, with handson experience in Firebase for authentication, real-time databases.
              </Text>
            </Box>

            <Box p={4} rounded="lg">
              <Heading size="lg" mb={2}>
                What I do!
              </Heading>

              <SimpleGrid columns={{ base: 1, md: 1, lg:2 }} gap={6} spacing={6}>
                {homeItems.map((item) => (
                  <Box
                    key={item.title}
                    bg={item.color}
                    p={6}
                    rounded="xl"
                    boxShadow="sm"
                  >
                    <HStack spacing={4}>
                      <Icon as={item.icon} boxSize={8} color="orange.500" />
                      <Heading size="md">{item.title}</Heading>
                    </HStack>

                    <Text mt={3} color="gray.700">
                      {item.desc}
                    </Text>
                  </Box>
                ))}
              </SimpleGrid>
            </Box>
          </>
        );

      case "Resume":
        return (
          <Box p={4} rounded="lg" h={{ base: "125px" }}>
            <Heading size="2xl" mb={2} >
              MY RESUME
            </Heading>

            <VStack align="stretch" spacing={6}  gap={5}>
              {resumeData.map((section) => (
                <Box
                  key={section.category}
                  w="100%"
                  bg="blue.50"
                  p={4}
                  rounded="xl"
                  boxShadow="md"
                  borderLeft="6px solid orange"
                >
                
                  <Heading size="xl" color="orange.500"  mb={4}>
                    {section.category}
                  </Heading>

                  
                  {section.category === "Soft Skills" ? (
                    <SimpleGrid
                      columns={{ base: 1, md: 2, lg: 2 }}
                      spacing={4}
                      gap={7}
                    >
                      {section.items.map((item, idx) => (
                        <Box
                          key={idx}
                          p={4}
                          bg="white"
                          rounded="lg"
                          boxShadow="sm"
                          border="1px solid #e2e8f0"
                          _hover={{ boxShadow: "md" }}
                        >
                          <Heading size="md" mb={1}>
                            {item.title}
                          </Heading>
                          <Text color="gray.700">{item.desc}</Text>
                        </Box>
                      ))}
                    </SimpleGrid>
                  ) : (
                
                    <HStack align="stretch" gap={7} spacing={4} wrap="wrap">
                      {section.items.map((item, idx) => (
                        <Box
                          key={idx}
                          p={4}
                          bg="white"
                          rounded="lg"
                          boxShadow="sm"
                          border="1px solid #e2e8f0"
                          _hover={{ boxShadow: "md" }}
                        >
                          <Heading size="md" mb={1}>
                            {item.title}
                          </Heading>

                          {item.company && (
                            <Text color="gray.600" fontSize="sm" mb={1}>
                              {item.company} • {item.duration}
                            </Text>
                          )}

                          <Text color="gray.700">{item.desc}</Text>
                        </Box>
                      ))}
                    </HStack>
                  )}
                </Box>
              ))}
            </VStack>
          </Box>
        );

      case "Work":
        return (
          <Box p={4} rounded="lg">
            <Heading size="2xl" mb={2}>
              MY WORK
            </Heading>

            <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
              {workData.map((project, idx) => (
                <Box
                  key={idx}

                  bg="blue.50"
                  p={6}
                  rounded="xl"
                  boxShadow="sm"
                  borderLeft="4px solid orange.500"
                >
                  <Heading size="md" mb={2}>
                    {project.title}
                  </Heading>
                  <Text color="gray.700" mb={4}>
                    {project.desc}
                  </Text>
                  <Text fontWeight="bold" color="orange.500" fontSize="sm">
                    Tech Stack: {project.tech}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        );

      case "Contact":
        return (
          <Box p={4} alignItems={"center"} textAlign={"center"} rounded="lg" >
            <Heading size="2xl" mb={2}>
              GET IN TOUCH
            </Heading>

            <Box
              maxW={{ base: "100%", md: "400px" }}
              mx="auto"
              textAlign="left"
            >
              <VStack spacing={4} align="stretch" w="100%">


                <Box>
                  <Text fontWeight="bold" mb={2}>
                    Full Name:
                  </Text>
                  <Input
                    placeholder="Enter your name"
                    bg="gray.100"
                    border="none"
                    p={3}
                    rounded="md"
                    w="100%"
                  />
                </Box>


                <Box>
                  <Text fontWeight="bold" mb={2}>
                    Email:
                  </Text>
                  <Input
                    placeholder="Enter your email"
                    bg="gray.100"
                    border="none"
                    p={3}
                    rounded="md"
                    type="email"
                    w="100%"
                  />
                </Box>


                <Box>
                  <Text fontWeight="bold" mb={2}>
                    Contact Number:
                  </Text>
                  <Input
                    placeholder="Enter your phone number"
                    bg="gray.100"
                    border="none"
                    p={3}
                    rounded="md"
                    w="100%"
                  />
                </Box>


                <Box>
                  <Text fontWeight="bold" mb={2}>
                    Your Query:
                  </Text>
                  <Textarea
                    placeholder="Enter your message"
                    bg="gray.100"
                    border="none"
                    p={3}
                    rounded="md"
                    minH="50px"
                    resize="none"
                    w="100%"
                  />
                </Box>

                <MotionBox
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.3 }}
                >
                  <VStack justifyContent="center">

                    <Button
                      bg="orange.500"
                      color="white"
                      fontWeight="bold"
                      _hover={{ bg: "orange.600" }}
                      w="60%"
                      p={3}
                      rounded="md"
                    >
                      Submit
                    </Button>

                  </VStack>
                </MotionBox>
              </VStack>
            </Box>

          </Box>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <MotionBox
        as={HStack}
        spacing={3}
        bg="white"
        px={{ base: 2, md: 3}}
        py={3}
        rounded="md"
        boxShadow="sm"
        w={{ base: "100%", md: "fit-content" }}
        ml={{ base: 0, md: "auto" }}
        mt={4}
        mr={{ base: 0, md: 4 }}
        flexWrap="wrap"
        justifyContent={{ base: "center", md: "flex-end" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {menu.map((item, i) => (
          <MotionBox
            as={HStack}
            key={item.label}
            px={4}
            py={2}
            bg={activeTab === item.label ? "orange.100" : "#E1E8EF"}
            rounded="md"
            cursor="pointer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setActiveTab(item.label)}
            mr={2}
            mb={2}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.5, duration: 0.25 }}
          >
            <Box as={item.icon} color="orange.400" />
            <Text fontWeight="small">{item.label}</Text>
          </MotionBox>
        ))}
      </MotionBox>


      <MotionBox
        w={{ base: "95%", md: "90%", lg: "92%" }}
        h={{ base: "100%" }}
        // boxShadow="md"
        backgroundColor="white"
        // p={{ base: 4, md: 6 }}
        mx={{ base: "scroll", md: 20 }}
        rounded="xl"
        // overflowY="scroll"
        maxH="100%"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {renderContent()}
      </MotionBox>

    </>
  );
}
