import { Button } from '../components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Heart, Users, Briefcase, GraduationCap, Smile, HandHeart } from 'lucide-react';

export function InclusionPage() {
  const services = [
    {
      title: 'التدريب والتأهيل',
      description: 'برامج تدريبية مصممة خصيصاً لتطوير المهارات',
      icon: GraduationCap,
      features: ['دورات مهنية', 'تدريب على الحاسوب', 'مهارات التواصل', 'لغات'],
    },
    {
      title: 'الدعم الوظيفي',
      description: 'مساعدة في إيجاد فرص عمل مناسبة',
      icon: Briefcase,
      features: ['توظيف مباشر', 'تدريب عملي', 'إرشاد مهني', 'متابعة دورية'],
    },
    {
      title: 'الدمج المجتمعي',
      description: 'برامج دمج اجتماعي وأنشطة تفاعلية',
      icon: Users,
      features: ['فعاليات اجتماعية', 'أندية', 'رحلات', 'أنشطة ترفيهية'],
    },
    {
      title: 'الدعم النفسي',
      description: 'استشارات نفسية وجلسات دعم',
      icon: Smile,
      features: ['مستشارون متخصصون', 'جلسات فردية', 'جلسات جماعية', 'برامج توعية'],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-rose-600 to-pink-600 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="w-16 h-16 mx-auto mb-6" />
          <Badge className="mb-6 bg-white/20 text-white border-white/30">
            مركز دعم ذوي الهمم
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            معاً نحو مستقبل أفضل
          </h1>
          <p className="text-xl text-rose-50 max-w-3xl mx-auto mb-10 leading-relaxed">
            نوفر بيئة داعمة ومتاحة للجميع، مع برامج تدريب وتوظيف ودمج مجتمعي شامل
          </p>
          <Button size="lg" className="bg-white text-rose-600 hover:bg-gray-100 text-xl px-10 py-4">
            انضم إلينا
          </Button>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              خدماتنا
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              دعم شامل يغطي جميع جوانب التأهيل والدمج
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} hover className="border-2">
                  <CardHeader>
                    <div className="w-14 h-14 bg-rose-100 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-8 h-8 text-rose-600" />
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 text-base">
                          <div className="w-2 h-2 bg-rose-600 rounded-full" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <HandHeart className="w-16 h-16 text-rose-600 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-foreground mb-4">
            نحن هنا لدعمك
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            فريقنا المتخصص جاهز لمساعدتك في كل خطوة من رحلتك
          </p>
          <Button size="lg" className="bg-rose-600 hover:bg-rose-700 text-lg px-8">
            تواصل معنا
          </Button>
        </div>
      </section>
    </div>
  );
}
