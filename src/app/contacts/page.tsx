import Link from "next/link";
import {
  ArrowRight,
  PhoneCall,
  MessageCircle,
  Send,
  MapPin,
  Clock,
  ShieldCheck,
  FileText,
  CheckCircle2,
} from "lucide-react";

const PHONE = "+7 (999) 000-00-00"; // TODO: заменить на реальный
const PHONE_TEL = "+79990000000"; // TODO: заменить на реальный (без пробелов)

// TODO: подставить реальные ссылки под номер/юзернейм
const WHATSAPP_LINK = `https://wa.me/${PHONE_TEL.replace("+", "")}?text=${encodeURIComponent(
  "Здравствуйте! Нужен расчёт по фото. Подскажите стоимость и ближайшее окно?"
)}`;
const TELEGRAM_LINK = `https://t.me/`; // например: https://t.me/username

// TODO: точный адрес (для блока текста)
const OFFICE_ADDRESS =
  "Санкт-Петербург, м. Гражданский проспект (офис/точка приёма)";

// Яндекс-карта: в идеале вставить ссылку из “Поделиться → Код для вставки”.
// Пока — рабочий шаблон. Если не покажет — скажи, дам правильный iframe за 30 секунд.
const YMAPS_EMBED =
  "https://yandex.ru/map-widget/v1/?ll=30.4127%2C60.0349&z=14&pt=30.4127,60.0349,pm2rdm";

