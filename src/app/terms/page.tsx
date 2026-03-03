import Link from "next/link";
import { ShieldCheck, FileText, Mail, PhoneCall } from "lucide-react";

const COMPANY = "НИКОР-ГРУПП"; // можно "НИКОР"
const SITE = "nicorgroup.ru"; // можно оставить как есть
const EMAIL = "info@nicor-group.ru"; // вымышленная из контактов
const PHONE_DISPLAY = "+7 900 630-09-74";
const PHONE_TEL = "+79006300974";
const CITY = "Санкт-Петербург";

export const metadata = {
  title: "Персональные данные — НИКОР",
  description:
    "Информация об обработке персональных данных, целях, сроках и правах пользователя. НИКОР — сантехнические работы в СПб и области.",
};

export default function PersonalDataPage() {
  return (
    <div className="nicor-page">
      <section className="nicor-container py-10 md:py-14">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-wrap items-center gap-2">
            <span className="nicor-chip">
              <ShieldCheck className="h-3.5 w-3.5" />
              Персональные данные
            </span>
            <span className="nicor-chip">
              <FileText className="h-3.5 w-3.5" />
              Политика обработки
            </span>
          </div>

          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.02em] md:text-5xl">
            Обработка персональных данных
          </h1>

          <p className="mt-3 nicor-p">
            Ниже описано, какие персональные данные мы можем получать при обращении через сайт,
            мессенджеры и по телефону, зачем мы их используем, как храним и какие права есть у Вас.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="nicor-card-soft p-6">
              <div className="text-sm font-semibold text-zinc-900">Оператор</div>
              <div className="mt-2 text-sm text-zinc-700">
                <div className="font-semibold">{COMPANY}</div>
                <div className="mt-1 text-zinc-600">{CITY}</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  <a href={`tel:${PHONE_TEL}`} className="nicor-btn-subtle">
                    <PhoneCall className="h-4 w-4" />
                    {PHONE_DISPLAY}
                  </a>
                  <a
                    href={`mailto:${EMAIL}?subject=${encodeURIComponent(
                      "Вопрос по персональным данным"
                    )}`}
                    className="nicor-btn-subtle"
                  >
                    <Mail className="h-4 w-4" />
                    {EMAIL}
                  </a>
                </div>
              </div>
            </div>

            <div className="nicor-card-premium p-6">
              <div className="relative z-10">
                <div className="text-sm font-semibold text-zinc-900">Коротко по сути</div>
                <ul className="mt-3 grid gap-2 text-sm text-zinc-700">
                  <li>Мы используем данные только для связи, расчёта и выполнения работ.</li>
                  <li>Не продаём и не передаём данные третьим лицам для рекламы.</li>
                  <li>Вы можете запросить удаление или уточнение данных.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 nicor-divider" />

          <article className="prose prose-zinc max-w-none">
            <div className="mt-8 grid gap-6">
              <section className="nicor-panel p-6 md:p-7">
                <h2 className="m-0 text-xl font-semibold tracking-[-0.02em] text-zinc-900">
                  1. Какие данные мы можем получать
                </h2>
                <div className="mt-3 text-sm text-zinc-700">
                  <ul className="m-0 grid list-disc gap-2 pl-5">
                    <li>Имя (или любое обращение, которое Вы указали).</li>
                    <li>Телефон для обратной связи.</li>
                    <li>Адрес/район выполнения работ (если Вы его сообщили).</li>
                    <li>Описание задачи, дополнительные комментарии.</li>
                    <li>Фотографии/файлы, которые Вы прикрепили для оценки объёма работ.</li>
                    <li>
                      Технические данные: IP-адрес, cookies и данные браузера —{" "}
                      <span className="font-semibold">в минимальном объёме</span>, необходимом для
                      работы сайта и аналитики посещений.
                    </li>
                  </ul>
                </div>
              </section>

              <section className="nicor-panel p-6 md:p-7">
                <h2 className="m-0 text-xl font-semibold tracking-[-0.02em] text-zinc-900">
                  2. Цели обработки
                </h2>
                <div className="mt-3 text-sm text-zinc-700">
                  Мы обрабатываем персональные данные для:
                  <ul className="m-0 mt-2 grid list-disc gap-2 pl-5">
                    <li>обработки обращения и обратной связи;</li>
                    <li>предварительной оценки и подготовки расчёта/сметы;</li>
                    <li>согласования сроков и условий выполнения работ;</li>
                    <li>исполнения договора и гарантийных обязательств;</li>
                    <li>улучшения качества сервиса и работы сайта.</li>
                  </ul>
                </div>
              </section>

              <section className="nicor-panel p-6 md:p-7">
                <h2 className="m-0 text-xl font-semibold tracking-[-0.02em] text-zinc-900">
                  3. Правовые основания
                </h2>
                <div className="mt-3 text-sm text-zinc-700">
                  Основания обработки:
                  <ul className="m-0 mt-2 grid list-disc gap-2 pl-5">
                    <li>Ваше согласие (например, при отправке формы на сайте);</li>
                    <li>необходимость исполнения договора или запроса до заключения договора;</li>
                    <li>законные интересы оператора (например, обеспечение работоспособности сайта).</li>
                  </ul>
                </div>
              </section>

              <section className="nicor-panel p-6 md:p-7">
                <h2 className="m-0 text-xl font-semibold tracking-[-0.02em] text-zinc-900">
                  4. Сроки хранения
                </h2>
                <div className="mt-3 text-sm text-zinc-700">
                  Мы храним данные столько, сколько нужно для целей обработки:
                  <ul className="m-0 mt-2 grid list-disc gap-2 pl-5">
                    <li>
                      обращения/переписка — на период взаимодействия и разумный срок после (для
                      уточнений и гарантий);
                    </li>
                    <li>
                      документы по договору — в сроки, предусмотренные законодательством и правилами
                      бухгалтерского/налогового учёта (при наличии договора).
                    </li>
                  </ul>
                </div>
              </section>

              <section className="nicor-panel p-6 md:p-7">
                <h2 className="m-0 text-xl font-semibold tracking-[-0.02em] text-zinc-900">
                  5. Кому мы можем передавать данные
                </h2>
                <div className="mt-3 text-sm text-zinc-700">
                  Мы не передаём персональные данные третьим лицам для рекламных целей.
                  Доступ может быть у подрядчиков, которые помогают нам обеспечивать работу сайта и
                  связи (например, хостинг/почта/мессенджеры) — только в объёме, необходимом для
                  оказания услуги и при соблюдении конфиденциальности.
                </div>
              </section>

              <section className="nicor-panel p-6 md:p-7">
                <h2 className="m-0 text-xl font-semibold tracking-[-0.02em] text-zinc-900">
                  6. Безопасность
                </h2>
                <div className="mt-3 text-sm text-zinc-700">
                  Мы принимаем разумные организационные и технические меры для защиты данных от
                  утраты, несанкционированного доступа, изменения и распространения.
                </div>
              </section>

              <section className="nicor-panel p-6 md:p-7">
                <h2 className="m-0 text-xl font-semibold tracking-[-0.02em] text-zinc-900">
                  7. Ваши права
                </h2>
                <div className="mt-3 text-sm text-zinc-700">
                  Вы вправе:
                  <ul className="m-0 mt-2 grid list-disc gap-2 pl-5">
                    <li>запросить информацию об обработке Ваших данных;</li>
                    <li>потребовать уточнения, блокирования или удаления данных;</li>
                    <li>отозвать согласие на обработку (если применимо);</li>
                    <li>обратиться с запросом по контактам ниже.</li>
                  </ul>
                </div>
              </section>

              <section className="nicor-cta-premium p-6 md:p-8">
                <div className="max-w-2xl">
                  <div className="text-sm font-semibold text-zinc-900">Контакты по вопросам ПДн</div>
                  <div className="mt-2 text-sm text-zinc-700">
                    Напишите нам на почту, и мы ответим в разумный срок.
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <a
                      href={`mailto:${EMAIL}?subject=${encodeURIComponent(
                        "Запрос по персональным данным"
                      )}`}
                      className="nicor-btn-brand"
                    >
                      <Mail className="h-4 w-4" />
                      Написать на почту
                    </a>
                    <a href={`tel:${PHONE_TEL}`} className="nicor-btn-ghost">
                      <PhoneCall className="h-4 w-4" />
                      Позвонить
                    </a>
                    <Link href="/contacts" className="nicor-btn-ghost">
                      Контакты
                    </Link>
                  </div>

                  <div className="mt-4 text-xs text-zinc-500">
                    Версия документа: 1.0 • Сайт: {SITE}
                  </div>
                </div>
              </section>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}