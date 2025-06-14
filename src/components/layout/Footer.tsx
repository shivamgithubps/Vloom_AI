import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const logo = '/images/logo.svg';

  return (
    <footer className="bg-[#151b22] text-white py-10 px-4 md:px-10 lg:px-20">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-8">
          <Link to="/" className="mb-4">
            <img src={logo} alt="VloomAi Logo" className="h-8" />
          </Link>
          <p className="text-gray-400">VloomAi, Inc. {currentYear}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8 text-sm">
          <Link to="/testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</Link>
          <Link to="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="/terms-of-service" className="text-gray-300 hover:text-white transition-colors">Terms of Service</Link>
          <Link to="/referral-program" className="text-gray-300 hover:text-white transition-colors">Referral Program</Link>
          <Link to="/releases" className="text-gray-300 hover:text-white transition-colors">Releases</Link>
          <Link to="https://help.vloomai.app/" className="text-gray-300 hover:text-white transition-colors">FAQ</Link>
        </div>

        <div className="flex justify-center gap-6">
          <a href="https://instagram.com/vloomaiapp" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text-gray-400 hover:text-[#1f6cdb] transition-colors" viewBox="0 0 16 16">
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
            </svg>
          </a>
          <a href="https://twitter.com/vloomaiapp" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text-gray-400 hover:text-[#1f6cdb] transition-colors" viewBox="0 0 16 16">
              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
            </svg>
          </a>
          <a href="https://www.youtube.com/channel/UCSernMEBRoBJvRJfdc1n2CQ" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text-gray-400 hover:text-[#1f6cdb] transition-colors" viewBox="0 0 16 16">
              <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
            </svg>
          </a>
          <a href="https://www.threads.net/@vloomaiapp" target="_blank" rel="noopener noreferrer" aria-label="Threads">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text-gray-400 hover:text-[#1f6cdb] transition-colors" viewBox="0 0 24 24">
              <path d="M12 0c6.628 0 12 5.373 12 12s-5.372 12-12 12S0 18.627 0 12 5.373 0 12 0zm5.795 10.396c-.248-.142-.496-.283-.745-.425-.166-.095-.35-.095-.517-.047-.47.142-.894.331-1.362.52-.423.142-.799.331-1.15.614-.33.189-.47.425-.47.756v.236c.024.331.118.614.307.85.212.284.423.614.658.898.4.52.87 1.039 1.293 1.559.4.473.752.992.987 1.559.4.945-.118 1.794-.94 2.457-.353.284-.799.473-1.221.661-.47.189-.988.331-1.481.425-.329.047-.682.095-1.01.095-.518.047-1.058.047-1.575 0-.518 0-1.035-.095-1.552-.189-.353-.047-.682-.142-1.01-.236-.471-.142-.894-.331-1.34-.52-.4-.189-.799-.425-1.198-.661-.259-.142-.494-.189-.753-.095-.259.095-.471.236-.635.425-.188.236-.33.52-.447.805-.07.236-.07.52.024.756.117.331.33.614.611.85.33.284.658.52 1.035.756.894.614 1.93 1.039 2.967 1.275.681.142 1.386.284 2.092.284a9.57 9.57 0 0 0 2.068-.236c.635-.142 1.246-.331 1.834-.52 1.175-.472 2.209-1.134 3.13-2.032.66-.614 1.222-1.37 1.575-2.174.188-.52.353-1.039.377-1.606 0-.425-.024-.85-.118-1.275-.094-.378-.259-.756-.47-1.134-.282-.52-.659-.992-1.057-1.418-.518-.614-1.13-1.134-1.67-1.748-.494-.52-.823-1.087-.94-1.748 0-.284 0-.567.94-.85.07-.19.212-.332.33-.474.165-.19.353-.426.54-.614.33-.236.729-.331 1.151-.189.024 0 .471.19.494.19.33.141.683.283 1.035.472.212.095.377.236.518.425.7.142.116.284.116.425 0 .284-.094.567-.33.756-.258.142-.541.142-.753 0z" />
            </svg>
          </a>
          <a href="https://discord.gg/Ezfk2RTgX5" target="_blank" rel="noopener noreferrer" aria-label="Discord">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text-gray-400 hover:text-[#1f6cdb] transition-colors" viewBox="0 0 16 16">
              <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
