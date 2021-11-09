import { Offers } from '../types/offer';

export const offers: Offers = [
  {
    id: 0,
    city: 'Paris',
    gallery: [{
      src: 'img/room.jpg',
      alt: 'Studio',
    }, {
      src: 'img/apartment-01.jpg',
      alt: 'Studio',
    }, {
      src: 'img/apartment-02.jpg',
      alt: 'Studio',
    }, {
      src: 'img/apartment-03.jpg',
      alt: 'Studio',
    }, {
      src: 'img/studio-01.jpg',
      alt: 'Studio',
    }, {
      src: 'img/apartment-01.jpg',
      alt: 'Studio',
    }],
    firstImage: 'img/room.jpg',
    mark: 'Premium',
    name: 'Beautiful & luxurious studio at great location',
    rating: 4.8,
    type: 'Apartment',
    bedrooms: '3 Bedrooms',
    adults: 'Max 4 adults',
    priceValue: 120,
    priceText: 'night',
    insideList: [{
      item: 'Wi-Fi',
    }, {
      item: 'Washing machine',
    }, {
      item: 'Towels',
    }, {
      item: 'Heating',
    }, {
      item: 'Coffee machine',
    }, {
      item: 'Baby seat',
    }, {
      item: 'Kitchen',
    }, {
      item: 'Dishwasher',
    }, {
      item: 'Cabel TV',
    }, {
      item: 'Fridge',
    }],
    userAvatar: 'img/avatar-angelina.jpg',
    userName: 'Angelina',
    userStatus: 'Pro',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    review: [{
      userAvatar: 'img/avatar-max.jpg',
      userName: 'Max',
      rating: '80%',
      text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
      dateAdd: '2019-04-24',
    }],
    lat: 52.3909553943508,
    lng: 4.85309666406198,
  },
  {
    id: 1,
    city: 'Cologne',
    gallery: [{
      src: 'img/apartment-01.jpg',
      alt: 'Studio',
    }, {
      src: 'img/apartment-02.jpg',
      alt: 'Studio',
    }, {
      src: 'img/apartment-03.jpg',
      alt: 'Studio',
    }, {
      src: 'img/studio-01.jpg',
      alt: 'Studio',
    }, {
      src: 'img/apartment-01.jpg',
      alt: 'Studio',
    }, {
      src: 'img/room.jpg',
      alt: 'Studio',
    }],
    firstImage: 'img/apartment-01.jpg',
    mark: 'Premium',
    name: 'Wood and stone place',
    rating: 4.5,
    type: 'Private room',
    bedrooms: '2 Bedrooms',
    adults: 'Max 3 adults',
    priceValue: 80,
    priceText: 'night',
    insideList: [{
      item: 'Wi-Fi',
    }, {
      item: 'Washing machine',
    }, {
      item: 'Dishwasher',
    }, {
      item: 'Cabel TV',
    }, {
      item: 'Fridge',
    }],
    userAvatar: 'img/avatar-max.jpg',
    userName: 'Max',
    userStatus: 'Pro',
    text: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    review: [{
      userAvatar: 'img/avatar-max.jpg',
      userName: 'Max',
      rating: '80%',
      text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
      dateAdd: '2019-04-24',
    },
    {
      userAvatar: 'img/avatar-angelina.jpg',
      userName: 'Angelina',
      rating: '65%',
      text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.',
      dateAdd: '2019-11-08',
    }],
    lat: 52.369553943508,
    lng: 4.85309666406198,
  },
  {
    id: 2,
    city: 'Brussels',
    gallery: [{
      src: 'img/room.jpg',
      alt: 'Studio',
    }, {
      src: 'img/studio-01.jpg',
      alt: 'Studio',
    }, {
      src: 'img/apartment-01.jpg',
      alt: 'Studio',
    }, {
      src: 'img/apartment-01.jpg',
      alt: 'Studio',
    }, {
      src: 'img/apartment-02.jpg',
      alt: 'Studio',
    }, {
      src: 'img/apartment-03.jpg',
      alt: 'Studio',
    }],
    firstImage: 'img/room.jpg',
    mark: 'Premium',
    name: 'Canal View Prinsengracht',
    rating: 3.4,
    type: 'Apartment',
    bedrooms: '3 Bedrooms',
    adults: 'Max 5 adults',
    priceValue: 132,
    priceText: 'night',
    insideList: [{
      item: 'Wi-Fi',
    }, {
      item: 'Washing machine',
    }, {
      item: 'Towels',
    }, {
      item: 'Baby seat',
    }, {
      item: 'Kitchen',
    }, {
      item: 'Dishwasher',
    }, {
      item: 'Cabel TV',
    }],
    userAvatar: 'img/avatar-angelina.jpg',
    userName: 'Angelina',
    userStatus: 'Pro',
    text: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.',
    review: [{
      userAvatar: 'img/avatar-max.jpg',
      userName: 'Max',
      rating: '80%',
      text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
      dateAdd: '2019-04-24',
    },
    {
      userAvatar: 'img/avatar-angelina.jpg',
      userName: 'Angelina',
      rating: '65%',
      text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.',
      dateAdd: '2019-11-08',
    },
    {
      userAvatar: 'img/avatar-max.jpg',
      userName: 'Max',
      rating: '70%',
      text: 'Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.',
      dateAdd: '2019-03-27',
    }],
    lat: 52.3909553943508,
    lng: 4.929309666406198,
  },
  {
    id: 3,
    city: 'Amsterdam',
    gallery: [{
      src: 'img/apartment-01.jpg',
      alt: 'Studio',
    }, {
      src: 'img/apartment-02.jpg',
      alt: 'Studio',
    }, {
      src: 'img/apartment-01.jpg',
      alt: 'Studio',
    }, {
      src: 'img/room.jpg',
      alt: 'Studio',
    }, {
      src: 'img/apartment-03.jpg',
      alt: 'Studio',
    }, {
      src: 'img/studio-01.jpg',
      alt: 'Studio',
    }],
    firstImage: 'img/apartment-01.jpg',
    mark: 'Premium',
    name: 'Nice, cozy, warm big bed apartment',
    rating: 4.2,
    type: 'Apartment',
    bedrooms: '3 Bedrooms',
    adults: 'Max 3 adults',
    priceValue: 180,
    priceText: 'night',
    insideList: [{
      item: 'Wi-Fi',
    }, {
      item: 'Coffee machine',
    }, {
      item: 'Kitchen',
    }, {
      item: 'Dishwasher',
    }, {
      item: 'Cabel TV',
    }, {
      item: 'Fridge',
    }],
    userAvatar: 'img/avatar-max.jpg',
    userName: 'Max',
    userStatus: 'Pro',
    text: 'Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.',
    review: [{
      userAvatar: 'img/avatar-max.jpg',
      userName: 'Max',
      rating: '80%',
      text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
      dateAdd: '2019-04-24',
    },
    {
      userAvatar: 'img/avatar-angelina.jpg',
      userName: 'Angelina',
      rating: '65%',
      text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.',
      dateAdd: '2019-11-08',
    },
    {
      userAvatar: 'img/avatar-max.jpg',
      userName: 'Max',
      rating: '70%',
      text: 'Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.',
      dateAdd: '2019-03-27',
    },
    {
      userAvatar: 'img/avatar-angelina.jpg',
      userName: 'Angelina',
      rating: '65%',
      text: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
      dateAdd: '2019-09-17',
    }],
    lat: 52.3809553943508,
    lng: 4.939309666406198,
  },
  {
    id: 4,
    city: 'Hamburg',
    gallery: [ {
      src: 'img/apartment-03.jpg',
      alt: 'Studio',
    }, {
      src: 'img/studio-01.jpg',
      alt: 'Studio',
    }, {
      src: 'img/room.jpg',
      alt: 'Studio',
    }, {
      src: 'img/apartment-01.jpg',
      alt: 'Studio',
    }, {
      src: 'img/apartment-02.jpg',
      alt: 'Studio',
    }, {
      src: 'img/apartment-01.jpg',
      alt: 'Studio',
    }],
    firstImage: 'img/apartment-03.jpg',
    mark: 'Premium',
    name: 'Sed ut perspiciatis unde omnis',
    rating: 4.3,
    type: 'Apartment',
    bedrooms: '2 Bedrooms',
    adults: 'Max 4 adults',
    priceValue: 110,
    priceText: 'night',
    insideList: [{
      item: 'Wi-Fi',
    }, {
      item: 'Washing machine',
    }, {
      item: 'Towels',
    }, {
      item: 'Heating',
    }, {
      item: 'Kitchen',
    }, {
      item: 'Dishwasher',
    }, {
      item: 'Cabel TV',
    }, {
      item: 'Fridge',
    }],
    userAvatar: 'img/avatar-angelina.jpg',
    userName: 'Angelina',
    userStatus: 'Pro',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    review: [{
      userAvatar: 'img/avatar-max.jpg',
      userName: 'Max',
      rating: '80%',
      text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
      dateAdd: '2019-04-24',
    }],
    lat: 52.3909379485738,
    lng: 4.85309690398450,
  },
  {
    id: 5,
    city: 'Dusseldorf',
    gallery: [ {
      src: 'img/studio-01.jpg',
      alt: 'Studio',
    }, {
      src: 'img/room.jpg',
      alt: 'Studio',
    }, {
      src: 'img/apartment-01.jpg',
      alt: 'Studio',
    }, {
      src: 'img/apartment-02.jpg',
      alt: 'Studio',
    }, {
      src: 'img/apartment-03.jpg',
      alt: 'Studio',
    }, {
      src: 'img/apartment-01.jpg',
      alt: 'Studio',
    }],
    firstImage: 'img/studio-01.jpg',
    mark: 'Premium',
    name: 'Quis autem vel eum iure',
    rating: 2.8,
    type: 'Private room',
    bedrooms: '1 Bedrooms',
    adults: 'Max 2 adults',
    priceValue: 80,
    priceText: 'night',
    insideList: [{
      item: 'Wi-Fi',
    }, {
      item: 'Kitchen',
    }, {
      item: 'Dishwasher',
    }, {
      item: 'Cabel TV',
    }, {
      item: 'Fridge',
    }],
    userAvatar: 'img/avatar-angelina.jpg',
    userName: 'Angelina',
    userStatus: 'Pro',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    review: [{
      userAvatar: 'img/avatar-max.jpg',
      userName: 'Max',
      rating: '80%',
      text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
      dateAdd: '2019-04-24',
    }],
    lat: 52.3909558798798,
    lng: 4.85309645364578,
  },

  {
    id: 6,
    city: 'Paris',
    gallery: [{
      src: 'img/apartment-01.jpg',
      alt: 'Studio',
    }, {
      src: 'img/apartment-02.jpg',
      alt: 'Studio',
    }, {
      src: 'img/apartment-03.jpg',
      alt: 'Studio',
    }, {
      src: 'img/studio-01.jpg',
      alt: 'Studio',
    }, {
      src: 'img/apartment-01.jpg',
      alt: 'Studio',
    }, {
      src: 'img/room.jpg',
      alt: 'Studio',
    }],
    firstImage: 'img/apartment-01.jpg',
    mark: 'Premium',
    name: 'Wood and stone place',
    rating: 4.5,
    type: 'Private room',
    bedrooms: '2 Bedrooms',
    adults: 'Max 3 adults',
    priceValue: 80,
    priceText: 'night',
    insideList: [{
      item: 'Wi-Fi',
    }, {
      item: 'Washing machine',
    }, {
      item: 'Dishwasher',
    }, {
      item: 'Cabel TV',
    }, {
      item: 'Fridge',
    }],
    userAvatar: 'img/avatar-max.jpg',
    userName: 'Max',
    userStatus: 'Pro',
    text: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    review: [{
      userAvatar: 'img/avatar-max.jpg',
      userName: 'Max',
      rating: '80%',
      text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
      dateAdd: '2019-04-24',
    },
    {
      userAvatar: 'img/avatar-angelina.jpg',
      userName: 'Angelina',
      rating: '65%',
      text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.',
      dateAdd: '2019-11-08',
    }],
    lat: 52.3695533983794,
    lng: 4.85309609834529,
  },
  {
    id: 7,
    city: 'Cologne',
    gallery: [{
      src: 'img/room.jpg',
      alt: 'Studio',
    }, {
      src: 'img/studio-01.jpg',
      alt: 'Studio',
    }, {
      src: 'img/apartment-01.jpg',
      alt: 'Studio',
    }, {
      src: 'img/apartment-01.jpg',
      alt: 'Studio',
    }, {
      src: 'img/apartment-02.jpg',
      alt: 'Studio',
    }, {
      src: 'img/apartment-03.jpg',
      alt: 'Studio',
    }],
    firstImage: 'img/room.jpg',
    mark: 'Premium',
    name: 'Canal View Prinsengracht',
    rating: 3.4,
    type: 'Apartment',
    bedrooms: '3 Bedrooms',
    adults: 'Max 5 adults',
    priceValue: 132,
    priceText: 'night',
    insideList: [{
      item: 'Wi-Fi',
    }, {
      item: 'Washing machine',
    }, {
      item: 'Towels',
    }, {
      item: 'Baby seat',
    }, {
      item: 'Kitchen',
    }, {
      item: 'Dishwasher',
    }, {
      item: 'Cabel TV',
    }],
    userAvatar: 'img/avatar-angelina.jpg',
    userName: 'Angelina',
    userStatus: 'Pro',
    text: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.',
    review: [{
      userAvatar: 'img/avatar-max.jpg',
      userName: 'Max',
      rating: '80%',
      text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
      dateAdd: '2019-04-24',
    },
    {
      userAvatar: 'img/avatar-angelina.jpg',
      userName: 'Angelina',
      rating: '65%',
      text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.',
      dateAdd: '2019-11-08',
    },
    {
      userAvatar: 'img/avatar-max.jpg',
      userName: 'Max',
      rating: '70%',
      text: 'Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.',
      dateAdd: '2019-03-27',
    }],
    lat: 52.39095589357834,
    lng: 4.929309623497079,
  },
  {
    id: 8,
    city: 'Brussels',
    gallery: [{
      src: 'img/apartment-01.jpg',
      alt: 'Studio',
    }, {
      src: 'img/apartment-02.jpg',
      alt: 'Studio',
    }, {
      src: 'img/apartment-01.jpg',
      alt: 'Studio',
    }, {
      src: 'img/room.jpg',
      alt: 'Studio',
    }, {
      src: 'img/apartment-03.jpg',
      alt: 'Studio',
    }, {
      src: 'img/studio-01.jpg',
      alt: 'Studio',
    }],
    firstImage: 'img/apartment-01.jpg',
    mark: 'Premium',
    name: 'Nice, cozy, warm big bed apartment',
    rating: 4.2,
    type: 'Apartment',
    bedrooms: '3 Bedrooms',
    adults: 'Max 3 adults',
    priceValue: 180,
    priceText: 'night',
    insideList: [{
      item: 'Wi-Fi',
    }, {
      item: 'Coffee machine',
    }, {
      item: 'Kitchen',
    }, {
      item: 'Dishwasher',
    }, {
      item: 'Cabel TV',
    }, {
      item: 'Fridge',
    }],
    userAvatar: 'img/avatar-max.jpg',
    userName: 'Max',
    userStatus: 'Pro',
    text: 'Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.',
    review: [{
      userAvatar: 'img/avatar-max.jpg',
      userName: 'Max',
      rating: '80%',
      text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
      dateAdd: '2019-04-24',
    },
    {
      userAvatar: 'img/avatar-angelina.jpg',
      userName: 'Angelina',
      rating: '65%',
      text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.',
      dateAdd: '2019-11-08',
    },
    {
      userAvatar: 'img/avatar-max.jpg',
      userName: 'Max',
      rating: '70%',
      text: 'Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.',
      dateAdd: '2019-03-27',
    },
    {
      userAvatar: 'img/avatar-angelina.jpg',
      userName: 'Angelina',
      rating: '65%',
      text: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
      dateAdd: '2019-09-17',
    }],
    lat: 52.38095598375484,
    lng: 4.939309379458734,
  },
  {
    id: 9,
    city: 'Amsterdam',
    gallery: [ {
      src: 'img/apartment-03.jpg',
      alt: 'Studio',
    }, {
      src: 'img/studio-01.jpg',
      alt: 'Studio',
    }, {
      src: 'img/room.jpg',
      alt: 'Studio',
    }, {
      src: 'img/apartment-01.jpg',
      alt: 'Studio',
    }, {
      src: 'img/apartment-02.jpg',
      alt: 'Studio',
    }, {
      src: 'img/apartment-01.jpg',
      alt: 'Studio',
    }],
    firstImage: 'img/apartment-03.jpg',
    mark: 'Premium',
    name: 'Sed ut perspiciatis unde omnis',
    rating: 4.3,
    type: 'Apartment',
    bedrooms: '2 Bedrooms',
    adults: 'Max 4 adults',
    priceValue: 110,
    priceText: 'night',
    insideList: [{
      item: 'Wi-Fi',
    }, {
      item: 'Washing machine',
    }, {
      item: 'Towels',
    }, {
      item: 'Heating',
    }, {
      item: 'Kitchen',
    }, {
      item: 'Dishwasher',
    }, {
      item: 'Cabel TV',
    }, {
      item: 'Fridge',
    }],
    userAvatar: 'img/avatar-angelina.jpg',
    userName: 'Angelina',
    userStatus: 'Pro',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    review: [{
      userAvatar: 'img/avatar-max.jpg',
      userName: 'Max',
      rating: '80%',
      text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
      dateAdd: '2019-04-24',
    }],
    lat: 52.3909349567948,
    lng: 4.85309683985474,
  },
  {
    id: 10,
    city: 'Hamburg',
    gallery: [ {
      src: 'img/studio-01.jpg',
      alt: 'Studio',
    }, {
      src: 'img/room.jpg',
      alt: 'Studio',
    }, {
      src: 'img/apartment-01.jpg',
      alt: 'Studio',
    }, {
      src: 'img/apartment-02.jpg',
      alt: 'Studio',
    }, {
      src: 'img/apartment-03.jpg',
      alt: 'Studio',
    }, {
      src: 'img/apartment-01.jpg',
      alt: 'Studio',
    }],
    firstImage: 'img/studio-01.jpg',
    mark: 'Premium',
    name: 'Quis autem vel eum iure',
    rating: 2.8,
    type: 'Private room',
    bedrooms: '1 Bedrooms',
    adults: 'Max 2 adults',
    priceValue: 80,
    priceText: 'night',
    insideList: [{
      item: 'Wi-Fi',
    }, {
      item: 'Kitchen',
    }, {
      item: 'Dishwasher',
    }, {
      item: 'Cabel TV',
    }, {
      item: 'Fridge',
    }],
    userAvatar: 'img/avatar-angelina.jpg',
    userName: 'Angelina',
    userStatus: 'Pro',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    review: [{
      userAvatar: 'img/avatar-max.jpg',
      userName: 'Max',
      rating: '80%',
      text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
      dateAdd: '2019-04-24',
    }],
    lat: 52.3909539845738,
    lng: 4.85309639547348,
  },
  {
    id: 11,
    city: 'Dusseldorf',
    gallery: [{
      src: 'img/room.jpg',
      alt: 'Studio',
    }, {
      src: 'img/apartment-01.jpg',
      alt: 'Studio',
    }, {
      src: 'img/apartment-02.jpg',
      alt: 'Studio',
    }, {
      src: 'img/apartment-03.jpg',
      alt: 'Studio',
    }, {
      src: 'img/studio-01.jpg',
      alt: 'Studio',
    }, {
      src: 'img/apartment-01.jpg',
      alt: 'Studio',
    }],
    firstImage: 'img/room.jpg',
    mark: 'Premium',
    name: 'Beautiful & luxurious studio at great location',
    rating: 4.8,
    type: 'Apartment',
    bedrooms: '3 Bedrooms',
    adults: 'Max 4 adults',
    priceValue: 120,
    priceText: 'night',
    insideList: [{
      item: 'Wi-Fi',
    }, {
      item: 'Washing machine',
    }, {
      item: 'Towels',
    }, {
      item: 'Heating',
    }, {
      item: 'Coffee machine',
    }, {
      item: 'Baby seat',
    }, {
      item: 'Kitchen',
    }, {
      item: 'Dishwasher',
    }, {
      item: 'Cabel TV',
    }, {
      item: 'Fridge',
    }],
    userAvatar: 'img/avatar-angelina.jpg',
    userName: 'Angelina',
    userStatus: 'Pro',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    review: [{
      userAvatar: 'img/avatar-max.jpg',
      userName: 'Max',
      rating: '80%',
      text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
      dateAdd: '2019-04-24',
    }],
    lat: 52.3909553457987,
    lng: 4.85309663549837,
  },

  {
    id: 12,
    city: 'Paris',
    gallery: [{
      src: 'img/room.jpg',
      alt: 'Studio',
    }, {
      src: 'img/studio-01.jpg',
      alt: 'Studio',
    }, {
      src: 'img/apartment-01.jpg',
      alt: 'Studio',
    }, {
      src: 'img/apartment-01.jpg',
      alt: 'Studio',
    }, {
      src: 'img/apartment-02.jpg',
      alt: 'Studio',
    }, {
      src: 'img/apartment-03.jpg',
      alt: 'Studio',
    }],
    firstImage: 'img/room.jpg',
    mark: 'Premium',
    name: 'Canal View Prinsengracht',
    rating: 3.4,
    type: 'Apartment',
    bedrooms: '3 Bedrooms',
    adults: 'Max 5 adults',
    priceValue: 132,
    priceText: 'night',
    insideList: [{
      item: 'Wi-Fi',
    }, {
      item: 'Washing machine',
    }, {
      item: 'Towels',
    }, {
      item: 'Baby seat',
    }, {
      item: 'Kitchen',
    }, {
      item: 'Dishwasher',
    }, {
      item: 'Cabel TV',
    }],
    userAvatar: 'img/avatar-angelina.jpg',
    userName: 'Angelina',
    userStatus: 'Pro',
    text: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.',
    review: [{
      userAvatar: 'img/avatar-max.jpg',
      userName: 'Max',
      rating: '80%',
      text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
      dateAdd: '2019-04-24',
    },
    {
      userAvatar: 'img/avatar-angelina.jpg',
      userName: 'Angelina',
      rating: '65%',
      text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.',
      dateAdd: '2019-11-08',
    },
    {
      userAvatar: 'img/avatar-max.jpg',
      userName: 'Max',
      rating: '70%',
      text: 'Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.',
      dateAdd: '2019-03-27',
    }],
    lat: 52.39095583794534,
    lng: 4.929309634859785,
  },
  {
    id: 13,
    city: 'Cologne',
    gallery: [{
      src: 'img/apartment-01.jpg',
      alt: 'Studio',
    }, {
      src: 'img/apartment-02.jpg',
      alt: 'Studio',
    }, {
      src: 'img/apartment-01.jpg',
      alt: 'Studio',
    }, {
      src: 'img/room.jpg',
      alt: 'Studio',
    }, {
      src: 'img/apartment-03.jpg',
      alt: 'Studio',
    }, {
      src: 'img/studio-01.jpg',
      alt: 'Studio',
    }],
    firstImage: 'img/apartment-01.jpg',
    mark: 'Premium',
    name: 'Nice, cozy, warm big bed apartment',
    rating: 4.2,
    type: 'Apartment',
    bedrooms: '3 Bedrooms',
    adults: 'Max 3 adults',
    priceValue: 180,
    priceText: 'night',
    insideList: [{
      item: 'Wi-Fi',
    }, {
      item: 'Coffee machine',
    }, {
      item: 'Kitchen',
    }, {
      item: 'Dishwasher',
    }, {
      item: 'Cabel TV',
    }, {
      item: 'Fridge',
    }],
    userAvatar: 'img/avatar-max.jpg',
    userName: 'Max',
    userStatus: 'Pro',
    text: 'Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.',
    review: [{
      userAvatar: 'img/avatar-max.jpg',
      userName: 'Max',
      rating: '80%',
      text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
      dateAdd: '2019-04-24',
    },
    {
      userAvatar: 'img/avatar-angelina.jpg',
      userName: 'Angelina',
      rating: '65%',
      text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.',
      dateAdd: '2019-11-08',
    },
    {
      userAvatar: 'img/avatar-max.jpg',
      userName: 'Max',
      rating: '70%',
      text: 'Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.',
      dateAdd: '2019-03-27',
    },
    {
      userAvatar: 'img/avatar-angelina.jpg',
      userName: 'Angelina',
      rating: '65%',
      text: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
      dateAdd: '2019-09-17',
    }],
    lat: 52.38095893875898,
    lng: 4.939309634598879,
  },
  {
    id: 14,
    city: 'Brussels',
    gallery: [ {
      src: 'img/apartment-03.jpg',
      alt: 'Studio',
    }, {
      src: 'img/studio-01.jpg',
      alt: 'Studio',
    }, {
      src: 'img/room.jpg',
      alt: 'Studio',
    }, {
      src: 'img/apartment-01.jpg',
      alt: 'Studio',
    }, {
      src: 'img/apartment-02.jpg',
      alt: 'Studio',
    }, {
      src: 'img/apartment-01.jpg',
      alt: 'Studio',
    }],
    firstImage: 'img/apartment-03.jpg',
    mark: 'Premium',
    name: 'Sed ut perspiciatis unde omnis',
    rating: 4.3,
    type: 'Apartment',
    bedrooms: '2 Bedrooms',
    adults: 'Max 4 adults',
    priceValue: 110,
    priceText: 'night',
    insideList: [{
      item: 'Wi-Fi',
    }, {
      item: 'Washing machine',
    }, {
      item: 'Towels',
    }, {
      item: 'Heating',
    }, {
      item: 'Kitchen',
    }, {
      item: 'Dishwasher',
    }, {
      item: 'Cabel TV',
    }, {
      item: 'Fridge',
    }],
    userAvatar: 'img/avatar-angelina.jpg',
    userName: 'Angelina',
    userStatus: 'Pro',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    review: [{
      userAvatar: 'img/avatar-max.jpg',
      userName: 'Max',
      rating: '80%',
      text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
      dateAdd: '2019-04-24',
    }],
    lat: 52.3909379398945,
    lng: 4.85309690234879,
  },
  {
    id: 15,
    city: 'Amsterdam',
    gallery: [ {
      src: 'img/studio-01.jpg',
      alt: 'Studio',
    }, {
      src: 'img/room.jpg',
      alt: 'Studio',
    }, {
      src: 'img/apartment-01.jpg',
      alt: 'Studio',
    }, {
      src: 'img/apartment-02.jpg',
      alt: 'Studio',
    }, {
      src: 'img/apartment-03.jpg',
      alt: 'Studio',
    }, {
      src: 'img/apartment-01.jpg',
      alt: 'Studio',
    }],
    firstImage: 'img/studio-01.jpg',
    mark: 'Premium',
    name: 'Quis autem vel eum iure',
    rating: 2.8,
    type: 'Private room',
    bedrooms: '1 Bedrooms',
    adults: 'Max 2 adults',
    priceValue: 80,
    priceText: 'night',
    insideList: [{
      item: 'Wi-Fi',
    }, {
      item: 'Kitchen',
    }, {
      item: 'Dishwasher',
    }, {
      item: 'Cabel TV',
    }, {
      item: 'Fridge',
    }],
    userAvatar: 'img/avatar-angelina.jpg',
    userName: 'Angelina',
    userStatus: 'Pro',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    review: [{
      userAvatar: 'img/avatar-max.jpg',
      userName: 'Max',
      rating: '80%',
      text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
      dateAdd: '2019-04-24',
    }],
    lat: 52.3909538794853,
    lng: 4.85309634589748,
  },
  {
    id: 16,
    city: 'Hamburg',
    gallery: [{
      src: 'img/room.jpg',
      alt: 'Studio',
    }, {
      src: 'img/apartment-01.jpg',
      alt: 'Studio',
    }, {
      src: 'img/apartment-02.jpg',
      alt: 'Studio',
    }, {
      src: 'img/apartment-03.jpg',
      alt: 'Studio',
    }, {
      src: 'img/studio-01.jpg',
      alt: 'Studio',
    }, {
      src: 'img/apartment-01.jpg',
      alt: 'Studio',
    }],
    firstImage: 'img/room.jpg',
    mark: 'Premium',
    name: 'Beautiful & luxurious studio at great location',
    rating: 4.8,
    type: 'Apartment',
    bedrooms: '3 Bedrooms',
    adults: 'Max 4 adults',
    priceValue: 120,
    priceText: 'night',
    insideList: [{
      item: 'Wi-Fi',
    }, {
      item: 'Washing machine',
    }, {
      item: 'Towels',
    }, {
      item: 'Heating',
    }, {
      item: 'Coffee machine',
    }, {
      item: 'Baby seat',
    }, {
      item: 'Kitchen',
    }, {
      item: 'Dishwasher',
    }, {
      item: 'Cabel TV',
    }, {
      item: 'Fridge',
    }],
    userAvatar: 'img/avatar-angelina.jpg',
    userName: 'Angelina',
    userStatus: 'Pro',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    review: [{
      userAvatar: 'img/avatar-max.jpg',
      userName: 'Max',
      rating: '80%',
      text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
      dateAdd: '2019-04-24',
    }],
    lat: 52.3909552384794,
    lng: 4.85309623486743,
  },
  {
    id: 17,
    city: 'Dusseldorf',
    gallery: [{
      src: 'img/apartment-01.jpg',
      alt: 'Studio',
    }, {
      src: 'img/apartment-02.jpg',
      alt: 'Studio',
    }, {
      src: 'img/apartment-03.jpg',
      alt: 'Studio',
    }, {
      src: 'img/studio-01.jpg',
      alt: 'Studio',
    }, {
      src: 'img/apartment-01.jpg',
      alt: 'Studio',
    }, {
      src: 'img/room.jpg',
      alt: 'Studio',
    }],
    firstImage: 'img/apartment-01.jpg',
    mark: 'Premium',
    name: 'Wood and stone place',
    rating: 4.5,
    type: 'Private room',
    bedrooms: '2 Bedrooms',
    adults: 'Max 3 adults',
    priceValue: 80,
    priceText: 'night',
    insideList: [{
      item: 'Wi-Fi',
    }, {
      item: 'Washing machine',
    }, {
      item: 'Dishwasher',
    }, {
      item: 'Cabel TV',
    }, {
      item: 'Fridge',
    }],
    userAvatar: 'img/avatar-max.jpg',
    userName: 'Max',
    userStatus: 'Pro',
    text: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    review: [{
      userAvatar: 'img/avatar-max.jpg',
      userName: 'Max',
      rating: '80%',
      text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
      dateAdd: '2019-04-24',
    },
    {
      userAvatar: 'img/avatar-angelina.jpg',
      userName: 'Angelina',
      rating: '65%',
      text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.',
      dateAdd: '2019-11-08',
    }],
    lat: 52.3695534587943,
    lng: 4.85309663498475,
  },

  {
    id: 18,
    city: 'Paris',
    gallery: [{
      src: 'img/apartment-01.jpg',
      alt: 'Studio',
    }, {
      src: 'img/apartment-02.jpg',
      alt: 'Studio',
    }, {
      src: 'img/apartment-01.jpg',
      alt: 'Studio',
    }, {
      src: 'img/room.jpg',
      alt: 'Studio',
    }, {
      src: 'img/apartment-03.jpg',
      alt: 'Studio',
    }, {
      src: 'img/studio-01.jpg',
      alt: 'Studio',
    }],
    firstImage: 'img/apartment-01.jpg',
    mark: 'Premium',
    name: 'Nice, cozy, warm big bed apartment',
    rating: 4.2,
    type: 'Apartment',
    bedrooms: '3 Bedrooms',
    adults: 'Max 3 adults',
    priceValue: 180,
    priceText: 'night',
    insideList: [{
      item: 'Wi-Fi',
    }, {
      item: 'Coffee machine',
    }, {
      item: 'Kitchen',
    }, {
      item: 'Dishwasher',
    }, {
      item: 'Cabel TV',
    }, {
      item: 'Fridge',
    }],
    userAvatar: 'img/avatar-max.jpg',
    userName: 'Max',
    userStatus: 'Pro',
    text: 'Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.',
    review: [{
      userAvatar: 'img/avatar-max.jpg',
      userName: 'Max',
      rating: '80%',
      text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
      dateAdd: '2019-04-24',
    },
    {
      userAvatar: 'img/avatar-angelina.jpg',
      userName: 'Angelina',
      rating: '65%',
      text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.',
      dateAdd: '2019-11-08',
    },
    {
      userAvatar: 'img/avatar-max.jpg',
      userName: 'Max',
      rating: '70%',
      text: 'Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.',
      dateAdd: '2019-03-27',
    },
    {
      userAvatar: 'img/avatar-angelina.jpg',
      userName: 'Angelina',
      rating: '65%',
      text: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
      dateAdd: '2019-09-17',
    }],
    lat: 52.38095598798678,
    lng: 4.939309676586973,
  },
  {
    id: 19,
    city: 'Cologne',
    gallery: [ {
      src: 'img/apartment-03.jpg',
      alt: 'Studio',
    }, {
      src: 'img/studio-01.jpg',
      alt: 'Studio',
    }, {
      src: 'img/room.jpg',
      alt: 'Studio',
    }, {
      src: 'img/apartment-01.jpg',
      alt: 'Studio',
    }, {
      src: 'img/apartment-02.jpg',
      alt: 'Studio',
    }, {
      src: 'img/apartment-01.jpg',
      alt: 'Studio',
    }],
    firstImage: 'img/apartment-03.jpg',
    mark: 'Premium',
    name: 'Sed ut perspiciatis unde omnis',
    rating: 4.3,
    type: 'Apartment',
    bedrooms: '2 Bedrooms',
    adults: 'Max 4 adults',
    priceValue: 110,
    priceText: 'night',
    insideList: [{
      item: 'Wi-Fi',
    }, {
      item: 'Washing machine',
    }, {
      item: 'Towels',
    }, {
      item: 'Heating',
    }, {
      item: 'Kitchen',
    }, {
      item: 'Dishwasher',
    }, {
      item: 'Cabel TV',
    }, {
      item: 'Fridge',
    }],
    userAvatar: 'img/avatar-angelina.jpg',
    userName: 'Angelina',
    userStatus: 'Pro',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    review: [{
      userAvatar: 'img/avatar-max.jpg',
      userName: 'Max',
      rating: '80%',
      text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
      dateAdd: '2019-04-24',
    }],
    lat: 52.3909390907878,
    lng: 4.85309698988570,
  },
  {
    id: 20,
    city: 'Brussels',
    gallery: [ {
      src: 'img/studio-01.jpg',
      alt: 'Studio',
    }, {
      src: 'img/room.jpg',
      alt: 'Studio',
    }, {
      src: 'img/apartment-01.jpg',
      alt: 'Studio',
    }, {
      src: 'img/apartment-02.jpg',
      alt: 'Studio',
    }, {
      src: 'img/apartment-03.jpg',
      alt: 'Studio',
    }, {
      src: 'img/apartment-01.jpg',
      alt: 'Studio',
    }],
    firstImage: 'img/studio-01.jpg',
    mark: 'Premium',
    name: 'Quis autem vel eum iure',
    rating: 2.8,
    type: 'Private room',
    bedrooms: '1 Bedrooms',
    adults: 'Max 2 adults',
    priceValue: 80,
    priceText: 'night',
    insideList: [{
      item: 'Wi-Fi',
    }, {
      item: 'Kitchen',
    }, {
      item: 'Dishwasher',
    }, {
      item: 'Cabel TV',
    }, {
      item: 'Fridge',
    }],
    userAvatar: 'img/avatar-angelina.jpg',
    userName: 'Angelina',
    userStatus: 'Pro',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    review: [{
      userAvatar: 'img/avatar-max.jpg',
      userName: 'Max',
      rating: '80%',
      text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
      dateAdd: '2019-04-24',
    }],
    lat: 52.3909558793949,
    lng: 4.85309645334985,
  },
  {
    id: 21,
    city: 'Amsterdam',
    gallery: [{
      src: 'img/room.jpg',
      alt: 'Studio',
    }, {
      src: 'img/apartment-01.jpg',
      alt: 'Studio',
    }, {
      src: 'img/apartment-02.jpg',
      alt: 'Studio',
    }, {
      src: 'img/apartment-03.jpg',
      alt: 'Studio',
    }, {
      src: 'img/studio-01.jpg',
      alt: 'Studio',
    }, {
      src: 'img/apartment-01.jpg',
      alt: 'Studio',
    }],
    firstImage: 'img/room.jpg',
    mark: 'Premium',
    name: 'Beautiful & luxurious studio at great location',
    rating: 4.8,
    type: 'Apartment',
    bedrooms: '3 Bedrooms',
    adults: 'Max 4 adults',
    priceValue: 120,
    priceText: 'night',
    insideList: [{
      item: 'Wi-Fi',
    }, {
      item: 'Washing machine',
    }, {
      item: 'Towels',
    }, {
      item: 'Heating',
    }, {
      item: 'Coffee machine',
    }, {
      item: 'Baby seat',
    }, {
      item: 'Kitchen',
    }, {
      item: 'Dishwasher',
    }, {
      item: 'Cabel TV',
    }, {
      item: 'Fridge',
    }],
    userAvatar: 'img/avatar-angelina.jpg',
    userName: 'Angelina',
    userStatus: 'Pro',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    review: [{
      userAvatar: 'img/avatar-max.jpg',
      userName: 'Max',
      rating: '80%',
      text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
      dateAdd: '2019-04-24',
    }],
    lat: 52.3909553924398,
    lng: 4.85309666239848,
  },
  {
    id: 22,
    city: 'Hamburg',
    gallery: [{
      src: 'img/apartment-01.jpg',
      alt: 'Studio',
    }, {
      src: 'img/apartment-02.jpg',
      alt: 'Studio',
    }, {
      src: 'img/apartment-03.jpg',
      alt: 'Studio',
    }, {
      src: 'img/studio-01.jpg',
      alt: 'Studio',
    }, {
      src: 'img/apartment-01.jpg',
      alt: 'Studio',
    }, {
      src: 'img/room.jpg',
      alt: 'Studio',
    }],
    firstImage: 'img/apartment-01.jpg',
    mark: 'Premium',
    name: 'Wood and stone place',
    rating: 4.5,
    type: 'Private room',
    bedrooms: '2 Bedrooms',
    adults: 'Max 3 adults',
    priceValue: 80,
    priceText: 'night',
    insideList: [{
      item: 'Wi-Fi',
    }, {
      item: 'Washing machine',
    }, {
      item: 'Dishwasher',
    }, {
      item: 'Cabel TV',
    }, {
      item: 'Fridge',
    }],
    userAvatar: 'img/avatar-max.jpg',
    userName: 'Max',
    userStatus: 'Pro',
    text: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    review: [{
      userAvatar: 'img/avatar-max.jpg',
      userName: 'Max',
      rating: '80%',
      text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
      dateAdd: '2019-04-24',
    },
    {
      userAvatar: 'img/avatar-angelina.jpg',
      userName: 'Angelina',
      rating: '65%',
      text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.',
      dateAdd: '2019-11-08',
    }],
    lat: 52.3695539359873,
    lng: 4.85309666434587,
  },
  {
    id: 23,
    city: 'Dusseldorf',
    gallery: [{
      src: 'img/room.jpg',
      alt: 'Studio',
    }, {
      src: 'img/studio-01.jpg',
      alt: 'Studio',
    }, {
      src: 'img/apartment-01.jpg',
      alt: 'Studio',
    }, {
      src: 'img/apartment-01.jpg',
      alt: 'Studio',
    }, {
      src: 'img/apartment-02.jpg',
      alt: 'Studio',
    }, {
      src: 'img/apartment-03.jpg',
      alt: 'Studio',
    }],
    firstImage: 'img/room.jpg',
    mark: 'Premium',
    name: 'Canal View Prinsengracht',
    rating: 3.4,
    type: 'Apartment',
    bedrooms: '3 Bedrooms',
    adults: 'Max 5 adults',
    priceValue: 132,
    priceText: 'night',
    insideList: [{
      item: 'Wi-Fi',
    }, {
      item: 'Washing machine',
    }, {
      item: 'Towels',
    }, {
      item: 'Baby seat',
    }, {
      item: 'Kitchen',
    }, {
      item: 'Dishwasher',
    }, {
      item: 'Cabel TV',
    }],
    userAvatar: 'img/avatar-angelina.jpg',
    userName: 'Angelina',
    userStatus: 'Pro',
    text: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.',
    review: [{
      userAvatar: 'img/avatar-max.jpg',
      userName: 'Max',
      rating: '80%',
      text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
      dateAdd: '2019-04-24',
    },
    {
      userAvatar: 'img/avatar-angelina.jpg',
      userName: 'Angelina',
      rating: '65%',
      text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.',
      dateAdd: '2019-11-08',
    },
    {
      userAvatar: 'img/avatar-max.jpg',
      userName: 'Max',
      rating: '70%',
      text: 'Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.',
      dateAdd: '2019-03-27',
    }],
    lat: 52.39095539345923,
    lng: 4.929309666239858,
  },
];
