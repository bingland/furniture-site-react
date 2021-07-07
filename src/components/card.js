import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './card.module.css'

const Card = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.container1}>
        <img alt={props.image_alt} src={props.image_src} className={styles.image} />
        <div className={styles.container2}>
          <h1 className={styles.text}>{props.heading1}</h1>
          <span className={styles.text1}>{props.text}</span>
          <button className={` ${projectStyles.thqButton} ${styles.button} `}>
            <span className={styles.text2}>
              <span>Contact</span>
              <span></span>
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

Card.defaultProps = {
  text: 'Porttitor Leo a diam sollicitudin tempor id eu nisl nunc. Egestas purus viverra accumsan in. Cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla. Cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla.  Egestas purus viverra accumsan in. Cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla. Cursus eget nunc scelerisque viverra mauris in.  Egestas purus viverra accumsan in. Cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla. Cursus eget nunc scelerisque viverra mauris in.',
  image_src:
    'https://images.unsplash.com/photo-1524758631624-e2822e304c36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fGZ1cm5pdHVyZXxlbnwwfHx8fDE2MjU2MjExMjY&ixlib=rb-1.2.1&q=80&w=1000',
  heading1: 'Contact',
  image_alt: 'image',
}

Card.propTypes = {
  text: PropTypes.string,
  image_src: PropTypes.string,
  heading1: PropTypes.string,
  image_alt: PropTypes.string,
}

export default Card
