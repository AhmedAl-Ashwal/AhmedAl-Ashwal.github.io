// All site content. English and Arabic side by side; UI chrome strings live in i18n.js.

export const PROFILE = {
  name: { en: 'Ahmed Alashwal', ar: 'أحمد الأشول' },
  handle: 'github.com/AhmedAl-Ashwal',
  email: 'aalashwal.sa@gmail.com',
  phone: '+967 774 007 288',
  whatsapp: '967774007288',
  github: 'https://github.com/AhmedAl-Ashwal',
  linkedin: 'https://www.linkedin.com/in/ahmed-alashwal-b5605537a/',
  site: 'https://ahmedal-ashwal.github.io/',
  guidePdf: 'assets/files/web-pricing-guide-2026.pdf',
  stats: { tests: '2,200+', erpApps: '18' },
};

export const DOMAINS = [
  { id: 'web', label: { en: 'Web', ar: 'الويب' },
    summary: { en: 'Web systems, admin panels and bilingual interfaces, from the server to the screen.', ar: 'أنظمة ويب ولوحات إدارة وواجهات ثنائية اللغة، من الخادم إلى الشاشة.' } },
  { id: 'backend', label: { en: 'Backend & Architecture', ar: 'الخلفية والمعمارية' },
    summary: { en: 'APIs, multi-tenant data models, permissions and accounting logic.', ar: 'واجهات برمجية ونماذج بيانات متعددة المستأجرين وصلاحيات ومنطق محاسبي.' } },
  { id: 'mobile', label: { en: 'Mobile', ar: 'الجوال' },
    summary: { en: 'Cross-platform Flutter apps with encryption, signed release builds and large test suites.', ar: 'تطبيقات Flutter متعددة المنصات مع التشفير ونسخ إصدار موقّعة ومجموعات اختبار كبيرة.' } },
  { id: 'erp', label: { en: 'ERP', ar: 'تخطيط الموارد ERP' },
    summary: { en: 'ERPNext/Frappe customisation and custom ERP builds for finance, HR, projects and inventory.', ar: 'تخصيص ERPNext/Frappe وبناء أنظمة ERP للمالية والموارد البشرية والمشاريع والمخزون.' } },
  { id: 'data', label: { en: 'Data', ar: 'البيانات' },
    summary: { en: 'Relational schemas, migrations, caching and reporting.', ar: 'مخططات قواعد البيانات والترحيل والتخزين المؤقت والتقارير.' } },
  { id: 'ai', label: { en: 'AI & Automation', ar: 'الذكاء الاصطناعي والأتمتة' },
    summary: { en: 'LLM integrations, speech-to-text and AI-assisted engineering workflows.', ar: 'تكامل النماذج اللغوية والتفريغ الصوتي وسير عمل هندسي معزز بالذكاء الاصطناعي.' } },
  { id: 'devops', label: { en: 'DevOps & Quality', ar: 'التشغيل والجودة' },
    summary: { en: 'Containers, deployment, CI and the tests that keep every release safe.', ar: 'الحاويات والنشر والتكامل المستمر والاختبارات التي تحمي كل إصدار.' } },
  { id: 'design', label: { en: 'Design & Docs', ar: 'التصميم والتوثيق' },
    summary: { en: 'Design systems, Arabic typography, print design and technical documentation.', ar: 'أنظمة التصميم والطباعة العربية وتصميم المطبوعات والتوثيق التقني.' } },
];

