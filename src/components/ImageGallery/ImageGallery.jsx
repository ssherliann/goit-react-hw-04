import styles from "../ImageGallery/ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";
import { useModal } from "../../App";

export default function ImageGallery({ photos }) {
    const { openModal } = useModal();

    return (
        <div className={styles.galleryContainer}> 
            <ul className={styles.gallery}>
            {photos.map((photo, index) => (
                <li key={index}>
                <ImageCard photo={photo} onImageClick={() => openModal(photo)} />
                </li>
            ))}
            </ul>
        </div>
    );
}


