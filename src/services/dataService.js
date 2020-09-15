const listings = {
  data: [
    {
      id: 1,
      images: [
        "https://picsum.photos/id/1025/1200/850",
        "https://via.placeholder.com/1200/850",
        "https://via.placeholder.com/1200/850",
        "https://via.placeholder.com/1200/850",
      ],
      title: "Cute pug puppy!",
      description:
        "Duis culpa voluptate proident labore nulla proident magna. Sit adipisicing Lorem in qui tempor elit commodo ex fugiat. Culpa commodo est tempor irure ipsum et Lorem sunt esse duis consectetur qui exercitation. Proident nulla sunt proident ea. Eiusmod veniam aute magna irure aliquip commodo qui est sint in non cillum consequat.",
      location: "Lethbridge, AB",
      price: "$1,500",
      viewsCount: 189,
      comments: [
        "Nostrud ullamco elit mollit anim qui nisi aute elit non laborum tempor ea. Nostrud amet occaecat adipisicing nostrud qui consectetur id eu do eu. Fugiat sit velit Lorem aliqua velit magna dolor. Elit quis velit aliquip culpa cupidatat dolor ea duis non. Esse esse excepteur aliqua labore officia reprehenderit eiusmod.",
      ],
      tags: ["pug", "puppy"],
      category: {
        id: 1,
        name: "Dog",
      },
      author: {
        id: 1,
        name: "Rosa Diaz",
        avatarImage: "http://lorempixel.com/400/400/people/1",
        phone: "555-000-0001",
        email: "user_1@email.com",
        reviews: [],
      },
    },
    {
      id: 2,
      images: [
        "https://picsum.photos/id/237/1200/850",
        "https://via.placeholder.com/1200/850",
      ],
      title: "Just a mutt",
      description:
        "Pariatur deserunt minim velit ex ipsum aliquip incididunt ullamco sunt dolore sunt. Minim dolore excepteur non tempor id sit culpa tempor velit. Tempor eu minim aliquip est deserunt excepteur tempor veniam ex occaecat qui.",
      location: "Magrath, AB",
      price: "$250",
      viewsCount: 85,
      comments: [
        "Culpa aute pariatur fugiat ex in ea Lorem. Incididunt sunt sunt aute commodo fugiat sint consectetur quis. Sunt eu adipisicing amet officia commodo cillum elit.",
        "Irure commodo ea dolor laborum Lorem labore nostrud laboris occaecat qui non cillum. Consectetur reprehenderit fugiat est duis aute ex reprehenderit consectetur labore cillum ipsum ipsum enim. Excepteur commodo culpa nisi commodo ut eu est minim. Labore sit fugiat qui quis quis in aute nostrud esse occaecat. Dolore qui officia mollit dolore duis cupidatat fugiat. Laboris mollit et laboris adipisicing laborum consequat non excepteur amet occaecat deserunt nulla cillum. Eu culpa non occaecat culpa.",
        "Labore ex anim commodo incididunt est. Aliquip deserunt ullamco et non. Adipisicing duis proident consequat commodo ea magna commodo dolore adipisicing.",
      ],
      tags: ["black", "puppy"],
      category: {
        id: 1,
        name: "Dog",
      },
      author: {
        id: 2,
        name: "Jay Pritchett",
        avatarImage: "http://lorempixel.com/400/400/people/2",
        phone: "555-000-0002",
        email: "user_2@email.com",
        reviews: [],
      },
    },
    {
      id: 3,
      images: ["http://lorempixel.com/1200/850/cats/3"],
      title: "Lovely tubby",
      description:
        "Anim nostrud minim in eu et non sint elit elit occaecat aliquip occaecat do dolore. Veniam sint exercitation eiusmod ex minim aliquip voluptate cupidatat. Consequat consequat est minim minim et qui exercitation sunt id nisi esse.",
      location: "Lethbridge, AB",
      price: "Free",
      viewsCount: 220,
      comments: [
        "Sit culpa voluptate fugiat et do. Labore sit commodo irure consectetur enim deserunt reprehenderit tempor irure cillum. Cillum mollit est minim velit ex officia sit velit quis. Labore est commodo voluptate eu est do officia. Lorem do proident mollit labore mollit duis cillum in commodo et adipisicing exercitation. Laboris anim consequat elit non. Reprehenderit cupidatat nisi qui culpa sit consectetur dolore cupidatat.",
      ],
      tags: ["tubby", "adult", "male"],
      category: {
        id: 2,
        name: "Cat",
      },
      author: {
        id: 3,
        name: "Phil Dunphy",
        avatarImage: "http://lorempixel.com/400/400/people/3",
        phone: "555-000-0003",
        email: "user_3@email.com",
        reviews: [],
      },
    },
    {
      id: 4,
      images: [
        "http://lorempixel.com/1200/850/cats/5",
        "https://via.placeholder.com/1200/850",
        "https://via.placeholder.com/1200/850",
        "https://via.placeholder.com/1200/850",
        "https://via.placeholder.com/1200/850",
        "https://via.placeholder.com/1200/850",
      ],
      title: "Siamese cat",
      description:
        "Fugiat veniam ad reprehenderit aliquip do irure nisi consequat ex incididunt ut. Cillum anim deserunt anim sit incididunt mollit veniam irure adipisicing excepteur. Sunt veniam duis eu nisi nulla cupidatat qui do fugiat sunt eiusmod minim officia. Velit aliqua ex ullamco eu ea. Eiusmod deserunt quis cupidatat proident cillum esse sint minim pariatur. Duis dolore qui laboris consectetur ex sunt cillum aliquip adipisicing. Consequat eiusmod elit occaecat ut.",
      location: "Raymond, AB",
      price: "$50",
      viewsCount: 350,
      comments: [],
      tags: ["siamese"],
      category: {
        id: 2,
        name: "Cat",
      },
      author: {
        id: 4,
        name: "Gloria Delgado",
        avatarImage: "http://lorempixel.com/400/400/people/4",
        phone: "555-000-0004",
        email: "user_4@email.com",
        reviews: [],
      },
    },
    {
      id: 5,
      images: [
        "http://place-puppy.com/1200x850",
        "https://via.placeholder.com/1200/850",
      ],
      title: "Energetic pup looking for a home",
      description:
        "Laboris est aute tempor occaecat qui aliqua laborum proident. Officia pariatur magna mollit minim ut non et est amet elit nisi tempor sunt deserunt. Excepteur pariatur laboris labore in sint quis mollit non voluptate quis irure laborum proident. Labore non adipisicing ut laboris incididunt ullamco elit ex velit et consequat excepteur. Incididunt Lorem aliqua quis sunt laboris nisi.",
      location: "Coaldale, AB",
      price: "$800",
      viewsCount: 116,
      comments: [
        "Minim proident do sit laboris consectetur irure fugiat consectetur eiusmod Lorem voluptate. Ipsum pariatur velit laboris aliquip. Ut aute nisi sint cupidatat consequat fugiat laborum irure voluptate magna consequat commodo sint duis. Velit adipisicing occaecat aute id aliquip proident aliquip commodo ad officia ad exercitation occaecat.",
        "Tempor sunt proident laboris magna laborum magna sunt velit reprehenderit eiusmod dolore nisi culpa. Mollit sit pariatur qui aliqua duis consequat ad magna dolor. Incididunt cillum labore dolore minim irure eu aliqua nulla nulla ut.",
        "Est proident occaecat sint sit cupidatat anim aliqua id tempor nulla. Aliquip tempor amet occaecat ad in. Pariatur Lorem labore qui esse.",
        "Reprehenderit Lorem deserunt nulla voluptate proident excepteur dolor laborum. Duis exercitation do culpa ullamco sit eiusmod deserunt laborum ipsum exercitation adipisicing. Lorem quis laboris qui do sint nisi Lorem aliquip do.",
      ],
      tags: ["high energy", "small"],
      category: {
        id: 1,
        name: "Dog",
      },
      author: {
        id: 1,
        name: "Rosa Diaz",
        avatarImage: "http://lorempixel.com/400/400/people/1",
        phone: "555-000-0001",
        email: "user_1@email.com",
        reviews: [],
      },
    },
    {
      id: 6,
      images: [
        "http://lorempixel.com/1200/850/cats/7",
        "https://via.placeholder.com/1200/850",
      ],
      title: "Mini lynx anyone?",
      description:
        "Anim amet elit id in excepteur sunt ullamco elit ad mollit nulla deserunt cillum. Amet sunt mollit tempor anim Lorem esse enim id veniam. Aliquip esse commodo eiusmod irure occaecat ipsum amet labore. Qui velit aliquip aliquip magna laboris excepteur mollit aliqua.",
      location: "Lethbridge, AB",
      price: "Free",
      viewsCount: 0,
      comments: [],
      tags: ["gray", "kitten"],
      category: {
        id: 2,
        name: "Cat",
      },
      author: {
        id: 5,
        name: "Raymond Hold",
        avatarImage: "http://lorempixel.com/400/400/people/5",
        phone: "555-000-0005",
        email: "user_5@email.com",
        reviews: [],
      },
    },
  ],
};

