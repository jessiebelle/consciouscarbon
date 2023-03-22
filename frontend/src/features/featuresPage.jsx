import React from "react";
import ResponsiveAppBar from "../components/header";
import Footer from "../components/footer";
import styles from './features.module.css';
import Grid from '@mui/material/Grid';
import fitting from '../static/house/fitting.png';


const FeaturesPage = () => {
        return (
            <div style={{backgroundColor: "whitesmoke", padding: 3}}>
                    <ResponsiveAppBar pageTitle="Features"/>

                    <section className="features">
                        <h2 className={styles.title}>Features</h2>
                            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs={6}>
                        <ul className={styles.subtitle}>
                            <li>Personalized energy audit for your home</li>
                            <li>Recommendations for energy-efficient upgrades</li>
                            <li>Estimated cost savings for each upgrade</li>
                            <li>Reccommended CCF certified contractors for installation</li>
                            <li>Real-time energy usage monitoring</li>
                        </ul>
                        </Grid>
                        <Grid item xs={6}>
                            <img src={fitting} alt={'a house having solar panels installed'} className={styles.picture}/>
                        </Grid>
                            </Grid>
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