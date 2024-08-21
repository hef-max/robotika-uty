// components/Contact.js
const Contact = () => {
    return (
      <div className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Kontak Kami</h2>
          <p className="text-lg text-gray-700 mb-6">Hubungi kami untuk informasi lebih lanjut atau untuk bergabung dengan Robotika UTY.</p>
          <form className="max-w-md mx-auto">
            <input type="text" placeholder="Nama" className="w-full p-4 mb-4 rounded border" />
            <input type="email" placeholder="Email" className="w-full p-4 mb-4 rounded border" />
            <textarea placeholder="Pesan" className="w-full p-4 mb-4 rounded border h-32"></textarea>
            <button type="submit" className="w-full p-4 bg-orange-600 text-white rounded hover:bg-orange-500">Kirim Pesan</button>
          </form>
        </div>
      </div>
    );
  };
  
  export default Contact;
  