const categories = {
  data: [
    {
      id: 1,
      name: "Dog",
    },
    {
      id: 2,
      name: "Cat",
    },
  ],
};

// listings
export function allListings() {
  return listings;
}

export function getFeaturedListings() {
  // Shuffle array
  const shuffled = listings.data.sort(() => 0.5 - Math.random());

  // Get sub-array of first n elements after shuffled
  const featured = shuffled.slice(0, 4);
  return featured;
}

export function getListing(id) {
  const listing = listings.data.find((l) => l.id === id);
  return listing;
}

export function saveListing(listing) {
  let dbListing = listing.data.find((l) => l.id === listing.id) || {};
  dbListing.title = listing.title;
  dbListing.description = listing.description;
  dbListing.location = listing.location;
  dbListing.price = listing.price;

  if (!dbListing.id) {
    const maxListingId = Math.max.apply(
      Math,
      listings.data.map((listing) => {
        return listing.id;
      })
    );

    dbListing.id = maxListingId + 1;
    listings.push(dbListing);
  }

  return dbListing;
}

export function findListings(keywords, location, categoryId) {
  const match = listings.data.filter(
    (l) =>
      (keywords == null ||
        l.title.toLowerCase().includes(keywords.toLowerCase()) ||
        l.description.toLowerCase().includes(keywords.toLowerCase())) &&
      (location == null ||
        l.location.toLowerCase().includes(location.toLowerCase())) &&
      (isNaN(categoryId) || l.category.id === categoryId)
  );
  return match;
}

// categories
export function allCategories() {
  return categories;
}

export function getCategory(id) {
  const category = categories.data.find((l) => l.id === id);
  return category;
}
