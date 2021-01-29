import React, {useCallback, useMemo, useState} from "react";
import {SelectContainer} from "../components/Select/Select";
import s from "./UseMemo.module.css"

export default {
    title: 'useMemo & useCallback'
}

export const DifficultCountingExample = () => {
    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 10000000) {
                fake++
                const fakeValue = Math.random()
            }
            tempResultA *= i
        }
        return tempResultA
    }, [a])

    for (let i = 1; i <= b; i++) {
        resultB *= i
    }

    return <>
        <input value={a} onChange={e => setA(+e.currentTarget.value)}/>
        <input value={b} onChange={e => setB(Number(e.currentTarget.value))}/>
        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>

    </>
}

const UsersSecret = (props: { users: Array<string> }) => {  //users type in params
    console.log("Users secret")
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>
}

const Users = React.memo(UsersSecret)

export const HelpToReactMemoExample = () => {
    console.log("HelpToReactMemoExample")
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dimych', 'Valera', 'Artem'])

    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf("a") > -1)
    }, [users])

    const addUser = () => {
        setUsers([
            ...users,
            'Sveta ' + new Date().getTime()
        ])
    }

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>add user</button>
        {counter}
        <Users users={newArray}/>
    </>
}

type CitiesType = {
    value: string
    countryId: string
    title: string
    population: number
}

export const SelectExample = () => {
    console.log("SelectExample")
    const [select1Value, setSelect1Value] = useState<string | null>(null)
    const [select2Value, setSelect2Value] = useState<string | null>(null)
    const [select3Value, setSelect3Value] = useState<string | null>(null)
    const [cities, setCities] = useState<Array<CitiesType>>([
        {value: "1", countryId: "2", title: "Minsk", population: 2000000},
        {value: "2", countryId: "3", title: "Kiev", population: 2868702},
        {value: "3", countryId: "1", title: "Moscow", population: 12000000},
        {value: "4", countryId: "2", title: "Vitebsk", population: 362466},
        {value: "5", countryId: "1", title: "Murmansk", population: 310000},
        {value: "6", countryId: "3", title: "Mariupol", population: 446103}
    ])

    const citiesOfBelarus = useMemo(() => {
        console.log("SelectCitiesOfBelarus")
        const filteredCities = cities.filter(c => c.countryId === "2")
        return filteredCities.map(c => ({value: c.value, title: c.title}))
    }, [cities])

    const citiesStartingWithM = useMemo(() => {
        console.log("SelectCitiesStartingWithM")
        const filteredCities = cities.filter(c => c.title[0].toUpperCase() === "M")
        return filteredCities.map(c => ({value: c.value, title: c.title}))
    }, [cities])

    const citiesWithPopulationMoreThan10Mln = useMemo(() => {
        console.log("SelectCitiesWithPopulationMoreThan10Mln")
        const filteredCities = cities.filter(c => c.population > 10000000)
        return filteredCities.map(c => ({value: c.value, title: c.title}))
    }, [cities])

    return <div className={s.selects}>
        <SelectContainer onChange={setSelect1Value}
                         value={select1Value}
                         items={citiesOfBelarus}/>
        <SelectContainer onChange={setSelect2Value}
                         value={select2Value}
                         items={citiesStartingWithM}/>
        <SelectContainer onChange={setSelect3Value}
                         value={select3Value}
                         items={citiesWithPopulationMoreThan10Mln}/>
    </div>
}

export const LikeUseCallback = () => {
    console.log("LikeUseCallback")
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['React', 'JS', 'CSS', 'HTML'])

    const filteredBooks = useMemo(() => {
        return books.filter(b => b.toLowerCase().indexOf("a") > -1)
    }, [books])

    const memoizedAddBook = useMemo(() => {
        return () => {          //returns a callback
            console.log(books)
            setBooks([
                ...books,
                'Angular ' + new Date().getTime()
            ])
        }
    }, [books])

    const memoizedAddBook2 = useCallback(() => {
            console.log(books)  //a callback itself
            setBooks([
                ...books,
                'Angular ' + new Date().getTime()
            ])
    }, [books])

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Books books={filteredBooks} addBook={memoizedAddBook2}/>
    </>
}

type BooksSecretPropsType = {
    books: Array<string>
    addBook: () => void
}
const BooksSecret = (props: BooksSecretPropsType) => {
    console.log("BooksSecret")
    return <div>
        <button onClick={props.addBook}>add book</button>
        {
            props.books.map((book, i) => <div key={i}>{book}</div>)
        }
    </div>
}
const Books = React.memo(BooksSecret)