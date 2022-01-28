import React from "react";
import { Button } from "./styles/Button.styled";
import { Container } from "./styles/Container.styled";
import { Flex } from "./styles/Flex.styled";
import { Logo, Nav, StyledHeader } from "./styles/Header.styled";

function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="./images/logo.svg" alt="logo image" />
          <Button>Join for Free</Button>
        </Nav>
        <Flex>
          <div>
            <h1>Lets make a commuity to spread love</h1>
            <p>
              We can spread love around on social media, by showing kindness to
              someone, by checking up on our friends, or simply by being our
              best self. We can share love quotes with people close to us, The
              world—often filled with hatred—could do with people spreading more
              love around. Without love, our lives can often feel empty.
            </p>
            <Button bf="#ff0099" color="#fff">
              Try it for free
            </Button>
          </div>
        </Flex>
      </Container>
    </StyledHeader>
  );
}

export default Header;
