import classes from './NewMeetup.module.css'
import Card from '../ui/Card'
import { useRef } from 'react'

const NewMeetup = (props)=>{
const titleRef = useRef()
const imageRef = useRef()
const addressRef = useRef()
const descriptionRef = useRef()


const addHandler =(event)=>{
event.preventDefault()
const title = titleRef.current.value
const image = imageRef.current.value
const address = addressRef.current.value
const description = descriptionRef.current.value
const enteredvalues ={
    title:title,
    image:image,
    address:address,
    description:description,
}
props.addHandler(enteredvalues)
}

    return(
       <form onSubmit={addHandler}>
           <Card>
           <div className={classes.general}>
               <div className={classes.control}>
                   <label htmlFor="title">Meetup Title</label>
                   <input id='title' type='text' ref={titleRef}/>
               </div>
               <div className={classes.control}>
                   <label htmlFor="image">Meetup Image</label>
                   <input id='image' type='text' ref={imageRef}/>
               </div>
               <div className={classes.control}>
                   <label htmlFor="address">Address</label>
                   <input id='address' type='text' ref={addressRef}/>
               </div>
               <div className={classes.control}>
                   <label htmlFor="description">Description</label>
                   <textarea rows='7' id='description' type='text' ref={descriptionRef}/>
               </div>
               <div className={classes.btn}>
                   <button type='submit'>Add Meetup</button>
               </div>
           </div>
           </Card>
       </form>
    )
}
export default NewMeetup