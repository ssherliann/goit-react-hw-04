import styles from './ImageCard.module.css';

export default function ImageCard({ photo, onImageClick }) {
    const urls = photo ? photo.urls : null;

    return (
        <div>
            <div onClick={() => onImageClick(urls.small)}>
                {urls && <img className={styles.image} src={urls.small} alt="" />}
            </div>
        </div>
    );
}


