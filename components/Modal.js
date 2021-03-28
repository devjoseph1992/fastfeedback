import { useForm } from "react-hook-form";
import {
 Modal,
 ModalOverlay,
 ModalContent,
 ModalHeader,
 ModalFooter,
 ModalBody,
 ModalCloseButton,
 FormControl,
 FormLabel,
 Input,
 useToast,
 useDisclosure,
 Button,
} from "@chakra-ui/react";
import { createSite } from "@/lib/db";
import { useAuth } from "@/lib/auth";
import { mutate } from "swr";

const AddSiteModal = ({ children }) => {
 const toast = useToast();
 const auth = useAuth();
 const { isOpen, onOpen, onClose } = useDisclosure();
 const { register, handleSubmit } = useForm();

 const onSubmit = ({ name, url }) => {
  const newSite = {
   authorId: auth.user.uid,
   createdAt: new Date().toISOString(),
   name,
   url,
  };
  createSite(newSite);
  toast({
   title: "Success.",
   description: "We've created your account for you.",
   status: "success",
   duration: 5000,
   isClosable: true,
  });
  mutate("/api/sites", async (data) => {
   return { sites: [...data.sites, newSite] };
  }),
   false;
  onClose();
 };

 return (
  <>
   <Button
    onClick={onOpen}
    backgroundColor="gray.900"
    color="white"
    fontWeight="medium"
   >
    {children}
   </Button>
   <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent as="form" onSubmit={handleSubmit(onSubmit)}>
     <ModalHeader>Add Site</ModalHeader>
     <ModalCloseButton />
     <ModalBody pb={6}>
      <FormControl>
       <FormLabel>Name</FormLabel>
       <Input
        placeholder="My site"
        name="name"
        ref={register({ required: true })}
        id="site"
        type="text"
       />
      </FormControl>

      <FormControl mt={4}>
       <FormLabel>Link</FormLabel>
       <Input
        placeholder="https:website.com"
        name="url"
        ref={register({ required: true })}
        id="url"
        type="text"
       />
      </FormControl>
     </ModalBody>

     <ModalFooter>
      <Button onClick={onClose} mr={3}>
       Cancel
      </Button>
      <Button colorScheme="teal" type="submit">
       Create
      </Button>
     </ModalFooter>
    </ModalContent>
   </Modal>
  </>
 );
};
export default AddSiteModal;
