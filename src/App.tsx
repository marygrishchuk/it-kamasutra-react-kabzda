import React, {useState} from 'react';
import './App.css';
import {Accordeon} from "./components/Accordeon";
import {Rating, RatingValueType} from "./components/Rating";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import { UncontrolledAccordeon } from './components/UncontrolledAccordeon';
import {UncontrolledRating} from "./components/UncontrolledRating";
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
            <Accordeon title={"Users"} collapsed={collapsed} onChange={() => {setCollapsed(!collapsed)} }/>
            <UncontrolledAccordeon title={"Menu"} />
            <Rating value={ratingValue} onClick={setRatingValue}/>
            {/*onClick в этом Ratingе – это условное название для setValue*/}
            <UncontrolledRating />
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