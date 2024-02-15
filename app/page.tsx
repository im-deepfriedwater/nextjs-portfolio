import { Silkscreen } from 'next/font/google'
import UnityApp from './unity/unityapp';

const silkscreen = Silkscreen({
  weight: '400',
  subsets: ['latin'],
});

export default function Home() {
  return (
    <div className="main">
      <div className={`topnav ${silkscreen.className}`} id="myTopnav">
        <div className="leftHeader">
          <div>Justin Kyle Torres</div>
        </div>
        <div className="rightHeader">
          <a href="https://www.linkedin.com/in/justin-torres/" target="_blank">LinkedIn</a>
          <a href="/justinkyletorres2024_resume.pdf" target="_blank">Resume</a>
          <a href="https://github.com/im-deepfriedwater" target="_blank">Github</a>
        </div>
      </div>
      
      <div className="unityContainer">
        <UnityApp />
      </div>
    </div>

  );
}
