import Navbar from "./components/navbar";

export default function Home() {
  const navItems = [
    { label: 'الرئيسية', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];
  return (
    <main>
      <div>
        <Navbar navItems={navItems}/>
      </div>
    </main>
  );
}
