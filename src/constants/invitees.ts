interface FamilyMembers {
  name: string;
  image: string;
}

export interface Invitee {
  name: string;
  familyMembers: FamilyMembers[];
  image: string;
  id: string;
}

export const invitees: Invitee[] = [
  {
    name: 'Jay Pancholi',
    familyMembers: [
      {
        name: 'Palak Tank',
        image: '',
      },
    ],
    image: '',
    id: 'jay-pancholi',
  },
  {
    name: 'Palak Tank',
    familyMembers: [
      {
        name: 'Jay Pancholi',
        image: '',
      },
    ],
    image: '',
    id: 'palak-tank',
  },
  {
    name: 'Malav Vanza',
    familyMembers: [
      {
        name: 'Sonu Vanza',
        image: '',
      },
    ],
    image: '',
    id: 'malav-vanza',
  },
  {
    name: 'Sonu Vanza',
    familyMembers: [
      {
        name: 'Malav Vanza',
        image: '',
      },
    ],
    image: '',
    id: 'sonu-vanza',
  },
  {
    name: 'Ricky Santoki',
    familyMembers: [
      {
        name: 'Rutva Santoki',
        image: '',
      },
      { name: 'Thor Santoki', image: '' },
      { name: 'Ishi Santoki', image: '' },
    ],
    image: '',
    id: 'ricky-santoki',
  },
  {
    name: 'Rutva Santoki',
    familyMembers: [
      {
        name: 'Ricky Santoki',
        image: '',
      },
      { name: 'Thor Santoki', image: '' },
      { name: 'Ishi Santoki', image: '' },
    ],
    image: '',
    id: 'rutva-santoki',
  },
  {
    name: 'Aditya Parikh',
    familyMembers: [],
    image: '',
    id: 'aditya-parikh',
  },
  {
    name: 'Vivek Patel',
    familyMembers: [
      { name: 'Khushbu Patel', image: '' },
      { name: 'Agastya Patel', image: '' },
      { name: 'Youger One', image: '' },
    ],
    image: '',
    id: 'vivek-patel',
  },
  {
    name: 'Khushbu Patel',
    familyMembers: [
      { name: 'Vivek Patel', image: '' },
      { name: 'Agastya Patel', image: '' },
      { name: 'Youger One', image: '' },
    ],
    image: '',
    id: 'khushbu-patel',
  },
];
