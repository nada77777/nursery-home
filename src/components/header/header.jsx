import React from 'react';
import styles from './header.module.css';
import { TbMoodBoy } from 'react-icons/tb';
import { AiOutlineOrderedList, AiFillStar } from 'react-icons/ai';
import { MdDarkMode } from 'react-icons/md';
const Header = (props) => {
    return (
        <header className={styles.header}>
            <h1 className={styles.headerTitle}><TbMoodBoy />어린이집</h1>
            <ul className={styles.headerItems}>
                <li><AiOutlineOrderedList />어린이집 리스트</li>
                <li><AiFillStar />북마크 리스트</li>
            </ul>
            <button className={styles.darkMode}><MdDarkMode /></button>
        </header>
    );
};

export default Header;



