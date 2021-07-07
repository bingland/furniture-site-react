import React from 'react'

import Helmet from 'react-helmet'

import Navbar from '../components/navbar'
import Card from '../components/card'
import projectStyles from '../style.module.css'
import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>Furniture Site</title>
        <meta property="og:title" content="Furniture Site" />
      </Helmet>
      <Navbar></Navbar>
      <div className={styles.container1}>
        <div className={styles.container2}>
          <h1 className={styles.text}>Welcome</h1>
          <div className={styles.container3}>
            <span className={styles.text1}>
              Porttitor Leo a diam sollicitudin tempor id eu nisl nunc. Egestas purus viverra
              accumsan in. Cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla.
              Cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla. Egestas purus
              viverra accumsan in. Cursus eget nunc scelerisque viverra mauris in aliquam sem
              fringilla. Cursus eget nunc scelerisque viverra mauris in.
            </span>
          </div>
          <button className={` ${projectStyles.thqButton} ${styles.button} `}>Learn More</button>
        </div>
        <div className={styles.container4}>
          <span className={styles.text2}>Shop</span>
        </div>
        <div className={styles.container5}>
          <div className={styles.container6}>
            <Card
              heading1="Store"
              image_src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;h=1000"
            ></Card>
            <Card></Card>
            <Card
              heading1="Selections"
              image_src="https://images.unsplash.com/photo-1585264550248-1778be3b6368?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;h=1000"
            ></Card>
          </div>
        </div>
      </div>
      <img
        alt="image"
        src="https://images.unsplash.com/photo-1567016432779-094069958ea5?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE4fHxmdXJuaXR1cmV8ZW58MHx8fHwxNjI1NDUwOTcz&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=1000"
        className={styles.image}
      />
      <div className={styles.container7}>
        <img
          alt="image"
          src="/playground_assets/backgroundblock-1000w.png"
          className={styles.image1}
        />
      </div>
    </div>
  )
}

export default Home
