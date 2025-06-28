export const TEMPLATE = {
  name: 'Hong Kong Traditional',
  style: 'hk',
  description:
    'The traditional scoring system for Hong Kong Mahjong, based on information from wikipedia.',
  link: 'https://en.wikipedia.org/wiki/Hong_Kong_mahjong_scoring_rules',
  score_type: 'Fan',
  rules: [
    { name: 'Self Flower', value: 1, tags: ['standard', 'bonus'] },
    { name: 'No Flowers', value: 1, tags: ['standard', 'bonus'] },
    { name: 'Flower Set', value: 2, tags: ['standard', 'bonus'] },
    {
      name: 'Seven Flowers',
      value: 3,
      tags: ['extra', 'bonus', 'autowin'],
    },
    {
      name: 'All Flowers',
      value: 8,
      tags: ['extra', 'bonus', 'autowin'],
    },
    {
      name: 'All Sequences',
      variant_name: 'All Chows',
      value: 1,
      tags: ['standard'],
    },
    {
      name: 'Dragon Pong',
      value: 1,
      tags: ['standard'],
    },
    {
      name: 'Round Wind',
      value: 1,
      tags: ['standard'],
    },
    {
      name: 'Seat Wind',
      value: 1,
      tags: ['standard'],
    },
    {
      name: 'Self Draw',
      value: 1,
      tags: ['standard'],
    },
    {
      name: 'Concealed Hand',
      value: 1,
      tags: ['standard'],
    },
    {
      name: 'Robbing the Kong',
      value: 1,
      tags: ['standard'],
    },
    {
      name: 'Last Tile',
      value: 1,
      tags: ['standard'],
    },
    {
      name: 'Kong Replacement',
      value: 1,
      tags: ['standard'],
    },
    {
      name: 'Replacement Self Draw',
      value: 1,
      tags: ['extra'],
    },
    {
      name: 'All Triplets',
      variant_name: 'All Pongs',
      value: 3,
      tags: ['standard'],
    },
    {
      name: 'Mixed One Suit',
      alt_names: ['Clean Hand', 'Half Flush'],
      value: 3,
      tags: ['standard'],
    },
    {
      name: 'Double Kong Replacement',
      value: 8,
      tags: ['standard'],
    },
    {
      name: 'All Pairs',
      variant_name: 'Seven Pairs',
      value: 4,
      tags: ['extra'],
    },
    {
      name: 'Pure One Suit',
      alt_names: ['Pure Hand', 'Full Flush'],
      value: 7,
      tags: ['standard'],
    },
    {
      name: 'Lesser Dragons',
      value: 5,
      tags: ['standard'],
    },
    {
      name: 'Greater Dragons',
      value: 8,
      tags: ['standard'],
    },
    {
      name: 'All Honors',
      value: 10,
      tags: ['standard'],
    },
    {
      name: 'Small Winds',
      value: 6,
      tags: ['standard'],
    },
    {
      name: 'Four Great Winds',
      value: 13,
      tags: ['standard', 'limit'],
    },
    {
      name: 'Thirteen Orphans',
      value: 13,
      tags: ['standard', 'limit'],
    },
    {
      name: 'Nine Gates',
      value: 10,
      tags: ['standard', 'limit'],
    },
    {
      name: 'All Kongs',
      value: 13,
      tags: ['standard', 'limit'],
    },
    {
      name: 'All Terminals',
      value: 10,
      tags: ['standard'],
    },
    {
      name: 'Concealed Triplets',
      value: 10,
      tags: ['standard'],
    },
    {
      name: 'Blessing Of Heaven',
      value: 13,
      tags: ['standard', 'limit'],
    },
    {
      name: 'Blessing Of Earth',
      value: 13,
      tags: ['standard', 'limit'],
    },
  ],
};
