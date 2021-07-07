import React from 'react'

import Helmet from 'react-helmet'

import AppComponent from '../components/component'
import projectStyles from '../style.module.css'
import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>Furniture Site</title>
        <meta property="og:title" content="Furniture Site" />
      </Helmet>
      <div className={styles.container01}>
        <div className={styles.container02}>
          <img alt="image" src="/playground_assets/logo-1000h.png" className={styles.image} />
          <span className={styles.text}>Store</span>
          <span className={styles.text1}>Gallery</span>
          <span className={styles.text2}>Contact</span>
          <span className={styles.text3}>Blog</span>
        </div>
        <div className={styles.container03}>
          <span className={styles.text4}>Brayden England</span>
          <img alt="image" src="/playground_assets/userimage-1000h.png" className={styles.image1} />
        </div>
      </div>
      <div className={styles.container04}>
        <div className={styles.container05}>
          <h1 className={styles.text5}>Welcome</h1>
          <div className={styles.container06}>
            <span className={styles.text6}>
              Porttitor Leo a diam sollicitudin tempor id eu nisl nunc. Egestas purus viverra
              accumsan in. Cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla.
              Cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla. Egestas purus
              viverra accumsan in. Cursus eget nunc scelerisque viverra mauris in aliquam sem
              fringilla. Cursus eget nunc scelerisque viverra mauris in.
            </span>
          </div>
          <button className={` ${projectStyles.thqButton} ${styles.button} `}>Learn More</button>
        </div>
        <div className={styles.container07}>
          <span className={styles.text7}>Shop</span>
        </div>
        <div className={styles.container08}>
          <div className={styles.container09}>
            <AppComponent
              heading1="Store"
              image_src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;h=1000"
            ></AppComponent>
            <AppComponent></AppComponent>
            <AppComponent
              heading1="Selections"
              image_src="https://images.unsplash.com/photo-1585264550248-1778be3b6368?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;h=1000"
            ></AppComponent>
          </div>
        </div>
      </div>
      <img
        alt="image"
        src="https://images.unsplash.com/photo-1567016432779-094069958ea5?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE4fHxmdXJuaXR1cmV8ZW58MHx8fHwxNjI1NDUwOTcz&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=1000"
        className={styles.image2}
      />
      <div className={styles.container10}>
        <img
          alt="image"
          src="/playground_assets/backgroundblock-1000w.png"
          className={styles.image3}
        />
      </div>
    </div>
  )
}

export default Home