export const SKILLS = [
  // web
  { id: 'laravel', name: 'Laravel', domain: 'web' },
  { id: 'php', name: 'PHP', domain: 'web' },
  { id: 'livewire', name: 'Livewire · Volt', domain: 'web' },
  { id: 'filament', name: 'Filament', domain: 'web' },
  { id: 'vue-inertia', name: 'Vue · Inertia', domain: 'web' },
  { id: 'angular', name: 'Angular', domain: 'web' },
  { id: 'react', name: 'React', domain: 'web' },
  { id: 'nextjs', name: 'Next.js', domain: 'web' },
  { id: 'typescript', name: 'TypeScript · JavaScript', domain: 'web' },
  { id: 'pwa', name: 'PWA', domain: 'web' },
  { id: 'rtl', name: { en: 'Bilingual & RTL interfaces', ar: 'واجهات ثنائية اللغة و RTL' }, domain: 'web' },
  { id: 'astro', name: 'Astro', domain: 'web', extra: true },
  { id: 'tailwind', name: 'Tailwind CSS · shadcn/ui', domain: 'web', extra: true },
  // backend & architecture
  { id: 'rest', name: { en: 'REST APIs · Sanctum', ar: 'واجهات REST · Sanctum' }, domain: 'backend' },
  { id: 'nestjs', name: 'NestJS · TypeORM', domain: 'backend' },
  { id: 'go', name: 'Go', domain: 'backend' },
  { id: 'multi-tenancy', name: { en: 'Multi-tenancy', ar: 'تعدد المستأجرين' }, domain: 'backend' },
  { id: 'rbac', name: { en: 'Roles & permissions', ar: 'الأدوار والصلاحيات' }, domain: 'backend' },
  { id: 'accounting', name: { en: 'Double-entry accounting', ar: 'المحاسبة بالقيد المزدوج' }, domain: 'backend' },
  { id: 'e2ee', name: { en: 'End-to-end encryption', ar: 'التشفير الطرفي' }, domain: 'backend' },
  { id: 'security', name: { en: 'Security hardening', ar: 'تقوية الأمان' }, domain: 'backend' },
  // mobile
  { id: 'flutter', name: 'Flutter', domain: 'mobile' },
  { id: 'dart', name: 'Dart', domain: 'mobile' },
  { id: 'firebase', name: 'Firebase', domain: 'mobile' },
  { id: 'flutter-testing', name: { en: 'Flutter testing', ar: 'اختبارات Flutter' }, domain: 'mobile' },
  { id: 'release-signing', name: { en: 'Release builds & signing', ar: 'نسخ الإصدار والتوقيع' }, domain: 'mobile' },
  { id: 'supabase', name: 'Supabase', domain: 'mobile', extra: true },
  // erp
  { id: 'frappe', name: 'ERPNext · Frappe v15', domain: 'erp' },
  { id: 'hrms', name: 'Frappe HRMS', domain: 'erp' },
  { id: 'erp-reports', name: { en: 'Hijri & management reports', ar: 'التقارير الإدارية والهجرية' }, domain: 'erp' },
  { id: 'data-migration', name: { en: 'Data migration & import', ar: 'ترحيل البيانات واستيرادها' }, domain: 'erp' },
  // data
  { id: 'mysql', name: 'MySQL · MariaDB', domain: 'data' },
  { id: 'postgresql', name: 'PostgreSQL', domain: 'data' },
  { id: 'redis', name: 'Redis', domain: 'data' },
  { id: 'python', name: 'Python', domain: 'data' },
  { id: 'pdf-excel', name: { en: 'PDF & Excel generation', ar: 'توليد PDF و Excel' }, domain: 'data' },
  { id: 'excel', name: 'Excel · Power Query', domain: 'data', extra: true },
  // ai
  { id: 'llm-apis', name: 'OpenAI · Anthropic · Gemini APIs', domain: 'ai', extra: true },
  { id: 'ai-sdk', name: 'Vercel AI SDK', domain: 'ai', extra: true },
  { id: 'whisper', name: { en: 'Whisper speech-to-text', ar: 'التفريغ الصوتي Whisper' }, domain: 'ai', extra: true },
  { id: 'ai-dev', name: { en: 'AI-assisted engineering (Claude Code)', ar: 'هندسة معززة بالذكاء الاصطناعي (Claude Code)' }, domain: 'ai', extra: true },
  // devops & quality
  { id: 'git', name: 'Git · GitHub', domain: 'devops' },
  { id: 'docker', name: 'Docker', domain: 'devops' },
  { id: 'helm-mtls', name: 'Helm · mTLS', domain: 'devops' },
  { id: 'github-actions', name: 'GitHub Actions', domain: 'devops' },
  { id: 'observability', name: { en: 'Observability', ar: 'المراقبة والرصد' }, domain: 'devops' },
  { id: 'laravel-cloud', name: 'Laravel Cloud', domain: 'devops' },
  { id: 'linux-ssh', name: { en: 'Linux servers · SSH', ar: 'خوادم Linux · SSH' }, domain: 'devops' },
  { id: 'pest', name: 'Pest · PHPUnit', domain: 'devops' },
  { id: 'vercel', name: 'Vercel · GitHub Pages', domain: 'devops', extra: true },
  { id: 'nginx', name: 'Nginx · Apache', domain: 'devops', extra: true },
  { id: 'playwright', name: 'Playwright', domain: 'devops', extra: true },
  // design & docs
  { id: 'design-systems', name: { en: 'Design systems & tokens', ar: 'أنظمة التصميم ورموزها' }, domain: 'design', extra: true },
  { id: 'ui-ux', name: { en: 'UI/UX prototyping', ar: 'نمذجة الواجهات وتجربة المستخدم' }, domain: 'design', extra: true },
  { id: 'arabic-type', name: { en: 'Arabic typography · RTL', ar: 'الطباعة العربية · RTL' }, domain: 'design', extra: true },
  { id: 'print-pdf', name: { en: 'Print & PDF design', ar: 'تصميم المطبوعات و PDF' }, domain: 'design', extra: true },
  { id: 'dataviz', name: { en: 'Data visualisation', ar: 'تصوير البيانات' }, domain: 'design', extra: true },
  { id: 'tech-writing', name: { en: 'Technical reports & manuals', ar: 'التقارير والأدلة التقنية' }, domain: 'design', extra: true },
  { id: 'video', name: { en: 'Video production · ffmpeg', ar: 'إنتاج الفيديو · ffmpeg' }, domain: 'design', extra: true },
];

