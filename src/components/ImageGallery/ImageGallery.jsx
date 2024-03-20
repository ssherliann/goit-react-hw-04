import styles from "../ImageGallery/ImageGallery.module.css";
import ImageCart from "../ImageCart/ImageCart";
import { useState } from "react";
import ImageModal from "../ImageModal/ImageModal";

export default function ImageGallery({ photos }) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedPhoto, setSelectedPhoto] = useState(null);

    const openModal = (photo) => {
        setSelectedPhoto(photo);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div className={styles.galleryContainer}> 
            <ul className={styles.gallery}>
                {photos.map((photo, index) => (
                    <li key={index}>
                        <ImageCart photo={photo} onImageClick={() => openModal(photo)} />
                    </li>
                ))}
            </ul>
            {selectedPhoto && (
                <ImageModal isOpen={modalIsOpen} onClose={closeModal} photo={selectedPhoto} />
            )}
        </div>
    );
}


