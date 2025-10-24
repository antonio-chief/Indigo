import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { Card } from '@/components/ui/card';
import { mockCampaigns } from '@/data/mockCampaigns';
import { useWallet } from '@/hooks/useWallet';
import { toast } from '@/hooks/use-toast';
import { ArrowLeft, Users, Calendar, Target } from 'lucide-react';
import { WalletButton } from '@/components/WalletButton';

const CampaignDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { account } = useWallet();
  const [contributionAmount, setContributionAmount] = useState('');
  const [isContributing, setIsContributing] = useState(false);

  const campaign = mockCampaigns.find(c => c.id === id);

  if (!campaign) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Campaign not found</h1>
          <Button onClick={() => navigate('/')}>Back to Home</Button>
        </div>
      </div>
    );
  }

  const progress = (campaign.raised / campaign.goal) * 100;

  const handleContribute = async () => {
    if (!account) {
      toast({
        title: 'Wallet not connected',
        description: 'Please connect your wallet to contribute',
        variant: 'destructive',
      });
      return;
    }

    if (!contributionAmount || parseFloat(contributionAmount) <= 0) {
      toast({
        title: 'Invalid amount',
        description: 'Please enter a valid contribution amount',
        variant: 'destructive',
      });
      return;
    }

    setIsContributing(true);

    // Simulate transaction
    setTimeout(() => {
      toast({
        title: 'Contribution successful!',
        description: `You've contributed ${contributionAmount} ETH to ${campaign.title}`,
      });
      setIsContributing(false);
      setContributionAmount('');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-card/50 backdrop-blur-lg border-b border-border/50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Button variant="ghost" onClick={() => navigate('/')}>
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
          <WalletButton />
        </div>
      </nav>

      {/* Campaign Detail */}
      <div className="container mx-auto px-4 pt-24 pb-20">
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                {campaign.category}
              </div>
              <h1 className="text-4xl font-bold mb-4">{campaign.title}</h1>
              <p className="text-muted-foreground">Created by {campaign.creator}</p>
            </div>

            <div className="rounded-2xl overflow-hidden">
              <img
                src={campaign.image}
                alt={campaign.title}
                className="w-full h-[400px] object-cover"
              />
            </div>

            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-4">About This Campaign</h2>
              <p className="text-muted-foreground leading-relaxed">
                {campaign.description}
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                This project aims to revolutionize its field by leveraging blockchain technology 
                to create a transparent, efficient, and community-driven solution. Your support 
                will help us achieve our goals and bring this vision to life.
              </p>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="p-6 sticky top-24">
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="text-3xl font-bold text-primary">{campaign.raised} ETH</span>
                    <span className="text-muted-foreground">of {campaign.goal} ETH</span>
                  </div>
                  <Progress value={progress} className="h-2 mb-4" />
                  <p className="text-sm text-muted-foreground">
                    {Math.round(progress)}% funded
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 py-4 border-y">
                  <div>
                    <div className="flex items-center gap-2 text-muted-foreground mb-1">
                      <Users className="w-4 h-4" />
                      <span className="text-sm">Backers</span>
                    </div>
                    <p className="text-2xl font-bold">{campaign.backers}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-muted-foreground mb-1">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">Days Left</span>
                    </div>
                    <p className="text-2xl font-bold">{campaign.daysLeft}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Target className="w-4 h-4" />
                    <span className="text-sm">Contribution Amount (ETH)</span>
                  </div>
                  <Input
                    type="number"
                    step="0.01"
                    placeholder="0.1"
                    value={contributionAmount}
                    onChange={(e) => setContributionAmount(e.target.value)}
                  />
                  <Button
                    variant="hero"
                    size="lg"
                    className="w-full"
                    onClick={handleContribute}
                    disabled={isContributing || !account}
                  >
                    {isContributing ? 'Processing...' : account ? 'Back This Project' : 'Connect Wallet'}
                  </Button>
                  {!account && (
                    <p className="text-xs text-muted-foreground text-center">
                      Connect your wallet to contribute
                    </p>
                  )}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetail;
