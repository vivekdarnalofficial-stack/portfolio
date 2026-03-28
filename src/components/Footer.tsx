export default function Footer() {
  return (
    <footer className="bg-dark-card py-8 border-t border-dark-border text-center text-gray-500">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>&copy; {new Date().getFullYear()} Indiebroz Studios. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#home" className="hover:text-brand transition-colors">Home</a>
          <a href="#services" className="hover:text-brand transition-colors">Services</a>
          <a href="#portfolio" className="hover:text-brand transition-colors">Works</a>
          <a href="#contact" className="hover:text-brand transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
