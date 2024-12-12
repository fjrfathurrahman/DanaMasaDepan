import { Modal as ModalNext, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";

interface ModalProps {
  variant: 'Delete' | 'Update';
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onPress: () => void
  headerText?: string;
  bodyText?: string;
}

/**
 * * Modal dengan dua button, satu untuk membatalkan dan satu untuk melakukan suatu tindakan
 */
export const Modal = ({ isOpen, onOpenChange, headerText, bodyText, variant, onPress }: ModalProps): JSX.Element => {
  return (
    <ModalNext isOpen={isOpen} onOpenChange={onOpenChange} backdrop="blur">
      <ModalContent>
        {(onClose: () => void) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              {headerText ?? 'Lorem ipsum dolor sit amet.'}
            </ModalHeader>
            <ModalBody>
              <p>{bodyText ?? 'Modal Body'}</p>
            </ModalBody>
            <ModalFooter>
              <Button color="default" variant="light" onPress={() => onClose()}>Kembali</Button>
              <Button color={variant === 'Delete' ? 'danger' : 'primary'} onPress={() => {onPress(); onClose()}}>{variant}</Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </ModalNext>
  )
}

