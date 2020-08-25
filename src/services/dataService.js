const listings = {
  data: [
    {
      id: 1,
      image: "https://picsum.photos/id/1025/1200/850",
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
        avatarImage: "https://picsum.photos/400/400",
      },
    },
    {
      id: 2,
      image: "https://picsum.photos/id/237/1200/850",
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
        avatarImage: "https://picsum.photos/400/400",
      },
    },
    {
      id: 3,
      image: "https://picsum.photos/id/1074/1200/850",
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
        avatarImage: "https://picsum.photos/400/400",
      },
    },
    {
      id: 4,
      image: "https://picsum.photos/id/219/1200/850",
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
        avatarImage: "https://picsum.photos/400/400",
      },
    },
  ],
};

export function getFeaturedListings() {
  return listings;
}

export function getListing(id) {
  return listings.find((l) => l.id === id);
}

export function saveListing(listing) {
  let dbListing = listing.find((l) => l.id === listing.id) || {};
  dbListing.title = listing.title;
  dbListing.description = listing.description;
  dbListing.location = listing.location;
  dbListing.price = listing.price;

  if (!dbListing.id) {
    const maxListingId = Math.max.apply(
      Math,
      listings.map((listing) => {
        return listing.id;
      })
    );

    dbListing.id = maxListingId + 1;
    listings.push(dbListing);
  }

  return dbListing;
}
