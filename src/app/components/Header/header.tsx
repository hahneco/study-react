import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.css'
import '../../globals.css'

const header = () => {
  return (
    <header>
      <nav className="p-2">
        <ul className="flex items-center space-x-2">
          <li>
            <img src="/vercel.svg" className="h-6" />
          </li>
          <li>
            <Link href="/" >Home</Link>
          </li>
          <li>
            <Link href="/about" >About</Link>
          </li>
          <li>
            <Link href="/test" >Test</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default header;
