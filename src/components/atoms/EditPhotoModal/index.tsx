import { Modal } from "@/components/atoms/Modal";
import {
  ButtonsContainer,
  EditPhotoContainer,
  StyledButton,
  StyledInfo,
  StyledHR,
  NextButton,
} from "./styled";
import PhotoButtom from "../PhotoButtom";
import { Camera, ImagePlus, Pencil } from "lucide-react";
import { useState } from "react";

interface EditPhotoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddPhoto?: () => void;
  onEditPhoto?: () => void;
  onTakePhoto?: () => void;
  hasSelectedPhoto?: boolean;
}

export default function EditPhotoModal({
  isOpen,
  onAddPhoto,
  onClose,
  onEditPhoto,
  onTakePhoto,
  hasSelectedPhoto,
}: EditPhotoModalProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  const handleAddPhoto = () => {
    console.log('aqui')
  }
  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      height={388}
      width={387}
      bgColor="#FFF"
    >
      <EditPhotoContainer>
        <StyledInfo>Insira sua foto</StyledInfo>
        <PhotoButtom/>
        <ButtonsContainer>
          <StyledButton>
            <Pencil className="icon" />
            Editar
          </StyledButton>
          <StyledButton>
            <Camera className="icon" />
            Câmera
          </StyledButton>
          <StyledButton onClick={handleAddPhoto}>
            <ImagePlus className="icon" />
            Adicionar
          </StyledButton>
        </ButtonsContainer>
        <StyledHR />
        <NextButton>Salvar</NextButton>
      </EditPhotoContainer>
    </Modal>
  );
}
