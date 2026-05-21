import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Users, FileText, GraduationCap, TrendingUp, DollarSign, Briefcase } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

export function AdminDashboard() {
  const stats = [
    { label: 'إجمالي المستخدمين', value: '15,420', change: '+12%', icon: Users, color: 'bg-blue-100 text-blue-600' },
    { label: 'الطلبات الجديدة', value: '342', change: '+5%', icon: FileText, color: 'bg-green-100 text-green-600' },
    { label: 'الدورات النشطة', value: '48', change: '+8%', icon: GraduationCap, color: 'bg-purple-100 text-purple-600' },
    { label: 'الإيرادات الشهرية', value: '85M', change: '+18%', icon: DollarSign, color: 'bg-orange-100 text-orange-600' },
  ];

  const revenueData = [
    { month: 'يناير', revenue: 45 },
    { month: 'فبراير', revenue: 52 },
    { month: 'مارس', revenue: 48 },
    { month: 'أبريل', revenue: 61 },
    { month: 'مايو', revenue: 85 },
  ];

  const coursesData = [
    { category: 'اللغات', students: 320 },
    { category: 'الأعمال', students: 280 },
    { category: 'المهنية', students: 250 },
    { category: 'تقنية', students: 180 },
  ];

  const recentApplications = [
    { name: 'أحمد محمد', service: 'طلب انتساب', status: 'قيد المراجعة', date: '2026-05-21' },
    { name: 'سارة علي', service: 'تصديق فاتورة', status: 'معتمد', date: '2026-05-21' },
    { name: 'خالد يوسف', service: 'شهادة منشأ', status: 'قيد المراجعة', date: '2026-05-20' },
    { name: 'ليلى حسن', service: 'تسجيل دورة', status: 'مكتمل', date: '2026-05-20' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-primary to-green-dark text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-2">لوحة تحكم الإدارة</h1>
          <p className="text-green-50">نظرة شاملة على أداء المنصة</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <Card key={i}>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <Badge variant="success">{stat.change}</Badge>
                  </div>
                  <p className="text-muted-foreground text-sm mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold">{stat.value}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>الإيرادات الشهرية</CardTitle>
              <CardDescription>بالملايين (ل.س)</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="revenue" stroke="#059669" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>الطلاب حسب الفئة</CardTitle>
              <CardDescription>عدد الطلاب المسجلين</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={coursesData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="category" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="students" fill="#059669" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Recent Applications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>آخر الطلبات</CardTitle>
              <CardDescription>الطلبات الأخيرة المقدمة</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentApplications.map((app, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{app.name}</h3>
                      <p className="text-sm text-muted-foreground">{app.service}</p>
                      <p className="text-xs text-muted-foreground mt-1">{app.date}</p>
                    </div>
                    <Badge
                      variant={
                        app.status === 'مكتمل' || app.status === 'معتمد'
                          ? 'success'
                          : 'warning'
                      }
                    >
                      {app.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>الإحصائيات السريعة</CardTitle>
              <CardDescription>ملخص الأداء</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { label: 'معدل التسجيل اليومي', value: '45', unit: 'مستخدم/يوم' },
                  { label: 'معدل إتمام الدورات', value: '78%', unit: '' },
                  { label: 'رضا المستخدمين', value: '4.6', unit: '/ 5' },
                  { label: 'الطلبات المعلقة', value: '23', unit: 'طلب' },
                  { label: 'متوسط وقت المعالجة', value: '2.5', unit: 'يوم' },
                ].map((stat, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-muted-foreground">{stat.label}</span>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-primary">{stat.value}</span>
                      {stat.unit && <span className="text-sm text-muted-foreground mr-1">{stat.unit}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
