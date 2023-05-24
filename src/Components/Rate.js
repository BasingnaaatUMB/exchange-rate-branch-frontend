import React, { useState, useEffect} from "react";
import axios from 'axios';
import Carousel2 from "./Carousel2";

function Rate(){
    const [umbRates, setUmbRates] = useState()
    const [intRates, setIntRates] = useState()

    useEffect(() => {
        axios.get('http://localhost:5555/umbrate')
            .then((res) => {
                setUmbRates(res.data)
            })
            .catch(err => {
                console.log(err)
            })

        axios.get('http://localhost:5555/intrate')
            .then((res) => {
                setIntRates(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    })

    return(
        <div className="container_cust">
            <div className="video">
                <div className="slide-images">
                    <div className="img-container">
                        <Carousel2></Carousel2>
                    </div>
                </div>
            </div>
            <div className="content_cust">
                <h1>ALL RATES</h1>
                <div class="table">
                    <h2>UMB RATES</h2>
                    <table>
                        <tr>
                            <th>Currency</th>
                            <th>Bid</th>
                            <th>Offer</th> 
                        </tr>
                        {umbRates?.map((val, key) => {
                                return(
                                    <tr>
                                        <th>
                                            <img src={val.flags} alt=""></img>
                                            <span>{val.currency}</span>
                                        </th>
                                        <th>
                                            <span>{val.bid}</span>
                                        </th>
                                        <th>
                                            <span>{val.offer}</span>
                                        </th>
                                    </tr>
                                    
                                )
                            })}
                    </table>
                </div>
                <div className="table">
                    <h2>INTERNATIONAL</h2>
                    <table>
                        <tr>
                            <th>Currency</th>
                            <th>Bid</th>
                            <th>Offer</th>
                        </tr>
                        {intRates?.map((val, key) => {
                                return(
                                    <tr>
                                        <th>
                                            <span>{val.currency}</span>
                                        </th>
                                        <th>
                                            <span>{val.bid}</span>
                                        </th>
                                        <th>
                                            <span>{val.offer}</span>
                                        </th>
                                    </tr>
                                    
                                )
                            })}
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Rate;