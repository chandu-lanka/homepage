import { Heading, Box, Image } from "@chakra-ui/react";
import { BioSection, BioYear } from "../components/bio";
import Section from "../components/section";
import Paragraph from "../components/paragraph";

const BioPage = () => {
  return (
    <Section>
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
            src="/images/scoop.jpg"
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
          <BioYear>2018</BioYear>
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

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          I Love
        </Heading>
        <Paragraph>
          Art, Programming, Basketball, Learning, Video-Games, Editing-Videos,
          Game-Development, Chess, Board-Games, Reading, Math, and Physics
        </Paragraph>
      </Section>
    </Section>
  );
};

export default BioPage;
