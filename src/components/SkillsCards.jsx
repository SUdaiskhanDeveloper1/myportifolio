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
  Image,
  Dialog
} from "@chakra-ui/react";

import { FaCode, FaMobileAlt, FaPenFancy, FaUsers } from "react-icons/fa";
import { MdHome, MdWork, MdDescription, MdContactMail } from "react-icons/md";
import { motion } from "framer-motion";
// import { toaster } from "../App"; 


const MotionBox = motion(Box);
const SkillTag = ({ label }) => (
  <Box
    px={4}
    py={2}
    border="1px solid"
    // borderColor="orange.400"
    color="black"
    bg={"#e1e8ef"}
    rounded="full"
    fontSize="sm"
    fontWeight="medium"
    whiteSpace="nowrap"
  >
    {label}
  </Box>
);
const TechTag = ({ label }) => (
  <Box
    px={3}
    py={1}
    border="1px solid"
    borderColor="orange.400"
    color="orange.500"
    rounded="full"
    fontSize="xs"
    fontWeight="medium"
    whiteSpace="nowrap"
  >
    {label}
  </Box>
);

const homeItems = [
  {
    icon: FaCode,
    title: "Web Development",
    desc: "As a developers, I find myself most captivated by the power find myself myself most captivated by the power find myself most captivated by the power find myself most captivated by the power find myself most captivated by the power find myself most captivated by the power find myself most captivated by the power find myself most captivated by the power  & flexibility of NEXT.js...",
    color: "#FFEBD1",
  },
  {
    icon: FaMobileAlt,
    title: "Problem Solving",
    desc: "I love creating find myself most captivated by the power find myself most captivated by the power find myself most captivated by the powerfind myself most captivated by the powerfind myself most captivated by the powerfind myself most captivated by the powerfind myself most captivated by the powerfind myself most captivated by the power intuitive & efficient applications...",
    color: "#f2f7fe",
  },
  {
    icon: FaPenFancy,
    title: "UI/UX Designing",
    desc: "Crafting intuitive & visually appealing UI/UX find myself most captivated by the power find myself most captivated by the powerfind myself most captivated by the powerfind myself most captivated by the power",
    color: "#f2f7fe",
  },
  {
    icon: FaUsers,
    title: "Mentorship",
    desc: "I enjoy sharing knowledge with upcoming developers find myself most captivated by the power find myself most captivated by the power find myself most captivated by the power find myself most captivated by the power",
    color: "#FFEBD1",
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
    title: "Hostel Management System",
    desc: "A complete system for managing hostels, rooms, students, and payments.",
    image: "/src/assets/ndma.png",
    tech: ["Next.js", "Node.js", "MongoDB"],
  },
  {
    title: "Weather Forecast Dashboard",
    desc: "Real-time weather forecasting using ML and modern UI.",
    image: "src/assets/pdmas.png",
    tech: ["React", "API", "Chart.js"],
  },
  {
    title: "Weather Forecast Dashboard",
    desc: "Real-time weather forecasting using ML and modern UI.",
    image: "src/assets/pdmas.png",
    tech: ["React", "API", "Chart.js"],
  },
];


