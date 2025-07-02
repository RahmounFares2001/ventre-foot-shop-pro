
import { Link } from 'react-router-dom';
import { Trash2, ArrowDown, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useCart } from '@/contexts/CartContext';

const CartPage = () => {
  const { items, removeFromCart, updateQuantity, getTotalPrice, getTotalItems } = useCart();

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center py-16">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl text-gray-400">🛒</span>
          </div>
          <h1 className="text-2xl font-bold mb-4">Votre panier est vide</h1>
          <p className="text-gray-600 mb-8">
            Découvrez nos produits et ajoutez vos articles favoris
          </p>
          <Button asChild className="bg-green-600 hover:bg-green-700">
            <Link to="/products">Continuer mes achats</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Mon Panier ({getTotalItems()} article{getTotalItems() > 1 ? 's' : ''})</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <Card key={`${item.id}-${item.size}`}>
              <CardContent className="p-6">
                <div className="flex items-center gap-6">
                  {/* Product Image */}
                  <div className="w-24 h-24 flex-shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
                    <p className="text-gray-600 text-sm capitalize mb-2">
                      {item.category}
                      {item.size && ` • Taille: ${item.size}`}
                    </p>
                    <p className="font-bold text-green-600 text-lg">
                      {item.price.toFixed(2)}€
                    </p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateQuantity(item.id, item.quantity - 1, item.size)}
                      disabled={item.quantity <= 1}
                    >
                      <ArrowDown className="h-4 w-4" />
                    </Button>
                    <span className="w-12 text-center font-medium">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateQuantity(item.id, item.quantity + 1, item.size)}
                    >
                      <ArrowUp className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Remove Button */}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeFromCart(item.id, item.size)}
                    className="text-red-600 hover:text-red-700 hover:bg-red-50"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <Card className="sticky top-4">
            <CardHeader>
              <CardTitle>Récapitulatif de commande</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span>Sous-total ({getTotalItems()} article{getTotalItems() > 1 ? 's' : ''})</span>
                <span className="font-medium">{getTotalPrice().toFixed(2)}€</span>
              </div>
              
              <div className="flex justify-between">
                <span>Livraison</span>
                <span className="font-medium">
                  {getTotalPrice() >= 50 ? (
                    <span className="text-green-600">Gratuite</span>
                  ) : (
                    '5.99€'
                  )}
                </span>
              </div>
              
              {getTotalPrice() < 50 && (
                <div className="text-sm text-gray-600 bg-blue-50 p-3 rounded-lg">
                  <p>Plus que <strong>{(50 - getTotalPrice()).toFixed(2)}€</strong> pour la livraison gratuite !</p>
                </div>
              )}
              
              <hr />
              
              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span className="text-green-600">
                  {(getTotalPrice() + (getTotalPrice() >= 50 ? 0 : 5.99)).toFixed(2)}€
                </span>
              </div>
              
              <Button asChild className="w-full bg-green-600 hover:bg-green-700" size="lg">
                <Link to="/checkout">Passer la commande</Link>
              </Button>
              
              <Button asChild variant="outline" className="w-full">
                <Link to="/products">Continuer mes achats</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
