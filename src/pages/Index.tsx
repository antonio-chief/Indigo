import { WalletButton } from '@/components/WalletButton';
import { CampaignCard } from '@/components/CampaignCard';
import { mockCampaigns } from '@/data/mockCampaigns';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Plus, Sparkles, Shield, Zap } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-card/50 backdrop-blur-lg border-b border-border/50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary" />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Indigo
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#explore" className="text-foreground/80 hover:text-foreground transition-colors">
              Explore
            </a>
            <a href="#about" className="text-foreground/80 hover:text-foreground transition-colors">
              About
            </a>
            <a href="#how-it-works" className="text-foreground/80 hover:text-foreground transition-colors">
              How It Works
            </a>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" onClick={() => navigate('/create')}>
              <Plus className="w-4 h-4" />
              Create Campaign
            </Button>
            <WalletButton />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Powered by Web3</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Fund The Future
              <br />
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                With Blockchain
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A decentralized crowdfunding platform where creators connect directly with backers. 
              Transparent, secure, and powered by smart contracts.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" onClick={() => navigate('/create')}>
                <Plus className="w-5 h-5" />
                Start a Campaign
              </Button>
              <Button variant="glass" size="lg" onClick={() => document.getElementById('explore')?.scrollIntoView({ behavior: 'smooth' })}>
                Explore Projects
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
              <div>
                <div className="text-3xl font-bold text-primary">256+</div>
                <div className="text-sm text-muted-foreground">Active Campaigns</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary">1.2K+</div>
                <div className="text-sm text-muted-foreground">Total Backers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">$2.4M</div>
                <div className="text-sm text-muted-foreground">Raised</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="how-it-works" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Indigo?</h2>
            <p className="text-muted-foreground text-lg">
              Experience the next generation of crowdfunding with blockchain technology
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="p-8 rounded-2xl bg-card border border-border/50 hover:shadow-[var(--shadow-card)] transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">Transparent & Secure</h3>
              <p className="text-muted-foreground">
                All transactions are recorded on the blockchain. Smart contracts ensure funds are used as promised.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-card border border-border/50 hover:shadow-[var(--shadow-card)] transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">Instant Settlements</h3>
              <p className="text-muted-foreground">
                No waiting for bank transfers. Funds are transferred instantly through cryptocurrency.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-card border border-border/50 hover:shadow-[var(--shadow-card)] transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">Lower Fees</h3>
              <p className="text-muted-foreground">
                Say goodbye to high platform fees. Blockchain eliminates intermediaries and reduces costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Campaigns Section */}
      <section id="explore" className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-2">Trending Campaigns</h2>
              <p className="text-muted-foreground">Discover and support innovative projects</p>
            </div>
            <Button variant="outline">View All</Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockCampaigns.map((campaign) => (
              <CampaignCard key={campaign.id} campaign={campaign} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary" />
              <span className="text-xl font-bold">Indigo</span>
            </div>
            <p className="text-muted-foreground text-sm">
              © 2024 Indigo. Empowering creators through Web3.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
