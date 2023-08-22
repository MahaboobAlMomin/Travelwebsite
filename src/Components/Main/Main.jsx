import React, { useEffect } from 'react'
import './main.css'
import {HiOutlineClipboardCheck, HiOutlineLocationMarker} from 'react-icons/hi'
import lumbini from '../../Assets/lumbini.jpg'
import bouddha from '../../Assets/bouddha.jpg'
import everest from '../../Assets/everest.jpg'
import mustang from '../../Assets/mustang.jpg'
import tilicho from '../../Assets/tilicho.jpg'
import pokhara from '../../Assets/pokhara.jpg'
import chitwan from '../../Assets/chitwan.jpg'
import annapurna from '../../Assets/annapurna.jpg'
import bandipur from '../../Assets/bandipur.jpg'
import rara from '../../Assets/rara lake.jpg'
import swayambhu from '../../Assets/swayambhu.jpg'
import bhaktapur from '../../Assets/BHAKTAPUR.jpg'
import namche from '../../Assets/namche bazar.jpg'
import kanchenjunga from '../../Assets/kanchenjunga.jpg'
import pashupatinath from '../../Assets/pashupatinath.jpg'
import thamel from '../../Assets/thamel.jpg'
import bardiya from '../../Assets/bardiya national park.jpg'
import baunthan from '../../Assets/baunthan.jpg'
import stupa from '../../Assets/ramgram stupa.jpg'
import patan from '../../Assets/patan.jpg'
import chandagiri from '../../Assets/chandragiri.jpg'
import shuvapuri from "../../Assets/shuvapuri.jpg"
import manakamana from '../../Assets/manakamana.jpeg'
import gosaikunda from '../../Assets/gosaikunda.jpg'
import './main.scss'
import Aos from 'aos'
import 'aos/dist/aos.css'


