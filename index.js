import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



import FirstPhase from './LifeCycle/FirstPhase';
import SecondPhase from './LifeCycle/SecondPhase';
import HelloWorld from './BasicPrarc/HelloWorld';
import State from './BasicPrarc/State';
import ShowHide from './BasicPrarc/ShowHide';
import UsestateHook from './Hooks/Hooks/UsestateHook';
import UseEffect from './Hooks/Hooks/UseEffect';
import Page1 from './FoodPage/Page1';
import Greeting from './Greeting/Greeting';
import Cart from './ShoppingCart/Cart';
// import ProductList from './ShoppingCart/ProductList';
// import Accordin from './ShoppingCart/Accordin';
import NewCom from './ShoppingCart/NewCom';
import Sample from './RenderProps/Sample1';
import A from './ContextApI/A';
import D from './Props/D';
import Clickk from './RenderProps/Click';
import Hoverr from './RenderProps/Hover';
import RenderProps from './RenderProps/RenderProps';
import Welcome ,{Join} from './Export/Expoert';
import NewsItem from './ShoppingCart/NewsItem';







const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  
  <>
  {/* <D  name = "nano" roll ="2022"/> */}
  {/* <D/> */}
  <React.StrictMode/>
  {/* {/* <HelloWorld/>} */}
    {/* <App />  */}
  {/* </React.StrictMode>
  < FirstPhase/> 
 <SecondPhase/>
 
 <ShowHide/>
  <State/>  */}
  {/* <UsestateHook/>
  <UseEffect/> */}
  {/* <Page1/> */}
  {/* <Greeting/> */}
  <Cart/>
  
  {/* <ProductList  name = "IPhone 10S MAx" n = "infinix Hot" price = "999$"price1 = "1999$" /> */}
  /* <NewCom/>
  {/* <Accordin/>  */}
  {/* <Sample  render = {() => "Hello Render Prop"}    /> */}
  {/* <Sample  render = {(p) => p }    /> */}

  {/* <A/> */}
  
  {/* <RenderProps  render = {(inc , count) => <Clickk  inc ={inc} count={count} />}/>
  <RenderProps  render = {(inc , count) => <Hoverr inc ={inc} count={count}/>}/> */}
  
  {/* <Welcome/>
  <Join/> */}

  
 

</>


 

  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