export default function ContactsPage() {
  return (
    <div className="bg-[rgb(var(--bg))]">
      <div className="nicor-container nicor-section">
        {/* Header */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="nicor-chip">
              <MapPin className="h-3.5 w-3.5" />
              СПб и область
            </span>
            <span className="nicor-chip">
              <Clock className="h-3.5 w-3.5" />
              09:00–21:00
            </span>
            <span className="nicor-chip">
              <ShieldCheck className="h-3.5 w-3.5" />
              Договор + гарантия
            </span>
          </div>

          <h1 className="text-3xl font-semibold md:text-4xl">Контакты</h1>
          <p className="nicor-p max-w-3xl">
            Самый быстрый способ получить стоимость —{" "}
            <span className="font-semibold text-zinc-900">фото в мессенджер</span>.
            Или оставь заявку — перезвоним и уточним детали.
          </p>

          {/* Quick actions */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href={`tel:${PHONE_TEL}`} className="nicor-btn-ghost w-full sm:w-auto">
              <PhoneCall className="h-4 w-4" />
              Позвонить
              <span className="ml-2 text-zinc-500">{PHONE}</span>
            </a>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="nicor-btn-brand w-full sm:w-auto"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>

            <a
              href={TELEGRAM_LINK}
              target="_blank"
              rel="noreferrer"
              className="nicor-btn-primary w-full sm:w-auto"
            >
              <Send className="h-4 w-4" />
              Telegram
            </a>

            <Link href="#lead" className="nicor-btn-ghost w-full sm:w-auto">
              Заявка <ArrowRight className="h-4 w-4 opacity-80" />
            </Link>
          </div>
        </div>

        <div className="nicor-divider my-8" />

        <div className="grid gap-6 lg:grid-cols-5">
          {/* Left column: info */}
          <div className="lg:col-span-2 grid gap-6">
            {/* Contact card */}
            <div className="nicor-card-soft p-6">
              <div className="flex items-start gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-2xl border nicor-border bg-white">
                  <PhoneCall className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-semibold">Телефон</div>
                  <div className="mt-1 text-lg font-semibold text-zinc-900">{PHONE}</div>
                  <div className="mt-2 text-sm text-zinc-600">
                    Режим: 09:00–21:00 • СПб и область
                  </div>
                  <div className="mt-4 grid gap-2">
                    <a href={`tel:${PHONE_TEL}`} className="nicor-btn-ghost nicor-btn-sm justify-start">
                      <PhoneCall className="h-4 w-4" />
                      Позвонить
                    </a>
                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noreferrer"
                      className="nicor-btn-brand nicor-btn-sm justify-start"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Написать в WhatsApp
                    </a>
                    <a
                      href={TELEGRAM_LINK}
                      target="_blank"
                      rel="noreferrer"
                      className="nicor-btn-primary nicor-btn-sm justify-start"
                    >
                      <Send className="h-4 w-4" />
                      Написать в Telegram
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* How to get accurate price */}
            <div className="nicor-panel p-6">
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                <div className="text-sm font-semibold">Как быстрее получить точную цену</div>
              </div>

              <ul className="mt-4 grid gap-2 text-sm text-zinc-700">
                {[
                  "2–4 фото узла/места работ (общий план + крупно)",
                  "Коротко: “замена” или “с нуля”, что именно нужно",
                  "Район/адрес + этаж (если есть ограничения по доступу)",
                  "Желаемые сроки: сегодня/завтра/на неделе",
                ].map((t) => (
                  <li key={t} className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-zinc-900" />
                    {t}
                  </li>
                ))}
              </ul>

              <div className="mt-4 text-xs text-zinc-500">
                Мы сначала даём диапазон, затем фиксируем смету до старта.
              </div>
            </div>

            {/* Address */}
            <div className="nicor-card-soft p-6">
              <div className="flex items-start gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-2xl border nicor-border bg-white">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold">Офис</div>
                  <div className="mt-1 text-sm text-zinc-700">{OFFICE_ADDRESS}</div>
                  <div className="mt-2 text-xs text-zinc-500">
                    Если нужно — пришлём точку на карте и инструкции, как добраться.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column: form + map */}
          <div className="lg:col-span-3 grid gap-6">
            {/* Lead form */}
            <div id="lead" className="nicor-card-premium p-6 md:p-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-sm font-semibold">Заявка</div>
                  <div className="mt-1 text-sm text-zinc-600">
                    Имя и телефон — и мы перезвоним. Позже подключим отправку прямо в Telegram.
                  </div>
                </div>

                <span className="nicor-badge">быстро</span>
              </div>

              <div className="mt-5 grid gap-3">
                <input className="nicor-input" placeholder="Имя" />
                <input className="nicor-input" placeholder="Телефон" />
                <textarea
                  className="nicor-textarea"
                  placeholder="Коротко: что нужно сделать + адрес/район (и можно указать срок: сегодня/завтра/на неделе)"
                />
                <button className="nicor-btn-primary h-12 rounded-2xl">
                  Отправить
                </button>

                <div className="text-xs text-zinc-500">
                  Нажимая “Отправить”, вы соглашаетесь на обработку данных для связи.
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="nicor-card-soft overflow-hidden p-0">
              <div className="flex items-center justify-between gap-3 px-6 py-4 border-b nicor-border bg-white/60">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <div className="text-sm font-semibold">На карте</div>
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

              <div className="relative aspect-[16/9] w-full bg-zinc-100">
                <iframe
                  title="NICOR map"
                  src={YMAPS_EMBED}
                  className="absolute inset-0 h-full w-full"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="nicor-divider my-10" />

        {/* Bottom CTA */}
        <div className="nicor-card-premium p-6 md:p-8">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <div className="text-sm font-semibold">Быстрый старт</div>
              <div className="mt-2 text-2xl font-semibold md:text-3xl">
                Скинь фото — скажем диапазон цены и ближайшее окно
              </div>
              <p className="mt-2 text-sm text-zinc-600">
                Обычно хватает пары фото и района. Без спама, только по делу.
              </p>
            </div>

            <div className="flex w-full flex-col gap-3 sm:flex-row md:w-auto">
              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="nicor-btn-brand w-full md:w-auto">
                WhatsApp <ArrowRight className="h-4 w-4 opacity-90" />
              </a>
              <a href={`tel:${PHONE_TEL}`} className="nicor-btn-ghost w-full md:w-auto">
                Позвонить
              </a>
            </div>
          </div>
        </div>

        <div className="h-4" />
      </div>
    </div>
  );
}
