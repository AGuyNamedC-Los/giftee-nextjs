import styles from '../styles/Navbar.module.css';
import Image from 'next/image';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Image src="/transparent-giftee_logo.png" alt="giftee logo" width="100" height="100px"></Image>
            </div>
            <div className={styles.links}>
                <div className={styles.link}>
                    <a>SEARCH</a>
                    <hr></hr>
                </div>
                <div className={styles.link}>
                    <a>LOGIN</a>
                    <hr></hr>
                </div>
                <div className={styles.link}>
                    <a>SIGN UP</a>
                    <hr></hr>
                </div>
                

            </div>
        </nav>
    );
}

export default Navbar;