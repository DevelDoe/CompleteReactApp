/**
* @Author: Andreee "DevelDoe" Ray <andreeray>
* @Date:   2017-02-28T00:33:36+01:00
* @Email:  me@andreeray.se
* @Filename: TodoApp.jsx
* @Last modified by:   andreeray
* @Last modified time: 2017-02-28T02:32:34+01:00
*/



var React = require('react'), List = require('List'), AddItem = require('AddItem')

var Root = React.createClass(
{
    getInitialState: function () {
        return {
            todos: [
                {
                    id: 1,
                    text: 'Walk the dog'
                }, {
                    id: 2,
                    text: 'Clean the yard'
                }, {
                    id: 3,
                    text: 'Create a modal for andreeray.se'
                }, {
                    id: 4,
                    text: 'Start my app'
                }
            ]
        }
    },
    handleAddItem: function (text)
    {
        console.log('text: ', text)
    },
    render: function ()
    {
        var {todos} = this.state
        return (
        <div>
            <List todos={todos}/>
            <AddItem handleAddItem={this.handleAddItem}/>
        </div>)
    }
})
module.exports = Root
