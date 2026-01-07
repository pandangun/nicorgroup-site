export default function ContactsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-semibold md:text-4xl">Контакты</h1>
      <p className="mt-3 text-zinc-600 md:text-lg">
        Самый быстрый способ — фото в мессенджер. Или оставь заявку — перезвоним.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border p-6">
          <div className="font-semibold">Телефон</div>
          <div className="mt-2 text-zinc-700">+7 (999) 000-00-00</div>
          <div className="mt-4 text-sm text-zinc-600">СПб и область • 09:00–21:00</div>
          <div className="mt-4 text-sm text-zinc-600">
            WhatsApp/Telegram — вставим ссылку (дам готовые ссылки под твой номер)
          </div>
        </div>

        <div id="lead" className="rounded-3xl border bg-zinc-50 p-6">
          <div className="font-semibold">Заявка</div>
          <div className="mt-2 text-sm text-zinc-600">
            Имя и телефон — и мы перезвоним. Потом подключим отправку в Telegram.
          </div>

          <div className="mt-4 grid gap-3">
            <input className="h-12 rounded-2xl border px-4 outline-none focus:ring-2 focus:ring-zinc-200" placeholder="Имя" />
            <input className="h-12 rounded-2xl border px-4 outline-none focus:ring-2 focus:ring-zinc-200" placeholder="Телефон" />
            <textarea className="min-h-28 rounded-2xl border px-4 py-3 outline-none focus:ring-2 focus:ring-zinc-200" placeholder="Коротко: что нужно сделать + адрес/район" />
            <button className="h-12 rounded-2xl bg-zinc-900 px-4 font-medium text-white hover:bg-zinc-800">
              Отправить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
