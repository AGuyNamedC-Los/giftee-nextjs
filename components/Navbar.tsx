import styles from '../styles/Navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Image src="/transparent-giftee_logo.png" alt="giftee logo" width="100" height="100px"></Image>
            </div>
            <div className={styles.links}>
                <div className={styles.link}>
                    <Link href="/search"><a>Search</a></Link>
                    <hr></hr>
                </div>
                <div className={styles.link}>
                    <Link href="/login"><a>Login</a></Link>
                    <hr></hr>
                </div>
                <div className={styles.link}>
                    <Link href="/signUp"><a>Sign up</a></Link>
                    <hr></hr>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;