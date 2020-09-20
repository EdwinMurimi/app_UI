import React from 'react';
import Button from '@material-ui/core/button';

export default function FeedDetails() {

    return (
        <div style={{ display: "flex", paddingTop: "10vh", height: "90vh", }}>
            <div style={{ width: "50%",
        '@media (max-width: 768px)': {
            height: "50%",
            width: "100%",
        } }}>
                <img src="../picture.svg" alt="here" style={{ width: "80%",
        height: "70%",
        margin: "10% 15%",
        '@media (max-width: 768px)': {    
            height:"30%"
        } }}/>
            </div>
            <div style={{ width: "50%",
        display: "flex",
        flexDirection: "column",
        '@media (max-width: 768px)': {
            height: "50%",
            width: "100%",
        }, }}>
                <div style={{ width: "85%",
        marginLeft: "15%",
        height: "auto", }}>
                    <h1 style={{ fontSize: "30px", color: "#9A9292", marginTop: "10%", }}>Bucky Roberts</h1>
                    <h2>Target: <span style={{ color: "#9A9292" }}>Ksh 20, 000</span></h2>
                    <hr style={{ width: "70%", marginTop: "30px", marginRight: "30%" }}/>
                    <p style={{ width: "55%", color: "#9A9292", fontSize: "20px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sagittis sollicitudin vestibulum. Nunc tempor mattis mollis.</p>
                    <Button style={{ fontFamily: "Syne", background: "#EE3D0F", color: "white", fontWeight: "500" }} variant="contained" disabled>
                        Donate to:
                    </Button>
                    <h1 style={{ fontSize: "15px", color: "#9A9292", marginTop: "2%", fontWeight: "400"}}>0712 345 678</h1>
                </div>
            </div>
        </div>
    );
}