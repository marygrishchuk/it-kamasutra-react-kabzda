import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordeon/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import { UncontrolledAccordion } from './components/UncontrolledAccordeon/UncontrolledAccordion';
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import { OnOff } from './components/OnOff/OnOff';


//function declaration
function App() {
    console.log('App rendering')

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [collapsed, setCollapsed] = useState<boolean>(false)
    let [on, setOn] = useState(false);

    return (
        <div className={"App"}>
            <PageTitle title={"IT Kamasutra"} />
            <Accordion title={"Users"} collapsed={collapsed} onChange={() => {setCollapsed(!collapsed)} }/>
            <UncontrolledAccordion title={"Menu"} />
            <Rating value={ratingValue} onClick={setRatingValue}/>
            {/*onClick в этом Ratingе – это условное название для setValue*/}
            <UncontrolledRating/>
            <OnOff on={on} onChange={(on) => {setOn(on)}} />
            <UncontrolledOnOff onChange={setOn}/> {on.toString()}
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log('PageTitle rendering')
    return <h1>{props.title}</h1>
}

export default App;