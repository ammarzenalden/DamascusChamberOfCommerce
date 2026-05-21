import { useParams, Link } from 'react-router';
import { Button } from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import {
  Clock,
  Users,
  Award,
  Calendar,
  CheckCircle,
  Star,
  ArrowRight,
  Video,
  FileText,
  Download,
} from 'lucide-react';

export function CourseDetailsPage() {
  const { courseId } = useParams();

  const courseDetails = {
    title: 'التسويق الرقمي المتقدم',
    category: 'إدارة الأعمال',
    level: 'متوسط',
    duration: '10 أسابيع',
    students: 680,
    rating: 4.9,
    price: '280,000 ل.س',
    instructor: 'أ. محمد الشريف',
    instructorBio: 'خبير تسويق رقمي بخبرة 12 عاماً، عمل مع كبرى الشركات الإقليمية',
    description:
      'برنامج تدريبي شامل يغطي جميع جوانب التسويق الرقمي من الأساسيات إلى الاستراتيجيات المتقدمة',
    startDate: '2026-06-15',
    schedule: 'الأحد والثلاثاء، 6:00 - 8:30 مساءً',
    location: 'أونلاين + حضوري',
    certificate: 'شهادة معتمدة من غرفة تجارة دمشق',
  };

  const modules = [
    {
      title: 'مقدمة في التسويق الرقمي',
      lessons: 5,
      duration: '3 ساعات',
    },
    {
      title: 'التسويق عبر محركات البحث (SEO & SEM)',
      lessons: 8,
      duration: '6 ساعات',
    },
    {
      title: 'التسويق عبر وسائل التواصل الاجتماعي',
      lessons: 10,
      duration: '8 ساعات',
    },
    {
      title: 'التسويق بالمحتوى والبريد الإلكتروني',
      lessons: 7,
      duration: '5 ساعات',
    },
    {
      title: 'الإعلانات المدفوعة (Google Ads & Facebook Ads)',
      lessons: 9,
      duration: '7 ساعات',
    },
    {
      title: 'التحليلات وقياس الأداء',
      lessons: 6,
      duration: '4 ساعات',
    },
  ];

  const whatYouLearn = [
    'بناء استراتيجية تسويق رقمي متكاملة',
    'تحسين ظهور موقعك في محركات البحث (SEO)',
    'إنشاء وإدارة حملات إعلانية ناجحة',
    'التسويق عبر منصات التواصل الاجتماعي',
    'كتابة محتوى تسويقي جذاب',
    'تحليل البيانات واتخاذ قرارات مبنية على الأرقام',
    'استخدام أدوات Google Analytics و Facebook Insights',
    'بناء قمع مبيعات فعال',
  ];

  const requirements = [
    'معرفة أساسية باستخدام الإنترنت',
    'جهاز كمبيوتر أو لابتوب',
    'اتصال إنترنت مستقر',
    'الرغبة في التعلم والتطبيق العملي',
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <section className="bg-white border-b border-border py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary">
              الرئيسية
            </Link>
            <span>/</span>
            <Link to="/academy" className="hover:text-primary">
              الأكاديمية
            </Link>
            <span>/</span>
            <span className="text-foreground">{courseDetails.title}</span>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Course Header */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="warning">{courseDetails.level}</Badge>
                <Badge variant="info">{courseDetails.category}</Badge>
              </div>
              <h1 className="text-4xl font-bold text-foreground mb-4">
                {courseDetails.title}
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                {courseDetails.description}
              </p>
              <div className="flex flex-wrap items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{courseDetails.rating}</span>
                  <span className="text-muted-foreground">({courseDetails.students} متدرب)</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="w-5 h-5" />
                  <span>{courseDetails.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Users className="w-5 h-5" />
                  <span>{courseDetails.instructor}</span>
                </div>
              </div>
            </div>

            {/* What You'll Learn */}
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  ماذا ستتعلم؟
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {whatYouLearn.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Course Content */}
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  محتوى الدورة
                </h2>
                <div className="space-y-3">
                  {modules.map((module, index) => (
                    <div
                      key={index}
                      className="p-4 bg-gray-50 rounded-lg border border-border hover:border-primary transition-colors"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground mb-2">
                            {index + 1}. {module.title}
                          </h3>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1.5">
                              <Video className="w-4 h-4" />
                              {module.lessons} دروس
                            </span>
                            <span className="flex items-center gap-1.5">
                              <Clock className="w-4 h-4" />
                              {module.duration}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Requirements */}
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  المتطلبات
                </h2>
                <ul className="space-y-3">
                  {requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{req}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Instructor */}
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  المدرب
                </h2>
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {courseDetails.instructor}
                    </h3>
                    <p className="text-muted-foreground">{courseDetails.instructorBio}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Card>
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-6">
                    {courseDetails.price}
                  </div>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        تاريخ البدء
                      </span>
                      <span className="font-medium">{courseDetails.startDate}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        المواعيد
                      </span>
                      <span className="font-medium">{courseDetails.schedule}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-2 text-muted-foreground">
                        <FileText className="w-4 h-4" />
                        نمط التدريب
                      </span>
                      <span className="font-medium">{courseDetails.location}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-2 text-muted-foreground">
                        <Award className="w-4 h-4" />
                        الشهادة
                      </span>
                      <span className="font-medium text-primary">معتمدة</span>
                    </div>
                  </div>
                  <Button className="w-full mb-3" size="lg">
                    سجل الآن
                  </Button>
                  <Button variant="outline" className="w-full" size="lg">
                    <Download className="w-5 h-5" />
                    تحميل المنهاج
                  </Button>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-foreground mb-4">
                    هل لديك استفسار؟
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    فريقنا جاهز للإجابة على جميع أسئلتك
                  </p>
                  <Button variant="outline" className="w-full">
                    تواصل معنا
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
