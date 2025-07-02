
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, User, LogIn, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { getTotalItems } = useCart();
  const { user, logout } = useAuth();

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex justify-between items-center py-2 text-sm text-gray-600 border-b">
          <div>Livraison gratuite à partir de 50€</div>
          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-2">
                <span>Bonjour, {user.name}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={logout}
                  className="text-gray-600 hover:text-green-600"
                >
                  <LogOut className="h-4 w-4" />
                </Button>
              </div>
            ) : (
              <Link to="/login" className="hover:text-green-600">
                Se connecter
              </Link>
            )}
          </div>
        </div>

        {/* Main header */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">V</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Ventre Foot</h1>
              <p className="text-xs text-green-600">Équipe-toi comme un pro</p>
            </div>
          </Link>

          {/* Search bar */}
          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Rechercher des maillots, crampons..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 border-green-200 focus:border-green-500"
              />
            </div>
          </div>

          {/* Right menu */}
          <div className="flex items-center space-x-4">
            {user && (
              <Link to="/account">
                <Button variant="ghost" size="sm" className="text-gray-600 hover:text-green-600">
                  <User className="h-5 w-5" />
                </Button>
              </Link>
            )}
            
            <Link to="/cart" className="relative">
              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-green-600">
                <ShoppingCart className="h-5 w-5" />
                {getTotalItems() > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-green-600 text-white text-xs min-w-[20px] h-5 flex items-center justify-center rounded-full">
                    {getTotalItems()}
                  </Badge>
                )}
              </Button>
            </Link>
          </div>
        </div>

        {/* Navigation */}
        <nav className="py-4 border-t">
          <div className="flex items-center justify-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
              Accueil
            </Link>
            <Link to="/products/maillots" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
              Maillots
            </Link>
            <Link to="/products/crampons" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
              Crampons
            </Link>
            <Link to="/products/accessoires" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
              Accessoires
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
              Tous les produits
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