export default function SkillsCards() {
  const [activeTab, setActiveTab] = useState("Home");
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleOk = () => {
    setOpen(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  }

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
            <Box
              p={4}
              rounded="lg"
              // position="sticky"
              // top="0px"  
              // zIndex="1"
              bg="white"
            >
              <Heading size="2xl">ABOUT ME</Heading>
              <Text color="gray.700" mt={2}>
                I'm a frontend developer specializing in building dynamic, responsive,
                & user-friendly web applications using React, Next.js, HTML, CSS, &
                JavaScript. Skilled in state management, API integration, & modern UI
                frameworks, with hands-on experience in Firebase for authentication,
                real-time databases.
              </Text>
            </Box>


            <Box p={4} rounded="lg">
              <Heading size="2xl" mb={2}>
                What I do!
              </Heading>

              <SimpleGrid columns={{ base: 1, md: 1, lg: 2 }} gap={6} spacing={6}>
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
                      <Heading size="lg">{item.title}</Heading>
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
           

            <VStack align="stretch" gap={"5"} spacing={10}>
              
              <HStack align="stretch" gap={"5"} spacing={8} wrap="wrap">
                {resumeData
                  .filter(
                    (section) =>
                      section.category === "Experience" ||
                      section.category === "Education"
                  )
                  .map((section) => (
                    <Box
                      key={section.category}
                      flex="1"
                      minW={{ base: "100%", md: "48%" }}
                      bg="blue.50"
                      p={5}
                      rounded="xl"
                      boxShadow="md"
                      borderLeft="6px solid orange"
                    >
                      <Heading size="xl" color="black" mb={4}>
                        {section.category}
                      </Heading>

                      <VStack align="stretch" spacing={4}>
                        {section.items.map((item, idx) => (
                          <Box
                            key={idx}
                            p={4}
                            bg="white"
                            rounded="lg"
                            boxShadow="sm"
                            border="1px solid #e2e8f0"
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
                      </VStack>
                    </Box>
                  ))}
              </HStack>

              <HStack align="stretch" spacing={8} gap={"5"} wrap="wrap">
                
                <Box
                  flex="1"
                  minW={{ base: "100%", md: "48%" }}
                  bg="blue.50"
                  p={5}
                  rounded="xl"
                  boxShadow="md"
                  borderLeft="6px solid orange"
                >
                  <Heading size="xl" color="black" mb={4}>
                    Work Skills
                  </Heading>

                  <HStack spacing={4} wrap="wrap" >
                    {["Next.js", "React", "Typescript", "Git", "Jira", "bitbucket", "HTML5", "CSS 3", "Tailwand CSS", "Javascript", "figma", "Firebase",].map((skill) => (
                      <SkillTag key={skill} bg={"#e1e8ef"} label={skill} />
                    ))}
                  </HStack>
                </Box>

                <Box
                  flex="1"
                  minW={{ base: "100%", md: "48%" }}
                  bg="blue.50"
                  p={5}
                  rounded="xl"
                  boxShadow="md"
                  borderLeft="6px solid orange"
                >
                  <Heading size="lg" color="black" mb={4}>
                    Soft Skills
                  </Heading>

                  <HStack spacing={4} wrap="wrap">
                    {[
                      "Time Management",
                      "Project Management",
                      "Mentorship",
                      "Writing",
                      "Research",
                      "Flexibility",
                      "Publications",
                    ].map((skill) => (
                      <SkillTag key={skill} label={skill} />
                    ))}
                  </HStack>
                </Box>
              </HStack>
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
                  rounded="xl"
                  boxShadow="md"
                  overflow="hidden"
                  _hover={{ boxShadow: "lg" }}
                  transition="all 0.3s ease"
                >
                  <Image
                    src={project.image} 
                    alt={project.title}
                    h="25vh"
                    w="100%"
                    objectFit="fill"
                  />

                  
                  <Box p={3} borderLeft="4px solid orange.500">
                    <Heading size="md" mb={2}>
                      {project.title}
                    </Heading>

                    <Text color="gray.700" fontSize="sm" mb={4}>
                      {project.desc}
                    </Text>

                    
                    <HStack spacing={2} wrap="wrap">
                      {project.tech.map((tech) => (
                        <TechTag key={tech} label={tech} />
                      ))}
                    </HStack>
                  </Box>
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        );

      case "Contact":
        return (
          <Box p={4} textAlign="center" rounded="lg">
            <Heading size="2xl" mb={2}>
              GET IN TOUCH
            </Heading>

            <Box maxW={{ base: "100%", md: "400px" }} mx="auto" textAlign="left">
              <VStack spacing={4} align="stretch">
                <Box>
                  <Text fontWeight="bold" mb={2}>
                    Full Name:
                  </Text>
                  <Input
                    placeholder="Enter your name"
                    bg="gray.100"
                    border="none"
                    p={3}
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </Box>

                <Box>
                  <Text fontWeight="bold" mb={2}>
                    Email:
                  </Text>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    bg="gray.100"
                    border="none"
                    p={3}
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
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
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
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
                    resize="none"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </Box>

                <Button
                  bg="orange.500"
                  color="white"
                  fontWeight="bold"
                  _hover={{ bg: "orange.600" }}
                  // onClick={handleSubmit}
                  onClick={handleOk}
                >
                  Submit
                </Button>
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
        // bg="red"
        px={{ base: 2, md: 2, }}
        py={0}
        rounded="md"
        // boxShadow="sm"
        w={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}
        // ml={{ base: 0, }}
        mt={{ base: "5%", sm: "8%", md: "8.5%", lg: "4%", }}
        // mr={{ base: 0, }}
        // flexWrap="wrap"
        justifyContent={{ base: "center", md: "right", lg: "end" }}
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // transition={{ duration: 0.8 }}
      >
        {menu.map((item, i) => (
          <MotionBox
            as={HStack}
            key={item.label}
            // px={2}
            // py={2}
            p={3}
            bg={activeTab === item.label ? "#F65C12" : " #c5d0ddff"}
            rounded="md"
            cursor="pointer"
            whileHover={{ scale: 0.9 }}
            color={"white"}
            // whileTap={{ scale: 0.98 }}
            onClick={() => setActiveTab(item.label)}
            mr={5}
            mb={2}
          // initial={{ opacity: 0, y: 8 }}
          // animate={{ opacity: 1, y: 0 }}
          // transition={{ delay: i * 0.5, duration: 0.1 }}
          >
            <VStack gap={0}>
              <Box as={item.icon} boxSize={{ lg: "8" }} />
              <Text fontWeight="bold" color={"black"} space={0} fontSize={{ base: "100%", md: "80%", lg: "90%" }}>{item.label}</Text>
            </VStack>
          </MotionBox>
        ))}
      </MotionBox>


      <MotionBox
        w={{ base: "95%", md: "80%", lg: "90%" }}
        h={{ base: "auto", lg: "68vh" }}
        overflowY={{ base: "visible", md: "auto", lg: "auto" }}
        sx={{
          scrollbarWidth: { lg: "none" },
          "&::-webkit-scrollbar": {
            display: { lg: "none" },
          },
        }}
        mx={{ base: 0, md: 20 }}
        rounded="xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {renderContent()}
      </MotionBox>


    </>
  );
}
