import styles from './Header.module.css'
import { BsCalendar3 } from 'react-icons/bs'

const Header = () => {
  return (
    <header>
        <div className={`container ${styles.container}`}>
            <div className={styles.banner}>
                <div className={styles.logo}>
                    <p className={styles.logoText}>AB</p>
                </div>

                <div className={styles['banner-msg']}>
                    <p className={styles.p}>Hi, Blossom! Planning to go on leave?</p>
                    <sub>
                        Dont forget to refer to the Leave Bucket and your leave dashboard before plotting
                    </sub>
                </div>
            </div>

            <div className={styles.h5}>
                <h5><BsCalendar3 size={22} className={styles['calendar-logo']}/>My Leave</h5>
                <h5>Management Systems</h5>
            </div>

        </div>
    </header>
  )
}

export default Header
