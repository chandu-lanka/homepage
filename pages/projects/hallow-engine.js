import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => {
  return (
    <Layout title="Hallow Engine">
      <Container>
        <Title>
          Hallow Engine<Badge mx="2px">2021</Badge>
        </Title>
        <P>An SDL-Based Cross-Platform Game Framework being developed in C++</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link
              href="https://github.com/hallow-engine/hallow-engine"
              target="_blank"
            >
              github.com/hallow-engine <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>

          <ListItem>
            <Meta>Platforms</Meta>
            <span>Windows / Mac / Linux</span>
          </ListItem>

          <ListItem>
            <Meta>Tools</Meta>
            <span>SDL2 / C++ / MinGW</span>
          </ListItem>

          <ListItem>
            <Meta>Socials</Meta>
            <Link href="https://discord.gg/d3YPb5Er59" target="_blank">
              Discord <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>

        <WorkImage
          src="/images/projects/Hallow Engine.png"
          alt="Hallow Engine Img"
        />
      </Container>
    </Layout>
  );
};

export default Work;
