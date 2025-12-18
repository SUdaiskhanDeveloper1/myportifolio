import { HStack, Heading, Box } from "@chakra-ui/react";
import { useState, useEffect } from "react";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  return (
    <Box w="100%" bg="var(--bg-color)">
      <HStack justify="space-between" p={5} mb={4}>
        <Heading fontSize="3xl" fontWeight="bold" color="var(--text-color)">
          <span style={{ color: "#ff8c00" }}>My Profile</span>
        </Heading>

        <Box className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
          <input type="checkbox" checked={darkMode} readOnly />
          <label className="switch"></label>
        </Box>
      </HStack>
    </Box>
  );
}
