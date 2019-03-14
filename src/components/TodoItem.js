import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {

    getStyle = () => {
        return{
            backgroundColor: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

  render() {
      const { id, title } = this.props.todo; // destructuring
      
    return (
      <div style={this.getStyle()}>
        <p>
            <input type='checkbox' onChange={ this.props.toggleComplete.bind(this, id) } /> {' '}
            { title }
            <button onClick={ this.props.delTodo.bind(this, id) } style={ btnStyle }>X</button>
        </p>
        
      </div>
    )
  }
}

//prop-Types
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
  }

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}
export default TodoItem