import React from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import Rating from './components/Rating/Rating';

function App() {
  return (
    <div>
      <PageTitle title={'This is APP component'}/>
      <PageTitle title={'My friends'}/>
      <Rating value={4}/>
      <Accordion titleValue={'Menu'} collapsed={true} amount={[1,2,3,4,5]}/>
      <Accordion titleValue={'Users'} collapsed={true} amount={[1,2,3,]}/>
      <Rating value={2}/>
    </div>
  )

}

type PageTitlePropsType = {
  title: string
}

function PageTitle(props: PageTitlePropsType) {
  return(
    <h1>{props.title}</h1>
  )
}



export default App;
