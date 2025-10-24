import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { useWallet } from '@/hooks/useWallet';
import { toast } from '@/hooks/use-toast';
import { ArrowLeft } from 'lucide-react';
import { WalletButton } from '@/components/WalletButton';

const CreateCampaign = () => {
  const navigate = useNavigate();
  const { account } = useWallet();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    goal: '',
    duration: '',
    category: '',
    imageUrl: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!account) {
      toast({
        title: 'Wallet not connected',
        description: 'Please connect your wallet to create a campaign',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate campaign creation
    setTimeout(() => {
      toast({
        title: 'Campaign created!',
        description: 'Your campaign has been successfully created and deployed to the blockchain.',
      });
      setIsSubmitting(false);
      navigate('/');
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

      {/* Form Section */}
      <div className="container mx-auto px-4 pt-24 pb-20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Create Your Campaign</h1>
            <p className="text-muted-foreground text-lg">
              Bring your vision to life with blockchain-powered crowdfunding
            </p>
          </div>

          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Campaign Title</Label>
                <Input
                  id="title"
                  placeholder="Give your campaign a clear, compelling title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe your project, its goals, and how the funds will be used"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={6}
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="goal">Funding Goal (ETH)</Label>
                  <Input
                    id="goal"
                    type="number"
                    step="0.01"
                    placeholder="10"
                    value={formData.goal}
                    onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="duration">Duration (days)</Label>
                  <Input
                    id="duration"
                    type="number"
                    placeholder="30"
                    value={formData.duration}
                    onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Input
                  id="category"
                  placeholder="Technology, Art, Gaming, etc."
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="imageUrl">Campaign Image URL</Label>
                <Input
                  id="imageUrl"
                  type="url"
                  placeholder="https://example.com/image.jpg"
                  value={formData.imageUrl}
                  onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                  required
                />
              </div>

              <div className="pt-6 border-t">
                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting || !account}
                >
                  {isSubmitting ? 'Creating Campaign...' : account ? 'Create Campaign' : 'Connect Wallet First'}
                </Button>
                {!account && (
                  <p className="text-sm text-muted-foreground text-center mt-4">
                    You need to connect your wallet to create a campaign
                  </p>
                )}
              </div>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CreateCampaign;
