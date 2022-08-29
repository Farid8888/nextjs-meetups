import { Fragment,useEffect } from 'react'
import MeetupList from "../components/meetups/MeetupList"
import {MongoClient} from 'mongodb'
import Head from 'next/head'

const Index =(props)=>{
    return (
        <Fragment>
            <Head>
                <title>React Meetups</title>
                <meta name='description'
          content='Browse a huge list of highly active React meetups!'/>
            </Head>
          <MeetupList meetups={props.meetups}/>
        </Fragment>
    )
}

export async function getStaticProps(context){
    const client = await MongoClient.connect('mongodb+srv://Farid:dmasta123@cluster0.zrtgp.mongodb.net/meetups?retryWrites=true&w=majority')
    const db = client.db()
    const meetupsCollection = db.collection('meetups')
    const meetups = await meetupsCollection.find().toArray()
      console.log(context)
     client.close()
    return{
            props: {
                meetups: meetups.map((meetup) => ({
                  title: meetup.title,
                  address: meetup.address,
                  image: meetup.image,
                  id: meetup._id.toString(),
                })),
              },
              revalidate: 1,
        }
    }

export default Index