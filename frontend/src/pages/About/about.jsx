import React from 'react'
import styles from './styles.module.css'

import commitment from '../../../public/commitment.jpg'
import aboutus from '../../../public/aboutus.jpg'
import approach from '../../../public/ourapproach.jpg'
import userfriendly from '../../../public/userfriendly.jpg'

const about = () => {
  return (
    <div className={styles.container}>
        <div className={styles.main_heading}>
            About Us
        </div>
        <img src={aboutus} alt="About Us" />
        <div className={styles.block_center}>
            <h1>Empowering Health Management with Innovation</h1>
            <p>Welcome to ZK Health Care, where cutting-edge technology meets personalized healthcare. Our mission is to revolutionize the way medical data is managed, analyzed, and utilized for better health outcomes. We are committed to providing a platform that bridges the gap between patients and doctors, making healthcare management simpler, more accurate, and incredibly efficient.</p>
        </div>
        <div className={styles.block_left}>
            <div className={styles.main_info}>
                <h1>Our Approach</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe eveniet, expedita reprehenderit, laudantium illum, dolorem autem tenetur laboriosam rem maxime quos adipisci deserunt optio sed aliquam soluta quibusdam vero quisquam!</p>
            </div>
            <div className={styles.image}>
                <img src={approach} alt="Our Approach" />
            </div>
        </div>
        <div className={styles.block_left}>
            <div className={styles.main_info}>
                <h1>User Friendly</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe eveniet, expedita reprehenderit, laudantium illum, dolorem autem tenetur laboriosam rem maxime quos adipisci deserunt optio sed aliquam soluta quibusdam vero quisquam!</p>
            </div>
            <div className={styles.image}>
                <img src={userfriendly} alt="User Friendly" />
            </div>
        </div>
        <div className={styles.block_left}>
            <div className={styles.main_info}>
                <h1>Our Commitment</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe eveniet, expedita reprehenderit, laudantium illum, dolorem autem tenetur laboriosam rem maxime quos adipisci deserunt optio sed aliquam soluta quibusdam vero quisquam!</p>
            </div>
            <div className={styles.image}>
                <img src={commitment} alt="Our Commitment" />
            </div>
        </div>
        
    
    
    </div>
  )
}

export default about