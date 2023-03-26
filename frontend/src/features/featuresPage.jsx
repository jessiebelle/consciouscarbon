import React from "react";
import ResponsiveAppBar from "../components/header";
import Footer from "../components/footer";
import styles from './features.module.css';
import Grid from '@mui/material/Grid';
import fitting from '../static/house/fitting.png';
import personalisation from '../static/features/personalisation.png';
import appliances from '../static/features/appliances.png';
import impactfulfixes from '../static/features/impactfulfixes.png';
import chatbot from '../static/features/chatbot.png';


const FeaturesPage = () => {
        return (
            <div style={{backgroundColor: "whitesmoke", padding: 3}}>
                    <ResponsiveAppBar pageTitle="Features"/>

                    <section className="features">
                        <h2 className={styles.title}>Features</h2>
                            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs={6}>
                            <p className={styles.subtitle}>Take a look at the features designed to help you retrofit your home</p>

                        </Grid>
                        <Grid item xs={6}>
                            <img src={fitting} alt={'a house having solar panels installed'} className={styles.picture}/>
                        </Grid>
                            </Grid>
                                                <h2 className={styles.title}>Personalised retrofit plan</h2>
                        <img src={personalisation} alt={'an image of our app showing how it personalises suggestions'} className={styles.hero}/>
                                                <h2 className={styles.title}>Appliance upgrade recommendations</h2>
                        <img src={appliances} alt={'an image of our app showing how it personalises suggestions'} className={styles.hero}/>
                                                <h2 className={styles.title}>Prioritisation based on impact</h2>
                        <img src={impactfulfixes} alt={'an image of our app showing how it personalises suggestions'} className={styles.hero}/>
                   <h2 className={styles.title}>Tailored advice based on your data</h2>
                        <img src={chatbot} alt={'our chatbot recommending fixes'} className={styles.hero}/>
                    </section>
                    <section className="cta">
                        <h3>Ready to Make Your Home More Eco-Friendly?</h3>
                        <p>Sign up now and get a free energy audit for your home.</p>
                        <button>Sign Up</button>
                    </section>
                            <Footer/>
            </div>


                    );
                    };
                    export default FeaturesPage;