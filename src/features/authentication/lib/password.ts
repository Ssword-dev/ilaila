import crypto, { scryptSync, timingSafeEqual } from 'node:crypto';

const W = 7;
const N = Math.pow(2, W);
const r = 8;
const p = 1;
const K = 64;

function hash(password: string) {
    const salt = crypto.randomBytes(32);
    const derivedKey = scryptSync(password, salt, K, { N, r, p });
    return `${salt}:${derivedKey.toString('hex')}`;
}

function verify(inputPassword: string, storedHash: string): boolean {
  const [salt, originalHash] = storedHash.split(':');
  if (!salt || !originalHash) return false;

  const inputHash = scryptSync(inputPassword, salt, K, { N, r, p }).toString('hex');

  return timingSafeEqual(
    Buffer.from(inputHash, 'hex'),
    Buffer.from(originalHash, 'hex')
  );
}

export { hash, verify };