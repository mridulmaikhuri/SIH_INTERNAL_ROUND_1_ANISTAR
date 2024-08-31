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
        <img src={aboutus} alt="About Us" style={{height: '500px'}}/>
        <div className={styles.block_center}>
            <h1 style={{fontSize: '28px', fontWeight: '500'}}>Empowering Health Management with Innovation</h1>
            <p style={{textAlign: 'center'}}>Welcome to ZK Health Care, where cutting-edge technology meets personalized healthcare. Our mission is to revolutionize the way medical data is managed, analyzed, and utilized for better health outcomes. We are committed to providing a platform that bridges the gap between patients and doctors, making healthcare management simpler, more accurate, and incredibly efficient.</p>
        </div>
        <div className={styles.block_left}>
            <div className={styles.main_info}>
                <h1 style={{fontSize: '28px', fontWeight: '500'}}>Our Approach</h1>
                <p style={{textAlign: 'center'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe eveniet, expedita reprehenderit, laudantium illum, dolorem autem tenetur laboriosam rem maxime quos adipisci deserunt optio sed aliquam soluta quibusdam vero quisquam!</p>
            </div>
            <div >
                <img src={approach} alt="Our Approach" className={styles.image}/>
            </div>
        </div>
        <div className={styles.block_right}>
            <div className={styles.main_info}>
                <h1 style={{fontSize: '28px', fontWeight: '500'}}>User Friendly</h1>
                <p style={{textAlign: 'center'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe eveniet, expedita reprehenderit, laudantium illum, dolorem autem tenetur laboriosam rem maxime quos adipisci deserunt optio sed aliquam soluta quibusdam vero quisquam!</p>
            </div>
            <div >
                <img src={userfriendly} alt="User Friendly" className={styles.image}/>
            </div>
        </div>
        <div className={styles.block_left}>
            <div className={styles.main_info}>
                <h1 style={{fontSize: '28px', fontWeight: '500'}}>Our Commitment</h1>
                <p style={{textAlign: 'center'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe eveniet, expedita reprehenderit, laudantium illum, dolorem autem tenetur laboriosam rem maxime quos adipisci deserunt optio sed aliquam soluta quibusdam vero quisquam!</p>
            </div>
            <div >
                <img src={commitment} alt="Our Commitment" className={styles.image}/>
            </div>
        </div>
        
    
    
    </div>
  )
}

export default about