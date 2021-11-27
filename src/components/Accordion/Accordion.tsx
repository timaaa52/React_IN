import React from "react";

type AccordionPropsType = {
    titleValue: string,
    collapsed: boolean,
    amount: Array<number>
}

function Accordion(props: AccordionPropsType) {
    return (
      <div>
        <AccordionTitle title={props.titleValue}/>
        <AccordionBody coll={props.collapsed} amount={props.amount}/>
      </div>
    );
  }

  type AccordionTitlePropsType = {
      title: string
  }
  
  function AccordionTitle(props: AccordionTitlePropsType) {
    return(
      <h3>{props.title}</h3>
    )
  }
  
  type AccordionBodyPropsType = {
      coll: boolean,
      amount: Array<number>
  }

  function AccordionBody(props: AccordionBodyPropsType) {
      if(props.coll === true){
        return(
            <ul>
             {props.amount.map(number => <li>{number}</li>)}   
            </ul>
          )
      } else {
          return (
              <></>
          )
      }
    
  }

  export default Accordion;