export const PROJECTS = [
  {
    id: 'erp-fund', code: 'AA-ERP-01', short: 'ERPNext', years: '2024 —',
    name: { en: 'Institutional ERP on ERPNext', ar: 'منظومة ERP مؤسسية على ERPNext' },
    sector: { en: 'Public development fund', ar: 'صندوق تنمية حكومي' },
    role: { en: 'Lead developer', ar: 'المطور الرئيسي' },
    summary: { en: 'Eighteen custom Frappe apps that run projects, payments, HR and tendering for a public fund.', ar: 'ثمانية عشر تطبيقاً مخصصاً على Frappe تدير المشاريع والدفعات والموارد البشرية والمناقصات في صندوق حكومي.' },
    highlights: [
      { value: '18', label: { en: 'custom Frappe apps', ar: 'تطبيقاً مخصصاً' } },
      { value: '219', label: { en: 'payment certificates migrated', ar: 'مستخلصاً مُرحّلاً' } },
    ],
    stack: ['frappe', 'python', 'hrms', 'erp-reports', 'data-migration', 'mysql', 'linux-ssh'],
    detail: {
      context: { en: 'The fund was moving projects, payments, HR and tendering from paper and spreadsheets into one system.', ar: 'كان الصندوق ينقل المشاريع والدفعات والموارد البشرية والمناقصات من الورق والجداول إلى نظام واحد.' },
      built: {
        en: ['A project-management app with 32 DocTypes for projects, contracts and interim payment certificates.', 'Attendance and HR overrides on Frappe HRMS.', 'Import pipelines that moved 140 projects and 219 payment certificates into the system.', 'Monthly management reports on the Hijri calendar, plus dashboards and custom pages.'],
        ar: ['تطبيق لإدارة المشاريع من 32 DocType للمشاريع والعقود والمستخلصات.', 'تخصيصات للحضور والموارد البشرية على Frappe HRMS.', 'مسارات استيراد نقلت 140 مشروعاً و219 مستخلصاً إلى النظام.', 'تقارير إدارية شهرية بالتقويم الهجري، مع لوحات مؤشرات وصفحات مخصصة.'],
      },
      engineering: {
        en: ['Customised through patches and overrides so ERPNext upgrades stay possible.', 'Runs on the organisation’s own Linux server, maintained over SSH.'],
        ar: ['التخصيص عبر patches و overrides لتبقى ترقيات ERPNext ممكنة.', 'يعمل على خادم Linux خاص بالجهة، ويُدار عبر SSH.'],
      },
    },
  },
  {
    id: 'asas', code: 'AA-ERP-02', short: 'ASAS', years: '2026',
    name: { en: 'ASAS — construction ERP', ar: 'أساس — ERP للمقاولات' },
    sector: { en: 'Construction contractor', ar: 'شركة مقاولات' },
    role: { en: 'System designer & developer', ar: 'مصمم النظام ومطوره' },
    summary: { en: 'A multi-tenant ERP for contractors: bills of quantities, interim payment certificates, payroll and a double-entry ledger.', ar: 'نظام ERP متعدد المستأجرين للمقاولين: جداول الكميات والمستخلصات والرواتب ودفتر قيد مزدوج.' },
    highlights: [
      { value: 'BOQ · IPC', label: { en: 'quantities to payment certificates', ar: 'من جداول الكميات إلى المستخلصات' } },
      { value: 'ZATCA', label: { en: 'tax tables prepared', ar: 'جداول ضريبية مهيأة' } },
    ],
    stack: ['laravel', 'php', 'filament', 'mysql', 'multi-tenancy', 'accounting', 'rbac'],
    detail: {
      context: { en: 'Contractors price work in bills of quantities, bill clients through interim certificates and pay site crews; generic accounting tools do not connect the three.', ar: 'يسعّر المقاول أعماله بجداول الكميات، ويطالب عملاءه بالمستخلصات، ويصرف رواتب مواقعه؛ وأدوات المحاسبة العامة لا تربط الثلاثة معاً.' },
      built: {
        en: ['BOQ and interim payment certificate workflows tied to each project.', 'Payroll for site and office staff.', 'A double-entry ledger that every financial document posts to.', 'Tenant isolation so several companies share one deployment.'],
        ar: ['مسارات جداول الكميات والمستخلصات مرتبطة بكل مشروع.', 'رواتب لموظفي المواقع والمكاتب.', 'دفتر قيد مزدوج تُرحَّل إليه كل المستندات المالية.', 'عزل المستأجرين لتشترك عدة شركات في نشر واحد.'],
      },
      engineering: {
        en: ['Laravel 12 with a Filament 5 admin on MySQL.', 'Access control per company and per module.'],
        ar: ['Laravel 12 مع لوحة Filament 5 على MySQL.', 'صلاحيات لكل شركة ولكل وحدة.'],
      },
    },
  },
  {
    id: 'wasl', code: 'AA-WEB-01', short: 'Wasl', years: '2026',
    name: { en: 'Wasl — education management platform', ar: 'وصل — منصة إدارة تعليمية' },
    sector: { en: 'Education institutes', ar: 'معاهد تعليمية' },
    role: { en: 'Full-stack developer', ar: 'مطور متكامل' },
    summary: { en: 'A multi-role platform for institutes: payroll, attendance, a chart of accounts per institute and multi-country currency.', ar: 'منصة متعددة الأدوار للمعاهد: الرواتب والحضور ودليل حسابات لكل معهد وعملات متعددة الدول.' },
    highlights: [
      { value: '437', label: { en: 'automated tests passing', ar: 'اختباراً آلياً ناجحاً' } },
      { value: 'PWA', label: { en: 'installable on phones', ar: 'قابل للتثبيت على الجوال' } },
    ],
    stack: ['laravel', 'php', 'vue-inertia', 'mysql', 'rest', 'pwa', 'multi-tenancy', 'accounting', 'rbac', 'security', 'pest', 'laravel-cloud', 'rtl', 'git'],
    detail: {
      context: { en: 'Institutes in several countries needed one platform with separate books, currencies and staff roles.', ar: 'احتاجت معاهد في عدة دول منصة واحدة بدفاتر وعملات وأدوار موظفين منفصلة.' },
      built: {
        en: ['Payroll and attendance for teachers and staff.', 'A chart of accounts per institute with multi-currency amounts.', 'A Sanctum API and an installable PWA.', 'Dashboards for each role.'],
        ar: ['الرواتب والحضور للمعلمين والموظفين.', 'دليل حسابات لكل معهد بمبالغ متعددة العملات.', 'واجهة Sanctum البرمجية وتطبيق ويب قابل للتثبيت.', 'لوحات لكل دور.'],
      },
      engineering: {
        en: ['Security audit and hardening, including rate limits and authorisation checks.', '437 Pest/PHPUnit tests green before releases.', 'Deployed on Laravel Cloud.'],
        ar: ['تدقيق أمني وتقوية، منها حدود المعدل وفحوص التفويض.', '437 اختبار Pest/PHPUnit ناجحة قبل الإصدارات.', 'منشور على Laravel Cloud.'],
      },
    },
  },
  {
    id: 'yos', code: 'AA-WEB-02', short: 'YOS', years: '2026',
    name: { en: 'YOS — membership system', ar: 'YOS — نظام عضويات' },
    sector: { en: 'Professional society', ar: 'جمعية مهنية' },
    role: { en: 'Full-stack developer', ar: 'مطور متكامل' },
    summary: { en: 'Member records and subscriptions for a society, with a fully Arabic right-to-left interface.', ar: 'سجلات الأعضاء واشتراكاتهم لجمعية مهنية، بواجهة عربية كاملة من اليمين إلى اليسار.' },
    highlights: [
      { value: 'RTL', label: { en: 'Arabic-first interface', ar: 'واجهة عربية أولاً' } },
      { value: 'Docker', label: { en: 'one-command local stack', ar: 'بيئة كاملة بأمر واحد' } },
    ],
    stack: ['nestjs', 'typescript', 'angular', 'postgresql', 'docker', 'rtl', 'rest', 'git'],
    detail: {
      context: { en: 'The society needed member records, subscriptions and staff roles in one Arabic system.', ar: 'احتاجت الجمعية سجلات الأعضاء والاشتراكات وأدوار الموظفين في نظام عربي واحد.' },
      built: {
        en: ['A NestJS 11 API with TypeORM on PostgreSQL 16.', 'An Angular 21 + Material front end, right-to-left throughout.', 'Docker Compose for the database and services.'],
        ar: ['واجهة برمجية NestJS 11 مع TypeORM على PostgreSQL 16.', 'واجهة Angular 21 + Material من اليمين إلى اليسار بالكامل.', 'Docker Compose لقاعدة البيانات والخدمات.'],
      },
      engineering: {
        en: ['API and web app in one repository, each with its own manifest.', 'Seeded roles for administrators and staff.'],
        ar: ['الواجهة البرمجية وتطبيق الويب في مستودع واحد، لكل منهما ملف تعريفه.', 'أدوار مهيأة مسبقاً للمديرين والموظفين.'],
      },
    },
  },
  {
    id: 'mis', code: 'AA-WEB-03', short: 'MIS', years: '2025 — 2026',
    name: { en: 'MIS + barcode generator', ar: 'نظام MIS ومولّد الباركود' },
    sector: { en: 'Public institution', ar: 'جهة عامة' },
    role: { en: 'Developer', ar: 'المطور' },
    summary: { en: 'Inventory, purchase orders and internal memos with permissions and PDF/Excel exports, plus a tool that prints QR and Code128 labels.', ar: 'المخزون وأوامر الشراء والمذكرات الداخلية بصلاحيات وتصدير PDF/Excel، مع أداة تطبع ملصقات QR و Code128.' },
    highlights: [
      { value: 'QR · 128', label: { en: 'SVG barcode labels', ar: 'ملصقات باركود SVG' } },
      { value: 'PDF · XLSX', label: { en: 'document exports', ar: 'تصدير المستندات' } },
    ],
    stack: ['laravel', 'php', 'livewire', 'mysql', 'rbac', 'pdf-excel'],
    detail: {
      context: { en: 'Stores and purchasing needed a system of record and printable item labels.', ar: 'احتاج المخزن والمشتريات إلى نظام سجلات وملصقات أصناف قابلة للطباعة.' },
      built: {
        en: ['Inventory, purchase order and memo workflows (Laravel 13, Spatie permissions).', 'PDF documents with mPDF and Excel exports with PhpSpreadsheet.', 'A Livewire/Volt tool that generates QR and Code128 barcodes as SVG.'],
        ar: ['مسارات المخزون وأوامر الشراء والمذكرات (Laravel 13 وصلاحيات Spatie).', 'مستندات PDF عبر mPDF وتصدير Excel عبر PhpSpreadsheet.', 'أداة Livewire/Volt تولّد باركود QR و Code128 بصيغة SVG.'],
      },
      engineering: {
        en: ['Permissions per role and module.', 'Barcodes rendered as SVG so labels print sharp at any size.'],
        ar: ['صلاحيات لكل دور ولكل وحدة.', 'الباركود بصيغة SVG ليُطبع حاداً بأي مقاس.'],
      },
    },
  },
  {
    id: 'fasl', code: 'AA-MOB-01', short: 'Fasl', years: '2026',
    name: { en: 'Fasl — learning app', ar: 'فَصْل — تطبيق تعليمي' },
    sector: { en: 'Education', ar: 'التعليم' },
    role: { en: 'Mobile & backend developer', ar: 'مطور الجوال والخلفية' },
    summary: { en: 'A Flutter learning app at version 1.0, with a Laravel/Filament dashboard for content and users in progress.', ar: 'تطبيق تعليمي بـ Flutter وصل إلى الإصدار 1.0، مع لوحة Laravel/Filament للمحتوى والمستخدمين قيد البناء.' },
    highlights: [
      { value: '558', label: { en: 'automated tests', ar: 'اختباراً آلياً' } },
      { value: 'v1.0', label: { en: 'app complete', ar: 'التطبيق مكتمل' } },
    ],
    stack: ['flutter', 'dart', 'flutter-testing', 'release-signing', 'laravel', 'filament'],
    detail: {
      context: { en: 'Students needed course content on their phones; staff needed one place to manage it.', ar: 'احتاج الطلاب المحتوى الدراسي على جوالاتهم، واحتاج الموظفون مكاناً واحداً لإدارته.' },
      built: {
        en: ['The Flutter app, version 1.0.', 'Release builds debugged and signed.', 'A Laravel 13 + Filament 5 dashboard (in progress).'],
        ar: ['تطبيق Flutter بإصداره 1.0.', 'تصحيح نسخ الإصدار وتوقيعها.', 'لوحة Laravel 13 + Filament 5 (قيد البناء).'],
      },
      engineering: {
        en: ['558 automated widget and unit tests.'],
        ar: ['558 اختبار آلي للوحدات والواجهات.'],
      },
    },
  },
  {
    id: 'aman', code: 'AA-MOB-02', short: 'Aman', years: '2026',
    name: { en: 'Aman — encrypted personal app', ar: 'أمان — تطبيق شخصي مشفّر' },
    sector: { en: 'Privacy', ar: 'الخصوصية' },
    role: { en: 'Developer', ar: 'المطور' },
    summary: { en: 'A Flutter app whose data syncs end-to-end encrypted through Firebase; the server only ever holds ciphertext.', ar: 'تطبيق Flutter تُزامَن بياناته مشفّرة طرفياً عبر Firebase؛ لا يحمل الخادم إلا نصاً مشفّراً.' },
    highlights: [
      { value: '1,227', label: { en: 'automated tests', ar: 'اختباراً آلياً' } },
      { value: 'E2EE', label: { en: 'client-side encryption', ar: 'تشفير على الجهاز' } },
    ],
    stack: ['flutter', 'dart', 'firebase', 'e2ee', 'flutter-testing', 'release-signing'],
    detail: {
      context: { en: 'Personal data had to sync across devices without the server being able to read it.', ar: 'كان على البيانات الشخصية أن تُزامَن بين الأجهزة دون أن يستطيع الخادم قراءتها.' },
      built: {
        en: ['Encryption on the device before any sync.', 'Firebase for authentication and encrypted sync.', 'An edge worker for the app’s AI features.'],
        ar: ['التشفير على الجهاز قبل أي مزامنة.', 'Firebase للمصادقة والمزامنة المشفّرة.', 'عامل طرفي لميزات الذكاء الاصطناعي في التطبيق.'],
      },
      engineering: {
        en: ['1,227 automated tests.', 'Release builds debugged and signed.'],
        ar: ['1,227 اختباراً آلياً.', 'تصحيح نسخ الإصدار وتوقيعها.'],
      },
    },
  },
  {
    id: 'helix', code: 'AA-SYS-01', short: 'Helix', years: '2026',
    name: { en: 'Helix — encrypted messaging', ar: 'هيليكس — محادثة مشفّرة' },
    sector: { en: 'Infrastructure', ar: 'بنية تحتية' },
    role: { en: 'Developer', ar: 'المطور' },
    summary: { en: 'End-to-end encrypted chat: a Go backend scaled with Redis, deployed with Helm and mutual TLS, and a Next.js PWA client.', ar: 'محادثة مشفّرة طرفياً: خلفية Go تتوسع عبر Redis، تُنشر بـ Helm و mTLS، مع عميل PWA مبني بـ Next.js.' },
    highlights: [
      { value: 'mTLS', label: { en: 'between services', ar: 'بين الخدمات' } },
      { value: 'Helm', label: { en: 'Kubernetes deploys', ar: 'نشر على Kubernetes' } },
    ],
    stack: ['go', 'redis', 'docker', 'helm-mtls', 'github-actions', 'observability', 'e2ee', 'nextjs', 'react', 'pwa', 'git'],
    detail: {
      context: { en: 'A chat system where servers route messages they cannot read, built to run on a cluster.', ar: 'نظام محادثة توجّه خوادمه رسائل لا تستطيع قراءتها، مبني ليعمل على عنقود خوادم.' },
      built: {
        en: ['Go services with a Redis backplane for real-time fan-out.', 'A Next.js PWA client.', 'Helm charts, mutual TLS between services and GitHub Actions CI.', 'Metrics and logs for observability.'],
        ar: ['خدمات Go مع Redis لتوزيع الرسائل لحظياً.', 'عميل PWA مبني بـ Next.js.', 'مخططات Helm و mTLS بين الخدمات وتكامل مستمر بـ GitHub Actions.', 'مقاييس وسجلات للمراقبة.'],
      },
      engineering: {
        en: ['Messages are encrypted on the device; servers only route ciphertext.'],
        ar: ['تُشفَّر الرسائل على الجهاز، ولا توجّه الخوادم إلا نصاً مشفّراً.'],
      },
    },
  },
];

