import { Link } from 'react-router';
import { Button } from '../components/ui/Button';
import { Home, ArrowRight } from 'lucide-react';

export function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            الصفحة غير موجودة
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها إلى موقع آخر
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button size="lg">
              <Home className="w-5 h-5" />
              العودة إلى الرئيسية
            </Button>
          </Link>
          <Link to="/services">
            <Button size="lg" variant="outline">
              تصفح الخدمات
              <ArrowRight className="w-5 h-5 rotate-180" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
