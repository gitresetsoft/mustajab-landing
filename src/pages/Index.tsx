
import React, { useState } from 'react';
import { Clock, Bell, Star, Sparkles, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [email, setEmail] = useState('');
  const [dialogOpen, setDialogOpen] = useState(false);
  const { toast } = useToast();

  const handleWaitlistJoin = () => {
    if (email) {
      toast({
        title: "Welcome to the waitlist! 🎉",
        description: "We'll notify you when Mustajab is ready to enhance your prayer experience.",
      });
      setEmail('');
      setDialogOpen(false);
    }
  };

  const prayerTimes = [
    { name: 'Fajr', time: '05:30', next: false },
    { name: 'Dhuhr', time: '12:45', next: true },
    { name: 'Asr', time: '16:20', next: false },
    { name: 'Maghrib', time: '18:45', next: false },
    { name: 'Isha', time: '20:15', next: false },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-500"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center">
              <Star className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Mustajab
            </span>
          </div>
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-6 py-2 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25">
                Join Waitlist
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-slate-900/90 backdrop-blur-xl border border-purple-500/20 rounded-2xl">
              <DialogHeader>
                <DialogTitle className="text-2xl bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Join the Waitlist
                </DialogTitle>
                <DialogDescription className="text-slate-300">
                  Be the first to experience Mustajab's intelligent prayer reminders.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-slate-200">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-slate-800/50 border-purple-500/20 focus:border-cyan-500/50 text-white placeholder-slate-400 rounded-xl"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button 
                  onClick={handleWaitlistJoin}
                  className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white rounded-xl transform hover:scale-105 transition-all duration-300"
                >
                  Join Waitlist
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-32">
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 backdrop-blur-xl border border-purple-500/30 rounded-full px-4 py-2 mb-8 transform hover:scale-105 transition-all duration-300">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-purple-300">Chrome Extension Coming Soon</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
              Never Miss
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Another Prayer
            </span>
          </h1>
          
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Mustajab brings intelligent prayer reminders directly to your browser with 
            beautiful notifications and accurate prayer times.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-8 py-4 rounded-2xl text-lg transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-purple-500/30">
                  Join Waitlist
                  <Bell className="ml-2 w-5 h-5" />
                </Button>
              </DialogTrigger>
            </Dialog>
            
            <Button variant="outline" size="lg" className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10 px-8 py-4 rounded-2xl text-lg backdrop-blur-xl transform hover:scale-105 transition-all duration-300">
              Learn More
              <ChevronDown className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Intelligent Prayer Companion
          </h2>
          <p className="text-slate-300 text-lg">
            Designed with modern Muslims in mind
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Clock className="w-8 h-8" />,
              title: "Smart Notifications",
              description: "Get beautiful, non-intrusive prayer reminders that adapt to your schedule and location."
            },
            {
              icon: <Bell className="w-8 h-8" />,
              title: "Accurate Times",
              description: "Precise prayer times calculated for your exact location with multiple calculation methods."
            },
            {
              icon: <Star className="w-8 h-8" />,
              title: "Beautiful Interface",
              description: "Modern, clean design that integrates seamlessly with your browsing experience."
            }
          ].map((feature, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-8 transform hover:scale-105 hover:border-cyan-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {React.cloneElement(feature.icon, { className: "w-8 h-8 text-white" })}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Prayer Times Preview */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-8">
          <h3 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Today's Prayer Times
          </h3>
          <div className="space-y-4">
            {prayerTimes.map((prayer, index) => (
              <div
                key={index}
                className={`flex justify-between items-center p-4 rounded-2xl transition-all duration-300 hover:scale-105 ${
                  prayer.next 
                    ? 'bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-cyan-500/30' 
                    : 'bg-slate-800/30 hover:bg-slate-700/30'
                }`}
              >
                <span className={`font-medium ${prayer.next ? 'text-cyan-300' : 'text-slate-300'}`}>
                  {prayer.name}
                </span>
                <span className={`text-lg font-mono ${prayer.next ? 'text-white' : 'text-slate-400'}`}>
                  {prayer.time}
                </span>
                {prayer.next && (
                  <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-xs px-3 py-1 rounded-full">
                    Next
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center">
        <div className="bg-gradient-to-br from-purple-500/10 to-cyan-500/10 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-12">
          <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Ready to Transform Your Prayer Experience?
          </h3>
          <p className="text-slate-300 text-lg mb-8">
            Join thousands of Muslims who are waiting for Mustajab to launch.
          </p>
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-12 py-6 rounded-2xl text-xl transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-purple-500/30">
                Get Early Access
                <Sparkles className="ml-3 w-6 h-6" />
              </Button>
            </DialogTrigger>
          </Dialog>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 max-w-7xl mx-auto px-6 py-12 border-t border-purple-500/20">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <Star className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Mustajab
            </span>
          </div>
          <p className="text-slate-400">
            © 2024 Mustajab. Bringing technology and spirituality together.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
