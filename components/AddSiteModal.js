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

const AddSiteModal = () => {
 const toast = useToast();
 const auth = useAuth();
 const { isOpen, onOpen, onClose } = useDisclosure();

 console.log(auth);
 const { register, handleSubmit } = useForm();
 const onSubmit = ({ site, url }) => {
  createSite({
   authorId: auth.user.uid,
   createdAt: new Date().toISOString(),
   site,
   url,
  });
  toast({
   title: "Success.",
   description: "We've created your account for you.",
   status: "success",
   duration: 5000,
   isClosable: true,
  });
  onClose();
 };

 return (
  <>
   <Button onClick={onOpen} variant="solid" size="md" p={8} maxW="200px">
    Add your first site
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
        name="site"
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
