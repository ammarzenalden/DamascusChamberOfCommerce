import { Button } from '../components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Input } from '../components/ui/Input';
import {
  FileCheck,
  Award,
  Scale,
  TrendingUp,
  FileText,
  Building,
  CheckCircle,
  Clock,
  Shield,
  Search,
} from 'lucide-react';
import { useState } from 'react';

export function ServicesPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const services = [
    {
      title: 'الانتساب والتجديد',
      description: 'انضم إلى عضوية غرفة تجارة دمشق أو جدد عضويتك إلكترونياً بكل سهولة',
      icon: FileCheck,
      features: [
        'طلب انتساب جديد',
        'تجديد العضوية السنوي',
        'استخراج بطاقة العضوية',
        'تحديث بيانات الشركة',
      ],
      duration: '2-3 أيام عمل',
      price: 'حسب نوع العضوية',
      category: 'العضوية',
    },
    {
      title: 'تصديق الفواتير',
      description: 'تصديق الفواتير التجارية والمستندات الرسمية للمعاملات الداخلية والخارجية',
      icon: Award,
      features: [
        'تصديق الفواتير التجارية',
        'تصديق قوائم الأسعار',
        'تصديق العقود التجارية',
        'التصديق الإلكتروني السريع',
      ],
      duration: '24 ساعة',
      price: '5,000 ل.س للوثيقة',
      category: 'التصديق',
    },
    {
      title: 'شهادات المنشأ',
      description: 'إصدار شهادات منشأ البضائع للتصدير والاستيراد',
      icon: FileText,
      features: [
        'شهادة منشأ عادية',
        'شهادة منشأ تفضيلية',
        'شهادة إعادة تصدير',
        'تصديق شهادات المنشأ',
      ],
      duration: '1-2 يوم عمل',
      price: '8,000 ل.س للشهادة',
      category: 'التصديق',
    },
    {
      title: 'إجازات الاستيراد والتصدير',
      description: 'استخراج التوصيات وإجازات الاستيراد اللازمة للعمليات التجارية',
      icon: TrendingUp,
      features: [
        'إجازة استيراد',
        'إجازة تصدير',
        'إجازة إعادة تصدير',
        'تجديد الإجازات',
      ],
      duration: '3-5 أيام عمل',
      price: 'حسب نوع الإجازة',
      category: 'الاستيراد والتصدير',
    },
    {
      title: 'التحكيم التجاري',
      description: 'تسوية النزاعات التجارية عبر التحكيم المحايد والسريع',
      icon: Scale,
      features: [
        'تحكيم النزاعات التجارية',
        'الوساطة التجارية',
        'الاستشارات القانونية',
        'صياغة العقود',
      ],
      duration: 'حسب الحالة',
      price: 'حسب قيمة النزاع',
      category: 'القانونية',
    },
    {
      title: 'حاضنة الأعمال',
      description: 'دعم ورعاية المشاريع الناشئة من الفكرة حتى النجاح',
      icon: Building,
      features: [
        'احتضان المشاريع الناشئة',
        'الإرشاد والتوجيه',
        'ربط مع المستثمرين',
        'توفير المساحات المكتبية',
      ],
      duration: '6-12 شهر',
      price: 'برنامج مدعوم',
      category: 'ريادة الأعمال',
    },
  ];

  const filteredServices = services.filter(service =>
    service.title.includes(searchQuery) ||
    service.description.includes(searchQuery) ||
    service.category.includes(searchQuery)
  );

  const categories = ['الكل', ...Array.from(new Set(services.map(s => s.category)))];
  const [selectedCategory, setSelectedCategory] = useState('الكل');

  const displayedServices = selectedCategory === 'الكل'
    ? filteredServices
    : filteredServices.filter(s => s.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-green-dark text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="mb-6 bg-white/20 text-white border-white/30">
              خدمات غرفة التجارة
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              خدمات تجارية متكاملة
            </h1>
            <p className="text-xl text-green-50 leading-relaxed">
              نوفر لك جميع الخدمات التي تحتاجها لإدارة أعمالك التجارية بكفاءة واحترافية
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white border-b border-border sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="w-full md:w-96">
              <div className="relative">
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="ابحث عن خدمة..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pr-10"
                />
              </div>
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'primary' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="whitespace-nowrap"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {displayedServices.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">لا توجد خدمات مطابقة للبحث</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayedServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card key={index} hover className="h-full flex flex-col">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                          <Icon className="w-7 h-7 text-primary" />
                        </div>
                        <Badge variant="info" className="text-xs">
                          {service.category}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <CardDescription className="text-sm">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col justify-between">
                      <div className="space-y-2.5 mb-6">
                        {service.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <div className="space-y-3 pt-4 border-t border-border">
                        <div className="flex items-center justify-between text-sm">
                          <span className="flex items-center gap-2 text-muted-foreground">
                            <Clock className="w-4 h-4" />
                            المدة
                          </span>
                          <span className="font-medium">{service.duration}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="flex items-center gap-2 text-muted-foreground">
                            <Shield className="w-4 h-4" />
                            الرسوم
                          </span>
                          <span className="font-medium">{service.price}</span>
                        </div>
                        <Button className="w-full mt-4">
                          قدم طلب الخدمة
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            هل تحتاج مساعدة في اختيار الخدمة المناسبة؟
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            فريقنا جاهز لمساعدتك في اختيار الخدمة الأنسب لاحتياجاتك التجارية
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              تواصل مع فريق الدعم
            </Button>
            <Button size="lg" variant="outline">
              حجز موعد استشاري
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
