/**
* @Author: Andreee Ray <develdoe>
* @Date:   2017-03-08T01:48:53+01:00
* @Email:  me@andreeray.se
* @Filename: store.jsx
* @Last modified by:   develdoe
* @Last modified time: 2017-03-08T02:23:28+01:00
*/



var redux = require('redux'), {searchTextReducer, showCompletedReducer, todosReducer} = require('reducers')

export var store = () => {
    var reducer = redux.combineReducers({
        searchText: searchTextReducer,
        showCompleted: showCompletedReducer,
        todos: todosReducer
    })
    var store = redux.createStore(reducer, redux.compose(window.devToolsExtension ? window.devToolsExtension() : f => f))
    return store
}