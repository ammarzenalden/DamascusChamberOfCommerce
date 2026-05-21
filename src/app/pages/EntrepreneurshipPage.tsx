import { Button } from '../components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import {
  Rocket,
  TrendingUp,
  Users,
  Lightbulb,
  DollarSign,
  Target,
  Presentation,
  Palette,
  Share2,
  CheckCircle,
  ArrowLeft,
  Briefcase,
} from 'lucide-react';

export function EntrepreneurshipPage() {
  const services = [
    {
      title: 'احتضان المشاريع',
      description: 'نوفر بيئة حاضنة متكاملة لدعم مشروعك من الفكرة إلى التنفيذ',
      icon: Rocket,
      features: [
        'مساحة عمل مجانية لمدة 6 أشهر',
        'إرشاد من خبراء الأعمال',
        'ورش عمل متخصصة',
        'دعم فني وإداري',
      ],
    },
    {
      title: 'التمويل والاستثمار',
      description: 'نربطك بشبكة واسعة من المستثمرين والممولين',
      icon: DollarSign,
      features: [
        'عرض مشروعك على 50+ مستثمر',
        'جلسات تمويل جماعية',
        'تسهيلات قروض للمشاريع الواعدة',
        'برامج تمويل مرن',
      ],
    },
    {
      title: 'دراسات الجدوى',
      description: 'نساعدك في إعداد دراسة جدوى احترافية لمشروعك',
      icon: Target,
      features: [
        'تحليل السوق والمنافسين',
        'دراسة مالية متكاملة',
        'خطة تشغيلية تفصيلية',
        'توقعات الربحية',
      ],
    },
    {
      title: 'إعداد Pitch Deck',
      description: 'تصميم عرض تقديمي احترافي لجذب المستثمرين',
      icon: Presentation,
      features: [
        'تصميم احترافي وجذاب',
        'كتابة محتوى مقنع',
        'بيانات ورسوم بيانية',
        'تدريب على العرض',
      ],
    },
    {
      title: 'الهوية البصرية',
      description: 'بناء هوية بصرية متميزة لمشروعك',
      icon: Palette,
      features: [
        'تصميم الشعار',
        'هوية بصرية متكاملة',
        'دليل استخدام العلامة التجارية',
        'تصميم المطبوعات',
      ],
    },
    {
      title: 'التسويق والنمو',
      description: 'استراتيجيات تسويقية لنمو سريع ومستدام',
      icon: Share2,
      features: [
        'خطة تسويقية شاملة',
        'إدارة السوشال ميديا',
        'حملات إعلانية رقمية',
        'تحسين محركات البحث',
      ],
    },
  ];

  const stats = [
    { label: 'مشروع ناشئ', value: '250+', icon: Rocket },
    { label: 'مستثمر شريك', value: '50+', icon: Users },
    { label: 'تمويل مقدم', value: '120M', icon: DollarSign },
    { label: 'نسبة النجاح', value: '85%', icon: TrendingUp },
  ];

  const startups = [
    {
      name: 'تطبيق توصيل',
      category: 'التكنولوجيا',
      funding: '50M',
      status: 'نشط',
    },
    {
      name: 'منصة تعليمية',
      category: 'التعليم',
      funding: '30M',
      status: 'نشط',
    },
    {
      name: 'متجر إلكتروني',
      category: 'التجارة الإلكترونية',
      funding: '25M',
      status: 'نشط',
    },
    {
      name: 'شركة تصنيع',
      category: 'الصناعة',
      funding: '40M',
      status: 'تخرج',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-pink-600 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-white/20 text-white border-white/30">
              مركز ريادة الأعمال والابتكار
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              حوّل فكرتك إلى واقع
            </h1>
            <p className="text-xl text-purple-50 leading-relaxed mb-10">
              نوفر لك كل الدعم اللازم لبناء مشروعك الناشئ وتحويل فكرتك إلى شركة ناجحة
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                قدم مشروعك الآن
                <Rocket className="w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                تعرف على البرنامج
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-purple-100 rounded-xl mb-4">
                    <Icon className="w-7 h-7 text-purple-600" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              خدمات الحاضنة
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              دعم شامل يغطي جميع جوانب بناء مشروعك الناشئ
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} hover>
                  <CardHeader>
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-purple-600" />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2.5">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          {feature}
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

      {/* How it Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              كيف تعمل الحاضنة؟
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              رحلة واضحة من التقديم إلى النجاح
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'قدم طلبك', desc: 'املأ نموذج التقديم واشرح فكرتك' },
              { step: '2', title: 'التقييم', desc: 'نراجع طلبك ونقيم الجدوى' },
              { step: '3', title: 'القبول', desc: 'إذا تم قبولك، تبدأ رحلة الاحتضان' },
              { step: '4', title: 'النجاح', desc: 'تخرج بمشروع ناجح وقابل للنمو' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Startups */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              مشاريع مميزة
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              نماذج من الشركات الناشئة التي احتضناها
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {startups.map((startup, index) => (
              <Card key={index} hover>
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg mb-4" />
                  <h3 className="text-lg font-bold text-foreground mb-2">{startup.name}</h3>
                  <Badge variant="info" className="mb-3">{startup.category}</Badge>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">التمويل</span>
                      <span className="font-bold text-purple-600">{startup.funding} ل.س</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">الحالة</span>
                      <Badge variant="success">{startup.status}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Rocket className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            جاهز لبدء رحلتك؟
          </h2>
          <p className="text-xl text-purple-50 mb-10">
            قدم طلبك الآن وانضم إلى مئات الشركات الناشئة الناجحة
          </p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
            قدم مشروعك الآن
            <ArrowLeft className="w-5 h-5 rotate-180" />
          </Button>
        </div>
      </section>
    </div>
  );
}
