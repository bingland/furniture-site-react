import React from 'react'

import PropTypes from 'prop-types'

import styles from './navbar.module.css'

const Navbar = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.container1}>
        <img alt={props.image_alt} src={props.image_src} className={styles.image} />
        <span className={styles.text}>{props.text}</span>
        <span className={styles.text1}>{props.text1}</span>
        <span className={styles.text2}>{props.text2}</span>
        <span className={styles.text3}>{props.text3}</span>
      </div>
      <div className={styles.container2}>
        <span className={styles.text4}>{props.text4}</span>
        <img alt={props.image_alt1} src={props.image_src1} className={styles.image1} />
      </div>
    </div>
  )
}

Navbar.defaultProps = {
  image_src: '/playground_assets/logo-1000h.png',
  image_alt: 'image',
  text: 'Store',
  text1: 'Gallery',
  text2: 'Contact',
  text3: 'Blog',
  text4: 'Brayden England',
  image_src1: '/playground_assets/userimage-1000h.png',
  image_alt1: 'image',
}

Navbar.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  text4: PropTypes.string,
  image_src1: PropTypes.string,
  image_alt1: PropTypes.string,
}

export default Navbar
