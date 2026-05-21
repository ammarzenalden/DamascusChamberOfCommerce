import { Link } from 'react-router';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Input } from '../components/ui/Input';
import {
  GraduationCap,
  Languages,
  Briefcase,
  TrendingUp,
  Users,
  Clock,
  Award,
  Star,
  Search,
  Filter,
} from 'lucide-react';
import { useState } from 'react';

export function AcademyPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('الكل');

  const courses = [
    // Language Courses
    {
      id: 'english-beginner',
      title: 'اللغة الإنجليزية - المستوى الأساسي',
      category: 'اللغات',
      level: 'مبتدئ',
      duration: '3 أشهر',
      students: 450,
      rating: 4.8,
      price: '150,000 ل.س',
      instructor: 'د. أحمد السيد',
      description: 'تعلم أساسيات اللغة الإنجليزية من الصفر',
      icon: Languages,
    },
    {
      id: 'english-intermediate',
      title: 'اللغة الإنجليزية - المستوى المتوسط',
      category: 'اللغات',
      level: 'متوسط',
      duration: '3 أشهر',
      students: 320,
      rating: 4.9,
      price: '180,000 ل.س',
      instructor: 'د. سارة محمود',
      description: 'طور مهاراتك في المحادثة والكتابة',
      icon: Languages,
    },
    {
      id: 'german',
      title: 'اللغة الألمانية',
      category: 'اللغات',
      level: 'مبتدئ',
      duration: '4 أشهر',
      students: 280,
      rating: 4.7,
      price: '200,000 ل.س',
      instructor: 'أ. مارتن شميدت',
      description: 'تعلم الألمانية للدراسة والعمل',
      icon: Languages,
    },
    {
      id: 'french',
      title: 'اللغة الفرنسية',
      category: 'اللغات',
      level: 'مبتدئ',
      duration: '3 أشهر',
      students: 230,
      rating: 4.6,
      price: '170,000 ل.س',
      instructor: 'أ. ماري دوبوا',
      description: 'أساسيات الفرنسية والمحادثة',
      icon: Languages,
    },
    {
      id: 'turkish',
      title: 'اللغة التركية',
      category: 'اللغات',
      level: 'مبتدئ',
      duration: '3 أشهر',
      students: 310,
      rating: 4.7,
      price: '160,000 ل.س',
      instructor: 'أ. أحمد يلماز',
      description: 'تعلم التركية للتواصل والعمل',
      icon: Languages,
    },
    {
      id: 'chinese',
      title: 'اللغة الصينية',
      category: 'اللغات',
      level: 'مبتدئ',
      duration: '4 أشهر',
      students: 180,
      rating: 4.8,
      price: '220,000 ل.س',
      instructor: 'د. لي وانغ',
      description: 'الصينية للمبتدئين والأعمال',
      icon: Languages,
    },

    // Business Courses
    {
      id: 'project-management',
      title: 'إدارة المشاريع الاحترافية',
      category: 'إدارة الأعمال',
      level: 'متقدم',
      duration: '2 أشهر',
      students: 420,
      rating: 4.9,
      price: '250,000 ل.س',
      instructor: 'د. خالد العمر',
      description: 'احترف إدارة المشاريع وفق معايير PMP',
      icon: Briefcase,
    },
    {
      id: 'entrepreneurship',
      title: 'ريادة الأعمال وإطلاق المشاريع',
      category: 'إدارة الأعمال',
      level: 'مبتدئ',
      duration: '6 أسابيع',
      students: 520,
      rating: 4.8,
      price: '200,000 ل.س',
      instructor: 'أ. ليلى حسن',
      description: 'من الفكرة إلى المشروع الناجح',
      icon: TrendingUp,
    },
    {
      id: 'digital-marketing',
      title: 'التسويق الرقمي المتقدم',
      category: 'إدارة الأعمال',
      level: 'متوسط',
      duration: '10 أسابيع',
      students: 680,
      rating: 4.9,
      price: '280,000 ل.س',
      instructor: 'أ. محمد الشريف',
      description: 'استراتيجيات التسويق عبر الإنترنت',
      icon: TrendingUp,
    },
    {
      id: 'accounting',
      title: 'المحاسبة المالية',
      category: 'إدارة الأعمال',
      level: 'مبتدئ',
      duration: '3 أشهر',
      students: 380,
      rating: 4.7,
      price: '230,000 ل.س',
      instructor: 'د. رامي قاسم',
      description: 'أساسيات المحاسبة والتقارير المالية',
      icon: Briefcase,
    },
    {
      id: 'hr-management',
      title: 'إدارة الموارد البشرية',
      category: 'إدارة الأعمال',
      level: 'متوسط',
      duration: '8 أسابيع',
      students: 290,
      rating: 4.6,
      price: '210,000 ل.س',
      instructor: 'أ. نور الدين',
      description: 'إدارة فرق العمل وتطوير المواهب',
      icon: Users,
    },
    {
      id: 'leadership',
      title: 'القيادة والإدارة الحديثة',
      category: 'إدارة الأعمال',
      level: 'متقدم',
      duration: '6 أسابيع',
      students: 350,
      rating: 4.8,
      price: '270,000 ل.س',
      instructor: 'د. فادي سليمان',
      description: 'مهارات القيادة لبناء فرق ناجحة',
      icon: Users,
    },

    // Professional Courses
    {
      id: 'ecommerce',
      title: 'التجارة الإلكترونية',
      category: 'الدورات المهنية',
      level: 'مبتدئ',
      duration: '8 أسابيع',
      students: 540,
      rating: 4.9,
      price: '240,000 ل.س',
      instructor: 'أ. عمر حداد',
      description: 'أنشئ متجرك الإلكتروني بنجاح',
      icon: TrendingUp,
    },
    {
      id: 'customer-service',
      title: 'خدمة العملاء الاحترافية',
      category: 'الدورات المهنية',
      level: 'مبتدئ',
      duration: '4 أسابيع',
      students: 410,
      rating: 4.7,
      price: '120,000 ل.س',
      instructor: 'أ. هالة كريم',
      description: 'مهارات التواصل مع العملاء',
      icon: Users,
    },
  ];

  const levels = ['الكل', 'مبتدئ', 'متوسط', 'متقدم'];
  const categories = ['الكل', ...Array.from(new Set(courses.map(c => c.category)))];
  const [selectedCategory, setSelectedCategory] = useState('الكل');

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.includes(searchQuery) || course.description.includes(searchQuery);
    const matchesLevel = selectedLevel === 'الكل' || course.level === selectedLevel;
    const matchesCategory = selectedCategory === 'الكل' || course.category === selectedCategory;
    return matchesSearch && matchesLevel && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-white/20 text-white border-white/30">
                أكاديمية التدريب والتأهيل
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                استثمر في مستقبلك المهني
              </h1>
              <p className="text-xl text-blue-50 leading-relaxed mb-8">
                برامج تدريبية احترافية معتمدة في اللغات، إدارة الأعمال، والمهارات المهنية
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  تصفح الدورات
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  تحميل البروشور
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardContent className="pt-6">
                  <GraduationCap className="w-10 h-10 mb-4" />
                  <div className="text-3xl font-bold mb-2">50+</div>
                  <div className="text-blue-50">برنامج تدريبي</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardContent className="pt-6">
                  <Users className="w-10 h-10 mb-4" />
                  <div className="text-3xl font-bold mb-2">8,500+</div>
                  <div className="text-blue-50">خريج</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardContent className="pt-6">
                  <Award className="w-10 h-10 mb-4" />
                  <div className="text-3xl font-bold mb-2">95%</div>
                  <div className="text-blue-50">نسبة النجاح</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardContent className="pt-6">
                  <Star className="w-10 h-10 mb-4" />
                  <div className="text-3xl font-bold mb-2">4.8/5</div>
                  <div className="text-blue-50">التقييم</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white border-b border-border sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            <div className="relative w-full md:w-96">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="ابحث عن دورة..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pr-10"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex gap-2 overflow-x-auto pb-2">
                <span className="text-sm font-medium text-muted-foreground flex items-center gap-2 whitespace-nowrap">
                  <Filter className="w-4 h-4" />
                  التصنيف:
                </span>
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
              <div className="flex gap-2 overflow-x-auto pb-2">
                <span className="text-sm font-medium text-muted-foreground flex items-center gap-2 whitespace-nowrap">
                  المستوى:
                </span>
                {levels.map((level) => (
                  <Button
                    key={level}
                    variant={selectedLevel === level ? 'primary' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedLevel(level)}
                    className="whitespace-nowrap"
                  >
                    {level}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              {filteredCourses.length} دورة متاحة
            </h2>
            <p className="text-muted-foreground">
              اختر البرنامج التدريبي المناسب لك
            </p>
          </div>

          {filteredCourses.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">لا توجد دورات مطابقة للبحث</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course) => {
                const Icon = course.icon;
                return (
                  <Link key={course.id} to={`/academy/${course.id}`}>
                    <Card hover className="h-full">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                          <Badge
                            variant={
                              course.level === 'مبتدئ'
                                ? 'success'
                                : course.level === 'متوسط'
                                ? 'warning'
                                : 'info'
                            }
                          >
                            {course.level}
                          </Badge>
                        </div>
                        <CardTitle className="text-lg leading-tight">{course.title}</CardTitle>
                        <CardDescription className="text-sm">
                          {course.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3 mb-4">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">المدرب</span>
                            <span className="font-medium">{course.instructor}</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="flex items-center gap-1.5 text-muted-foreground">
                              <Clock className="w-4 h-4" />
                              المدة
                            </span>
                            <span className="font-medium">{course.duration}</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="flex items-center gap-1.5 text-muted-foreground">
                              <Users className="w-4 h-4" />
                              المتدربين
                            </span>
                            <span className="font-medium">{course.students}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              <span className="text-sm font-medium">{course.rating}</span>
                            </div>
                            <span className="text-lg font-bold text-primary">{course.price}</span>
                          </div>
                        </div>
                        <Button className="w-full">
                          سجل الآن
                        </Button>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <GraduationCap className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-foreground mb-4">
            احصل على شهادة معتمدة
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            جميع دوراتنا معتمدة من وزارة التعليم العالي وغرفة تجارة دمشق
          </p>
          <Button size="lg">
            تواصل معنا للاستفسار
          </Button>
        </div>
      </section>
    </div>
  );
}
