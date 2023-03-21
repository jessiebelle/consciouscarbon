import React,  { useState }from "react";
import ResponsiveAppBar from "../components/header";
import Footer from "../components/footer";
import {Box} from "@mui/material";


const styles = {width: '100%', height: '100%', objectFit: 'cover', margin: 'auto'};

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
                <container class={styles}>
                </container>
                <Box sx={{
                    flexGrow: 1,
                    backgroundColor: 'whitesmoke',
                    height: 'auto',
                    width: '100%',
                }}>
                    <section className="hero">
                        <h1>Smart Retrofitting made easy.</h1>
                        <p>Make your home more energy-efficient with expert recommendations and real-time usage
                            monitoring.</p>
                        <div>
                            <form onSubmit={handleSubmit}>
                                <input type="email" id="email" name="email" required onChange={handleInputChange}/>
                                <button type={"submit"}>Join the waitlist</button>
                            </form>
                        </div>

                    </section>
                    <section className="features">
                        <h2>Features</h2>
                        <ul>
                            <li>Personalized energy audit for your home</li>
                            <li>Recommendations for energy-efficient upgrades</li>
                            <li>Estimated cost savings for each upgrade</li>
                            <li>Reccommended CCF certified contractors for installation</li>
                            <li>Real-time energy usage monitoring</li>
                        </ul>
                    </section>
                    <section className="cta">
                        <h3>Ready to Make Your Home More Eco-Friendly?</h3>
                        <p>Sign up now and get a free energy audit for your home.</p>
                        <button>Sign Up</button>
                    </section>
                </Box>
                <Footer/>
            </div>
        );
    };


export default Home;