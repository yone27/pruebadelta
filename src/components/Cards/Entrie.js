import React from "react";
import { Card, Stack, CardBody, Heading, Image, Box } from "@chakra-ui/react";

const Entrie = ({ entrie, onOpen, getEntrieSelected }) => {
  let img = entrie.images["Poster Art"].url;

  return (
    <Box>
      <Card
        maxW="sm"
        key={entrie.title}
        className="custom-hovercard"
        onClick={() => {
          getEntrieSelected(entrie);
          onOpen();
        }}
      >
        <CardBody>
          <Image
            className="custom-card "
            src={img}
            alt={entrie.title}
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{entrie.title}</Heading>
          </Stack>
        </CardBody>
      </Card>
    </Box>
  );
};

export default Entrie;
