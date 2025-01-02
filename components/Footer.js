import Link from 'next/link';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-center items-center space-x-4">
        <div className="text-2xl font-bold">Votre Logo</div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="https://github.com/ClementBoulanger" target="_blank" rel="noopener noreferrer">
                <img src="/path/to/github-logo.png" alt="GitHub" className="h-6 w-6" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/clem-boulanger/" target="_blank" rel="noopener noreferrer">
                <img src="/path/to/linkedin-logo.png" alt="LinkedIn" className="h-6 w-6" />
              </a>
            </li>
            <li>
              <a href="mailto:clement.boulangerpro@gmail.com">
                <img src="/path/to/email-logo.png" alt="Email" className="h-6 w-6" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;