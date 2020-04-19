import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';

import Header from './Header';

const App = () => {
    return (

        <div className="ui container">
            <BrowserRouter>
                <div>
                <Header></Header>
                    <Route path='/' exact component={StreamList}/>
                    <Route path='/streams/new' exact componen={StreamCreate} />
                    <Route path='/streams/edit' exact componen={StreamEdit} />
                    <Route path='/streams/delete' exact componen={StreamDelete} />
                    <Route path='/streams/show' exact componen={StreamShow} />
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App;