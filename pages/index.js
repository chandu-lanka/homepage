import NextLink from "next/link";
import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Link,
  Button,
} from "@chakra-ui/react";
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import { ChevronRightIcon } from "@chakra-ui/icons";

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
        p={3}
        mb={6}
        align="center"
      >
        Hello I&apos;m a game developer / programmer
      </Box>

      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Scoop
          </Heading>
          <p>Github User(Game Dev / Programmer / Pixel Artist)</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={4}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/scoop.jpg"
            alt="pfp"
          />
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About
        </Heading>
        <Paragraph>
          Hey there! i'm scoop a 14 year old (programmer / game dev / pixel
          artist)! I work for{" "}
          <NextLink href="https://beantoo.studio/">
            <Link>BeanToo Studios</Link>
          </NextLink>{" "}
          which is an indie game dev studio which makes 2d pixel art games. I
          work there as a full-time developer working on the companies games and
          technologies such as Lucid Engine which is a custom game engine we are
          developing in C++, Carrot Guns... An RPG rougelike shooter game about
          bunnies... and alot more! I also have many projects of my own such as{" "}
          <NextLink href="https://github.com/hallow-engine/hallow-engine">
            <Link>Hallow</Link>
          </NextLink>
          , A Game Engine I will be using for my personal projects, Frocto my
          very own video game I am developing in C++, and{" "}
          <NextLink href="https://github.com/scoopdevy/x-lang">
            <Link>X-Lang</Link>
          </NextLink>
          , a programming language which is being written in python
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/projects">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My Projects
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  );
};

export default Page;
