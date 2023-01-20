import React, { useState } from 'react';
import '../stylesheets/review.css';

export default function Review(props) {
  const { drinks, food, outlets, parking, sound, space, wifi, username, comment, _id, shopId } = props;
  const [editable, setEditable] = useState(false);
  // const [] =  useState();

  const commentArea = () => {
    if(editable) return(
      <textarea>
      </textarea>
    )
    else return (<div id='comment'>
                  {comment}
                 </div>);
  }
  const handleDelete = (e) => {
    // fetch delete to backend
    e.preventDefault();    
    console.log('delete clicked!')
    console.log('id: ', _id)
    const body = {drinks, food, outlets, parking, sound, space, wifi, username, comment, _id};
  fetch(`/api/coffee/deletereview/?shopId=${shopId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body)
  })
  .then(data => {
    e.target.parentElement.parentElement.parentElement.remove();
  })
  .catch(err => {
    console.log('Something wrong with delete request', err);
  })
  
    // update the comment in state
    // console.log(e.target.parentElement.parentElement);
  }
  return (
    <div className='review-container'>
      <div className="structure-container">
        <div className="review">
          {Object.keys({ drinks, food, outlets, parking, sound, space, wifi, username }).map(prop => {
            if(!['currentUser'].includes(prop)) return (<div className='review-grid-item'>{prop}: {props[prop]}</div>);
          })}
        </div>
        {commentArea()}
        <div id="buttonsContainer">
          {username === props.currentUser && 
          <div>
            <img src="public/edit.svg" style={{width:'2em', height:'2em',paddingBottom:'5px'}} onClick={() => {setEditable(true)}}></img>
            <img src="public/trash.svg" style={{width:'2em', height:'2em'}} onClick={(e) => {handleDelete(e)}} />
          </div>}
        </div>
    </div>
   </div>
    
  )
}

