import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './Header'
import StreamCreates from './Streams/StreamCreates'
import StreamDeletes from './Streams/StreamDeletes'
import StreamEdits from './Streams/StreamEdits'
import StreamLists from './Streams/StreamLists'
import StreamShows from './Streams/StreamShows'


const App = () => {
    return (
        <div className='ui container'>
           <BrowserRouter>
           <Header />
           <div>
           <Route path='/' exact component={StreamLists} />
           <Route path='/stream/new' component={StreamCreates} />
           <Route path='/stream/edit' component={StreamEdits} />
           <Route path='/stream/delete' component={StreamDeletes} />
           <Route path='/stream/show' component={StreamShows} />
           </div>
           </BrowserRouter>
        </div>
    )
}

export default App
