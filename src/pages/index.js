// import "../styles/globals.css";
import Header from "@/components/Header";
import ImageSlider from "@/components/ImageSlider";
import Footer from "@/components/Footer";
import Card from "@/components/Card";

export default function Home() {
  const cards = [
    {
      title: "Our Vision",
      description: "To create a world where technology empowers farmers to achieve sustainable and efficient agricultural practices.",
      icon: "",
    },
    {
      title: "Our Mission", 
      description: "To deliver innovative agricultural solutions that optimize productivity, reduce costs, and promote sustainability.",
      icon: "",
    },
    {
      title: "About Us ",
      description: "At our company, we believe in the power of technology to transform agricultural practices and foster a sustainable future for farmers.",
      icon: "",
    },

  ];
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-grow">
        <ImageSlider />
        <section className="py-16 bg-gray-100 ">
          <div className="container mx-auto px-4">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {cards.map((card, index) => (
    <Card key={index} title={card.title} description={card.description} icon={card.icon} />
  ))}
</div>
          </div>
        </section>
        
      </main>
          
        <Footer />
    </div>
  );
}
