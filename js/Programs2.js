function openDetails(type) {
  const title = document.getElementById("popupTitle");
  const text = document.getElementById("popupText");

  switch(type) {
    case "basic":
      title.innerText = "تفاصيل الخطة الأساسية";
      text.innerHTML = `
        <ul>
          <li>حصتان تدريبيتان أسبوعيًا بإشراف مدربين محترفين</li>
          <li>دخول كامل إلى صالة الجيم</li>
          <li>خطط تمارين عامة</li>
          <li>دعم أساسي</li>
          <li>إمكانية حضور الحصص الجماعية</li>
          <li>تقييم شهري لمستوى اللياقة</li>
          <li>يساعد على بناء أساس قوي لصحة طويلة المدى</li>
        </ul>`;
      break;

    case "regular":
      title.innerText = "تفاصيل الخطة العادية";
      text.innerHTML = `
        <ul>
          <li>4 جلسات تدريبية أسبوعيًا</li>
          <li>تمارين مخصصة حسب أهدافك</li>
          <li>إرشادات غذائية</li>
          <li>متابعة من المدربين</li>
          <li>الوصول إلى الحصص المميزة</li>
          <li>تقارير تقدم كل أسبوعين</li>
          <li>تمارين المرونة والحركة</li>
          <li>تحسن منظم وتحفيز مستمر</li>
        </ul>`;
      break;

    case "premium":
      title.innerText = "تفاصيل الخطة المميزة";
      text.innerHTML = `
        <ul>
          <li>6 جلسات تدريبية أسبوعيًا</li>
          <li>مدرب شخصي يراقب أدائك</li>
          <li>خطة تغذية كاملة</li>
          <li>دعم ذو أولوية</li>
          <li>جلسات تدريب فردية</li>
          <li>تحليل شهري للجسم وتعديل البرنامج</li>
          <li>دعم وتحفيز ذهني</li>
        </ul>`;
      break;

    case "advanced":
      title.innerText = "تفاصيل الخطة المتقدمة";
      text.innerHTML = `
        <ul>
          <li>8 جلسات تدريبية أسبوعيًا</li>
          <li>مدرب شخصي محترف</li>
          <li>خطة تغذية ومكملات متقدمة</li>
          <li>تقارير تقدم أسبوعية</li>
          <li>الوصول إلى حصص VIP الحصرية</li>
          <li>تدريب ذهني وبرامج استشفاء</li>
          <li>متابعة تكوين الجسم</li>
          <li>برنامج احترافي لتحقيق نتائج واضحة</li>
        </ul>`;
      break;

    case "ultimate":
      title.innerText = "تفاصيل الخطة الشاملة";
      text.innerHTML = `
        <ul>
          <li>جلسات تدريب غير محدودة</li>
          <li>مدرب شخصي مخصص لك</li>
          <li>إرشادات مخصصة للتغذية والمكملات</li>
          <li>مراجعة أسبوعية للأداء</li>
          <li>الوصول إلى حصص VIP مع إمكانية دعوة ضيوف</li>
          <li>تدريب على التحكم في التوتر وتنمية العقلية</li>
          <li>منتجات حصرية من الجيم</li>
          <li>تجربة تدريب متكاملة لتحقيق أفضل النتائج</li>
        </ul>`;
      break;

    case "proathlete":
      title.innerText = "تفاصيل خطة الرياضي المحترف";
      text.innerHTML = `
        <ul>
          <li>جلسات تدريب فردية غير محدودة</li>
          <li>مدرب أداء مخصص</li>
          <li>خطة مخصصة للتغذية والمكملات والاستشفاء</li>
          <li>متابعة يومية للتقدم وتحليل الأداء</li>
          <li>الوصول إلى حصص VIP مع دعوات للضيوف</li>
          <li>تدريب على التركيز والتحكم في التوتر</li>
          <li>إرشادات مخصصة للنوم والاستشفاء</li>
          <li>منتجات حصرية وإمكانية دخول صالة VIP</li>
        </ul>`;
      break;

    default:
      title.innerText = "تفاصيل الخطة";
      text.innerHTML = `<ul><li>لا توجد تفاصيل متاحة لهذه الخطة.</li></ul>`;
      break;
  }

  document.getElementById("packagePopup").style.display = "flex";
}

function closeDetails() {
  document.getElementById("packagePopup").style.display = "none";
}
