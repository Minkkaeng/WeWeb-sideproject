import test from 'node:test';
import assert from 'node:assert/strict';

import {
  buildTelegramMessage,
  validateContactPayload,
  requireTelegramConfig,
} from '../api/contact.js';

test('validateContactPayload accepts trimmed contact fields', () => {
  const result = validateContactPayload({
    name: '  Jane  ',
    email: ' jane@example.com ',
    message: '  Hello there  ',
  });

  assert.deepEqual(result, {
    ok: true,
    data: {
      name: 'Jane',
      email: 'jane@example.com',
      message: 'Hello there',
    },
  });
});

test('validateContactPayload rejects invalid email', () => {
  const result = validateContactPayload({
    name: 'Jane',
    email: 'not-email',
    message: 'Hello there',
  });

  assert.equal(result.ok, false);
  assert.equal(result.status, 400);
});

test('buildTelegramMessage formats inquiry for Telegram', () => {
  const text = buildTelegramMessage({
    name: 'Jane',
    email: 'jane@example.com',
    message: 'Need a new site.',
  });

  assert.match(text, /New website inquiry/);
  assert.match(text, /Name: Jane/);
  assert.match(text, /Email: jane@example\.com/);
  assert.match(text, /Need a new site\./);
});

test('requireTelegramConfig reads token and chat id from environment', () => {
  const config = requireTelegramConfig({
    TELEGRAM_BOT_TOKEN: '123:test-token',
    TELEGRAM_CHAT_ID: '456',
  });

  assert.deepEqual(config, {
    token: '123:test-token',
    chatId: '456',
  });
});
