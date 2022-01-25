import {
  Heading,
  Box,
  Image,
  Link,
  Divider,
  ListItem,
  Button,
  List,
  Icon,
} from "@chakra-ui/react";
import { BioSection, BioYear } from "../components/bio";
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import Head from "next/head";
import { IoLogoTwitter, IoLogoGithub, IoLogoYoutube } from "react-icons/io5";

const BioPage = () => {
  return (
    <Section>
      <Head>
        <title>Biography - Chandu Lanka</title>
      </Head>
      <Section delay={0.2}>
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
        <Heading as="h3" variant="section-title">
          My Biography
        </Heading>
        <BioSection>
          <BioYear>2007</BioYear>
          Born in India
        </BioSection>
        <BioSection>
          <BioYear>2010</BioYear>
          Moved to the USA
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Came back to India
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Covid19 pandemic lockdown... learned to code and make video games and
          have now chosen my career path as a software engineer.
        </BioSection>
        <BioSection>
          <BioYear>October 28th, 2021</BioYear>
          Tried and got accepted to work full-time at BeanToo Studio.
        </BioSection>
      </Section>

      <Divider my={6} />

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Socials
        </Heading>
        <List>
          <ListItem>
            <Link href="https://youtube.com/scoopydevy" target="_blank">
              <Button
                variant="ghost"
                colorScheme="purple"
                leftIcon={<Icon as={IoLogoYoutube} />}
              >
                My Main Youtube
              </Button>
            </Link>
          </ListItem>

          <ListItem>
            <Link href="https://youtube.com/scupthedev" target="_blank">
              <Button
                variant="ghost"
                colorScheme="purple"
                leftIcon={<Icon as={IoLogoYoutube} />}
              >
                My Tutorials Channel
              </Button>
            </Link>
          </ListItem>

          <ListItem>
            <Link href="https://github.com/chandu-lanka" target="_blank">
              <Button
                variant="ghost"
                colorScheme="purple"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @chandu-lanka
              </Button>
            </Link>
          </ListItem>

          <ListItem>
            <Link href="https://twitter.com/scoopydevy" target="_blank">
              <Button
                variant="ghost"
                colorScheme="purple"
                leftIcon={<Icon as={IoLogoTwitter} />}
              >
                @scoopdevy
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>

      <Divider my={6} />

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I Love
        </Heading>
        <Paragraph>
          Rockets, Robotics, Programming, Basketball, Learning, Video-Games,
          Editing-Videos, Game-Development, Chess, Board-Games, Reading, Math,
          and Physics.
        </Paragraph>
      </Section>
    </Section>
  );
};

export default BioPage;
