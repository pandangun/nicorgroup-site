import {
  PhoneCall,
  MessageCircle,
  Send,
  MapPin,
  Clock,
  ShieldCheck,
  Mail,
  Building2,
  FileText,
  Paperclip,
  CheckCircle2,
} from "lucide-react";

const PHONE_DISPLAY = "+7 900 630-09-74";
const PHONE_TEL = "+79006300974";

// TODO: реальные ссылки
const TELEGRAM_USERNAME = "nicor_group";
const MAX_LINK = "https://max.ru/";

const WHATSAPP_LINK = `https://wa.me/${PHONE_TEL.replace("+", "")}?text=${encodeURIComponent(
  "Здравствуйте! Подскажите, пожалуйста, предварительную стоимость и ближайшее окно по времени. Могу отправить фото и описание."
)}`;
const TELEGRAM_LINK = `https://t.me/${TELEGRAM_USERNAME}`;

// Вымышленное (как просил)
const EMAIL = "info@nicor-group.ru";
const ADDRESS = "Санкт-Петербург, пр. Гражданский, 111";
const HOURS = "09:00–21:00";

// Яндекс-карта — поменяй координаты на точные
const YMAPS_EMBED =
  "https://yandex.ru/map-widget/v1/?ll=30.4127%2C60.0349&z=14&pt=30.4127,60.0349,pm2rdm";

const REQUEST_TYPES = [
  { value: "", label: "Выберите тип обращения (по желанию)" },
  { value: "photo_estimate", label: "Предварительная оценка по фото" },
  { value: "repair", label: "Ремонт / устранение течи" },
  { value: "install", label: "Установка сантехники" },
  { value: "bathroom", label: "Санузел под ключ" },
  { value: "heating", label: "Отопление / тёплый пол" },
  { value: "other", label: "Другое" },
];

