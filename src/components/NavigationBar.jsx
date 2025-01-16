import { useState, useEffect } from 'react';
import './NavigationBar.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';

function NavigationBar() {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav className={`navbar ${visible ? '' : 'hidden'}`}>
      <ul>
        <li><a href="mailto:test@test.com"><EmailIcon /></a></li>
        <li><a href="https://www.instagram.com/" target="_blank"><InstagramIcon /></a></li>
      </ul>
    </nav>
  );
}

export default NavigationBar;