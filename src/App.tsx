import './home.css';

import { FiGithub, FiInstagram, FiLinkedin, FiTwitch, FiTwitter } from 'react-icons/fi';

import { SocialButton } from './components/SocialButton';
import { SocialIcon } from './components/SocialIcon';

function App() {
  return (
    <div className="Container">
      <div className="SocialPhotoContainer">
        <img className="SocialPhoto" src="https://github.com/edurodrigues0.png" alt="eduardo" />
      </div>
      <p className="SocialName">@edurodrigues0</p>

      <SocialButton title='LINK 1' />
      <SocialButton title='LINK 2' />
      <SocialButton title='LINK 3' />
      <SocialButton title='LINK 4' />

      <div className="SocialIcons">
        <SocialIcon icon={<FiTwitter size="1.5rem" />} href='https://twitter.com/' />
        <SocialIcon icon={<FiTwitch size="1.5rem" />} href='https://www.twitch.tv/' />
        <SocialIcon icon={<FiInstagram size="1.5rem" />} href='https://www.instagram.com/' />
        <SocialIcon icon={<FiLinkedin size="1.5rem" />} href='https://linkedin.com/' />
        <SocialIcon icon={<FiGithub size="1.5rem" />} href='https://github.com/' />
      </div>
    </div>
  );
}

export default App;
