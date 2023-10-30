import styles from './Header.module.scss'

const Header = () => {
  return (
    <header>
        <div className={`container flex ${styles.container}`}>
            <div className={`flex ${styles.logo}`}>
                <div className="rounded-full bg-blue-600 h-12 w-12">
                    <p className="text-3xl justify-center items-center">AB</p>
                </div>
                <div className=" flex-col justify-start w-4/5 ">
                    <p className="justify-start">Hi, Blossom! Planning to go on leave?</p>
                    <sub className="justify-start my-2">
                        Dont forget to refer to the Leave Bucket and your leave dashboard before plotting
                    </sub>
                </div>
            </div>
            <h5 className="text-red-500 flex justify-end mx-12">My Leave Management Systems</h5>
        </div>
    </header>
  )
}

export default Header
