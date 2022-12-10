import React from 'react';
import styles from './banner.module.css';
import { SlNote } from 'react-icons/sl';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
const Banner = (props) => {
    return (
        <section className={styles.banner}>
            <div className={styles.innerTop}>
                <h1 className={styles.innerTopTitle}>
                    <span className={styles.note}>
                        <SlNote />
                    </span>
                    어린이집 리스트
                </h1>
                <p className={styles.viewMore}>전체보기
                    <span className={styles.arrowRight}>
                        <BsFillArrowRightCircleFill />
                    </span>
                </p>
            </div>
            <div className={styles.innerBottom}>
                <h1 className={styles.innerBottomTitle}>지금 우리 아이가 다닐 어린이집은?</h1>
                <p className={styles.innerBottomDescription}>편하게 찾아보세요!</p>
            </div>
        </section>

    );
};

export default Banner;