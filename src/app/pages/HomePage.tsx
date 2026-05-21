import { Link } from 'react-router';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import {
  FileCheck,
  GraduationCap,
  Rocket,
  Users,
  Briefcase,
  TrendingUp,
  Award,
  Building,
  Lightbulb,
  Heart,
  ArrowLeft,
  CheckCircle,
  Star,
} from 'lucide-react';

export function HomePage() {
  const stats = [
    { label: 'شركة مسجلة', value: '15,000+', icon: Building },
    { label: 'خريج من الأكاديمية', value: '8,500+', icon: GraduationCap },
    { label: 'مشروع ناشئ محتضن', value: '250+', icon: Rocket },
    { label: 'فرصة عمل متاحة', value: '1,200+', icon: Briefcase },
  ];

  const services = [
    {
      title: 'الانتساب والتجديد',
      description: 'خدمات الانتساب للغرفة التجارية وتجديد العضوية إلكترونياً',
      icon: FileCheck,
      link: '/services',
    },
    {
      title: 'التصديق والشهادات',
      description: 'تصديق الفواتير وإصدار شهادات المنشأ والتوصيات التجارية',
      icon: Award,
      link: '/services',
    },
    {
      title: 'حاضنة الأعمال',
      description: 'دعم المشاريع الناشئة من الفكرة إلى التنفيذ',
      icon: Rocket,
      link: '/entrepreneurship',
    },
    {
      title: 'الدورات التدريبية',
      description: 'برامج تدريبية شاملة في اللغات وإدارة الأعمال',
      icon: GraduationCap,
      link: '/academy',
    },
    {
      title: 'مساحات العمل',
      description: 'مكاتب مشتركة وقاعات اجتماعات مجهزة بأحدث التقنيات',
      icon: Building,
      link: '/coworking',
    },
    {
      title: 'دعم ذوي الهمم',
      description: 'برامج تأهيل ودعم وظيفي للأشخاص ذوي الإعاقة',
      icon: Heart,
      link: '/inclusion',
    },
  ];

  const academies = [
    {
      title: 'أكاديمية اللغات',
      description: 'دورات في الإنجليزية، الألمانية، الفرنسية، التركية، الصينية',
      courses: 6,
      students: '3,200+',
      color: 'bg-blue-50 border-blue-200',
    },
    {
      title: 'أكاديمية إدارة الأعمال',
      description: 'برامج احترافية في القيادة، التسويق، المحاسبة، والموارد البشرية',
      courses: 12,
      students: '2,800+',
      color: 'bg-green-50 border-green-200',
    },
    {
      title: 'الدورات المهنية',
      description: 'تدريب عملي في التجارة الإلكترونية، التسويق الرقمي، وخدمة العملاء',
      courses: 8,
      students: '2,500+',
      color: 'bg-purple-50 border-purple-200',
    },
  ];

  const successStories = [
    {
      name: 'شركة تقنية سورية',
      category: 'التكنولوجيا',
      achievement: 'من فكرة إلى شركة بـ 50 موظف في عامين',
      image: '🚀',
    },
    {
      name: 'متجر إلكتروني',
      category: 'التجارة الإلكترونية',
      achievement: 'تحقيق إيرادات 5 ملايين ليرة في السنة الأولى',
      image: '🛒',
    },
    {
      name: 'مشروع تصنيع',
      category: 'الصناعة',
      achievement: 'التوسع للتصدير في 6 دول عربية',
      image: '🏭',
    },
  ];

  return (
    <div className="min-h-screen">
     
	  {/* Traders Intro Section */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

      <div>
        <Badge variant="success" className="mb-4">
          للتجار ورواد الأعمال
        </Badge>

        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
          منصة متكاملة لدعم التجار
          وتطوير الأعمال في سوريا
        </h2>

        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          نوفر للتجار والشركات خدمات رقمية متكاملة تشمل
          التصديق، الانتساب، المكاتب المرنة،
          التدريب، والاستشارات التجارية
          ضمن بيئة احترافية تساعد على النمو والتوسع.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link to="/services">
            <Button size="lg">
              استكشف الخدمات
            </Button>
          </Link>

         
        </div>
      </div>

      <Card className="border-0 shadow-xl bg-gradient-to-br from-primary/5 to-green-100">
        <CardContent className="p-10">
          <div className="space-y-6">

            <div className="flex items-center gap-4">
              <CheckCircle className="w-6 h-6 text-primary" />
              <span className="text-lg">
                خدمات تجارية متكاملة
              </span>
            </div>

            <div className="flex items-center gap-4">
              <CheckCircle className="w-6 h-6 text-primary" />
              <span className="text-lg">
                مكاتب مرنة وقاعات اجتماعات
              </span>
            </div>

            <div className="flex items-center gap-4">
              <CheckCircle className="w-6 h-6 text-primary" />
              <span className="text-lg">
                دعم المشاريع الناشئة
              </span>
            </div>

            <div className="flex items-center gap-4">
              <CheckCircle className="w-6 h-6 text-primary" />
              <span className="text-lg">
                برامج تدريب وتأهيل احترافية
              </span>
            </div>

          </div>
        </CardContent>
      </Card>

    </div>
  </div>
</section>
	  {/* Gate To Trade Overview */}
<section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="text-center mb-14">
      <Badge variant="info" className="mb-4">
        Gate to Trade
      </Badge>

<div className="mb-6">
  <p className="text-primary font-semibold tracking-wider uppercase mb-3">
    Gate to Trade
  </p>

  <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
    بوابتك نحو التجارة الحديثة
  </h2>
</div>

      <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
        Gate to Trade هي شركة متخصصة بإدارة المكاتب المرنة
        والخدمات التجارية الحديثة، وتعمل بالشراكة مع
        غرفة تجارة دمشق لتقديم بيئة أعمال متطورة
        تدعم الشركات ورواد الأعمال.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      <Card hover>
        <CardContent className="pt-8">
          <Building className="w-10 h-10 text-primary mb-4" />

          <h3 className="text-xl font-bold mb-3">
            مكاتب مرنة
          </h3>

          <p className="text-muted-foreground">
            مساحات عمل حديثة مجهزة بالكامل
            للشركات ورواد الأعمال.
          </p>
        </CardContent>
      </Card>

      <Card hover>
        <CardContent className="pt-8">
          <Users className="w-10 h-10 text-primary mb-4" />

          <h3 className="text-xl font-bold mb-3">
            مجتمع أعمال
          </h3>

          <p className="text-muted-foreground">
            بيئة احترافية للتواصل وبناء الشراكات
            وتوسيع العلاقات التجارية.
          </p>
        </CardContent>
      </Card>

      <Card hover>
        <CardContent className="pt-8">
          <TrendingUp className="w-10 h-10 text-primary mb-4" />

          <h3 className="text-xl font-bold mb-3">
            دعم النمو
          </h3>

          <p className="text-muted-foreground">
            خدمات واستشارات تساعد الشركات
            على التطور والتوسع.
          </p>
        </CardContent>
      </Card>

    </div>

  </div>
</section>
 {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-white to-green-50 py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="success" className="mb-6 text-sm px-4 py-2">
              المنصة الرقمية الشاملة لغرفة تجارة دمشق
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              نمو أعمالك يبدأ من
              <span className="text-primary"> هنا</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-3xl mx-auto">
              منصة متكاملة توفر خدمات الغرفة التجارية، التدريب المهني، احتضان المشاريع الناشئة، والمساحات المكتبية في مكان واحد
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/services">
                <Button size="lg" className="shadow-lg hover:shadow-xl w-full sm:w-auto">
                  ابدأ الآن
                  <ArrowLeft className="w-5 h-5 rotate-180" />
                </Button>
              </Link>
              <Link to="/academy">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  تصفح الدورات التدريبية
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="py-16 bg-white border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-green-100 rounded-xl mb-4">
                    <Icon className="w-7 h-7 text-primary" />
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

      {/* Main Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              خدماتنا الأساسية
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              مجموعة شاملة من الخدمات المصممة لدعم نمو أعمالك وتطوير مهاراتك
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link key={index} to={service.link}>
                  <Card hover className="h-full">
                    <CardHeader>
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle>{service.title}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <span className="text-primary text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
                        اعرف المزيد
                        <ArrowLeft className="w-4 h-4 rotate-180" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Academies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              الأكاديميات التدريبية
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              برامج تدريبية احترافية معتمدة لتطوير مهاراتك وتعزيز فرصك المهنية
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {academies.map((academy, index) => (
              <div key={index} className={`border-2 ${academy.color} rounded-2xl p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}>
                <div className="flex items-start justify-between mb-4">
                  <GraduationCap className="w-10 h-10 text-primary" />
                  <Badge variant="success">{academy.courses} دورات</Badge>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">{academy.title}</h3>
                <p className="text-muted-foreground mb-6">{academy.description}</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                  <Users className="w-4 h-4" />
                  <span>{academy.students} متدرب</span>
                </div>
                <Link to="/academy">
                  <Button variant="outline" className="w-full">
                    استكشف البرامج
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Entrepreneurship CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-green-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-white/20 text-white border-white/30">
                مركز ريادة الأعمال
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                حوّل فكرتك إلى مشروع ناجح
              </h2>
              <p className="text-lg text-green-50 mb-8 leading-relaxed">
                نوفر لك كل ما تحتاجه لبناء مشروعك الناشئ: الاحتضان، التمويل، الإرشاد، التسويق، وبناء الهوية التجارية
              </p>
              <div className="space-y-3 mb-8">
                {[
                  'احتضان ودعم المشاريع الناشئة',
                  'ربطك بالمستثمرين والممولين',
                  'إعداد خطط الأعمال وdeck العرض',
                  'التسويق وبناء الهوية البصرية',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/entrepreneurship">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                  ابدأ مشروعك الآن
                  <Rocket className="w-5 h-5" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardContent className="pt-6">
                  <Lightbulb className="w-10 h-10 mb-4" />
                  <div className="text-3xl font-bold mb-2">250+</div>
                  <div className="text-green-50">مشروع محتضن</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardContent className="pt-6">
                  <TrendingUp className="w-10 h-10 mb-4" />
                  <div className="text-3xl font-bold mb-2">85%</div>
                  <div className="text-green-50">نسبة النجاح</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardContent className="pt-6">
                  <Users className="w-10 h-10 mb-4" />
                  <div className="text-3xl font-bold mb-2">50+</div>
                  <div className="text-green-50">مستثمر شريك</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardContent className="pt-6">
                  <Award className="w-10 h-10 mb-4" />
                  <div className="text-3xl font-bold mb-2">120M</div>
                  <div className="text-green-50">تمويل مقدم</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              قصص نجاح ملهمة
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              مشاريع بدأت من حاضنة الأعمال وحققت نجاحاً باهراً
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card key={index} hover>
                <CardContent className="pt-6">
                  <div className="text-6xl mb-6 text-center">{story.image}</div>
                  <Badge variant="info" className="mb-4">{story.category}</Badge>
                  <h3 className="text-xl font-bold text-foreground mb-3">{story.name}</h3>
                  <p className="text-muted-foreground mb-4">{story.achievement}</p>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            جاهز للبدء؟
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            انضم إلى آلاف الشركات ورواد الأعمال الذين يثقون بخدماتنا
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services">
              <Button size="lg" className="w-full sm:w-auto">
                سجل الآن
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                تواصل معنا
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
