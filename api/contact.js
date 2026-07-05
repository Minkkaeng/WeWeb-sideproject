const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 200;
const MAX_MESSAGE_LENGTH = 2000;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactPayload(payload) {
  const name = String(payload?.name ?? '').trim();
  const email = String(payload?.email ?? '').trim();
  const message = String(payload?.message ?? '').trim();

  if (!name || !email || !message) {
    return { ok: false, status: 400, error: 'All fields are required.' };
  }

  if (
    name.length > MAX_NAME_LENGTH ||
    email.length > MAX_EMAIL_LENGTH ||
    message.length > MAX_MESSAGE_LENGTH
  ) {
    return { ok: false, status: 400, error: 'Message fields are too long.' };
  }

  if (!emailPattern.test(email)) {
    return { ok: false, status: 400, error: 'Please enter a valid email address.' };
  }

  return {
    ok: true,
    data: { name, email, message },
  };
}

export function buildTelegramMessage({ name, email, message }) {
  return [
    'New website inquiry',
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    '',
    'Message:',
    message,
  ].join('\n');
}

export function requireTelegramConfig(env = process.env) {
  const token = env.TELEGRAM_BOT_TOKEN?.trim();
  const chatId = env.TELEGRAM_CHAT_ID?.trim();

  if (!token || !chatId) {
    throw new Error('Missing Telegram environment variables.');
  }

  return { token, chatId };
}

async function readJsonBody(req) {
  if (req.body && typeof req.body === 'object') {
    return req.body;
  }

  if (typeof req.body === 'string') {
    return JSON.parse(req.body || '{}');
  }

  return {};
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  let payload;
  try {
    payload = await readJsonBody(req);
  } catch {
    return res.status(400).json({ error: 'Invalid JSON body.' });
  }

  const validation = validateContactPayload(payload);
  if (!validation.ok) {
    return res.status(validation.status).json({ error: validation.error });
  }

  let config;
  try {
    config = requireTelegramConfig();
  } catch {
    return res.status(500).json({ error: 'Contact delivery is not configured.' });
  }

  const telegramResponse = await fetch(
    `https://api.telegram.org/bot${config.token}/sendMessage`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: config.chatId,
        text: buildTelegramMessage(validation.data),
        disable_web_page_preview: true,
      }),
    },
  );

  if (!telegramResponse.ok) {
    return res.status(502).json({ error: 'Failed to send message.' });
  }

  return res.status(200).json({ ok: true });
}
