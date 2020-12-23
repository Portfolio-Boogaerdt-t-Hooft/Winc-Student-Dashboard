import React from 'react'
import { Switch, Route } from "react-router-dom"

import ChartExample from "./ChartExample/ChartExample"
import Bargraph from './graphs/Bargraph'
import Home from "./Home"

import Evelyn from './students/Evelyn'
import Aranka from './students/Aranka'
import Floris from './students/Floris'
import Hector from './students/Hector'
import Martina from './students/Martina'
import Maurits from './students/Maurits'
import Rahima from './students/Rahima'
import Sandra from './students/Sandra'
import Wietske from './students/Wietske'
import Storm from './students/Storm'

const studentData = require('./Studentdata.json')
const wincTheme = require('./graphs/WincTheme')


const Container = () => {
    return (
        <main className="main">
            <Switch>
                <Route path="/chartexample">
                    <ChartExample />
                </Route>
                <Route path="/bargraph">
                    <Bargraph
                        studentData={studentData}
                        wincTheme={wincTheme}

                    />
                </Route>
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/students/evelyn">
                    <Evelyn
                        studentData={studentData}
                        wincTheme={wincTheme}
                    />
                </Route>
                <Route path="/students/aranka">
                    <Aranka
                        studentData={studentData}
                        wincTheme={wincTheme} />
                </Route>
                <Route path="/students/floris">
                    <Floris
                        studentData={studentData}
                        wincTheme={wincTheme} />
                </Route>
                <Route path="/students/hector">
                    <Hector
                        studentData={studentData}
                        wincTheme={wincTheme} />
                </Route>
                <Route path="/students/martina">
                    <Martina
                        studentData={studentData}
                        wincTheme={wincTheme} />
                </Route>
                <Route path="/students/maurits">
                    <Maurits
                        studentData={studentData}
                        wincTheme={wincTheme} />
                </Route>
                <Route path="/students/rahima">
                    <Rahima
                        studentData={studentData}
                        wincTheme={wincTheme} />
                </Route>
                <Route path="/students/sandra">
                    <Sandra
                        studentData={studentData}
                        wincTheme={wincTheme} />
                </Route>
                <Route path="/students/wietske">
                    <Wietske
                        studentData={studentData}
                        wincTheme={wincTheme} />
                </Route>
                <Route path="/students/storm">
                    <Storm
                        studentData={studentData}
                        wincTheme={wincTheme} />
                </Route>
            </Switch>
        </main >
    )
}

export default Container