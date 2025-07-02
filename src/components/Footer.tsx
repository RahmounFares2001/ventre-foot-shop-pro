
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">V</span>
              </div>
              <span className="text-xl font-bold">Ventre Foot</span>
            </div>
            <p className="text-gray-400 mb-4">
              Le foot, ta passion, notre mission. Équipe-toi avec les meilleurs produits football.
            </p>
            <div className="text-green-400 font-semibold">
              "Équipe-toi comme un pro"
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Accueil</Link></li>
              <li><Link to="/products/maillots" className="text-gray-400 hover:text-white transition-colors">Maillots</Link></li>
              <li><Link to="/products/crampons" className="text-gray-400 hover:text-white transition-colors">Crampons</Link></li>
              <li><Link to="/products/accessoires" className="text-gray-400 hover:text-white transition-colors">Accessoires</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Service Client</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-400">Livraison gratuite dès 50€</span></li>
              <li><span className="text-gray-400">Retour sous 30 jours</span></li>
              <li><span className="text-gray-400">Paiement sécurisé</span></li>
              <li><span className="text-gray-400">Support 7j/7</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-400">
              <p>📧 contact@ventrefoot.fr</p>
              <p>📞 01 23 45 67 89</p>
              <p>📍 Paris, France</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Ventre Foot. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
