import React, { Component } from "react";
import "./GaleryStyle.css"

import { Link } from "react-router-dom";
import axios from "axios";
class Galery extends Component {
    state={
        vid:"https://www.youtube.com/embed/jzeV61DyEDk",
        OurMenu:[],
        liked: false
    }



    componentDidMount = () => {
      
      this.getMenu();
    };
  
    getMenu = () => {
      axios.get("/ProjectRest/menu/").then(res =>
        this.setState({
          OurMenu: res.data
        })
      );
    };
    handleClick=()=> {
      this.setState({ liked: !this.state.liked});
    }
  render() {
    let buttonText = this.state.liked? 'Unlike': 'Like';
    return (
      <div>
        <div>

          <section className="Our-galery">
          
              <img  className="image-hamberger" src="https://previews.123rf.com/images/yvdavyd/yvdavyd1505/yvdavyd150500656/39468744-hamburger-isol%C3%A9-sur-fond-blanc.jpg" alt=""/>
              <Link to="/">
              <h1>Menu ← Only Quality Food</h1>
          </Link>
          <div className="team">
          <h4 className="phrase">
 We have a team approach to serve customers and offer thousands of products at competitive prices. We are the largest supplier of local products on the island.</h4>
 </div></section>
        
          <div className="section">
          <h2 className="All"> View All</h2>
          <h2 className="BreakFast">BreakFast</h2>
          <h2 className="Lunch">Lunch</h2>
          <h2 className="dinner">Dinner</h2>
          

          </div>
       
       <div > 
           <iframe className="vidéo"src="https://www.youtube.com/embed/XwHurP9RH-s"></iframe>
       </div>
         
       <div className="image-Menu">
{this.state.OurMenu.map((el,key)=>(
  <div  >
      
   <img src={el.img} className="plat" alt="..." />
<h1>{el.plat}</h1>
   <button onClick={this.handleClick} className="like">
        <i className="fa fa-heart"></i>&nbsp;
        {buttonText}</button>
   
   </div>
))}
</div>
      </div>
      </div>
    );
  }
}
export default Galery;




{/* <div className="galery">
          <div >
          
            <img className="plat"
              src="https://www.theforkmanager.com/wp-content/uploads/2018/08/la-fourchette-the-fork-restaurant-bio-2.jpg"
              alt=""
            />
            
            <button className="btn btn-outline-success button">plus de détails
       
            </button>
          
          </div>
          <div >
            <img className="plat"
              src="http://storage-cube.quebecormedia.com/v1/cdp_prod/coup_de_pouce/f5f55e9d79f6edda9c81e6d70844e1dd634775ba/Sandwichs-poulet-thaie.jpg"
              alt=""
            />
            <button className="btn btn-outline-success button">plus de détails</button>
          </div>
          <div >
            <img className="plat"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQzkTsSBH3XIdzoBtYUduRdg_riCAlTPbX6ZBOV-o91Ait85NTF"
              alt=""
            />
            <button className="btn btn-outline-success button">plus de détails</button>
          </div> */}