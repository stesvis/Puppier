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
      reviewsCount: 15,
      category: {
        id: 1,
        name: "Dog",
      },
      author: {
        id: 1,
        avatarImage: "http://lorempixel.com/400/400/people/1",
        phone: "555-000-0001",
        email: "user_1@email.com",
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
      reviewsCount: 3,
      category: {
        id: 1,
        name: "Dog",
      },
      author: {
        id: 2,
        avatarImage: "http://lorempixel.com/400/400/people/2",
        phone: "555-000-0002",
        email: "user_2@email.com",
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
      reviewsCount: 0,
      category: {
        id: 2,
        name: "Cat",
      },
      author: {
        id: 3,
        avatarImage: "http://lorempixel.com/400/400/people/3",
        phone: "555-000-0003",
        email: "user_3@email.com",
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
      reviewsCount: 3,
      category: {
        id: 2,
        name: "Cat",
      },
      author: {
        id: 4,
        avatarImage: "http://lorempixel.com/400/400/people/4",
        phone: "555-000-0004",
        email: "user_4@email.com",
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
      reviewsCount: 8,
      category: {
        id: 1,
        name: "Dog",
      },
      author: {
        id: 1,
        avatarImage: "http://lorempixel.com/400/400/people/1",
        phone: "555-000-0001",
        email: "user_1@email.com",
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
      reviewsCount: 0,
      category: {
        id: 2,
        name: "Cat",
      },
      author: {
        id: 5,
        avatarImage: "http://lorempixel.com/400/400/people/5",
        phone: "555-000-0005",
        email: "user_5@email.com",
      },
    },
  ],
};

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