export default function ContactsPage() {
  return (
    <div className="nicor-page">
      {/* =========================
          SCREEN 1: CONTACTS + MAP
         ========================= */}
      <section className="nicor-container pt-10 md:pt-14">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
          {/* LEFT: CONTACTS */}
          <div className="lg:col-span-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="nicor-chip">
                <MapPin className="h-3.5 w-3.5" />
                Санкт-Петербург и область
              </span>
              <span className="nicor-chip">
                <Clock className="h-3.5 w-3.5" />
                {HOURS}
              </span>
              <span className="nicor-chip">
                <ShieldCheck className="h-3.5 w-3.5" />
                Договор и гарантия
              </span>
            </div>

            <h1 className="mt-4 text-4xl font-semibold tracking-[-0.02em] md:text-5xl">
              Контакты
            </h1>

            <p className="mt-3 text-base text-zinc-700 md:text-lg">
              Для предварительной оценки удобнее всего{" "}
              <span className="font-semibold text-zinc-900">
                прислать фото и короткое описание
              </span>{" "}
              в мессенджер. Если фото нет — просто опишите ситуацию: уточним детали и
              предложим понятный следующий шаг.
            </p>

            {/* CONTACT GRID */}
            <div className="mt-6 grid gap-4">
              {/* PHONE */}
              <div className="nicor-card-soft p-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 text-xs font-semibold text-zinc-600">
                      <PhoneCall className="h-4 w-4" />
                      Телефон
                    </div>
                    <div className="mt-1 text-2xl font-semibold tracking-[-0.02em] text-zinc-900">
                      {PHONE_DISPLAY}
                    </div>
                    <div className="mt-1 text-xs text-zinc-500">Ежедневно {HOURS}</div>
                  </div>
                  <a href={`tel:${PHONE_TEL}`} className="nicor-btn-subtle shrink-0">
                    Позвонить
                  </a>
                </div>
              </div>

              {/* ADDRESS + EMAIL */}
              <div className="grid gap-4 md:grid-cols-2">
                <div className="nicor-card-soft p-5">
                  <div className="flex items-center gap-2 text-xs font-semibold text-zinc-600">
                    <Building2 className="h-4 w-4" />
                    Адрес
                  </div>
                  <div className="mt-1 text-sm font-semibold text-zinc-900">{ADDRESS}</div>
                  <div className="mt-1 text-xs text-zinc-500">
                    Офис/точка приёма по договорённости • Выезд по городу и области
                  </div>
                </div>

                <div className="nicor-card-soft p-5">
                  <div className="flex items-center gap-2 text-xs font-semibold text-zinc-600">
                    <Mail className="h-4 w-4" />
                    Почта
                  </div>
                  <div className="mt-1 text-sm font-semibold text-zinc-900">{EMAIL}</div>
                  <div className="mt-1 text-xs text-zinc-500">
                    Для смет, документов и коммерческих объектов
                  </div>

                  <div className="mt-3">
                    <a
                      href={`mailto:${EMAIL}?subject=${encodeURIComponent(
                        "НИКОР — запрос предварительной оценки"
                      )}`}
                      className="nicor-btn-subtle"
                    >
                      Написать
                    </a>
                  </div>
                </div>
              </div>

              {/* MESSENGERS */}
              <div className="nicor-card-premium p-5">
                <div className="relative z-10">
                  <div className="text-sm font-semibold text-zinc-900">Мессенджеры</div>
                  <div className="mt-1 text-sm text-zinc-700">
                    Подойдут для фото, короткого описания и уточнения сроков.
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noreferrer"
                      className="nicor-pill nicor-pill--wa"
                    >
                      <MessageCircle className="h-4 w-4" />
                      WhatsApp
                    </a>
                    <a
                      href={TELEGRAM_LINK}
                      target="_blank"
                      rel="noreferrer"
                      className="nicor-pill nicor-pill--tg"
                    >
                      <Send className="h-4 w-4" />
                      Telegram
                    </a>
                    <a
                      href={MAX_LINK}
                      target="_blank"
                      rel="noreferrer"
                      className="nicor-pill nicor-pill--max"
                    >
                      <span className="nicor-max-dot" />
                      MAX
                    </a>
                  </div>

                  <div className="mt-4 text-xs text-zinc-500">
                    Ответим после уточнения деталей — без лишних вопросов и «скриптов».
                  </div>
                </div>
              </div>

              {/* REQUISITES */}
              <div className="nicor-card-soft p-5">
                <div className="flex items-center gap-2 text-xs font-semibold text-zinc-600">
                  <FileText className="h-4 w-4" />
                  Реквизиты
                </div>

                <div className="mt-3 grid gap-2 text-sm text-zinc-700">
                  <div className="flex justify-between gap-3">
                    <span className="text-zinc-600">ИП</span>
                    <span className="font-semibold text-zinc-900">Иванов И.И.</span>
                  </div>
                  <div className="flex justify-between gap-3">
                    <span className="text-zinc-600">ИНН</span>
                    <span className="font-semibold text-zinc-900">780100000000</span>
                  </div>
                  <div className="flex justify-between gap-3">
                    <span className="text-zinc-600">ОГРНИП</span>
                    <span className="font-semibold text-zinc-900">321780100000000</span>
                  </div>
                </div>

                <div className="mt-3 text-xs text-zinc-500">
                  Полные реквизиты и документы предоставим по запросу.
                </div>
              </div>

              {/* MICRO TRUST */}
              <div className="grid gap-3 md:grid-cols-2">
                <div className="nicor-panel p-5">
                  <div className="text-sm font-semibold text-zinc-900">Как быстрее оценить</div>
                  <div className="mt-3 grid gap-2 text-sm text-zinc-700">
                    {[
                      "Фото (общий план + крупно)",
                      "Коротко: замена или монтаж с нуля",
                      "Район/адрес и сроки",
                    ].map((t) => (
                      <div key={t} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-zinc-900" />
                        {t}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="nicor-panel p-5">
                  <div className="text-sm font-semibold text-zinc-900">Что будет дальше</div>
                  <div className="mt-3 text-sm text-zinc-700">
                    Уточним детали → озвучим диапазон → согласуем состав работ и смету до начала.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: MAP AS BACKGROUND VISUAL */}
          <div className="lg:col-span-6">
            <div className="relative">
              {/* container that visually “sits in the background” */}
              <div className="relative overflow-hidden rounded-[38px] border nicor-border bg-white/25 shadow-[var(--shadow-md)]">
                {/* overlays to blend map into page */}
                <div className="pointer-events-none absolute inset-0 z-10">
                  {/* edge fade */}
                  <div className="absolute inset-0 bg-[radial-gradient(1000px_620px_at_55%_40%,rgba(255,255,255,0.00),rgba(248,250,252,0.78)_70%,rgba(248,250,252,0.96)_100%)]" />
                  {/* soft brand grading */}
                  <div className="absolute inset-0 bg-[radial-gradient(800px_460px_at_18%_22%,rgba(20,184,166,0.12),transparent_55%),radial-gradient(800px_460px_at_88%_28%,rgba(59,130,246,0.12),transparent_55%)]" />
                  {/* micro haze */}
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.10),rgba(255,255,255,0.18))]" />
                </div>

                <div className="relative z-0 aspect-[16/12] w-full bg-zinc-100">
                  <iframe
                    title="NICOR map"
                    src={YMAPS_EMBED}
                    className="absolute inset-0 h-full w-full"
                    loading="lazy"
                    style={{
                      WebkitMaskImage:
                        "radial-gradient(70% 70% at 50% 45%, #000 62%, transparent 100%)",
                      maskImage:
                        "radial-gradient(70% 70% at 50% 45%, #000 62%, transparent 100%)",
                      filter: "saturate(1.06) contrast(1.03)",
                    }}
                  />
                </div>

                <div className="relative z-20 flex items-center justify-between gap-3 border-t nicor-border bg-white/55 px-6 py-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <div className="text-sm font-semibold">Офис на карте</div>
                  </div>

                  <a
                    href="https://yandex.ru/maps/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-zinc-700 hover:text-zinc-900"
                  >
                    Открыть в картах →
                  </a>
                </div>
              </div>

              {/* small floating caption on desktop (optional “premium”) */}
              <div className="mt-4 hidden lg:block">
                <div className="text-xs text-zinc-500">
                  Точка на карте фиксирована на офисе. При необходимости отправим ориентиры и подъезд.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* spacer to feel like “end of screen 1” */}
        <div className="h-10 md:h-14" />
      </section>

      {/* =========================
          SCREEN 2: FULL-WIDTH FORM
         ========================= */}
      <section className="nicor-section border-t nicor-border">
        <div className="nicor-container">
          <div className="mx-auto max-w-4xl">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="nicor-kicker">Обратная связь</div>
                <h2 className="mt-2 nicor-h2">Сообщение для предварительной оценки</h2>
                <p className="mt-2 nicor-p">
                  Оставьте контакт и описание — мы свяжемся с Вами и уточним детали. Фото можно
                  прикрепить сразу (по желанию).
                </p>
              </div>

              <div className="hidden md:flex items-center gap-2 text-xs text-zinc-500">
                <ShieldCheck className="h-4 w-4" />
                Договор • гарантия • аккуратная работа
              </div>
            </div>

            <div className="mt-6 nicor-cta-premium p-6 md:p-8">
              <form className="grid gap-4">
                <div className="grid gap-3 md:grid-cols-2">
                  <input className="nicor-input nicor-input--premium" placeholder="Имя" />
                  <input className="nicor-input nicor-input--premium" placeholder="Телефон" />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-semibold text-zinc-700">
                    Тип обращения (по желанию)
                  </label>
                  <div className="nicor-select-wrap">
                    <select className="nicor-select" defaultValue="">
                      {REQUEST_TYPES.map((x) => (
                        <option key={x.value} value={x.value}>
                          {x.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <textarea
                  className="nicor-textarea nicor-textarea--premium"
                  placeholder="Коротко опишите задачу и укажите район/адрес. Если важно — добавьте желаемые сроки."
                />

                <div className="nicor-upload">
                  <div className="flex items-center gap-2 text-sm font-semibold text-zinc-900">
                    <Paperclip className="h-4 w-4" />
                    Фото (если есть)
                  </div>

                  <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="text-sm text-zinc-700">
                      Можно прикрепить 1–5 файлов. Если фото нет — ничего страшного.
                    </div>

                    <label className="nicor-btn-subtle cursor-pointer justify-center">
                      Прикрепить
                      <input type="file" className="hidden" accept="image/*" multiple />
                    </label>
                  </div>
                </div>

                <button type="button" className="nicor-btn-primary h-12 rounded-2xl !text-white">
                  Отправить
                </button>

                <div className="text-xs text-zinc-500">
                  Нажимая «Отправить», Вы соглашаетесь на обработку данных для связи.
                </div>
              </form>
            </div>

            <div className="mt-6 text-xs text-zinc-500">
              Если удобнее — можете написать в WhatsApp/Telegram/MAX и приложить фото там. Мы отвечаем
              в рабочее время: {HOURS}.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}