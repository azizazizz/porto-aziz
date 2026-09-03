/**
 * Single source of truth for which projects exist, their tech tags and links.
 * Copy (name/description) lives in i18n/translations.js keyed by `id`;
 * images are loaded separately in Projects.jsx since that's presentation-only.
 *
 * The Hero's "shipped" stat counts this array, so adding or removing a
 * project here updates that number automatically, nothing to sync by hand.
 *
 * `repo` and `demo` are optional. Fill either in and the link shows up in the
 * project's modal; leave it null and nothing renders. They cannot live on the
 * card itself, because the card is a <button> and an <a> inside a <button> is
 * invalid HTML whose click would fight the one that opens the modal.
 */
export const PROJECTS_META = [
  {
    id: 'school-archive',
    tags: ['PHP', 'CodeIgniter', 'Bootstrap', 'SQL'],
    repo: null,
    demo: null,
  },
  {
    id: 'sapu-jagat',
    tags: ['Vue.js', 'Tailwind CSS', 'Node.js', 'Hapi.js'],
    repo: null,
    demo: null,
  },
  {
    id: 'share-story',
    tags: ['JavaScript', 'Node.js', 'PWA', 'Leaflet.js'],
    repo: null,
    demo: null,
  },
  {
    id: 'ukm-inventory',
    tags: ['Flutter'],
    repo: null,
    demo: null,
  },
  {
    id: 'iot-balance',
    tags: ['Arduino', 'RFID', 'C'],
    repo: null,
    demo: null,
  },
]
