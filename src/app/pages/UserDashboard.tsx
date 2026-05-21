import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import {
  User,
  GraduationCap,
  FileText,
  Briefcase,
  Calendar,
  Award,
  TrendingUp,
  Settings,
  Bell,
  Download,
} from 'lucide-react';

export function UserDashboard() {
  const courses = [
    { title: 'التسويق الرقمي المتقدم', progress: 65, status: 'جاري' },
    { title: 'إدارة المشاريع', progress: 100, status: 'مكتمل' },
  ];

  const applications = [
    { service: 'طلب انتساب', status: 'قيد المراجعة', date: '2026-05-15' },
    { service: 'تصديق فاتورة', status: 'مكتمل', date: '2026-05-10' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-white border-b border-border py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                مرحباً، أحمد محمود
              </h1>
              <p className="text-muted-foreground">
                آخر زيارة: اليوم الساعة 9:30 صباحاً
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" size="sm">
                <Bell className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { label: 'الدورات النشطة', value: '2', icon: GraduationCap, color: 'bg-blue-100 text-blue-600' },
            { label: 'الطلبات', value: '5', icon: FileText, color: 'bg-green-100 text-green-600' },
            { label: 'الشهادات', value: '3', icon: Award, color: 'bg-purple-100 text-purple-600' },
            { label: 'الحجوزات', value: '1', icon: Calendar, color: 'bg-orange-100 text-orange-600' },
          ].map((stat, i) => {
            const Icon = stat.icon;
            return (
              <Card key={i}>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-muted-foreground text-sm mb-1">{stat.label}</p>
                      <p className="text-3xl font-bold">{stat.value}</p>
                    </div>
                    <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>دوراتي</CardTitle>
              <CardDescription>الدورات التدريبية المسجل بها</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {courses.map((course, i) => (
                  <div key={i} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold">{course.title}</h3>
                      <Badge variant={course.status === 'مكتمل' ? 'success' : 'info'}>
                        {course.status}
                      </Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>التقدم</span>
                        <span>{course.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full transition-all"
                          style={{ width: `${course.progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>طلباتي</CardTitle>
              <CardDescription>آخر الطلبات المقدمة</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {applications.map((app, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{app.service}</h3>
                      <p className="text-sm text-muted-foreground">{app.date}</p>
                    </div>
                    <Badge variant={app.status === 'مكتمل' ? 'success' : 'warning'}>
                      {app.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>الشهادات</CardTitle>
              <CardDescription>الشهادات الحاصل عليها</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {['إدارة المشاريع', 'اللغة الإنجليزية - متقدم', 'التسويق الرقمي'].map((cert, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Award className="w-5 h-5 text-primary" />
                      <span className="font-medium">{cert}</span>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>الإحصائيات</CardTitle>
              <CardDescription>ملخص نشاطك</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { label: 'ساعات التدريب', value: '120', icon: TrendingUp },
                  { label: 'الشهادات المكتسبة', value: '3', icon: Award },
                  { label: 'الطلبات المكتملة', value: '8', icon: FileText },
                ].map((stat, i) => {
                  const Icon = stat.icon;
                  return (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Icon className="w-5 h-5 text-primary" />
                        <span className="text-muted-foreground">{stat.label}</span>
                      </div>
                      <span className="text-2xl font-bold">{stat.value}</span>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