export const LOG = [
  {
    head: true, from: '2024-11', to: null,
    title: { en: 'ERP Systems, Web & Mobile Applications Developer', ar: 'مطور أنظمة ERP وتطبيقات الويب والجوال' },
    org: { en: "Agricultural & Fisheries Production Promotion Fund · Sana'a", ar: 'صندوق تشجيع الإنتاج الزراعي والسمكي · صنعاء' },
    points: {
      en: ["Design, build and maintain the organisation's ERP on ERPNext/Frappe and its Laravel inventory system.", 'Supervise the internal network and resolve technical issues across departments.', 'Train staff to use the systems day to day.'],
      ar: ['تصميم منظومة ERP للجهة على ERPNext/Frappe ونظام المخزون المبني بـ Laravel، وبناؤهما وصيانتهما.', 'الإشراف على الشبكة الداخلية وحل المشكلات التقنية في الإدارات.', 'تدريب الموظفين على استخدام الأنظمة يومياً.'],
    },
  },
  {
    from: '2024-08', to: '2024-10',
    title: { en: 'Volunteer Web Developer', ar: 'مطور ويب متطوع' },
    org: { en: "Agricultural & Fisheries Production Promotion Fund · Sana'a", ar: 'صندوق تشجيع الإنتاج الزراعي والسمكي · صنعاء' },
    points: {
      en: ['Introduced digital systems to the organisation and built its first inventory system in Laravel.', 'Managed the internal network and daily technical support.'],
      ar: ['أدخلت الأنظمة الرقمية إلى الجهة وبنيت أول نظام مخزون لها بـ Laravel.', 'أدرت الشبكة الداخلية والدعم التقني اليومي.'],
    },
  },
  {
    from: '2024-01', to: '2024-07',
    title: { en: 'Software Development Trainee', ar: 'متدرب تطوير برمجيات' },
    org: { en: "Social Fund for Development · Sana'a", ar: 'الصندوق الاجتماعي للتنمية · صنعاء' },
    points: { en: ['Delivered development tasks in PHP and Dart with Laravel and Flutter.'], ar: ['أنجزت مهام تطوير بـ PHP و Dart باستخدام Laravel و Flutter.'] },
  },
  {
    edu: true, from: '2023', to: '2024',
    title: { en: 'B.Sc. Business Information Technology', ar: 'بكالوريوس تقنية معلومات الأعمال' },
    org: { en: "International University of Technology Twintech (IUTT) · Sana'a", ar: 'الجامعة الدولية للتكنولوجيا توينتك (IUTT) · صنعاء' },
    points: { en: ['GPA 3.79 / 4.00 · EQF level 6.'], ar: ['المعدل التراكمي 3.79 من 4.00 · المستوى السادس في الإطار الأوروبي للمؤهلات.'] },
  },
];

