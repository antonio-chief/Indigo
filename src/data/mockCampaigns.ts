import { Campaign } from '@/components/CampaignCard';

export const mockCampaigns: Campaign[] = [
  {
    id: '1',
    title: 'Decentralized Social Network',
    description: 'Building the future of social media with Web3 technology. No censorship, no data mining, complete ownership.',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800',
    goal: 100,
    raised: 67.5,
    backers: 234,
    creator: '0x1234...5678',
    category: 'Technology',
    daysLeft: 15
  },
  {
    id: '2',
    title: 'Green Energy DApp',
    description: 'Tokenizing renewable energy certificates to accelerate the transition to sustainable power.',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800',
    goal: 75,
    raised: 52.3,
    backers: 189,
    creator: '0x2345...6789',
    category: 'Environment',
    daysLeft: 22
  },
  {
    id: '3',
    title: 'NFT Art Gallery Platform',
    description: 'A curated marketplace for emerging digital artists to showcase and sell their work.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800',
    goal: 50,
    raised: 48.9,
    backers: 312,
    creator: '0x3456...7890',
    category: 'Art',
    daysLeft: 8
  },
  {
    id: '4',
    title: 'DeFi Education Platform',
    description: 'Making blockchain and DeFi accessible to everyone through interactive courses and real-world projects.',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800',
    goal: 80,
    raised: 34.2,
    backers: 156,
    creator: '0x4567...8901',
    category: 'Education',
    daysLeft: 30
  },
  {
    id: '5',
    title: 'Metaverse Gaming Studio',
    description: 'Creating immersive play-to-earn experiences in the metaverse with true ownership of in-game assets.',
    image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800',
    goal: 150,
    raised: 89.7,
    backers: 445,
    creator: '0x5678...9012',
    category: 'Gaming',
    daysLeft: 19
  },
  {
    id: '6',
    title: 'Blockchain Music Royalties',
    description: 'Revolutionizing how artists get paid by putting music rights on the blockchain.',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800',
    goal: 60,
    raised: 41.8,
    backers: 201,
    creator: '0x6789...0123',
    category: 'Music',
    daysLeft: 12
  }
];
