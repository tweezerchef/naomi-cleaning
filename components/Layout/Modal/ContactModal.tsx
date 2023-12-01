import { useMediaQuery } from '@mantine/hooks';
import { Modal } from '@mantine/core';

type ModalProps = {
  onClose(): void;
};
export default function ContactModal({ onClose }: ModalProps) {
  const isMobile = useMediaQuery('(max-width: 50em)');

  return (
    <>
      <Modal
        opened
        onClose={onClose}
        title="This is a fullscreen modal"
        fullScreen={isMobile}
        transitionProps={{ transition: 'fade', duration: 200 }}
      >
        The Modal will be full screen only on mobile Contact
      </Modal>
    </>
  );
}
