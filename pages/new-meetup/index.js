import React,{Fragment} from 'react'
import NewMeetup from '../../components/meetups/NewMeetup'
import {useRouter} from 'next/router'

const NewMeetupPage=()=>{
const router = useRouter()

async function addHandler(obj){
const response = await fetch('/api/new-meetup',{
  method:'POST',
  body:JSON.stringify(obj),
  headers:{
    'Content-type':'application/json'
  }
})
const data = await response.json()
 router.push('/')
}

    return(
      <Fragment>
         <NewMeetup addHandler={addHandler}/>
      </Fragment>
    )
}

export default NewMeetupPage
