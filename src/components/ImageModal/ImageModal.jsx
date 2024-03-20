import Modal from 'react-modal';
import styles from "../ImageModal/ImageModal.module.css";

const customStyles = {
    content: {
        top: '10%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -10%)', 
        maxHeight: '90vh', 
    },
};

Modal.setAppElement('#root');

export default function ImageModal({ isOpen, onClose, photo }) {
    const { urls, description, likes, created_at } = photo;
    
    const formattedDate = new Date(created_at).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
            <div>
                <img src={urls.regular} className={styles.modalImage}/>
                <p>{description}</p>
                <p>Likes: {likes}</p>
                <p>Created at: {formattedDate}</p> 
            </div>
        </Modal>
    );
}

