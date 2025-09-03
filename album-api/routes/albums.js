const express = require('express');
const router = express.Router();

// Sample album data for testing
const albums = [
  {
    id: 1,
    title: 'Abbey Road',
    artist: 'The Beatles',
    price: '$19.99',
    image_url: 'https://via.placeholder.com/300x300/FF5733/FFFFFF?text=Abbey+Road'
  },
  {
    id: 2,
    title: 'Dark Side of the Moon',
    artist: 'Pink Floyd',
    price: '$18.99',
    image_url: 'https://via.placeholder.com/300x300/33A2FF/FFFFFF?text=Dark+Side'
  },
  {
    id: 3,
    title: 'Thriller',
    artist: 'Michael Jackson',
    price: '$17.99',
    image_url: 'https://via.placeholder.com/300x300/FF33A2/FFFFFF?text=Thriller'
  },
  {
    id: 4,
    title: 'Led Zeppelin IV',
    artist: 'Led Zeppelin',
    price: '$20.99',
    image_url: 'https://via.placeholder.com/300x300/A233FF/FFFFFF?text=LZ+IV'
  },
  {
    id: 5,
    title: 'Back in Black',
    artist: 'AC/DC',
    price: '$16.99',
    image_url: 'https://via.placeholder.com/300x300/000000/FFFFFF?text=Back+in+Black'
  },
  {
    id: 6,
    title: 'Hotel California',
    artist: 'Eagles',
    price: '$19.99',
    image_url: 'https://via.placeholder.com/300x300/FFD700/000000?text=Hotel+CA'
  }
];

// GET /api/albums
router.get('/', (req, res) => {
  res.json(albums);
});

// GET /api/albums/:id
router.get('/:id', (req, res) => {
  const albumId = parseInt(req.params.id);
  const album = albums.find(a => a.id === albumId);
  
  if (!album) {
    return res.status(404).json({
      error: 'Album not found',
      message: `Album with ID ${albumId} does not exist`
    });
  }
  
  res.json(album);
});

module.exports = router;