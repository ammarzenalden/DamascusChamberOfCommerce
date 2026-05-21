import { useState } from 'react';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Input } from '../components/ui/Input';
import { Briefcase, MapPin, DollarSign, Clock, Building, Search } from 'lucide-react';

export function JobsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const jobs = [
    {
      title: 'مطور Full Stack',
      company: 'شركة تقنية سورية',
      location: 'دمشق',
      type: 'دوام كامل',
      salary: '800,000 - 1,200,000 ل.س',
      posted: 'منذ يومين',
      category: 'تقنية',
    },
    {
      title: 'مدير تسويق رقمي',
      company: 'وكالة إعلانات',
      location: 'دمشق',
      type: 'دوام كامل',
      salary: '600,000 - 900,000 ل.س',
      posted: 'منذ 3 أيام',
      category: 'تسويق',
    },
    {
      title: 'محاسب مالي',
      company: 'شركة استيراد وتصدير',
      location: 'دمشق',
      type: 'دوام كامل',
      salary: '500,000 - 700,000 ل.س',
      posted: 'منذ أسبوع',
      category: 'محاسبة',
    },
    {
      title: 'مصمم جرافيك',
      company: 'وكالة تصميم',
      location: 'دمشق',
      type: 'دوام جزئي',
      salary: '400,000 - 600,000 ل.س',
      posted: 'منذ 4 أيام',
      category: 'تصميم',
    },
    {
      title: 'مدير مبيعات',
      company: 'شركة تجارية',
      location: 'دمشق',
      type: 'دوام كامل',
      salary: '700,000 - 1,000,000 ل.س',
      posted: 'منذ 5 أيام',
      category: 'مبيعات',
    },
    {
      title: 'مدير موارد بشرية',
      company: 'مجموعة شركات',
      location: 'دمشق',
      type: 'دوام كامل',
      salary: '650,000 - 850,000 ل.س',
      posted: 'منذ 3 أيام',
      category: 'موارد بشرية',
    },
  ];

  const filteredJobs = jobs.filter(job =>
    job.title.includes(searchQuery) ||
    job.company.includes(searchQuery) ||
    job.category.includes(searchQuery)
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-emerald-600 to-teal-600 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white/30">
            منصة التوظيف
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            ابحث عن وظيفة أحلامك
          </h1>
          <p className="text-xl text-emerald-50 max-w-3xl mx-auto mb-10">
            آلاف الفرص الوظيفية من أفضل الشركات في سوريا
          </p>
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
              <Input
                type="text"
                placeholder="ابحث عن وظيفة، شركة، أو مجال..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pr-12 py-4 text-lg bg-white"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              {filteredJobs.length} وظيفة متاحة
            </h2>
          </div>

          <div className="space-y-4">
            {filteredJobs.map((job, index) => (
              <Card key={index} hover className="transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Building className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                          <p className="text-muted-foreground mb-3">{job.company}</p>
                          <div className="flex flex-wrap gap-3">
                            <Badge variant="info">
                              <MapPin className="w-3 h-3 ml-1" />
                              {job.location}
                            </Badge>
                            <Badge variant="success">
                              <Briefcase className="w-3 h-3 ml-1" />
                              {job.type}
                            </Badge>
                            <Badge>
                              <DollarSign className="w-3 h-3 ml-1" />
                              {job.salary}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-3">
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {job.posted}
                      </span>
                      <Button>
                        تقدم للوظيفة
                      </Button>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Briefcase className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-foreground mb-4">
            لم تجد الوظيفة المناسبة؟
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            ارفع سيرتك الذاتية وسنتواصل معك عند توفر فرص مناسبة
          </p>
          <Button size="lg">
            ارفع سيرتك الذاتية
          </Button>
        </div>
      </section>
    </div>
  );
}
