import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export interface Campaign {
  id: string;
  title: string;
  description: string;
  image: string;
  goal: number;
  raised: number;
  backers: number;
  creator: string;
  category: string;
  daysLeft: number;
}

interface CampaignCardProps {
  campaign: Campaign;
}

export const CampaignCard = ({ campaign }: CampaignCardProps) => {
  const navigate = useNavigate();
  const progress = (campaign.raised / campaign.goal) * 100;

  return (
    <Card 
      className="overflow-hidden hover:shadow-[var(--shadow-card)] transition-all duration-300 cursor-pointer group"
      onClick={() => navigate(`/campaign/${campaign.id}`)}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={campaign.image}
          alt={campaign.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
          {campaign.category}
        </div>
      </div>
      
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
            {campaign.title}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-2">
            {campaign.description}
          </p>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="font-semibold text-primary">{campaign.raised} ETH</span>
            <span className="text-muted-foreground">of {campaign.goal} ETH</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <div className="flex justify-between items-center pt-2 border-t">
          <div className="text-sm">
            <span className="font-medium">{campaign.backers}</span>
            <span className="text-muted-foreground ml-1">backers</span>
          </div>
          <div className="text-sm">
            <span className="font-medium">{campaign.daysLeft}</span>
            <span className="text-muted-foreground ml-1">days left</span>
          </div>
        </div>

        <Button variant="hero" className="w-full" onClick={(e) => {
          e.stopPropagation();
          navigate(`/campaign/${campaign.id}`);
        }}>
          Back This Project
        </Button>
      </div>
    </Card>
  );
};
