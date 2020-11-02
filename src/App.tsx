import React, {useState} from 'react';
import './App.css';
import {AccordionContainer} from "./components/Accordion/Accordion";
import {RatingContainer, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledOnOffContainer} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {UncontrolledAccordionContainer} from './components/UncontrolledAccordion/UncontrolledAccordion';
import {UncontrolledRatingContainer} from "./components/UncontrolledRating/UncontrolledRating";
import {OnOffContainer} from './components/OnOff/OnOff';


//function declaration
function App() {
    console.log('App rendering')

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [collapsed, setCollapsed] = useState<boolean>(false)
    let [on, setOn] = useState(false);

    return (
        <div className={"App"}>
            <PageTitleContainer title={"IT-Kamasutra"}/>
            <AccordionContainer title={"Users"}
                       collapsed={collapsed}
                       onChange={() => setCollapsed(!collapsed)}
                       items={[{title: "Dimych", value: 1},
                           {title: "Valera", value: 2},
                           {title: "Artem", value: 3},
                           {title: "Victor", value: 4}]}
                       onClick={(value) => alert(`user with id ${value} should be happy`)}/>/>
            <UncontrolledAccordionContainer title={"Menu"}/>
            <RatingContainer value={ratingValue} onClick={setRatingValue}/>
            {/*onClick in this Rating is a title for setValue*/}
            <UncontrolledRatingContainer/>
            <OnOffContainer on={on} onChange={(on) => {
                setOn(on)
            }}/>
            <UncontrolledOnOffContainer onChange={setOn}/> {on.toString()}
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
const PageTitleContainer = React.memo(PageTitle)

export default App;