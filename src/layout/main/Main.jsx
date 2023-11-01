import styles from './Main.module.scss'
const Main = () => {
  return (
    <section>
        <div className={`container`}>
            <div className={styles.panel}>
                <div className={styles.dashboard}>
                    <div className={styles[`my-leave-dashboard`]}>
                        <h5>My Leave Dashboard</h5>
                        <div>
                            <div className={styles['leave-categories']}>
                            <div className={`${styles['leave-category']} ${styles['leave-entitlement']}`}>
                                    <h5>25</h5>
                                    <p>Leave Entitlement</p>
                                </div>
                                <div className={`${styles['leave-category']} ${styles['leave-entitlement']}`}>
                                    <h5>4%</h5>
                                    <p>Leave Utilization</p>
                                </div>
                                <div className={`${styles['leave-category']} ${styles['leave-remaining']}`}>
                                    <h5>20.5</h5>
                                    <p>Leaves Remaining</p>
                                </div>
                                <div className={styles['leave-category']}>
                                    <h5>20.5</h5>
                                    <p>Total Leaves Taken</p>
                                </div>
                                <div className={styles['leave-category']}>
                                    <h5>20.5</h5>
                                    <p>Annual Leave</p>
                                </div>
                                <div className={styles['leave-category']}>
                                    <h5>20.5</h5>
                                    <p>Holiday Leave Taken</p>
                                </div>
                                <div className={styles['leave-category']}>
                                    <h5>20.5</h5>
                                    <p>Emergency Leave</p>
                                </div>
                                <div className={styles['leave-category']}>
                                    <h5>20.5</h5>
                                    <p>Other Leaves</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className={styles.bucket}>

                    
                    <div className={styles[`leave-bucket`]}>
                        <h5>Leave Bucket - Manila</h5>
                        <div>
                            <div className={styles['bucket-categories']}>
                                <div className={styles['leave-category']}>
                                    <h5>000.0</h5>
                                    <p>This Week</p>
                                </div>
                                <div className={styles['leave-category']}>
                                    <h5>000.0</h5>
                                    <p>This Month</p>
                                </div>
                                <div className={styles['leave-category']}>
                                    <h5>000.0</h5>
                                    <p>This Year</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles[`leave-bucket`]}>
                        <h5>Leave Bucket - Department Level</h5>
                        <div>
                            <div className={styles['bucket-categories']}>
                            <div className={`${styles['leave-category']} ${styles['bucket-dept']}`}>
                                    <h5>000.0</h5>
                                    <p>This Week</p>
                                </div>
                                <div className={`${styles['leave-category']} ${styles['bucket-dept']}`}>
                                    <h5>000.0</h5>
                                    <p>This Month</p>
                                </div>
                                <div className={`${styles['leave-category']} ${styles['bucket-dept']}`}>
                                    <h5>000.0</h5>
                                    <p>This Year</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles[`leave-bucket`]}>
                        <h5>Leave Bucket - Team Level</h5>
                        <div>
                            <div className={styles['bucket-categories']}>
                            <div className={`${styles['leave-category']} ${styles['bucket-team']}`}>
                                    <h5>000.0</h5>
                                    <p>This Week</p>
                                </div>
                                <div className={`${styles['leave-category']} ${styles['bucket-team']}`}>
                                    <h5>000.0</h5>
                                    <p>This Month</p>
                                </div>
                                <div className={`${styles['leave-category']} ${styles['bucket-team']}`}>
                                    <h5>000.0</h5>
                                    <p>This Year</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
{/* 
                    <div className={styles[`leave-bucket-manila`]}>
                        <div className="">
                            <h5>Leave Bucket - Manila</h5>
                            <div className={styles['leave-categories']}>
                                <div className={`${styles['bucket-category']} ${styles['leave-entitlement']}`}>
                                    <h5>000.0</h5>
                                    <p>This Week</p>
                                </div>
                                <div className={`${styles['bucket-category']} ${styles['leave-entitlement']}`}>
                                    <h5>000.0</h5>
                                    <p>This Month</p>
                                </div>
                                <div className={`${styles['bucket-category']} ${styles['leave-entitlement']}`}>
                                    <h5>000.0</h5>
                                    <p>This Year</p>
                                </div>
                            </div>
                        </div>

                        <div className="">
                            <h5>Leave Bucket - Manila</h5>
                            <div className={styles['leave-categories']}>
                                <div className={`${styles['bucket-category']} ${styles['leave-entitlement']}`}>
                                    <h5>000.0</h5>
                                    <p>This Week</p>
                                </div>
                                <div className={`${styles['bucket-category']} ${styles['leave-entitlement']}`}>
                                    <h5>000.0</h5>
                                    <p>This Month</p>
                                </div>
                                <div className={`${styles['bucket-category']} ${styles['leave-entitlement']}`}>
                                    <h5>000.0</h5>
                                    <p>This Year</p>
                                </div>
                            </div>
                        </div>

                        <div className="">
                            <h5>Leave Bucket - Manila</h5>
                            <div className={styles['leave-categories']}>
                                <div className={`${styles['bucket-category']} ${styles['leave-entitlement']}`}>
                                    <h5>000.0</h5>
                                    <p>This Week</p>
                                </div>
                                <div className={`${styles['bucket-category']} ${styles['leave-entitlement']}`}>
                                    <h5>000.0</h5>
                                    <p>This Month</p>
                                </div>
                                <div className={`${styles['bucket-category']} ${styles['leave-entitlement']}`}>
                                    <h5>000.0</h5>
                                    <p>This Year</p>
                                </div>
                            </div>
                        </div>





                    </div> */}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Main
