import { useMediaQuery } from '@mantine/hooks';
import { Modal } from '@mantine/core';
import { Calendar } from '@/components/Calendar/Calendar';

type ModalProps = {
  onClose(): void;
};

export default function BookNowModal({ onClose }: ModalProps) {
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
        <Calendar />
      </Modal>
    </>
  );
}
