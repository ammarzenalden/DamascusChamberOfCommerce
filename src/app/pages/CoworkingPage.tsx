import { Button } from '../components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Building, Users, Wifi, Coffee, Printer, Projector, Clock, DollarSign } from 'lucide-react';

export function CoworkingPage() {
  const spaces = [
    {
      title: 'مكتب مشترك - يومي',
      price: '5,000 ل.س/يوم',
      description: 'مساحة عمل مرنة لليوم الواحد',
      features: ['إنترنت عالي السرعة', 'قهوة مجانية', 'طابعة', 'استقبال'],
      icon: Users,
    },
    {
      title: 'مكتب مشترك - شهري',
      price: '100,000 ل.س/شهر',
      description: 'اشتراك شهري بمزايا إضافية',
      features: ['مكتب ثابت', 'خزانة خاصة', 'عنوان تجاري', 'جميع المزايا'],
      icon: Building,
    },
    {
      title: 'مكتب خاص - صغير',
      price: '250,000 ل.س/شهر',
      description: 'مكتب خاص ل 2-4 أشخاص',
      features: ['غرفة منفصلة', 'أثاث مكتبي', 'قفل خاص', 'قاعات مجاناً'],
      icon: Building,
    },
    {
      title: 'مكتب خاص - كبير',
      price: '400,000 ل.س/شهر',
      description: 'مكتب لفريق 5-10 أشخاص',
      features: ['مساحة واسعة', 'غرفة اجتماعات', 'استقبال خاص', 'تصميم مخصص'],
      icon: Building,
    },
    {
      title: 'قاعة اجتماعات',
      price: '15,000 ل.س/ساعة',
      description: 'قاعة مجهزة ل 10-15 شخص',
      features: ['شاشة عرض', 'لوح ذكي', 'كاميرا', 'ميكروفونات'],
      icon: Projector,
    },
    {
      title: 'قاعة تدريب',
      price: '30,000 ل.س/يوم',
      description: 'قاعة تدريب لـ 30-50 شخص',
      features: ['بروجكتر', 'صوتيات', 'مقاعد مريحة', 'خدمة ضيافة'],
      icon: Users,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-cyan-600 to-blue-600 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white/30">
            مركز الأعمال والمساحات المكتبية
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            مساحة عمل احترافية
          </h1>
          <p className="text-xl text-cyan-50 max-w-3xl mx-auto mb-10">
            مكاتب مشتركة وخاصة، قاعات اجتماعات وتدريب مجهزة بأحدث التقنيات
          </p>
          <Button size="lg" className="bg-white text-cyan-600 hover:bg-gray-100">
            احجز الآن
          </Button>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {spaces.map((space, index) => {
              const Icon = space.icon;
              return (
                <Card key={index} hover>
                  <CardHeader>
                    <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-cyan-600" />
                    </div>
                    <CardTitle>{space.title}</CardTitle>
                    <CardDescription>{space.description}</CardDescription>
                    <div className="text-2xl font-bold text-cyan-600 mt-3">{space.price}</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {space.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-cyan-600 rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full mt-6 bg-cyan-600 hover:bg-cyan-700">
                      احجز الآن
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
