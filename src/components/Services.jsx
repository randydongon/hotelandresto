import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail, FaHiking , FaShuttleVan,FaBeer} from 'react-icons/fa'

export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title: "Free CockTail",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur",
                color:'#36EEE0'
            },
            {
                icon:<FaHiking/>,
                title: "Endless Hiking",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur",
                color:'#FC4F4F'
            },
            {
                icon:<FaShuttleVan/>,
                title: "Free Shuttle",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur",
                color:'#FFC900'
            },
            {
                icon:<FaBeer/>,
                title: "Unlimited Beer",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur",
                color:'#F76E11'
            },

        ]
    }
    render() {
        return (
            <div className="container-fluid services">
             <Title title="Services"  />
                <div className="row">
                   {this.state.services.map((item, index) => {
                      return(
                        <div className="col-md-4 col-lg-3 col-12 mx-auto my-3" key={index}>
                            <div className="card shadow-lg border-0 p-4">
                                <article className="service">
                                <span style={{color:item.color}}>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                                </article>              
                           </div>
                        </div>
                      )
                   })}
                </div>
            </div>
        )
    }
}