import Link from 'next/link';

function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Clément Boulanger</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="#about"><a>A propos</a></Link></li>
            <li><Link href="#skills"><a>Compétences</a></Link></li>
            <li><Link href="#projects"><a>Projets</a></Link></li>
            <li><Link href="#contact"><a>Contact</a></Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;