import React,  { useState }from "react";
import ResponsiveAppBar from "../components/header";
import Footer from "../components/footer";
import {Box} from "@mui/material";
import Grid from '@mui/material/Grid';
import houseImage from '../static/house/solarhouse.jpg';
import styles from './home.module.css';
import avatar from '../static/testimonials/img.png';
import avatar2 from '../static/testimonials/img_1.png';
import bulb from '../static/house/bulb.png';
import turbine from '../static/house/turbine.png';
import hero from '../static/features/hero.png'


const Home = () => {
        const [email, setEmail] = useState('');

        function handleSubmit(event) {
            event.preventDefault();
            console.log(email); // Do something with the email value, like send it to a server
        }

        function handleInputChange(event) {
            setEmail(event.target.value);
        }

        return (
            <div style={{backgroundColor: "whitesmoke", padding: 3}}>
                <ResponsiveAppBar pageTitle="Home"/>
                <container class={styles.styles}>
                </container>
                <Box sx={{
                    flexGrow: 1,
                    backgroundColor: 'whitesmoke',
                    height: 'auto',
                    width: '100%',
                }}>
                          <img src={hero} alt={'some images of the features on iphone screens'} className={styles.hero}/>

    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs={6}>       <section className="hero">
                        <h1 className={styles.title}>Smart retrofitting made easy</h1>
                        <p className={styles.subtitle}>Make your home more energy-efficient with expert recommendations and real-time usage
                            monitoring.</p>
                        <div>
                            <form onSubmit={handleSubmit}>
                                <input type="email" id="email" name="email" required onChange={handleInputChange}/>
                                <button type={"submit"} className={styles.button}>Join the waitlist</button>
                            </form>
                        </div>

                    </section>
  </Grid>
  <Grid item xs={6}>
        <img src={houseImage} alt={'a house with solar panels on it'} className={styles.picture}/>
  </Grid>
  <Grid item xs={6}>
    <p className={styles.quote}> "I've been able to save on my monthly energy bills without sacrificing comfort! The recommendations were
        personalised to my home and budget, making it easy to implement.”</p>
      <img src={avatar} alt="Avatar" className={styles.avatar}/> <p className={styles.subtitle}>Mariana, recent homeowner</p>
  </Grid>
  <Grid item xs={6}>
    <p className={styles.title}>Energy savings and cost reduction</p>
      <p className={styles.subtitle}>We use government data combined with your goals and budget, to create an actionable
      plan which you can implement over time.  Save on energy costs, make your home more energy efficient and reduce
          your carbon footprint, all at once.</p>
  </Grid>
         <Grid item xs={6}>
             <img className={styles.picture} alt={"a person holding a lightbulb"} src={bulb}/>
         </Grid>
                 <Grid item xs={6}>
             <p className={styles.quote}> "The smart meter tech is a game-changer - I now understand where my energy is
                 going and can see the impact of my upgrades."</p>
                           <img src={avatar2} alt="Avatar" className={styles.avatar}/> <p className={styles.subtitle}>John, father of three</p>
         </Grid>
          <Grid item xs={6}>
    <p className={styles.title}>Real-time energy usage monitoring</p>
      <p className={styles.subtitle}>Our smart meter integration and monitoring technology provides real-time energy usage
          data, helping you measure the impact of new upgrades and adjust accordingly.</p>
  </Grid>
                 <Grid item xs={6}>
             <img className={styles.picture} alt={"a wind farm"} src={turbine}/>
         </Grid>
                  <Grid item xs={6}>
    <p className={styles.title}>Contribute to informing better solutions for others</p>
      <p className={styles.subtitle}>Opt in to using your findings to inform estimates for other people considering
          retrofitting. Become a part of the most comprehensive data for reducing the housing carbon footprint.</p>
                  </Grid>
</Grid>

                </Box>
                <Footer/>
            </div>
        );
    };


export default Home;