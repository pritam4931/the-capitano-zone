import bannerImage from "./assets/banner.jpeg";

export default function TheCapitanoZone() {
  const whatsappNumber = '919474693877';

  const categories = [
    'Football Boots',
    'Jerseys',
    'Gloves',
    'Footballs',
    'Accessories',
    'Track Pants',
  ];

  const products = [
    {
      id: 1,
      name: 'PSG 25/26 4th Kit Fan Edition With Short',
      category: 'Jerseys',
      price: '₹1499',
      image:
        'https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 2,
      name: 'F50 Hyperfast Elite Red FG',
      category: 'FG Boots',
      price: '₹4999',
      image:
        'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  const handleOrder = (product) => {
    const message = `Hello THE CAPITANO ZONE,%0A%0AI want to order:%0A%0AProduct: ${product.name}%0ACategory: ${product.category}%0APrice: ${product.price}%0A%0APlease confirm availability.`;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${message}`,
      '_blank'
    );
  };

  return (
    <div className="min-h-screen bg-white text-black overflow-x-hidden font-sans">
      {/* TOP BAR */}
      <div className="bg-yellow-400 text-black text-xs md:text-sm font-black uppercase tracking-wide py-3 px-4 flex flex-wrap justify-center gap-6">
        <span>Free Shipping Above ₹1499</span>
        <span>100% Original Products</span>
        <span>Easy Returns</span>
        <span>COD Available</span>
      </div>

      {/* NAVBAR */}
      <nav className="bg-black text-white border-b border-zinc-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex items-center justify-between gap-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-black italic leading-none uppercase">
              THE
              <br />
              CAPITANO <span className="text-yellow-400">ZONE</span>
            </h1>
          </div>

          <div className="hidden lg:flex flex-1 justify-center">
            <div className="w-full max-w-2xl bg-zinc-900 border border-zinc-700 rounded-full px-6 py-4 text-zinc-400">
              Search for products...
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/thecapitano.zone"
              target="_blank"
              rel="noreferrer"
              className="hover:text-yellow-400 font-bold"
            >
              Instagram
            </a>

            <a
              href="https://wa.me/919474693877"
              target="_blank"
              rel="noreferrer"
              className="bg-yellow-400 text-black px-5 py-3 rounded-full font-black"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-10 pb-5 flex gap-8 overflow-x-auto whitespace-nowrap text-sm font-black uppercase tracking-wide">
          <a href="#" className="text-yellow-400 border-b-2 border-yellow-400 pb-2">
            Home
          </a>
          <a href="#boots" className="hover:text-yellow-400 transition">
            Football Boots
          </a>
          <a href="#jerseys" className="hover:text-yellow-400 transition">
            Jerseys
          </a>
          <a href="#gloves" className="hover:text-yellow-400 transition">
            Gloves
          </a>
          <a href="#accessories" className="hover:text-yellow-400 transition">
            Accessories
          </a>
          <a href="#offers" className="hover:text-yellow-400 transition">
            Offers
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative bg-white overflow-hidden">
        <img
          src={bannerImage}
          alt="Hero Banner"
          className="w-full object-cover"
        />
      </section>

      {/* FEATURES */}
      <section className="bg-black text-white border-y border-zinc-800 py-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-8 px-6 lg:px-10 text-center">
          <div>
            <h3 className="font-black text-yellow-400">100% ORIGINAL</h3>
            <p className="text-zinc-400 text-sm mt-2">Authentic Products</p>
          </div>

          <div>
            <h3 className="font-black text-yellow-400">EASY RETURNS</h3>
            <p className="text-zinc-400 text-sm mt-2">Hassle Free Returns</p>
          </div>

          <div>
            <h3 className="font-black text-yellow-400">COD AVAILABLE</h3>
            <p className="text-zinc-400 text-sm mt-2">Pay On Delivery</p>
          </div>

          <div>
            <h3 className="font-black text-yellow-400">SECURE PAYMENTS</h3>
            <p className="text-zinc-400 text-sm mt-2">100% Safe Checkout</p>
          </div>

          <div>
            <h3 className="font-black text-yellow-400">FAST DELIVERY</h3>
            <p className="text-zinc-400 text-sm mt-2">Quick & Reliable</p>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section id="boots" className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="text-center mb-14">
          <h2 className="text-5xl font-black uppercase">Shop By Category</h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {categories.map((item) => (
            <div
              key={item}
              className="bg-white rounded-3xl overflow-hidden border border-zinc-200 hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              <div className="h-48 bg-zinc-100 flex items-center justify-center text-center p-4">
                <span className="font-black text-2xl uppercase">{item}</span>
              </div>

              <div className="p-6 text-center">
                <button className="font-black uppercase hover:text-yellow-500 transition">
                  Explore →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="jerseys" className="max-w-7xl mx-auto px-6 lg:px-10 pb-24">
        <div className="text-center mb-12">
          <p className="text-yellow-500 uppercase tracking-[4px] text-sm font-bold">
            Featured Products
          </p>

          <h2 className="text-5xl font-black uppercase mt-2">
            Top Picks
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl overflow-hidden border border-zinc-200 hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-[420px] w-full object-cover"
              />

              <div className="p-8">
                <p className="text-yellow-500 uppercase text-sm tracking-[3px] font-bold">
                  {product.category}
                </p>

                <h3 className="text-3xl font-black mt-3 uppercase leading-tight">
                  {product.name}
                </h3>

                <div className="flex items-center justify-between mt-8 gap-4 flex-wrap">
                  <p className="text-4xl font-black text-yellow-500">
                    {product.price}
                  </p>

                  <button
                    onClick={() => handleOrder(product)}
                    className="bg-yellow-400 text-black px-6 py-4 rounded-xl font-black uppercase hover:scale-105 transition duration-300"
                  >
                    Order On WhatsApp
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white py-20 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-black uppercase">
            THE <span className="text-yellow-400">CAPITANO ZONE</span>
          </h2>

          <p className="text-zinc-400 mt-6 text-lg uppercase tracking-wide">
            Premium Football Jerseys • Boots • Accessories
          </p>

          <div className="flex justify-center gap-6 flex-wrap mt-10">
            <a
              href="https://www.instagram.com/thecapitano.zone"
              target="_blank"
              rel="noreferrer"
              className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-black uppercase hover:scale-105 transition"
            >
              Follow Instagram
            </a>

            <a
              href="https://wa.me/919474693877"
              target="_blank"
              rel="noreferrer"
              className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-xl font-black uppercase hover:bg-yellow-400 hover:text-black transition"
            >
              Order On WhatsApp
            </a>
          </div>
        </div>
      </footer>

      {/* FLOATING BUTTON */}
      <a
        href="https://wa.me/919474693877"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 h-16 w-16 rounded-full flex items-center justify-center text-3xl shadow-2xl hover:scale-110 transition duration-300"
      >
        💬
      </a>
    </div>
  );
}
