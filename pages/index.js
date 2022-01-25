import NextLink from "next/link";
import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import { Divider } from "@chakra-ui/layout";
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import { ChevronRightIcon } from "@chakra-ui/icons";

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
        p={5}
        mb={6}
        align="center"
      >
        Hello I&apos;m a rocket enthusiast / software dev / robotics engineer
      </Box>

      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            H.C. Lanka
          </Heading>
          <p>
            Inovation is my middle name. I enjoy building robots, rockets, and
            software.
          </p>
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
            src="/images/chandulanka.png"
            alt="pfp"
          />
        </Box>
      </Box>

      <Divider my={6} />

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About
        </Heading>
        <Paragraph>
          Hey there! i&apos;m H.C. Lanka a high school student (software /
          robotics / rocketist)! I started programming in 8th grade due to the
          bordom of quarantine and started by making video games in my spare
          time after online classes. With that I started robotics by founding a
          robotics team (me and my friends) at school. I also love rockets and
          want to major in aerospace engineering in college. My dream job is at
          NASA and I want to work on space crafts, reasearch, rovers, etc. I
          love to make things!
        </Paragraph>
        <Box display="flex" alignItems="center" justifyContent="space-around">
          <Box align="center" my={4}>
            <NextLink href="/projects">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="purple">
                Projects
              </Button>
            </NextLink>
          </Box>

          <Box align="center" my={4}>
            <NextLink href="/bio">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="purple">
                Bio
              </Button>
            </NextLink>
          </Box>

          <Box align="center" my={4}>
            <NextLink href="/blog">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="purple">
                Blog
              </Button>
            </NextLink>
          </Box>
        </Box>
      </Section>
    </Container>
  );
};

export default Page;
