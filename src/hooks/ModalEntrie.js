import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Button,
  Image,
  Stack,
  Text,
  Divider,
  Heading,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { EntriesContext } from "../context/EntriesContext";
import { Card, CardBody, Badge } from "@chakra-ui/react";

const ModalEntrie = ({ isOpen, onClose }) => {
  const { entrieSelected } = useContext(EntriesContext);
  let img;
  if (entrieSelected.title) {
    img = entrieSelected.images["Poster Art"].url || null;
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <Card maxW="sm">
              <CardBody>
                <Image src={img} alt={entrieSelected.title} borderRadius="lg" />
                <Stack mt="6" spacing="3">
                  <Heading size="md">{entrieSelected.title}</Heading>
                  <Text>{entrieSelected.description}</Text>
                  <Stack direction="row">
                    <Badge colorScheme="green">
                      {entrieSelected.releaseYear}
                    </Badge>
                    <Badge colorScheme="purple">
                      {entrieSelected.programType}
                    </Badge>
                  </Stack>
                </Stack>
              </CardBody>
              <Divider />
            </Card>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalEntrie;