const Data = [
  {
  id: 1,
  imgSrc:everest,
  destTitle: 'MT.Everest 8848',
  location: 'khumbu,SoluKhumbu District',
  grade: 'Tranquil Himalayan Escape',
  fees: '$11,000',
  description: "Iconic Everest, world's loftiest peak. Majestic Himalayan ascent, daring souls embrace nature's pinnacle, conquering both heights and dreams.",
  
  },
  {
  id: 2,
  imgSrc:kanchenjunga  ,
  destTitle: 'MT.kanchenjung 8586',
  location: 'Kanchenjunga Conservation Area',
  grade: 'Himalayan-Explore',
  fees: '$1800',
  description: "Kanchenjunga, Nepal's crown jewel, awaits the intrepid. Amidst eastern Himalayas, a challenging odyssey unveils nature's grandeur. Fees vary, granting access to this awe-inspiring wilderness.",
  },
  {
  id: 3,
  imgSrc: annapurna,
  destTitle: 'MT. Annapurna 8091',
  location: 'Annapurna Conservation Area',
  grade: 'Easy to Challenging',
  fees: '$500-$1200',
  description: "Annapurna's allure captivates all. Diverse trails, from gentle strolls to arduous paths, showcase nature's panorama. Fees adapt to choices, opening gates to this mesmerizing realm.",
  
  },
  {
  id: 4,
  imgSrc: rara,
  destTitle: 'Rara Lake(Nature Pristine Canvas)',
  location: ' Mugu District',
  grade: 'Nature-Magnificence',
  fees: '$2000-$3000',
  description: "Rara Lake, a gem cradled in the heart of Mugu, stands as a testament to untouched beauty. Embarking on this odyssey entails traversing trails of varying complexities, demanding a spirit of adventure and a reverence for nature's magnificence.",
  
  },
              
  {
  id: 5,
  imgSrc:tilicho ,
  destTitle: 'Tilicho Lake',
  location: 'Manang District',
  grade: 'Nature-Magnificence',
  fees: '$2000-$3000',
  description: "A Himalayan gem in Manang, accessible through strenuous paths. Permit fees unlock a serene sanctuary amidst towering peaks.",
  
  },
   {
  id: 6,
  imgSrc:gosaikunda ,
  destTitle: 'Gosaikunda Lake(Alpine Serenity Unveiled)',
  location: 'Langtang District',
  grade: 'Nature-Magnificence',
  fees: '$1000-$1200',
  description: "A Himalayan gem in Manang, accessible through strenuous paths. Permit fees unlock a serene sanctuary amidst towering peaks.",
  
  },
  
   {
  id: 7,
  imgSrc:bouddha ,
  destTitle: 'Bouddha',
  location: ' Kathmandu Valley',
  grade: 'CULTURAL-RELAX',
  fees: '$100',
  description:"Bouddha, a haven of serenity, resides in Kathmandu Valley. An easy visit unveils the grandeur of the iconic stupa. Entry fees are minimal, granting access to this spiritual gem.",
  
  },
   {
  id: 8,
  imgSrc:lumbini ,
  destTitle: 'Lumbini',
  location: 'Lumbini',
  grade: 'CULTURAL-RELAX',
  fees: '$500-$1000',
  description: 'Lumbini, nestled in Nepal, embodies profound tranquility for both pilgrims and Buddhist monks.Monasteries and the hallowed Mayadevi Temple, set in a peaceful garden, provide solace for reflection and meditation.',
  
  },
    {
  id: 9,
  imgSrc:swayambhu ,
  destTitle: 'Swayambhunath Temple(A Stairway to Spirituality)',
  location: 'kathmandu Valley',
  grade: 'CULTURAL-RELAX',
  fees: '$200',
  description: "Swayambhunath, perched in Kathmandu Valley, offers an easy ascent to enlightenment. A modest fee unlocks this sacred marvel, resonating with history and devotion.",
  
  },
  {
  id: 10,
  imgSrc: stupa,
  destTitle: 'Ramgram-Stupa',
  location: 'ujjeni-parasi',
  grade: 'CULTURAL-RELAX',
  fees: '$100-$500',
  description:"Ramgram Stupa, a serene marvel in Nawalparasi, welcomes with gentle ease. A nominal fee grants access to this spiritual oasis, embracing ancient reverence and tranquility.",
  
  },
    
  {
  id: 11,
  imgSrc:bandipur,
  destTitle: 'Bandipur',
  location: 'Tanahun Distric',
  grade: 'Historical-Treasures',
  fees: '$200-$600',
  description: "Bandipur's allure, nestled in Tanahun, invites with easy charm. Modest charges unlock historical treasures, while serene ambience weaves a timeless escape.",
  
  },
       
  {
  id: 12,
  imgSrc:pokhara ,
  destTitle: 'Pokhara',
  location: 'Gandaki Pradesh',
  grade: 'Thrilling-Adventures',
  fees: '$2000-$3000',
  description: "Pokhara, nestled in Gandaki, offers diverse experiences. From serene lakeside tranquility to thrilling adventures, its fees adapt to your desires, welcoming all to its embrace.",
  
  },
           
  {
  id: 13,
  imgSrc:namche ,
  destTitle: 'Namche Bazar(A Himalayan Gem)',
  location: 'Khumbu, Solukhumbu Distric',
  grade: 'CULTURAL-RELAX',
  fees: '$500-$1000',
  description: "Namche Bazaar, cradled in Khumbu's heart, beckons with moderate trails. Immerse in Sherpa culture, savor vistas, and explore. Possible fees ensure access to this vibrant Himalayan hub.",
  
  },
           
  
                    
  {
  id: 14,
  imgSrc:mustang ,
  destTitle: 'Mustang(Unveiling Mystical Horizons)',
  location: 'Upper Mustang',
  grade: 'CULTURAL-RELAX',
  fees: '$800-$1200',
  description: "Mustang, in the secluded Upper region, reveals enchanting landscapes. Varied trails offer easy to moderate experiences.",
  
  },
                    
  {
  id: 15,
  imgSrc:chitwan ,
  destTitle: 'Chitwan National Park(Wild Majesty Unleashed)',
  location: 'Chitwan District',
  grade: 'Wildlife-Encounter',
  fees: '$200-$600',
  description: "Chitwan National Park: Biodiverse haven in Nepal's south. Safari gems and rich ecosystems coalesce, promising nature's splendid theater.",
  
  },
  {
  id: 16,
  imgSrc: bardiya,
  destTitle: 'Bardiya National Park',
  location: 'Bardiya Distric',
  grade: 'Wildlife-Encounter',
  fees: '$200-$500',
  description: "Bardiya National Park, cradled in Bardiya, beckons with diverse adventures. Encounter untamed beauty, paying an entry fee for unparalleled wildlife encounters.",
  
  },
  {
  id: 17,
  imgSrc: shuvapuri,
  destTitle: ' Shivapuri National Park',
  location: 'Kathmandu Valley',
  grade: 'Wildlife-Encounter',
  fees: '$100',
  description: "Shivapuri National Park, gracing Kathmandu Valley, offers serene exploration. Embrace nature's embrace with nominal fees, supporting its preservation.",
  
  },
  {
  id: 18,
  imgSrc:pashupatinath ,
  destTitle: 'Pashupatinath Temple',
  location: 'Kathmandu Valley',
  grade: 'CULTURAL-RELAX',
  fees: '$50',
  description: "Kathmandu's sacred heart, a spiritual nexus where culture and devotion intertwine, honoring tradition and embracing divinity's essence.",
  
  },
  {
  id: 19,
  imgSrc:bhaktapur ,
  destTitle: 'Bhaktapur Durbar square',
  location: ' Bhaktapur',
  grade: 'Heritage-Oasis',
  fees: '$50',
  description: "Cultural gem in Nepal's heart, ancient courtyards adorned with intricate art, echoing stories of dynasties past.",
  },

  {
  id: 20,
  imgSrc: patan,
  destTitle: 'Patan Durbar Square',
  location: 'Lalitpur',
  grade: 'Artistic Marvels Unveiled',
  fees: '$100',
  description: " Amidst Lalitpur's charm, intricate architecture tells tales of kings. Rich history, intricate art, and cultural vitality thrive.",
  
  },
  {
  id: 21,
  imgSrc:manakamana ,
  destTitle: 'Manakamana Temple',
  location: 'Gorkha District',
  grade: 'Cultural-Relax',
  fees: '$500-$800',
  description: "Bahunthan Syangja, in scenic Syangja, unveils a moderate trek to captivating landscapes, embracing nature's allure.",
  
  },
  {
  id: 22,
  imgSrc:baunthan ,
  destTitle: 'Baunthan',
  location: 'Syangja District',
  grade: 'Ethereal-Panorama',
  fees: '$200',
  description: "Bahunthan Syangja, in scenic Syangja, unveils a moderate trek to captivating landscapes, embracing nature's allure.",
  
  },

  {
  id: 23,
  imgSrc: chandagiri,
  destTitle: 'Chandragiri Hill',
  location: 'Kathmandu Valley',
  grade: 'Nature-Magnificence',
  fees: '$400-$800',
  description: "Chandragiri Hill, gracing Kathmandu Valley, offers an easy ascent. Cable car fees grant access to sweeping vistas, embracing nature's splendor.",
  
  },
    {
  id: 24,
  imgSrc: thamel,
  destTitle: 'Thamel Street',
  location: 'Lumbini',
  grade: 'CULTURAL-RELAX',
  fees: '$200',
  description: 'Lumbini, nestled in Nepal, embodies profound tranquility for both pilgrims and Buddhist monks.Monasteries and the hallowed Mayadevi Temple, set in a peaceful garden, provide solace for reflection and meditation.',
  
  }
]


const Main = () =>
{
  useEffect(() =>
  {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <section className='main container section'>
      <div className="secTitle">
        <h3 className="title">
          MOST VISITED DESTINATIONS
        </h3>
      </div>

      <div className="secContent grid">
        {/* .map() array to fetch each destination at one */ }
        {
          Data.map(({id,imgSrc, destTitle,location,grade,fees,description})=>{
            return (
              <div key={ id } data-aos='fade-up'
                className="singleDestination">
                
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">
                  {destTitle}
                  </h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon" />
                    <span className="name">{ location }</span>
                  </span>
                  <div className="fees flex">
                    <div className="grade">
                      <span>{grade} <small>+1</small></span>
                    </div>
                    <div className="price">
                      <h5>{fees }</h5>
                    </div>
                  </div>
                  <div className="desc">
                    <p>{ description }</p>
                  </div>
                  <button className="btn flex">
                    DETAILS<HiOutlineClipboardCheck className='icon'/>
                  </button>

                </div>
            </div>
              
            )
          })
        }
      </div>
    </section>
  )
}

export default Main