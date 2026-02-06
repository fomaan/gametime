const images = document.querySelectorAll('.lang-img');
const translations = {
  ru: { 
    nameInput: "Ваше имя",
    PhoneInput: "Ваш номер телефона",
    problemInput: "Ваша проблема",
    submitButton: "Отправить",
    agree: "Я согласен(а) на обработку данных",
    images: ['images/ru1.jpg','images/ru2.jpg','images/ru3.jpg','images/ru4.jpg','images/ru5.jpg'],
    navHome: "Главная",
    navPhoto: "Фото",
    navContact: "Контакт",
    heroText: "Приглашаем на групповой, а так же индивидуальный формат для детей от 9 месяцев, до 10 лет.Обучение происходит через игру, по авторским программам.",
    heroButton: "Подать заявку",
    footerPhone: "Телефон: +971 58 540 6313",
    footerEmail: "Почта: gametimekidsclub@gmail.com",
    contact: "Контакт",
    contactPhone: "Телефон: +971 58 540 6313",
    contactEmail: "Почта: gametimekidsclub@gmail.com",
    instaText: "Наш Instagram"
  },
  en: {
    nameInput: "Your name",
    PhoneInput: "Your phone",
    problemInput: "Your problem",
    submitButton: "Send",
    agree: "I agree to the processing of data",
    images: ['images/en1.jpg','images/en2.jpg','images/en3.jpg','images/en4.jpg','images/en5.jpg'],
    navHome: "Home",
    navPhoto: "Photos",
    navContact: "Contact",
    heroText: "We invite you to group and individual classes for children from 9 months to 10 years. Learning takes place through play, using our author's programs.",
    heroButton: "Send request",
    footerPhone: "Phone: +971 58 540 6313",
    footerEmail: "Mail: gametimekidsclub@gmail.com",
    contact: "Contact",
    contactPhone: "Phone: +971 58 540 6313",
    contactEmail: "Mail: gametimekidsclub@gmail.com",
    instaText: "Our Instagram"
  },
  ua: {
    nameInput: "Ваше ім'я",
    PhoneInput: "Ваш номер телефону",
    problemInput: "Ваша проблема",
    submitButton: "Відправити",
    agree: "Я погоджуюсь на обробку даних",
    images: ['images/ua1.jpg','images/ua2.jpg','images/ua3.jpg','images/ua4.jpg','images/ua5.jpg'],
    navHome: "Головна",
    navPhoto: "Фото",
    navContact: "Контакт",
    heroText: "Запрошуємо вас на груповий, а також iндивiдуальний формат для дiтей вiд 9 мiсяцiв до 10 рокiв.Навчaння вiдбувається через гру, за авторськими методиками.",
    heroButton: "Подати заявку",
    footerPhone: "Телефон: +971 58 540 6313",
    footerEmail: "Пошта: gametimekidsclub@gmail.com",
    contact: "Контакт",
    contactPhone: "Телефон: +971 58 540 6313",
    contactEmail: "Пошта: gametimekidsclub@gmail.com",
    instaText: "Наш Instagram"
  }
};

function setLanguage(lang) {
localStorage.setItem('lang', lang);

const t = translations[lang];


  // placeholder полей формы
  const nameInput = document.getElementById('nameInput');
  if (nameInput) nameInput.placeholder = t.nameInput;

  const PhoneInput = document.getElementById('PhoneInput');
  if (PhoneInput) PhoneInput.placeholder = t.PhoneInput;

  const problemInput = document.getElementById('problemInput');
  if (problemInput) problemInput.placeholder = t.problemInput;

  // кнопка отправки
  const submitButton = document.getElementById('submitButton');
  if (submitButton) submitButton.textContent = t.submitButton;
  // текст чекбокса
  const agree = document.getElementById('agree');
  if (agree) agree.textContent = t.agree;
  //navigation
  const navHome = document.getElementById('navHome');
  if (navHome) navHome.textContent = t.navHome;
  //gallery
  const navPhoto = document.getElementById('navPhoto');
  if (navPhoto) navPhoto.textContent = t.navPhoto;
  //contact
  const navContact = document.getElementById('navContact');
  if (navContact) navContact.textContent = t.navContact;
   
  const heroText = document.getElementById('heroText');
  if (heroText) heroText.textContent = t.heroText;
  
  const heroButton = document.getElementById('heroButton');
  if (heroButton) heroButton.textContent = t.heroButton;

  const footerPhone = document.getElementById('footerPhone');
  if (footerPhone) footerPhone.textContent = t.footerPhone;

  const footerEmail = document.getElementById('footerEmail');
  if (footerEmail) footerEmail.textContent = t.footerEmail;

  const contact = document.getElementById('contact');
  if (contact) contact.textContent = t.contact;

  const contactPhone = document.getElementById('contactPhone');
  if (contactPhone) contactPhone.textContent = t.contactPhone;

  const contactEmail = document.getElementById('contactEmail');
  if (contactEmail) contactEmail.textContent = t.contactEmail;

  const instaText = document.getElementById('instaText');
  if (instaText) instaText.textContent = t.instaText;
// переключение картинок по позициям и языку
images.forEach((img, i) => {
  img.src = translations[lang].images[i];
});

  // подсветка кнопок
  document.querySelectorAll('.lang-switch button').forEach(btn => btn.classList.remove('active'));
  const activeBtn = document.getElementById(lang + 'Btn')
  if (activeBtn) activeBtn.classList.add('active');
}

// обработчики кнопок
document.getElementById('ruBtn').addEventListener('click', () => setLanguage('ru'));
document.getElementById('enBtn').addEventListener('click', () => setLanguage('en'));
document.getElementById('uaBtn').addEventListener('click', () => setLanguage('ua'));

document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('lang') || 'ru';
  setLanguage(savedLang);
});