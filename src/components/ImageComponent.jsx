import reactLogo from './../assets/react.svg';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Dialog from '@mui/material/Dialog';

const itemData = [
  {
    img: reactLogo,
    title: 'React1',
  },
  {
    img: reactLogo,
    title: 'React2',
  },
  {
    img: reactLogo,
    title: 'React3',
  },
  {
    img: reactLogo,
    title: 'React4',
  },
  {
    img: reactLogo,
    title: 'React5',
  },
  {
    img: reactLogo,
    title: 'React6',
  },
];

export default function ImageComponent() {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <Box sx={{ width: '90vw', height: '90vh' }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem
            key={item.title}
            onClick={() => {
              setSelectedImage(item.img);
              setOpen(true);
            }}
          >
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="lg"
        fullWidth
      >
        <img
          src={selectedImage}
          alt="Enlarged"
          style={{ maxWidth: '90vw', maxHeight: '90vh', margin: 'auto' }}
        />
      </Dialog>
    </Box>
  );
}
