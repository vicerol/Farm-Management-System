export default function Header() {
    return (
      <header className="bg-green-900 text-white">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Farm Management App</h1>
          <nav className="space-x-4">
            
            <a href="#" className="hover:text-gray-200">Home</a>
            <a href="#" className="hover:text-gray-200">About</a>
            <a href="#" className="hover:text-gray-200">Services</a>
            <a href="#" className="hover:text-gray-200">Contact</a>
            <a href="#" className="hover:text-gray-200">Login</a>
           
          </nav>
        </div>
      </header>
    );
}