import { Link } from 'react-router';
import { Building2, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary p-2 rounded-lg">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">غرفة تجارة دمشق</h3>
                <p className="text-sm text-gray-400">المنصة الرقمية</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              منصة متكاملة لخدمات غرفة تجارة دمشق، توفر الخدمات الإلكترونية، التدريب، الاحتضان، وفرص الاستثمار لرواد الأعمال والمستثمرين.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">روابط سريعة</h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/services" className="text-sm hover:text-primary transition-colors">
                  الخدمات الأساسية
                </Link>
              </li>
              <li>
                <Link to="/academy" className="text-sm hover:text-primary transition-colors">
                  أكاديمية التدريب
                </Link>
              </li>
              <li>
                <Link to="/entrepreneurship" className="text-sm hover:text-primary transition-colors">
                  ريادة الأعمال
                </Link>
              </li>
              <li>
                <Link to="/coworking" className="text-sm hover:text-primary transition-colors">
                  المساحات المكتبية
                </Link>
              </li>
              <li>
                <Link to="/jobs" className="text-sm hover:text-primary transition-colors">
                  فرص العمل
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">خدماتنا</h4>
            <ul className="space-y-2.5">
              <li className="text-sm">الانتساب والتجديد</li>
              <li className="text-sm">التصديق والشهادات</li>
              <li className="text-sm">حاضنة الأعمال</li>
              <li className="text-sm">الدورات التدريبية</li>
              <li className="text-sm">الاستشارات المهنية</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">تواصل معنا</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm">دمشق، سوريا - ساحة المرجة</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm" dir="ltr">+963 11 2221111</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm" dir="ltr">info@dcc.sy</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © {currentYear} غرفة تجارة دمشق. جميع الحقوق محفوظة.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-sm text-gray-400 hover:text-primary transition-colors">
              سياسة الخصوصية
            </Link>
            <Link to="/terms" className="text-sm text-gray-400 hover:text-primary transition-colors">
              الشروط والأحكام
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
