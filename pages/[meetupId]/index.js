import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import {MongoClient,ObjectId} from 'mongodb'
import Head from 'next/head'
const DetailPage = (props) => {
  return (
    <Fragment>
       <Head>
        <title>{props.meetupData.title}</title>
        <meta name='description' content={props.meetupData.description} />
      </Head>
      <MeetupDetail
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </Fragment>
  );
};

export async function getStaticPaths(){
  const client = await MongoClient.connect('mongodb+srv://dmasta:S3lwoocXG6yNuS17@cluster0.ivisq.mongodb.net/meetups?retryWrites=true&w=majority')
  const db = client.db()
  const meetupsCollection = db.collection('meetups')
  const meetups = await meetupsCollection.find({},{_id:1}).toArray()
  client.close()
  return{
    fallback:false,
    paths:
      meetups.map(meetup=>{
        return {
          params:{
            meetupId:meetup._id.toString()
          }
        }
      })
  }
}

export async function getStaticProps(context){
const meetupId = context.params.meetupId
const client = await MongoClient.connect('mongodb+srv://dmasta:S3lwoocXG6yNuS17@cluster0.ivisq.mongodb.net/meetups?retryWrites=true&w=majority')
  const db = client.db()
  const meetupsCollection = db.collection('meetups')
  const meetups = await meetupsCollection.findOne({_id:ObjectId(meetupId)})
  const example = await meetupsCollection.find({_id:ObjectId(meetupId)}).toArray()
   console.log(example)
  client.close()
return{
  props:{
    meetupData:{
      image:meetups.image,
        title:meetups.title,
        id:meetups._id.toString(),
        address:meetups.address,
        description:meetups.description,
    }
  }
}
}

export default DetailPage;
