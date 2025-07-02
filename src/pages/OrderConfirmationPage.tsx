
import { useParams, Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const OrderConfirmationPage = () => {
  const { orderId } = useParams();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-green-600 mb-2">Commande confirmée !</h1>
          <p className="text-gray-600">
            Merci pour votre achat. Votre commande #{orderId} a été confirmée.
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Que se passe-t-il maintenant ?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-left">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-green-600 font-bold text-sm">1</span>
              </div>
              <div>
                <h3 className="font-semibold">Confirmation par email</h3>
                <p className="text-gray-600 text-sm">
                  Un email de confirmation avec les détails de votre commande vous a été envoyé.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-green-600 font-bold text-sm">2</span>
              </div>
              <div>
                <h3 className="font-semibold">Préparation de la commande</h3>
                <p className="text-gray-600 text-sm">
                  Votre commande est en cours de préparation dans nos entrepôts.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-green-600 font-bold text-sm">3</span>
              </div>
              <div>
                <h3 className="font-semibold">Expédition</h3>
                <p className="text-gray-600 text-sm">
                  Vous recevrez un email avec le numéro de suivi dès l'expédition.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-green-600 font-bold text-sm">4</span>
              </div>
              <div>
                <h3 className="font-semibold">Livraison</h3>
                <p className="text-gray-600 text-sm">
                  Votre commande sera livrée dans les délais annoncés.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
          <h3 className="font-semibold text-green-800 mb-2">Besoin d'aide ?</h3>
          <p className="text-green-700 text-sm mb-4">
            Notre équipe support est là pour vous aider. Contactez-nous si vous avez des questions.
          </p>
          <div className="space-y-1 text-sm text-green-700">
            <p>📧 support@ventrefoot.fr</p>
            <p>📞 01 23 45 67 89</p>
            <p>🕒 Lundi - Vendredi: 9h - 18h</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-green-600 hover:bg-green-700">
            <Link to="/products">Continuer mes achats</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/account">Voir mes commandes</Link>
          </Button>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Merci de votre confiance !</h2>
          <p className="text-gray-600 mb-6">
            Chez Ventre Foot, votre passion pour le football est notre mission. 
            Nous espérons que vous serez ravi de vos achats !
          </p>
          <div className="text-green-600 font-semibold text-lg">
            "Équipe-toi comme un pro"
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;
