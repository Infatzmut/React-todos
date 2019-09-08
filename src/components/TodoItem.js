import React from 'react'
import PropTypes from 'prop-types'

class TodoItem extends React.Component{
    getStyle =()=>{
        return {
            background : '#f4f4f4',
            padding : '10px',
            borderBottom :'1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 
            'line-through' : 'none'
        }
    }
    
    render(){
        const {id,title} = this.props.todo; //sacamos el id y el title como variable del props.todo
        return(
            <div style={this.getStyle()}>
                <p>
                <input type="checkbox" onChange={this.props.markComplete.bind(this,id)}/>{' '}
                {title}
                <button onClick={this.props.delTodo.bind(this,id)} style={bntStyle}>X</button>
                </p>
            </div>
            
        )

    }
}

TodoItem.propTypes = {
    todo:PropTypes.object.isRequired //indica que los parametros pasados desde app a todos 
    //deben ser solo objetos
}
const bntStyle ={
    background:'#ff0000',
    color :'#fff',
    border:"none",
    padding :'5px 8px',
    borderRadius : '50%',
    cursor:'pointer',
    float:'right'
    
}

export default TodoItem;