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
        <div className={styles.block_left}>
            <img src={aboutus} alt="About Us" className={styles.image}/>
            <div className={styles.main_info}>
                <h1 style={{fontSize: '28px', fontWeight: '500', textAlign: 'center'}}>Empowering Health Management with Innovation</h1>
                <p style={{textAlign: 'center'}}>Welcome to ZK Health Care, where cutting-edge technology meets personalized healthcare. Our mission is to revolutionize the way medical data is managed, analyzed, and utilized for better health outcomes. We are committed to providing a platform that bridges the gap between patients and doctors, making healthcare management simpler, more accurate, and incredibly efficient.</p>
            </div>
        </div>
        <div className={styles.block_left}>
            <div className={styles.main_info}>
                <h1 style={{fontSize: '28px', fontWeight: '500'}}>Our Approach</h1>
                <p style={{textAlign: 'center'}}>At ZK Health Care, we use advanced algorithms and data analytics to transform your medical data into actionable insights through comprehensive diagnostic reports. Our platform meticulously analyzes your health data to generate detailed reports that highlight key metrics and trends, enabling proactive management and timely interventions. By continuously monitoring for anomalies, our technology ensures early detection of potential issues, allowing you and your healthcare provider to address concerns before they escalate.</p>
            </div>
            <div >
                <img src={approach} alt="Our Approach" className={styles.image}/>
            </div>
        </div>
        <div className={styles.block_right}>
            <div className={styles.main_info}>
                <h1 style={{fontSize: '28px', fontWeight: '500'}}>User Friendly</h1>
                <p style={{textAlign: 'center'}}>ZK Health Care is designed to make managing health information simple and accessible for both patients and doctors. Patients benefit from an intuitive dashboard that allows easy tracking of health metrics, access to diagnostic reports, and alerts for any anomalies, helping them stay informed and in control. For doctors, the platform offers a comprehensive view of patient data through an easy-to-navigate interface, supporting better decision-making and personalized care by facilitating quick access to and interpretation of patient reports.</p>
            </div>
            <div >
                <img src={userfriendly} alt="User Friendly" className={styles.image}/>
            </div>
        </div>
        <div className={styles.block_left}>
            <div className={styles.main_info}>
                <h1 style={{fontSize: '28px', fontWeight: '500'}}>Our Commitment</h1>
                <p style={{textAlign: 'center'}}>At ZK Health Care, we are dedicated to enhancing healthcare management through innovation and user-centric design. Our team of experts continuously works to refine our technology and ensure that it meets the highest standards of accuracy and reliability. We believe that by empowering both patients and doctors with the right tools and information, we can make a significant impact on health outcomes and overall well-being.<br/>Thank you for choosing ZK Health Care. We are excited to be part of your health management journey and look forward to supporting you with our advanced, easy-to-use solutions.</p>
            </div>
            <div >
                <img src={commitment} alt="Our Commitment" className={styles.image}/>
            </div>
        </div>
        
    
    
    </div>
  )
}

export default about