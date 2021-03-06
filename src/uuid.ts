// https://github.com/homebridge/HAP-NodeJS/blob/master/src/lib/util/uuid.ts

const VALID_UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export function isValid(UUID: string) {
  return VALID_UUID_REGEX.test(UUID);
}
const VALID_SHORT_REGEX = /^[0-9a-f]{1,8}$/i;

export function toLongFormUUID(uuid: string, base = '-0000-1000-8000-0026BB765291') {
  if (isValid(uuid)) return uuid.toUpperCase();
  if (!VALID_SHORT_REGEX.test(uuid)) throw new TypeError('uuid was not a valid UUID or short form UUID');
  if (!isValid('00000000' + base)) throw new TypeError('base was not a valid base UUID');

  return (('00000000' + uuid).substr(-8) + base).toUpperCase();
}
