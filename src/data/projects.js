/**
 * Single source of truth for which projects exist and their tech tags.
 * Copy (name/description) lives in i18n/translations.js keyed by `id`;
 * images are loaded separately in Projects.jsx since that's presentation-only.
 *
 * The Hero's "shipped" stat counts this array, so adding or removing a
 * project here updates that number automatically — nothing to sync by hand.
 */
export const PROJECTS_META = [
  {
    id: 'school-archive',
    tags: ['PHP', 'CodeIgniter', 'Bootstrap', 'SQL'],
  },
  {
    id: 'sapu-jagat',
    tags: ['Vue.js', 'Tailwind CSS', 'Node.js', 'Hapi.js'],
  },
  {
    id: 'share-story',
    tags: ['JavaScript', 'Node.js', 'PWA', 'Leaflet.js'],
  },
  {
    id: 'ukm-inventory',
    tags: ['Flutter'],
  },
  {
    id: 'iot-balance',
    tags: ['Arduino', 'RFID', 'C'],
  },
]
