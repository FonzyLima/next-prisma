import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {PrismaClient} from '@prisma/client'
import {useState} from 'react'

const prisma = new PrismaClient();

export async function getServerSideProps(){

  const movies = await prisma.movie.findMany();


  return{
    props: {
      data: movies
    }
  }
}
export default function Home({data}) {
  const [formData,setData]= useState([]);
  return (
    <div className={styles.container}>
      <ul>
        {data.map(item => (
          <li key="item.id"> {item.title}</li>
        ))}
      </ul>
    </div>
  )
}
