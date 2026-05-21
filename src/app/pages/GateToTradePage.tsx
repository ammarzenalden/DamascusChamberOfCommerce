import { Badge } from '../components/ui/Badge';
import { Card, CardContent } from '../components/ui/Card';
import { Building, Users, TrendingUp } from 'lucide-react';

export function GateToTradePage() {
  return (
    <div className="min-h-screen bg-white">

      <section className="py-24 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-6xl mx-auto px-4 text-center">

          <Badge variant="success" className="mb-6">
            Gate to Trade
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            Gate to Trade
          </h1>

          <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
            شركة متخصصة في إدارة المكاتب المرنة
            والخدمات التجارية الحديثة بالتعاون مع غرفة تجارة دمشق،
            بهدف خلق بيئة أعمال احترافية تدعم التجار
            ورواد الأعمال والشركات الناشئة.
          </p>

        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <Card hover>
              <CardContent className="pt-8">
                <Building className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">
                  المكاتب المرنة
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  مكاتب احترافية مجهزة بالكامل
                  لتناسب مختلف أنواع الأعمال.
                </p>
              </CardContent>
            </Card>

            <Card hover>
              <CardContent className="pt-8">
                <Users className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">
                  مجتمع الأعمال
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  بيئة متكاملة للتواصل وبناء العلاقات المهنية.
                </p>
              </CardContent>
            </Card>

            <Card hover>
              <CardContent className="pt-8">
                <TrendingUp className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">
                  دعم النمو التجاري
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  خدمات تساعد الشركات على التوسع
                  وتحقيق الاستدامة.
                </p>
              </CardContent>
            </Card>

          </div>

        </div>
      </section>

    </div>
  );
}