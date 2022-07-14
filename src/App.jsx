import { useState } from 'react'
import bg from './assets/background.jpg'
import './App.css'
import { Box } from '@mui/material'
import pic from './assets/pic.jpg'
import Avatar from '@mui/material/Avatar'
import pic1 from './assets/pic_1.jpg'
import pic2 from './assets/pic_2.jpg'
import pic3 from './assets/pic_3.jpg'
import pic4 from './assets/pic_4.jpg'
import pic5 from './assets/pic_5.jpg'
import Gallery from 'react-photo-gallery'
import ggBd from './assets/gg-imp.jpg'
import my_gift from './assets/with_my_gift.jpg'
import gg1 from './assets/gg-1.webp'
import gg2 from './assets/gg-2.webp'
import gg3 from './assets/gg-3.webp'
import gg4 from './assets/gg-4.webp'
import gg5 from './assets/gg-5.webp'
// import gg1 from './assets/gg-1.webp'
// import gg1 from './assets/gg-1.webp'
import Grid from '@mui/material/Grid'
import together from './assets/together.jpg'
function App() {
  return (
    <div
      style={{
        backgroundImage: `url("${bg}")`,
        // height: '100vh',
        backgroundSize: 'cover',
        margin: '0px',
      }}
    >
      <Box
        sx={{
          padding: '6%',
          display: 'flex',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <Box>
          <Avatar
            alt="Jinat"
            src={pic}
            sx={{ width: 150, height: 150, margin: '0 auto' }}
          />
          <p style={{ marginTop: '10px', color: '#fff', fontSize: '30px' }}>
            Happy Birthday{' '}
          </p>
          <span style={{ marginTop: '10px', color: '#fff', fontSize: '26px' }}>
            Jinatul Kawakib (Norjish)
            <span style={{ color: 'black' }}>(Cheeku)</span>
          </span>
          <div></div>
        </Box>
      </Box>
      {/* Wishes */}
      <Box sx={{ p: 1, display: 'flex', justifyContent: 'center' }}>
        <Box>
          <p
            style={{
              marginTop: '10px',
              color: '#fff',
              fontSize: '30px',
              textAlign: 'center',
            }}
          >
            My Wish For You{' '}
          </p>
         <Box sx={{display:'flex', justifyContent:'center'}}>
         <img
            src={together}
            alt="friends for ever"
            height={300}
            style={{ margin: '0 auto' }}
          />
         </Box>
          <p style={{padding: '0px 10px'}}>
            My only wish for you is for you to be happy for the rest of your
            life. You should know that, you are an amazing person and you
            derserve all the happiness of the world.
          </p>
        </Box>
      </Box>
      {/* Gallary */}
      <Box>
        <p
          style={{
            marginTop: '10px',
            color: '#fff',
            fontSize: '30px',
            textAlign: 'center',
          }}
        >
          Gallery of Memories
        </p>
        <Gallery photos={photos1} />;
      </Box>
      <Box>
        <p
          style={{
            marginTop: '10px',
            color: '#fff',
            fontSize: '30px',
            textAlign: 'center',
          }}
        >
          Where the name Cheeku Originated
        </p>
        <Gallery photos={photos2} />;
      </Box>
    </div>
  )
}

export default App

const photos1 = [
  {
    src: pic1,
    width: 4,
    height: 4,
  },
  {
    src: pic2,
    width: 4,
    height: 4,
  },
  {
    src: pic3,
    width: 4,
    height: 4,
  },
  {
    src: pic4,
    width: 4,
    height: 4,
  },
  {
    src: pic5,
    width: 4,
    height: 4,
  },
]
const photos2 = [
  {
    src: ggBd,
    width: 4,
    height: 4,
  },
  {
    src: my_gift,
    width: 4,
    height: 4,
  },
  {
    src: gg5,
    width: 4,
    height: 4,
  },
  {
    src: gg2,
    width: 4,
    height: 4,
  },
  {
    src: gg3,
    width: 4,
    height: 4,
  },
  {
    src: gg4,
    width: 4,
    height: 4,
  },
]
