import styles from './BannerSearchForm_Options.module.css'

function BannerSearchForm_Options({ options, handleOption }) {
    return (
        <div className={styles["options"]}>
            <div className={styles["optionItem"]}>
                <span className={styles["optionText"]}>Adult</span>
                <div className={styles["optionCounter"]}>
                    <button type='button'
                        disabled={options.adult <= 1}
                        className={styles["optionCounterButton"]}
                        onClick={() => handleOption("adult", "d")}
                    >
                        -
                    </button>
                    <span className={styles["optionCounterNumber"]}>
                        {options.adult}
                    </span>
                    <button type='button'
                        className={styles["optionCounterButton"]}
                        onClick={() => handleOption("adult", "i")}
                    >
                        +
                    </button>
                </div>
            </div>
            <div className={styles["optionItem"]}>
                <span className={styles["optionText"]}>Children</span>
                <div className={styles["optionCounter"]}>
                    <button type='button'
                        disabled={options.children <= 0}
                        className={styles["optionCounterButton"]}
                        onClick={() => handleOption("children", "d")}
                    >
                        -
                    </button>
                    <span className={styles["optionCounterNumber"]}>
                        {options.children}
                    </span>
                    <button type='button'
                        className={styles["optionCounterButton"]}
                        onClick={() => handleOption("children", "i")}
                    >
                        +
                    </button>
                </div>
            </div>
            <div className={styles["optionItem"]}>
                <span className={styles["optionText"]}>Room</span>
                <div className={styles["optionCounter"]}>
                    <button type='button'
                        disabled={options.room <= 1}
                        className={styles["optionCounterButton"]}
                        onClick={() => handleOption("room", "d")}
                    >
                        -
                    </button>
                    <span className={styles["optionCounterNumber"]}>
                        {options.room}
                    </span>
                    <button type='button'
                        className={styles["optionCounterButton"]}
                        onClick={() => handleOption("room", "i")}
                    >
                        +
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BannerSearchForm_Options;