export const COURSES = [
  { en: 'PHP (Laravel) & Flutter development — Social Fund for Development', ar: 'تطوير PHP (Laravel) و Flutter — الصندوق الاجتماعي للتنمية' },
  { en: 'Website Design — Google Developer Student Clubs', ar: 'تصميم المواقع — Google Developer Student Clubs' },
  { en: 'Strategic Planning — Ministry of Finance', ar: 'التخطيط الاستراتيجي — وزارة المالية' },
  { en: 'Crisis Management — online training', ar: 'إدارة الأزمات — تدريب عبر الإنترنت' },
];

export const LANGUAGES = [
  { en: 'Arabic — native', ar: 'العربية — اللغة الأم' },
  { en: 'English — B2 (CEFR)', ar: 'الإنجليزية — B2 (CEFR)' },
];

export const SERVICES = [
  { id: 'websites', code: 'PKG-WEB', min: 3000, max: 5000,
    title: { en: 'Websites', ar: 'المواقع التعريفية' },
    text: { en: 'A responsive site from your ready content, or with the content prepared for you.', ar: 'موقع متجاوب من محتواك الجاهز، أو مع تجهيز المحتوى نيابةً عنك.' } },
  { id: 'addons', code: 'ADD', min: 300, max: 500, perItem: true,
    title: { en: 'Extra pages & features', ar: 'صفحات وميزات إضافية' },
    text: { en: 'Pages, languages, dark mode, interactive UI or custom features.', ar: 'صفحات ولغات ووضع ليلي وواجهات تفاعلية أو ميزات خاصة.' } },
  { id: 'dashboards', code: 'DSH', min: 3000, max: null,
    title: { en: 'Dashboards & admin systems', ar: 'لوحات التحكم والأنظمة الإدارية' },
    text: { en: 'From a standard dashboard to a fully dynamic system you control.', ar: 'من لوحة تحكم عادية إلى نظام ديناميكي كامل تتحكم فيه بنفسك.' } },
  { id: 'ai', code: 'AI', min: 2000, max: 2000,
    title: { en: 'AI chatbot', ar: 'شات بوت ذكي' },
    text: { en: 'An assistant trained on your services, linked to your dashboard.', ar: 'مساعد مدرّب على خدماتك ومرتبط بلوحة التحكم.' } },
];

export const SECTIONS = [
  { id: 'about', labelKey: 'nav.about' },
  { id: 'skills', labelKey: 'nav.skills' },
  { id: 'projects', labelKey: 'nav.projects' },
  { id: 'log', labelKey: 'nav.log' },
  { id: 'services', labelKey: 'nav.services' },
  { id: 'contact', labelKey: 'nav.contact' },
];

export const ACTIONS = [
  { id: 'estimator', labelKey: 'cmd.estimator', keywords: ['price', 'cost', 'quote', 'سعر', 'تكلفة'] },
  { id: 'lang', labelKey: 'cmd.switchLang', keywords: ['arabic', 'english', 'عربي', 'انجليزي'] },
  { id: 'copy-email', labelKey: 'cmd.copyEmail', keywords: ['mail', 'contact', 'بريد'] },
  { id: 'guide', labelKey: 'cmd.guide', keywords: ['pdf', 'prices', 'دليل', 'اسعار'] },
  { id: 'github', labelKey: 'cmd.github', keywords: ['code', 'repo'] },
  { id: 'linkedin', labelKey: 'cmd.linkedin', keywords: ['cv', 'profile'] },
];
