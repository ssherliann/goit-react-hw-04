import { TailSpin } from 'react-loader-spinner';
import styles from '../Loader/Loader.module.css';

export default function Loader() {
    return (
        <div className={styles.loaderContainer}>
            <TailSpin
                visible={true}
                height={80}
                width={80}
                color="#000000"
                ariaLabel="tail-spin-loading"
                radius={1}
                wrapperStyle={{}}
                wrapperClass={styles.loader} 
            />
        </div>
    );
}


