import styles from '../ImageCart/ImageCart.module.css';

export default function ImageCart({ photo, onImageClick }) {
    const { urls } = photo; 

    return (
        <div>
            <div onClick={() => onImageClick(urls.small)}>
                <img className={styles.image} src={urls.small} alt="" />
            </div>
        </div>
    );
}

