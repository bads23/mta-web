import React from 'react'
import {Route} from 'react-router-dom'
import EventList from './events' 
import New from './new'
import Edit from './edit'

const Index = () => {
    return(
        <>
            <Route exact path="/dashboard/events/" render={(props) => <EventList {...props}/>} />
            <Route exact path="/dashboard/events/new/" component={New} />
            <Route exact path="/dashboard/events/edit/:id" render={(props) => <Edit props={props} /> } />
        </>
    )
}

export default Index