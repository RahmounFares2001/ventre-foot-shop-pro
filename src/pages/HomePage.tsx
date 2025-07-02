
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ProductCard from '@/components/ProductCard';
import { getFeaturedProducts, getNewArrivals, getPromotions } from '@/data/products';

const HomePage = () => {
  const featuredProducts = getFeaturedProducts();
  const newArrivals = getNewArrivals();
  const promotions = getPromotions();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">
                Équipe-toi comme un <span className="text-green-300">PRO</span>
              </h1>
              <p className="text-xl mb-8 text-green-100">
                Le foot, ta passion, notre mission. Découvre notre collection de maillots, crampons et accessoires des plus grandes équipes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                  <Link to="/products">Découvrir la collection</Link>
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-green-600">
                  <Link to="/products/maillots">Nouveaux maillots</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&h=400&fit=crop" 
                alt="Football kit" 
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-4 -left-4 bg-white text-green-600 p-4 rounded-lg shadow-lg">
                <p className="font-bold text-2xl">50€+</p>
                <p className="text-sm">Livraison gratuite</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-none shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚚</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Livraison gratuite</h3>
                <p className="text-gray-600">Dès 50€ d'achat partout en France</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-none shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔒</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Paiement sécurisé</h3>
                <p className="text-gray-600">CB, PayPal, paiement à la livraison</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-none shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">↩️</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Retour gratuit</h3>
                <p className="text-gray-600">30 jours pour changer d'avis</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Produits vedettes</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvre notre sélection des meilleurs produits football. Des maillots officiels aux crampons de performance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button asChild>
              <Link to="/products">Voir tous les produits</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Nouveautés</h2>
              <p className="text-gray-600">Les dernières sorties sont arrivées</p>
            </div>
            <Button variant="outline" asChild>
              <Link to="/products">Voir tout</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newArrivals.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Promotions */}
      {promotions.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="bg-red-100 text-red-600 text-lg px-4 py-2 mb-4">
                🔥 PROMOTIONS
              </Badge>
              <h2 className="text-3xl font-bold mb-4">Offres spéciales</h2>
              <p className="text-gray-600">Profite de nos réductions sur une sélection de produits</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {promotions.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Rejoins la communauté Ventre Foot</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Inscris-toi pour recevoir nos offres exclusives et être le premier informé des nouveautés
          </p>
          <Button size="lg" className="bg-green-600 hover:bg-green-700" asChild>
            <Link to="/register">Créer mon compte</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
