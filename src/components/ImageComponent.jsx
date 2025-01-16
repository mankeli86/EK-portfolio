import reactLogo from './../assets/react.svg';
import { useState } from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Dialog from '@mui/material/Dialog';
import { useTheme, useMediaQuery } from '@mui/material';

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
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('sm'));
  const isMd = useMediaQuery(theme.breakpoints.down('md'));
  let columns = 3;
  if (isXs) columns = 2;
  else if (isMd) columns = 2;

  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <Box sx={{ width: '90vw', margin: '0 auto', paddingTop: 6 }}>
      <ImageList variant="masonry" cols={columns} gap={8}>
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
      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="lg" fullWidth>
        <img
          src={selectedImage}
          alt="Enlarged"
          style={{ maxWidth: '90vw', maxHeight: '90vh', margin: 'auto' }}
        />
      </Dialog>
    </Box>
  );
}
