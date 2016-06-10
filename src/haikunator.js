/**
 * Adjectives used by haikunator
 * @type {string[]}
 */
const adjectives = [
  'tua', 'muda', 'dingin', 'panas', 'hangat', 'kosong', 'kering', 'emas',
  'merah', 'jingga', 'kuning', 'hijau', 'biru', 'nila', 'ungu', 'hitam',
  'putih', 'terang', 'gelap', 'kecil', 'besar', 'anonim', 'misterius',
  'lembut', 'kasar', 'sunyi', 'kosong', 'bulat', 'lapang', 'kotak', 'aneh',
  'unik', 'harum', 'tersembunyi', 'berbunga', 'semangat', 'sedih', 'gembira',
  'bangga', 'kelam', 'kelabu', 'bercahaya', 'berkilau', 'berembun', 'biasa',
  'sejati', 'raksasa', 'berisik', 'abadi', 'acak', 'baik', 'jahat', 'bundar',
  'cepat', 'lambat', 'cerdik', 'cerewet', 'dahsyat', 'dewasa', 'elegan',
  'fiktif', 'ideal', 'kuno', 'lawas', 'manis', 'minimalis', 'mulus', 'nasionalis',
  'nokturnal', 'organik', 'penasaran', 'pucat', 'purba', 'religius', 'sejahtera',
  'semu', 'sepi', 'serasi', 'solid', 'terik', 'tulus', 'universal', 'modern'
];

/**
 * Nouns used by haikunator
 * @type {string[]}
 */
const nouns = [
  'burung', 'perahu', 'roti', 'kupukupu', 'awan', 'embun', 'hutan', 'pohon',
  'bukit', 'rumput', 'bulan', 'pagi', 'sore', 'hujan', 'matahari', 'bintang',
  'asap', 'air', 'ayam', 'angsa', 'raja', 'ratu', 'topi', 'mimpi', 'hati',
  'bebek', 'beo', 'bunglon', 'gajah', 'cacing', 'capung', 'cupang', 'domba',
  'hamster', 'hiu', 'harimau', 'kuda', 'kucing', 'lele', 'panda', 'semut',
  'siput', 'tikus', 'burung', 'macan', 'marmut', 'danau', 'lapangan', 'rumah',
  'sungai', 'laut', 'nasi', 'sop', 'puisi', 'buku', 'api', 'lumpur', 'malam',
  'kertas', 'daun', 'bayangan', 'suara', 'kilat', 'guntur', 'gelombang',
  'kayu', 'sapu', 'batu', 'jalan', 'kue', 'uburubur', 'bubur', 'katak',
  'ular', 'ikan', 'penyu', 'kurakura', 'bunga', 'kabut', 'rawa', 'langit'
];

/**
 * Generate heroku-like random names
 *
 * @param {string} [delimiter=-]
 * @param {number} [tokenLength=4]
 * @param {boolean} [tokenHex=false]
 * @param {string} [tokenChars=0123456789]
 * @param {string} [seed]
 * @returns {string}
 */
export default function haikunate({delimiter = '-', tokenLength = 4, tokenHex = false, tokenChars = '0123456789', seed} = {}) {
  if (tokenHex) {
    tokenChars = '0123456789abcdef';
  }

  // determine the random function to use
  let random;
  if (seed) {
    let RandomGenerator = require('random-seed');
    random = new RandomGenerator(seed).random;
  } else {
    random = Math.random;
  }

  // pick adjective and noun
  const adjective = adjectives[Math.floor(random() * adjectives.length)];
  const noun = nouns[Math.floor(random() * nouns.length)];

  // create hex token
  let token = '';
  for (let i = 0; i < tokenLength; i++) {
    token += tokenChars.charAt(Math.floor(random() * tokenChars.length));
  }

  // create result and return
  const sections = [noun, adjective, token];
  return sections.filter((e) => {
    return e === 0 || e;
  }).join(delimiter);
}
