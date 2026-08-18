/* Ahmed Alashwal — portfolio
   Bilingual EN/AR dictionary, RTL switching, scroll reveals. */

(function () {
  'use strict';

  var I18N = {
    en: {
      'skip': 'Skip to content',
      'brand': 'Ahmed Alashwal',
      'nav.about': 'About',
      'nav.experience': 'Experience',
      'nav.skills': 'Skills',
      'nav.education': 'Education',
      'nav.contact': 'Contact',
      'hero.badge': 'Open to work, collaboration',
      'hero.title': 'I turn paper operations into <em>digital systems</em>.',
      'hero.sub': 'ERP Systems, Web & Mobile Applications Developer — building with Laravel, Flutter, and Python.',
      'hero.ctaEmail': 'Email me',
      'ledger.location': 'LOCATION',
      'ledger.locationV': 'Sana’a · Yemen',
      'ledger.gpa': 'DEGREE',
      'ledger.gpaV': 'BIT — GPA 3.79 / 4.00',
      'ledger.stack': 'STACK',
      'sysmap.caption': 'System map — the modules I build and connect',
      'about.eyebrow': 'ABOUT',
      'about.title': 'A developer institutions can run on',
      'about.p1': 'I’m a Business Information Technology graduate (GPA 3.79/4.00) with hands-on experience building web, mobile, and ERP applications. At the Agricultural & Fisheries Production Promotion Fund, I introduced the organization’s first digital inventory system — and today I design, build, and maintain the custom ERP it runs on.',
      'about.p2': 'Beyond code, I keep the internal network running, resolve technical issues across the organization, and train non-technical staff to use the systems I build. I’m currently preparing for an M.Sc. in Information Technology to deepen this practical foundation.',
      'about.f1n': '2+',
      'about.f1': 'years building with Laravel & Flutter',
      'about.f2n': '1st',
      'about.f2': 'digital inventory system introduced at my organization',
      'about.f3n': '3',
      'about.f3': 'database engines in production use — MySQL, SQL Server, Oracle',
      'exp.eyebrow': 'EXPERIENCE',
      'exp.title': 'Where I’ve built',
      'exp.j1.period': 'Nov 2024 — Present',
      'exp.j1.role': 'ERP Systems, Web & Mobile Applications Developer',
      'exp.j1.org': 'Agricultural & Fisheries Production Promotion Fund · Sana’a',
      'exp.j1.b1': 'Develop and maintain the organization’s Laravel-based inventory management system and a custom ERP.',
      'exp.j1.b2': 'Supervise the internal network and resolve technical problems across the organization.',
      'exp.j1.b3': 'Train staff in computer fundamentals and day-to-day system usage.',
      'exp.j2.period': 'Aug — Oct 2024',
      'exp.j2.role': 'Volunteer Web Developer',
      'exp.j2.org': 'Agricultural & Fisheries Production Promotion Fund · Sana’a',
      'exp.j2.b1': 'Introduced digital systems to the organization and built its first Laravel-based inventory management system.',
      'exp.j2.b2': 'Managed the internal network and handled day-to-day technical issues.',
      'exp.j3.period': 'Jan — Jul 2024',
      'exp.j3.role': 'Software Development Trainee',
      'exp.j3.org': 'Social Fund for Development · Sana’a',
      'exp.j3.b1': 'Completed development tasks in PHP and Dart using the Laravel and Flutter frameworks.',
      'skills.eyebrow': 'SKILLS',
      'skills.title': 'Tools of the trade',
      'skills.web': 'Web',
      'skills.mobile': 'Mobile',
      'skills.mobileNote': 'Cross-platform apps, API-driven',
      'skills.db': 'Databases',
      'skills.tools': 'Tools & Analysis',
      'skills.uml': 'UML systems analysis',
      'edu.eyebrow': 'EDUCATION & TRAINING',
      'edu.title': 'Grounded in study',
      'edu.degree': 'B.Sc. in Business Information Technology (BIT)',
      'edu.school': 'International University of Technology Twintech (IUTT) · Sana’a',
      'edu.gpaLabel': 'Cumulative GPA',
      'edu.eqf': 'EQF Level 6',
      'edu.areas': 'Web & mobile development · databases · systems analysis (UML) · business information systems',
      'edu.coursesTitle': 'Courses & certifications',
      'edu.c1': 'PHP (Laravel) & Flutter development — Social Fund for Development',
      'edu.c2': 'Website Design — Google Developer Student Clubs',
      'edu.c3': 'Strategic Planning — Ministry of Finance',
      'edu.c4': 'Crisis Management — online training',
      'edu.langsTitle': 'Languages',
      'edu.lang1': 'Arabic — native',
      'edu.lang2': 'English — B2 (CEFR)',
      'contact.eyebrow': 'CONTACT',
      'contact.title': 'Let’s build something reliable',
      'contact.lede': 'Whether it’s an ERP system, a mobile app, web app, or an idea that’s still on paper — I’d be glad to hear from you.',
      'footer.left': '© 2026 Ahmed Alashwal — Sana’a, Yemen',
      'footer.right': 'صُنع بعناية في صنعاء'
    },
    ar: {
      'skip': 'تخطَّ إلى المحتوى',
      'brand': 'أحمد الأشول',
      'nav.about': 'عنّي',
      'nav.experience': 'الخبرة',
      'nav.skills': 'المهارات',
      'nav.education': 'التعليم',
      'nav.contact': 'تواصل',
      'hero.badge': 'متاح للعمل والتعاون',
      'hero.title': 'أحوّل العمليات الورقية إلى <em>أنظمة رقمية</em>.',
      'hero.sub': 'مطوّر أنظمة ERP ومواقع ويب وتطبيقات جوال — أعمل بـ Laravel وFlutter وPython.',
      'hero.ctaEmail': 'راسلني',
      'ledger.location': 'الموقع',
      'ledger.locationV': 'صنعاء · اليمن',
      'ledger.gpa': 'المؤهل',
      'ledger.gpaV': 'بكالوريوس BIT — معدل 3.79 / 4.00',
      'ledger.stack': 'التقنيات',
      'sysmap.caption': 'خريطة النظام — الوحدات التي أبنيها وأصل بينها',
      'about.eyebrow': 'عنّي',
      'about.title': 'مطوّر تعتمد عليه المؤسسات',
      'about.p1': 'خريج تقنية معلومات الأعمال (BIT) بمعدل تراكمي 3.79/4.00، مع خبرة عملية في تطوير تطبيقات الويب والجوال وأنظمة ERP. في صندوق تشجيع الإنتاج الزراعي والسمكي أدخلتُ أول نظام رقمي لإدارة المخازن إلى المؤسسة، وأتولى اليوم تصميم وبناء وصيانة نظام ERP الذي تعمل به.',
      'about.p2': 'وإلى جانب البرمجة، أشرف على الشبكة الداخلية وأعالج المشكلات التقنية في مختلف أقسام المؤسسة، وأدرّب الموظفين غير التقنيين على استخدام الأنظمة التي أبنيها. وأستعد حالياً لدراسة الماجستير في تقنية المعلومات لتعميق هذا الأساس العملي.',
      'about.f1n': '2+',
      'about.f1': 'سنتان من البناء بـ Laravel وFlutter',
      'about.f2n': 'الأول',
      'about.f2': 'نظام رقمي لإدارة المخازن أدخلته إلى مؤسستي',
      'about.f3n': '3',
      'about.f3': 'محركات قواعد بيانات قيد الاستخدام الفعلي — MySQL وSQL Server وOracle',
      'exp.eyebrow': 'الخبرة العملية',
      'exp.title': 'أين عملت',
      'exp.j1.period': 'نوفمبر 2024 — حتى الآن',
      'exp.j1.role': 'مطوّر أنظمة ERP ومواقع ويب وتطبيقات جوال',
      'exp.j1.org': 'صندوق تشجيع الإنتاج الزراعي والسمكي · صنعاء',
      'exp.j1.b1': 'تطوير وصيانة نظام إدارة المخازن المبني بإطار Laravel ونظام ERP مخصص للمؤسسة.',
      'exp.j1.b2': 'الإشراف على الشبكة الداخلية ومعالجة المشكلات التقنية في مختلف أقسام المؤسسة.',
      'exp.j1.b3': 'تدريب الموظفين على أساسيات الحاسوب والاستخدام اليومي للأنظمة.',
      'exp.j2.period': 'أغسطس — أكتوبر 2024',
      'exp.j2.role': 'مطوّر مواقع (متطوع)',
      'exp.j2.org': 'صندوق تشجيع الإنتاج الزراعي والسمكي · صنعاء',
      'exp.j2.b1': 'إدخال الأنظمة الرقمية إلى المؤسسة وبناء أول نظام لإدارة المخازن بإطار Laravel.',
      'exp.j2.b2': 'إدارة الشبكة الداخلية ومعالجة المشكلات التقنية اليومية.',
      'exp.j3.period': 'يناير — يوليو 2024',
      'exp.j3.role': 'متدرب تطوير برمجيات',
      'exp.j3.org': 'الصندوق الاجتماعي للتنمية · صنعاء',
      'exp.j3.b1': 'تنفيذ مهام تطوير بلغتي PHP وDart باستخدام إطاري Laravel وFlutter.',
      'skills.eyebrow': 'المهارات',
      'skills.title': 'أدوات العمل',
      'skills.web': 'الويب',
      'skills.mobile': 'الجوال',
      'skills.mobileNote': 'تطبيقات متعددة المنصات تعتمد على APIs',
      'skills.db': 'قواعد البيانات',
      'skills.tools': 'أدوات وتحليل',
      'skills.uml': 'تحليل النظم UML',
      'edu.eyebrow': 'التعليم والتدريب',
      'edu.title': 'أساس أكاديمي متين',
      'edu.degree': 'بكالوريوس تقنية معلومات الأعمال (BIT)',
      'edu.school': 'جامعة تونتك الدولية للتكنولوجيا (IUTT) · صنعاء',
      'edu.gpaLabel': 'المعدل التراكمي',
      'edu.eqf': 'المستوى 6 وفق الإطار الأوروبي EQF',
      'edu.areas': 'تطوير الويب والجوال · قواعد البيانات · تحليل النظم (UML) · نظم معلومات الأعمال',
      'edu.coursesTitle': 'الدورات والشهادات',
      'edu.c1': 'تطوير PHP (Laravel) وFlutter — الصندوق الاجتماعي للتنمية',
      'edu.c2': 'تصميم المواقع — نادي مطوري Google الطلابي (GDSC)',
      'edu.c3': 'التخطيط الاستراتيجي — وزارة المالية',
      'edu.c4': 'إدارة الأزمات — تدريب عن بُعد',
      'edu.langsTitle': 'اللغات',
      'edu.lang1': 'العربية — اللغة الأم',
      'edu.lang2': 'الإنجليزية — B2 وفق CEFR',
      'contact.eyebrow': 'تواصل',
      'contact.title': 'لنبنِ شيئاً موثوقاً',
      'contact.lede': 'سواء كان نظام ERP، أو تطبيق جوال، أو تطبيق ويب، أو فكرة ما تزال على الورق — يسعدني أن أسمع منك.',
      'footer.left': '© 2026 أحمد الأشول — صنعاء، اليمن',
      'footer.right': 'Crafted with care in Sana’a'
    }
  };

  var DOC_META = {
    en: {
      title: 'Ahmed Alashwal — ERP, Web & Mobile Developer · أحمد الأشول',
      description: 'Ahmed Alashwal — ERP Systems, Web & Mobile Applications Developer in Sana’a, Yemen. Laravel, Flutter, Python. I turn paper operations into digital systems.',
      toggleLabel: 'عرض الموقع بالعربية'
    },
    ar: {
      title: 'أحمد الأشول — مطوّر أنظمة ERP ومواقع وتطبيقات · Ahmed Alashwal',
      description: 'أحمد الأشول — مطوّر أنظمة ERP ومواقع ويب وتطبيقات جوال في صنعاء، اليمن. Laravel وFlutter وPython. أحوّل العمليات الورقية إلى أنظمة رقمية.',
      toggleLabel: 'View site in English'
    }
  };

  function applyLang(lang) {
    var dict = I18N[lang] || I18N.en;
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.textContent = dict[key];
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });

    document.title = DOC_META[lang].title;
    var desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', DOC_META[lang].description);

    var toggle = document.getElementById('langToggle');
    if (toggle) {
      toggle.setAttribute('aria-label', DOC_META[lang].toggleLabel);
      toggle.querySelector('.lang-current').textContent = lang === 'ar' ? 'ع' : 'EN';
      toggle.querySelector('.lang-next').textContent = lang === 'ar' ? 'EN' : 'ع';
    }

    try { localStorage.setItem('lang', lang); } catch (e) { /* private mode */ }
  }

  function initialLang() {
    try {
      var saved = localStorage.getItem('lang');
      if (saved === 'en' || saved === 'ar') return saved;
    } catch (e) { /* private mode */ }
    var nav = (navigator.language || '').toLowerCase();
    return nav.indexOf('ar') === 0 ? 'ar' : 'en';
  }

  var current = initialLang();
  if (current !== 'en') applyLang(current);

  var toggle = document.getElementById('langToggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      current = current === 'ar' ? 'en' : 'ar';
      applyLang(current);
    });
  }

  /* scroll reveals */
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var revealEls = document.querySelectorAll('.reveal');
  if (!reduced && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('visible'); });
  }

  /* boot the system map after load */
  window.addEventListener('load', function () {
    var map = document.querySelector('.sysmap');
    if (map) requestAnimationFrame(function () { map.classList.add('lit'); });
  });

  /* top bar surface on scroll */
  var topbar = document.querySelector('.topbar');
  function onScroll() {
    if (!topbar) return;
    topbar.classList.toggle('scrolled', window.scrollY > 12);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();
