import React from "react";
import { Navbar, Button, Link, Text, Card, Radio, useTheme, Image  } from "@nextui-org/react";
import { Box } from "./box";
import { MainLogo } from "./logo";

export default function TopNav() {
    return (
        <Box
            css={{
            maxW: "100%"
            }}
        >
            <Navbar isBordered>
            <Navbar.Brand>
                    <MainLogo/>
          <Text b color="inherit" hideIn="xs">
          </Text>
        </Navbar.Brand>
                <Navbar.Content enableCursorHighlight hideIn="xs">
                    <Navbar.Link isActive href="#">Home</Navbar.Link>  
                    <Navbar.Link href="#">Courses</Navbar.Link>
                </Navbar.Content>
            </Navbar>
            </Box>
    )
  }