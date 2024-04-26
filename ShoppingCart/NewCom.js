import React, { Component } from "react";
import NewsItem from "./NewsItem";
class NewCom extends React.Component {
    state = {  } 
    render() { 
        return (
            
            <>
            <div className="container my-3">
                <br/>
                <br/>
    <h2 style={{textDecoration :"underline", color :"darkpink"}}>Monkeys - Top HeadLines</h2>
            <br/>


            <div className="row" >
                
                <div className="col-md-4" >

                     <h4  style={{color :"purple" }}><i>  <NewsItem   title = "Aj Tak"  discription = "More Description"/></i></h4>
                </div>


                <div className="col-md-4">

                     <h4  style={{color :"purple" }}><i>  <NewsItem  title = "Jeo News"  discription = "More Description"/></i></h4>
                </div>

                

                <div className="col-md-4">

                     <h4  style={{color :"purple" }}><i>  <NewsItem  title = "Sindh TV"  discription = "More Description"/></i></h4>
                </div>

        

        
         </div>
        
         </div>
           </>
        );
    }
}
 
export default NewCom;