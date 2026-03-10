const sampleListings = [
  {
    title: "Swiss Alps Ski Chalet",
    description: "A perfect winter getaway with direct access to the best ski slopes in the Alps.",
    image: "https://images.unsplash.com/photo-1517112044457-023a39e18931?q=80&w=2070",
    price: 18000,
    location: "Zermatt",
    country: "Switzerland",
    images: ["https://images.unsplash.com/photo-1502784444187-359ac186c5bb", "https://images.unsplash.com/photo-1482406615552-173ee5d3091f", "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4", "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1", "https://images.unsplash.com/photo-1519046904884-53103b34b206"]
  },
  {
    title: "Malibu Beachfront Villa",
    description: "Modern luxury villa with panoramic ocean views and private beach access.",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=2070",
    price: 25000,
    location: "Malibu",
    country: "USA",
    images: ["https://images.unsplash.com/photo-1512917774080-9991f1c4c750", "https://images.unsplash.com/photo-1613490493576-7fde63acd811", "https://images.unsplash.com/photo-1613977257363-707ba934f246", "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf", "https://images.unsplash.com/photo-1510798831971-661eb04b3739"]
  },
  {
    title: "Kyoto Zen Retreat",
    description: "A peaceful traditional machiya house surrounded by bamboo forests.",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070",
    price: 12000,
    location: "Kyoto",
    country: "Japan",
    images: ["https://images.unsplash.com/photo-1528164344705-47542687000d", "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e", "https://images.unsplash.com/photo-1545569341-9eb8b30979d9", "https://images.unsplash.com/photo-1524230572899-a752b3835840", "https://images.unsplash.com/photo-1490761425698-246f34f28874"]
  },
  {
    title: "Amalfi Coast Cliffside Home",
    description: "Breathtaking views of the Tyrrhenian Sea from this historic Italian villa.",
    image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=2066",
    price: 22000,
    location: "Positano",
    country: "Italy",
    images: ["https://images.unsplash.com/photo-1533174072545-e75114757262", "https://images.unsplash.com/photo-1515859005217-8a1f08870f59", "https://images.unsplash.com/photo-1507525428034-b723cf961d3e", "https://images.unsplash.com/photo-1529655683826-aba9b3e77c89", "https://images.unsplash.com/photo-1540541338287-4170020760e9"]
  },
  {
    title: "Icelandic Glass Igloo",
    description: "Experience the Northern Lights from the comfort of your heated glass bed.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073",
    price: 15000,
    location: "Reykjavik",
    country: "Iceland",
    images: ["https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1", "https://images.unsplash.com/photo-1505761671935-60b3a7427bad", "https://images.unsplash.com/photo-1493246507139-91e8fad9978e", "https://images.unsplash.com/photo-1483381719261-66308a287a9e", "https://images.unsplash.com/photo-1441974231531-c6227db76b6e"]
  },
  {
    title: "Bali Jungle Treehouse",
    description: "Eco-friendly retreat nestled high in the tropical canopy of Ubud.",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2070",
    price: 8000,
    location: "Ubud",
    country: "Indonesia",
    images: ["https://images.unsplash.com/photo-1520250497591-112f2f40a3f4", "https://images.unsplash.com/photo-1540541338287-4170020760e9", "https://images.unsplash.com/photo-1518780664697-55e3ad937233", "https://images.unsplash.com/photo-1506744038136-46273834b3fb", "https://images.unsplash.com/photo-1469474968028-56623f02e42e"]
  },
  {
    title: "Santorini Sunset Suite",
    description: "Iconic blue-domed architecture with a private infinity pool overlooking the caldera.",
    image: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?q=80&w=2070",
    price: 30000,
    location: "Oia",
    country: "Greece",
    images: ["https://images.unsplash.com/photo-1523906834658-6e24ef2386f9", "https://images.unsplash.com/photo-1613490493576-7fde63acd811", "https://images.unsplash.com/photo-1518780664697-55e3ad937233", "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4", "https://images.unsplash.com/photo-1506744038136-46273834b3fb"]
  },
  {
    title: "Dubai Desert Oasis",
    description: "A luxury tented resort offering 5-star service in the heart of the dunes.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070",
    price: 45000,
    location: "Dubai",
    country: "UAE",
    images: ["https://images.unsplash.com/photo-1493246507139-91e8fad9978e", "https://images.unsplash.com/photo-1515859005217-8a1f08870f59", "https://images.unsplash.com/photo-1507525428034-b723cf961d3e", "https://images.unsplash.com/photo-1529655683826-aba9b3e77c89", "https://images.unsplash.com/photo-1441974231531-c6227db76b6e"]
  },
  {
    title: "Patagonia Mountain Cabin",
    description: "Rugged and remote, perfect for hikers seeking solitude in the Andes.",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2074",
    price: 9000,
    location: "Torres del Paine",
    country: "Chile",
    images: ["https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05", "https://images.unsplash.com/photo-1501785888041-af3ef285b470", "https://images.unsplash.com/photo-1441974231531-c6227db76b6e", "https://images.unsplash.com/photo-1506744038136-46273834b3fb", "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4"]
  },
  {
    title: "London City Penthouse",
    description: "Chic industrial style loft in the heart of Shoreditch.",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2070",
    price: 15000,
    location: "London",
    country: "UK",
    images: ["https://images.unsplash.com/photo-1484154218962-a197022b5858", "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688", "https://images.unsplash.com/photo-1493809842364-78817add7ffb", "https://images.unsplash.com/photo-1505761671935-60b3a7427bad", "https://images.unsplash.com/photo-1481277542470-605612bd2d61"]
  },
  {
    title: "Bora Bora Overwater Bungalow",
    description: "Wake up to crystal clear turquoise waters right beneath your floor.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073",
    price: 50000,
    location: "Bora Bora",
    country: "French Polynesia",
    images: ["https://images.unsplash.com/photo-1540541338287-4170020760e9", "https://images.unsplash.com/photo-1510798831971-661eb04b3739", "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf", "https://images.unsplash.com/photo-1518780664697-55e3ad937233", "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9"]
  },
  {
    title: "New York Loft",
    description: "Spacious studio with skyline views of Manhattan.",
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=2070",
    price: 20000,
    location: "New York",
    country: "USA",
    images: ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688", "https://images.unsplash.com/photo-1484154218962-a197022b5858", "https://images.unsplash.com/photo-1505761671935-60b3a7427bad", "https://images.unsplash.com/photo-1481277542470-605612bd2d61", "https://images.unsplash.com/photo-1449824913935-59a10b8d2000"]
  },
  {
    title: "Parisian Chic Apartment",
    description: "Classic Haussmann style apartment with balcony views of the Eiffel Tower.",
    image: "https://images.unsplash.com/photo-1502602898657-3401761a337d?q=80&w=2070",
    price: 16000,
    location: "Paris",
    country: "France",
    images: ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688", "https://images.unsplash.com/photo-1493809842364-78817add7ffb", "https://images.unsplash.com/photo-1484154218962-a197022b5858", "https://images.unsplash.com/photo-1481277542470-605612bd2d61", "https://images.unsplash.com/photo-1449824913935-59a10b8d2000"]
  },
  {
    title: "Cape Town Beach Villa",
    description: "Modern architectural gem overlooking the Atlantic ocean.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070",
    price: 13000,
    location: "Cape Town",
    country: "South Africa",
    images: ["https://images.unsplash.com/photo-1540541338287-4170020760e9", "https://images.unsplash.com/photo-1510798831971-661eb04b3739", "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf", "https://images.unsplash.com/photo-1518780664697-55e3ad937233", "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9"]
  },
  {
    title: "Bangkok River Condo",
    description: "High-rise living with luxury amenities overlooking the Chao Phraya river.",
    image: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?q=80&w=2070",
    price: 7000,
    location: "Bangkok",
    country: "Thailand",
    images: ["https://images.unsplash.com/photo-1520250497591-112f2f40a3f4", "https://images.unsplash.com/photo-1540541338287-4170020760e9", "https://images.unsplash.com/photo-1518780664697-55e3ad937233", "https://images.unsplash.com/photo-1506744038136-46273834b3fb", "https://images.unsplash.com/photo-1469474968028-56623f02e42e"]
  },
  {
    title: "Tuscan Farmhouse",
    description: "Authentic restored farmhouse surrounded by rolling hills and vineyards.",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2074",
    price: 11000,
    location: "Tuscany",
    country: "Italy",
    images: ["https://images.unsplash.com/photo-1501785888041-af3ef285b470", "https://images.unsplash.com/photo-1441974231531-c6227db76b6e", "https://images.unsplash.com/photo-1506744038136-46273834b3fb", "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4", "https://images.unsplash.com/photo-1493246507139-91e8fad9978e"]
  },
  {
    title: "Vancouver Coastal Lodge",
    description: "Secluded forest retreat near the mountains and the ocean.",
    image: "https://images.unsplash.com/photo-1483381719261-66308a287a9e?q=80&w=2070",
    price: 14000,
    location: "Vancouver",
    country: "Canada",
    images: ["https://images.unsplash.com/photo-1441974231531-c6227db76b6e", "https://images.unsplash.com/photo-1506744038136-46273834b3fb", "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4", "https://images.unsplash.com/photo-1493246507139-91e8fad9978e", "https://images.unsplash.com/photo-1469474968028-56623f02e42e"]
  },
  {
    title: "Singapore Marina Suite",
    description: "Ultra-modern living with a rooftop pool overlooking the city skyline.",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99386edd?q=80&w=2070",
    price: 28000,
    location: "Singapore",
    country: "Singapore",
    images: ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688", "https://images.unsplash.com/photo-1484154218962-a197022b5858", "https://images.unsplash.com/photo-1505761671935-60b3a7427bad", "https://images.unsplash.com/photo-1481277542470-605612bd2d61", "https://images.unsplash.com/photo-1449824913935-59a10b8d2000"]
  },
  {
    title: "Lisbon Heritage Apartment",
    description: "Beautifully tiled historic apartment in the heart of the Alfama district.",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=2069",
    price: 9500,
    location: "Lisbon",
    country: "Portugal",
    images: ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688", "https://images.unsplash.com/photo-1484154218962-a197022b5858", "https://images.unsplash.com/photo-1505761671935-60b3a7427bad", "https://images.unsplash.com/photo-1481277542470-605612bd2d61", "https://images.unsplash.com/photo-1449824913935-59a10b8d2000"]
  },
  {
    title: "Rio Beachfront Apartment",
    description: "Stay steps away from Copacabana beach in this vibrant condo.",
    image: "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5e?q=80&w=2070",
    price: 10500,
    location: "Rio de Janeiro",
    country: "Brazil",
    images: ["https://images.unsplash.com/photo-1540541338287-4170020760e9", "https://images.unsplash.com/photo-1510798831971-661eb04b3739", "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf", "https://images.unsplash.com/photo-1518780664697-55e3ad937233", "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9"]
  },
  {
    title: "Mexican Hacienda",
    description: "Luxurious colonial estate with central courtyard and pool.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070",
    price: 17000,
    location: "Merida",
    country: "Mexico",
    images: ["https://images.unsplash.com/photo-1502784444187-359ac186c5bb", "https://images.unsplash.com/photo-1482406615552-173ee5d3091f", "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4", "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1", "https://images.unsplash.com/photo-1519046904884-53103b34b206"]
  },
  {
    title: "Scottish Highland Castle",
    description: "Stay in a genuine historic castle surrounded by misty moors.",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2070",
    price: 35000,
    location: "Highlands",
    country: "Scotland",
    images: ["https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1", "https://images.unsplash.com/photo-1505761671935-60b3a7427bad", "https://images.unsplash.com/photo-1493246507139-91e8fad9978e", "https://images.unsplash.com/photo-1483381719261-66308a287a9e", "https://images.unsplash.com/photo-1441974231531-c6227db76b6e"]
  },
  {
    title: "Amsterdam Canal House",
    description: "Unique townhouse living right on the historic canals.",
    image: "https://images.unsplash.com/photo-1512470876302-972f037a519d?q=80&w=2070",
    price: 13500,
    location: "Amsterdam",
    country: "Netherlands",
    images: ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688", "https://images.unsplash.com/photo-1484154218962-a197022b5858", "https://images.unsplash.com/photo-1505761671935-60b3a7427bad", "https://images.unsplash.com/photo-1481277542470-605612bd2d61", "https://images.unsplash.com/photo-1449824913935-59a10b8d2000"]
  },
  {
    title: "Sydney Harbour Apartment",
    description: "Stunning views of the Opera House and Harbour Bridge.",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=2070",
    price: 24000,
    location: "Sydney",
    country: "Australia",
    images: ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688", "https://images.unsplash.com/photo-1484154218962-a197022b5858", "https://images.unsplash.com/photo-1505761671935-60b3a7427bad", "https://images.unsplash.com/photo-1481277542470-605612bd2d61", "https://images.unsplash.com/photo-1449824913935-59a10b8d2000"]
  },
  {
    title: "Berlin Creative Studio",
    description: "Artistic loft space in the trendy Kreuzberg neighborhood.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073",
    price: 6500,
    location: "Berlin",
    country: "Germany",
    images: ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688", "https://images.unsplash.com/photo-1484154218962-a197022b5858", "https://images.unsplash.com/photo-1505761671935-60b3a7427bad", "https://images.unsplash.com/photo-1481277542470-605612bd2d61", "https://images.unsplash.com/photo-1449824913935-59a10b8d2000"]
  },
  {
    title: "Prague Old Town Suite",
    description: "Stay in a gothic-style building just steps from the Astronomical Clock.",
    image: "https://images.unsplash.com/photo-1519677100323-02d3e3ba435c?q=80&w=2071",
    price: 8500,
    location: "Prague",
    country: "Czech Republic",
    images: ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688", "https://images.unsplash.com/photo-1484154218962-a197022b5858", "https://images.unsplash.com/photo-1505761671935-60b3a7427bad", "https://images.unsplash.com/photo-1481277542470-605612bd2d61", "https://images.unsplash.com/photo-1449824913935-59a10b8d2000"]
  },
  {
    title: "Costa Rica Rainforest Eco-Lodge",
    description: "Immersive nature experience with sustainable luxury amenities.",
    image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=2060",
    price: 12500,
    location: "Arenal",
    country: "Costa Rica",
    images: ["https://images.unsplash.com/photo-1441974231531-c6227db76b6e", "https://images.unsplash.com/photo-1506744038136-46273834b3fb", "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4", "https://images.unsplash.com/photo-1493246507139-91e8fad9978e", "https://images.unsplash.com/photo-1469474968028-56623f02e42e"]
  },
  {
    title: "Barcelona Gothic Quarter Apt",
    description: "Historic charm meets modern design in this vibrant city center flat.",
    image: "https://images.unsplash.com/photo-1511556532299-8f662526c0b6?q=80&w=2070",
    price: 14500,
    location: "Barcelona",
    country: "Spain",
    images: ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688", "https://images.unsplash.com/photo-1484154218962-a197022b5858", "https://images.unsplash.com/photo-1505761671935-60b3a7427bad", "https://images.unsplash.com/photo-1481277542470-605612bd2d61", "https://images.unsplash.com/photo-1449824913935-59a10b8d2000"]
  },
  {
    title: "Seoul Modern High-Rise",
    description: "Sleek, minimalist design in the bustling Gangnam district.",
    image: "https://images.unsplash.com/photo-1517106008-01e4691778c6?q=80&w=2070",
    price: 11500,
    location: "Seoul",
    country: "South Korea",
    images: ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688", "https://images.unsplash.com/photo-1484154218962-a197022b5858", "https://images.unsplash.com/photo-1505761671935-60b3a7427bad", "https://images.unsplash.com/photo-1481277542470-605612bd2d61", "https://images.unsplash.com/photo-1449824913935-59a10b8d2000"]
  },
  {
    title: "Moroccan Riad",
    description: "Traditional courtyard home with stunning tile work and pool.",
    image: "https://images.unsplash.com/photo-1539243507314-b2585257a152?q=80&w=2070",
    price: 9000,
    location: "Marrakech",
    country: "Morocco",
    images: ["https://images.unsplash.com/photo-1540541338287-4170020760e9", "https://images.unsplash.com/photo-1510798831971-661eb04b3739", "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf", "https://images.unsplash.com/photo-1518780664697-55e3ad937233", "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9"]
  },
  {
    title: "Finnish Log Cabin",
    description: "Classic wooden cabin by a serene lake, perfect for saunas.",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070",
    price: 7500,
    location: "Lapland",
    country: "Finland",
    images: ["https://images.unsplash.com/photo-1441974231531-c6227db76b6e", "https://images.unsplash.com/photo-1506744038136-46273834b3fb", "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4", "https://images.unsplash.com/photo-1493246507139-91e8fad9978e", "https://images.unsplash.com/photo-1469474968028-56623f02e42e"]
  },
  {
    title: "Vienna Classical Suite",
    description: "Elegant apartment in a historic building near the Opera House.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1999",
    price: 15500,
    location: "Vienna",
    country: "Austria",
    images: ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688", "https://images.unsplash.com/photo-1484154218962-a197022b5858", "https://images.unsplash.com/photo-1505761671935-60b3a7427bad", "https://images.unsplash.com/photo-1481277542470-605612bd2d61", "https://images.unsplash.com/photo-1449824913935-59a10b8d2000"]
  },
  {
    title: "New Zealand Mountain Hut",
    description: "Spectacular views of the Southern Alps from this remote outpost.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070",
    price: 8500,
    location: "Queenstown",
    country: "New Zealand",
    images: ["https://images.unsplash.com/photo-1441974231531-c6227db76b6e", "https://images.unsplash.com/photo-1506744038136-46273834b3fb", "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4", "https://images.unsplash.com/photo-1493246507139-91e8fad9978e", "https://images.unsplash.com/photo-1469474968028-56623f02e42e"]
  },
  {
    title: "Istanbul Bosphorus View",
    description: "Classic Ottoman-style architecture overlooking the Bosphorus strait.",
    image: "https://images.unsplash.com/photo-1527838832700-5059306419ae?q=80&w=2070",
    price: 12000,
    location: "Istanbul",
    country: "Turkey",
    images: ["https://images.unsplash.com/photo-1540541338287-4170020760e9", "https://images.unsplash.com/photo-1510798831971-661eb04b3739", "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf", "https://images.unsplash.com/photo-1518780664697-55e3ad937233", "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9"]
  },
  {
    title: "Norwegian Fjord Cabin",
    description: "Modern minimalist design nestled in the stunning fjord landscapes.",
    image: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?q=80&w=2070",
    price: 19000,
    location: "Bergen",
    country: "Norway",
    images: ["https://images.unsplash.com/photo-1441974231531-c6227db76b6e", "https://images.unsplash.com/photo-1506744038136-46273834b3fb", "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4", "https://images.unsplash.com/photo-1493246507139-91e8fad9978e", "https://images.unsplash.com/photo-1469474968028-56623f02e42e"]
  },
  {
    title: "Mumbai Sea-Face Apartment",
    description: "Luxury living in India's financial capital with Arabian Sea views.",
    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=2070",
    price: 18000,
    location: "Mumbai",
    country: "India",
    images: ["https://images.unsplash.com/photo-1540541338287-4170020760e9", "https://images.unsplash.com/photo-1510798831971-661eb04b3739", "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf", "https://images.unsplash.com/photo-1518780664697-55e3ad937233", "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9"]
  },
  {
    title: "Hungarian Thermal Bath Villa",
    description: "Relaxing property with private access to thermal springs.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070",
    price: 10000,
    location: "Budapest",
    country: "Hungary",
    images: ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688", "https://images.unsplash.com/photo-1484154218962-a197022b5858", "https://images.unsplash.com/photo-1505761671935-60b3a7427bad", "https://images.unsplash.com/photo-1481277542470-605612bd2d61", "https://images.unsplash.com/photo-1449824913935-59a10b8d2000"]
  },
  {
    title: "Vietnam Floating House",
    description: "Unique experience living on the waters of Ha Long Bay.",
    image: "https://images.unsplash.com/photo-1528127291471-460d3d57d549?q=80&w=2070",
    price: 6000,
    location: "Ha Long Bay",
    country: "Vietnam",
    images: ["https://images.unsplash.com/photo-1540541338287-4170020760e9", "https://images.unsplash.com/photo-1510798831971-661eb04b3739", "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf", "https://images.unsplash.com/photo-1518780664697-55e3ad937233", "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9"]
  },
  {
    title: "Swedish Designer Loft",
    description: "Minimalist Scandinavian design in central Stockholm.",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=2070",
    price: 12500,
    location: "Stockholm",
    country: "Sweden",
    images: ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688", "https://images.unsplash.com/photo-1484154218962-a197022b5858", "https://images.unsplash.com/photo-1505761671935-60b3a7427bad", "https://images.unsplash.com/photo-1481277542470-605612bd2d61", "https://images.unsplash.com/photo-1449824913935-59a10b8d2000"]
  },
  {
    title: "Swiss Lake House",
    description: "Peaceful escape on the shores of Lake Geneva.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070",
    price: 21000,
    location: "Geneva",
    country: "Switzerland",
    images: ["https://images.unsplash.com/photo-1441974231531-c6227db76b6e", "https://images.unsplash.com/photo-1506744038136-46273834b3fb", "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4", "https://images.unsplash.com/photo-1493246507139-91e8fad9978e", "https://images.unsplash.com/photo-1469474968028-56623f02e42e"]
  },
  {
    title: "Canadian Cabin",
    description: "Authentic log cabin in the woods of British Columbia.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071",
    price: 8000,
    location: "Whistler",
    country: "Canada",
    images: ["https://images.unsplash.com/photo-1441974231531-c6227db76b6e", "https://images.unsplash.com/photo-1506744038136-46273834b3fb", "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4", "https://images.unsplash.com/photo-1493246507139-91e8fad9978e", "https://images.unsplash.com/photo-1469474968028-56623f02e42e"]
  },
  {
    title: "Belgian Historic Home",
    description: "Stay in a beautifully preserved medieval house in Bruges.",
    image: "https://images.unsplash.com/photo-1517736996303-4eec4a66bb17?q=80&w=2070",
    price: 11000,
    location: "Bruges",
    country: "Belgium",
    images: ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688", "https://images.unsplash.com/photo-1484154218962-a197022b5858", "https://images.unsplash.com/photo-1505761671935-60b3a7427bad", "https://images.unsplash.com/photo-1481277542470-605612bd2d61", "https://images.unsplash.com/photo-1449824913935-59a10b8d2000"]
  },
  {
    title: "Irish Countryside Cottage",
    description: "Charming stone cottage surrounded by rolling green hills.",
    image: "https://images.unsplash.com/photo-1543946207-3942bbc2c300?q=80&w=2072",
    price: 7000,
    location: "Galway",
    country: "Ireland",
    images: ["https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05", "https://images.unsplash.com/photo-1501785888041-af3ef285b470", "https://images.unsplash.com/photo-1441974231531-c6227db76b6e", "https://images.unsplash.com/photo-1506744038136-46273834b3fb", "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4"]
  },
  {
    title: "Greek Island Villa",
    description: "Secluded island retreat with white-washed walls and Aegean sea views.",
    image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=2066",
    price: 22000,
    location: "Mykonos",
    country: "Greece",
    images: ["https://images.unsplash.com/photo-1523906834658-6e24ef2386f9", "https://images.unsplash.com/photo-1613490493576-7fde63acd811", "https://images.unsplash.com/photo-1518780664697-55e3ad937233", "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4", "https://images.unsplash.com/photo-1506744038136-46273834b3fb"]
  },
  {
    title: "Swiss Mountain Refuge",
    description: "High altitude shelter for adventure seekers.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070",
    price: 5000,
    location: "Interlaken",
    country: "Switzerland",
    images: ["https://images.unsplash.com/photo-1441974231531-c6227db76b6e", "https://images.unsplash.com/photo-1506744038136-46273834b3fb", "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4", "https://images.unsplash.com/photo-1493246507139-91e8fad9978e", "https://images.unsplash.com/photo-1469474968028-56623f02e42e"]
  },
  {
    title: "Tokyo Capsule Hotel",
    description: "Modern, compact, and super-efficient living in downtown Tokyo.",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=2070",
    price: 3000,
    location: "Tokyo",
    country: "Japan",
    images: ["https://images.unsplash.com/photo-1528164344705-47542687000d", "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e", "https://images.unsplash.com/photo-1545569341-9eb8b30979d9", "https://images.unsplash.com/photo-1524230572899-a752b3835840", "https://images.unsplash.com/photo-1490761425698-246f34f28874"]
  },
  {
    title: "Singapore Garden Condo",
    description: "Lush green hanging gardens in a futuristic high-rise apartment.",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99386edd?q=80&w=2070",
    price: 16000,
    location: "Singapore",
    country: "Singapore",
    images: ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688", "https://images.unsplash.com/photo-1484154218962-a197022b5858", "https://images.unsplash.com/photo-1505761671935-60b3a7427bad", "https://images.unsplash.com/photo-1481277542470-605612bd2d61", "https://images.unsplash.com/photo-1449824913935-59a10b8d2000"]
  },
  {
    title: "Maldives Beach House",
    description: "Absolute privacy on your own stretch of white sand beach.",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2070",
    price: 35000,
    location: "Maldives",
    country: "Maldives",
    images: ["https://images.unsplash.com/photo-1540541338287-4170020760e9", "https://images.unsplash.com/photo-1510798831971-661eb04b3739", "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf", "https://images.unsplash.com/photo-1518780664697-55e3ad937233", "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9"]
  },
  {
    title: "Paris Art Studio",
    description: "High ceilings and natural light in this historic artist's loft.",
    image: "https://images.unsplash.com/photo-1502602898657-3401761a337d?q=80&w=2070",
    price: 11000,
    location: "Paris",
    country: "France",
    images: ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688", "https://images.unsplash.com/photo-1484154218962-a197022b5858", "https://images.unsplash.com/photo-1505761671935-60b3a7427bad", "https://images.unsplash.com/photo-1481277542470-605612bd2d61", "https://images.unsplash.com/photo-1449824913935-59a10b8d2000"]
  },
  {
    title: "New York Brownstone",
    description: "Classic NYC living with vintage charm and modern updates.",
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=2070",
    price: 22000,
    location: "Brooklyn",
    country: "USA",
    images: ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688", "https://images.unsplash.com/photo-1484154218962-a197022b5858", "https://images.unsplash.com/photo-1505761671935-60b3a7427bad", "https://images.unsplash.com/photo-1481277542470-605612bd2d61", "https://images.unsplash.com/photo-1449824913935-59a10b8d2000"]
  }
];

export default sampleListings