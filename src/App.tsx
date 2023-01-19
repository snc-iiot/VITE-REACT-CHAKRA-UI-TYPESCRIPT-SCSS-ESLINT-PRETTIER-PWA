import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "@/scss/main.css";
import {
    Box,
    Text,
    Button,
    Image,
    Link,
    Heading,
    Center,
    Container,
    SimpleGrid,
    Stack,
    useColorModeValue,
} from "@chakra-ui/react";

function App() {
    return (
        <Box
            bg={useColorModeValue("gray.50", "gray.800")}
            minH={"100vh"}
            py={12}
            px={4}
        >
            <Container maxW={"7xl"}>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                    <Stack spacing={4}>
                        <Text
                            textTransform={"uppercase"}
                            color={"red.400"}
                            fontWeight={600}
                            fontSize={"sm"}
                            bg={useColorModeValue("red.50", "red.900")}
                            p={2}
                            alignSelf={"flex-start"}
                            rounded={"md"}
                        >
                            Vite + React + Chakra UI + TypeScript + SCSS +
                            ESLint + Prettier + PWA + React Router DOM + Zustand
                        </Text>
                        <Heading
                            lineHeight={1.1}
                            fontSize={{
                                base: "3xl",
                                sm: "4xl",
                                md: "5xl",
                                lg: "6xl",
                            }}
                        >
                            <Text
                                as={"span"}
                                position={"relative"}
                                _after={{
                                    content: "''",
                                    width: "full",
                                    height: useColorModeValue("30%", "20%"),
                                    position: "absolute",
                                    bottom: 1,
                                    left: 0,
                                    bg: "red.400",
                                    zIndex: -1,
                                }}
                            >
                                Build
                            </Text>
                            <br />
                            <Text as={"span"} color={"red.400"}>
                                something
                            </Text>{" "}
                            great.
                        </Heading>
                        <Text color={"gray.500"}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam.
                        </Text>
                        <Stack
                            direction={{ base: "column", sm: "row" }}
                            spacing={{ base: 4, sm: 6 }}
                        >
                            <Button
                                rounded={"full"}
                                size={"lg"}
                                fontWeight={"normal"}
                                px={6}
                                colorScheme={"red"}
                                bg={"red.400"}
                                _hover={{ bg: "red.500" }}
                            >
                                Get started
                            </Button>
                            <Button
                                rounded={"full"}
                                size={"lg"}
                                fontWeight={"normal"}
                                px={6}
                                leftIcon={<Image src={reactLogo} />}
                            >
                                Learn more
                            </Button>
                        </Stack>
                    </Stack>
                </SimpleGrid>
            </Container>
        </Box>
    );
}

export default App;
