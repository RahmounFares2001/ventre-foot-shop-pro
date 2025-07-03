
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import ProductCard from '@/components/ProductCard';
import { getFeaturedProducts, getNewArrivals, getPromotions } from '@/data/products';

const HomePage = () => {
  const featuredProducts = getFeaturedProducts();
  const newArrivals = getNewArrivals();
  const promotions = getPromotions();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-900 via-green-700 to-green-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.05\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"4\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px]">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
                <span className="text-2xl">⚽</span>
                <span>Collection 2024/25</span>
              </div>
              
              <h1 className="text-6xl lg:text-7xl font-black leading-tight">
                ÉQUIPE-TOI
                <br />
                <span className="text-green-300 relative">
                  COMME UN
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-green-300 rounded-full"></div>
                </span>
                <br />
                <span className="text-5xl lg:text-6xl">PRO</span>
              </h1>
              
              <p className="text-xl text-green-100 max-w-lg leading-relaxed">
                Maillots officiels, crampons de performance et accessoires des plus grandes équipes. 
                Fais comme les pros avec notre collection premium.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-green-800 hover:bg-green-50 font-bold py-4 px-8 text-lg">
                  <Link to="/products" className="flex items-center space-x-2">
                    <span>DÉCOUVRIR</span>
                    <span>⚡</span>
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-white border-2 border-white hover:bg-white hover:text-green-800 font-bold py-4 px-8 text-lg">
                  <Link to="/products/crampons" className="flex items-center space-x-2">
                    <span>CRAMPONS</span>
                    <span>👟</span>
                  </Link>
                </Button>
              </div>
              
              <div className="flex items-center space-x-8 text-sm text-green-200">
                <div className="flex items-center space-x-2">
                  <span className="text-green-300">✓</span>
                  <span>Livraison 24h</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-300">✓</span>
                  <span>Retour gratuit</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-300">✓</span>
                  <span>Garantie authentique</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-4 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="space-y-4">
                  <img 
                    src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=300&h=400&fit=crop" 
                    alt="Maillot de football" 
                    className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop" 
                    alt="Crampons Nike" 
                    className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-4 mt-8">
                  <img 
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop" 
                    alt="Terrain de football" 
                    className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=300&h=400&fit=crop" 
                    alt="Joueur de football" 
                    className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 bg-yellow-400 text-black p-3 rounded-full shadow-lg animate-bounce">
                <span className="font-bold text-sm">NEW</span>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white text-green-600 p-4 rounded-xl shadow-2xl">
                <p className="font-bold text-xl">-30%</p>
                <p className="text-xs">sur les crampons</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-sm">Découvrir</span>
            <div className="w-0.5 h-8 bg-white/40"></div>
          </div>
        </div>
      </section>

      {/* Sport Features */}
      <section className="py-16 bg-gray-50 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="text-center border-none shadow-lg hover:shadow-xl transition-shadow bg-white group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                  <span className="text-3xl">🚚</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Livraison Express</h3>
                <p className="text-gray-600 text-sm">24h chrono partout en France</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-none shadow-lg hover:shadow-xl transition-shadow bg-white group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                  <span className="text-3xl">🏆</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Produits Officiels</h3>
                <p className="text-gray-600 text-sm">100% authentiques et garantis</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-none shadow-lg hover:shadow-xl transition-shadow bg-white group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                  <span className="text-3xl">⚽</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Expertise Football</h3>
                <p className="text-gray-600 text-sm">Conseils d'experts passionnés</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-none shadow-lg hover:shadow-xl transition-shadow bg-white group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                  <span className="text-3xl">🔄</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Échange Facile</h3>
                <p className="text-gray-600 text-sm">30 jours pour changer d'avis</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-800 text-lg px-6 py-2 mb-6">
              ⭐ SÉLECTION PRO
            </Badge>
            <h2 className="text-4xl font-bold mb-6">Les Favoris des Champions</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Découvre les équipements préférés des professionnels. Maillots, crampons et accessoires 
              utilisés par les plus grandes stars du football mondial.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold" asChild>
              <Link to="/products">Voir Toute la Collection →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Showcase */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Équipe-toi par Catégorie</h2>
            <p className="text-gray-300 text-lg">Trouve l'équipement parfait pour ton style de jeu</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/products/maillots" className="group">
              <Card className="bg-gray-800 border-gray-700 hover:bg-gray-700 transition-all duration-300 overflow-hidden">
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                  <span className="text-6xl">👕</span>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-green-400 transition-colors">Maillots</h3>
                  <p className="text-gray-400">Officiels de toutes les équipes</p>
                </CardContent>
              </Card>
            </Link>
            
            <Link to="/products/crampons" className="group">
              <Card className="bg-gray-800 border-gray-700 hover:bg-gray-700 transition-all duration-300 overflow-hidden">
                <div className="aspect-[4/3] bg-gradient-to-br from-green-600 to-green-800 flex items-center justify-center">
                  <span className="text-6xl">👟</span>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-green-400 transition-colors">Crampons</h3>
                  <p className="text-gray-400">Performance et style réunis</p>
                </CardContent>
              </Card>
            </Link>
            
            <Link to="/products/accessoires" className="group">
              <Card className="bg-gray-800 border-gray-700 hover:bg-gray-700 transition-all duration-300 overflow-hidden">
                <div className="aspect-[4/3] bg-gradient-to-br from-yellow-600 to-orange-600 flex items-center justify-center">
                  <span className="text-6xl">🎽</span>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-green-400 transition-colors">Accessoires</h3>
                  <p className="text-gray-400">Complète ton équipement</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Nouveautés 2024</h2>
              <p className="text-gray-600 text-lg">Les dernières sorties qui font vibrer le terrain</p>
            </div>
            <Button variant="outline" size="lg" className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white" asChild>
              <Link to="/products">Tout Voir</Link>
            </Button>
          </div>
          
          <Carousel className="w-full">
            <CarouselContent>
              {newArrivals.map(product => (
                <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/4">
                  <ProductCard product={product} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Promotions */}
      {promotions.length > 0 && (
        <section className="py-20 bg-red-600 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-yellow-400 text-red-600 px-6 py-3 rounded-full font-bold text-lg mb-6">
                <span className="text-2xl">🔥</span>
                <span>OFFRES FLASH</span>
                <span className="text-2xl">🔥</span>
              </div>
              <h2 className="text-4xl font-bold mb-4">Promotions Exceptionnelles</h2>
              <p className="text-red-100 text-lg">Des prix imbattables sur une sélection d'équipements premium</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {promotions.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="py-20 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl font-bold mb-6">Rejoins la Team Ventre Foot</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Inscris-toi maintenant et profite de -10% sur ta première commande + accès privilégié 
            aux nouveautés et ventes privées
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold" asChild>
              <Link to="/register">Créer Mon Compte</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-semibold" asChild>
              <Link to="/products">Explorer la Boutique</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
