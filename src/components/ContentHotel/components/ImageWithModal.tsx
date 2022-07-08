import React, { useState, useCallback } from 'react';
import Image from 'next/image';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ImageWithModal = ({ src, alt }) => {
  const [showModal, changeShowModal] = useState(false);

  const toggleModal = useCallback(() => {
    changeShowModal((u) => !u);
  }, [changeShowModal]);

  return (
    <>
      <Image src={src} alt={alt} width={500} height={400} />
      <Button color="danger" onClick={toggleModal}>
        Click Me
      </Button>
      <Modal toggle={toggleModal} isOpen={showModal}>
        <ModalHeader toggle={toggleModal}>Modal title</ModalHeader>
        <ModalBody>
          <Image src={src} alt={alt} width={500} height={400} />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggleModal}>
            Do Something
          </Button>{' '}
          <Button onClick={toggleModal}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default ImageWithModal;
