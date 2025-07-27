import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { 
  Play, 
  Pause, 
  Volume2, 
  Settings, 
  Globe, 
  Headphones,
  Eye,
  Hand,
  Zap,
  Monitor
} from 'lucide-react';

interface PanelProps {
  children: React.ReactNode;
  className?: string;
  floating?: boolean;
}

const Panel: React.FC<PanelProps> = ({ children, className = '', floating = false }) => (
  <Card className={`
    bg-gradient-panel border border-primary/30 backdrop-blur-sm
    ${floating ? 'shadow-floating animate-float' : 'shadow-panel'}
    ${className}
  `}>
    {children}
  </Card>
);

const VRDashboard = () => {
  const [isVRMode, setIsVRMode] = useState(false);
  const [isARMode, setIsARMode] = useState(false);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-space-blue via-background to-panel-bg"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-neon-purple/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Panel - Main Controls */}
        <div className="space-y-6">
          <Panel floating>
            <div className="p-6">
              <h2 className="text-xl font-bold mb-4 text-foreground">System Control</h2>
              <div className="space-y-4">
                <Button 
                  variant={isVRMode ? "default" : "secondary"} 
                  className="w-full justify-start" 
                  onClick={() => setIsVRMode(!isVRMode)}
                >
                  <Headphones className="mr-2 h-4 w-4" />
                  VR Mode
                  {isVRMode && <Badge className="ml-auto">Active</Badge>}
                </Button>
                
                <Button 
                  variant={isARMode ? "default" : "secondary"} 
                  className="w-full justify-start"
                  onClick={() => setIsARMode(!isARMode)}
                >
                  <Eye className="mr-2 h-4 w-4" />
                  AR Mode
                  {isARMode && <Badge className="ml-auto">Active</Badge>}
                </Button>
                
                <Button variant="secondary" className="w-full justify-start">
                  <Hand className="mr-2 h-4 w-4" />
                  Hand Tracking
                </Button>
                
                <Button variant="secondary" className="w-full justify-start">
                  <Monitor className="mr-2 h-4 w-4" />
                  Spatial Mapping
                </Button>
              </div>
            </div>
          </Panel>

          <Panel>
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4 text-foreground">Audio Controls</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Spatial Audio</span>
                  <Button size="sm" variant="ghost">
                    <Volume2 className="h-4 w-4" />
                  </Button>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div className="bg-gradient-neon h-2 rounded-full w-3/4"></div>
                </div>
              </div>
            </div>
          </Panel>
        </div>

        {/* Center Panel - Main Display */}
        <div className="space-y-6">
          <Panel floating className="text-center">
            <div className="p-8">
              <div className="mb-6">
                <div className="mx-auto w-32 h-32 bg-gradient-neon rounded-full flex items-center justify-center animate-glow">
                  <Globe className="h-16 w-16 text-primary-foreground" />
                </div>
              </div>
              <h1 className="text-3xl font-bold mb-2 text-foreground">Immersive Space</h1>
              <p className="text-muted-foreground mb-6">Ready for spatial computing</p>
              
              <div className="flex gap-4 justify-center">
                <Button size="lg" className="animate-pulse-neon">
                  <Play className="mr-2 h-5 w-5" />
                  Enter VR
                </Button>
                <Button variant="secondary" size="lg">
                  <Settings className="mr-2 h-5 w-5" />
                  Configure
                </Button>
              </div>
            </div>
          </Panel>

          <Panel>
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4 text-foreground">Environment Status</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-neon-cyan">98%</div>
                  <div className="text-xs text-muted-foreground">Tracking Quality</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-neon-purple">72fps</div>
                  <div className="text-xs text-muted-foreground">Render Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">4.2m</div>
                  <div className="text-xs text-muted-foreground">Play Area</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">12</div>
                  <div className="text-xs text-muted-foreground">Objects</div>
                </div>
              </div>
            </div>
          </Panel>
        </div>

        {/* Right Panel - Quick Actions */}
        <div className="space-y-6">
          <Panel>
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4 text-foreground">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-3">
                <Button variant="secondary" size="sm" className="aspect-square p-0">
                  <Zap className="h-5 w-5" />
                </Button>
                <Button variant="secondary" size="sm" className="aspect-square p-0">
                  <Settings className="h-5 w-5" />
                </Button>
                <Button variant="secondary" size="sm" className="aspect-square p-0">
                  <Volume2 className="h-5 w-5" />
                </Button>
                <Button variant="secondary" size="sm" className="aspect-square p-0">
                  <Eye className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </Panel>

          <Panel floating>
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4 text-foreground">System Health</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">CPU</span>
                  <Badge variant="secondary">Normal</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">GPU</span>
                  <Badge className="bg-neon-cyan/20 text-neon-cyan">Optimal</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Memory</span>
                  <Badge variant="secondary">Good</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Tracking</span>
                  <Badge className="bg-neon-purple/20 text-neon-purple">Excellent</Badge>
                </div>
              </div>
            </div>
          </Panel>
        </div>
      </div>

      {/* Floating Navigation */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2">
        <Panel className="px-6 py-3">
          <div className="flex gap-4 items-center">
            <Button variant="ghost" size="sm">Home</Button>
            <Button variant="ghost" size="sm">Library</Button>
            <Button variant="ghost" size="sm">Settings</Button>
            <Button variant="ghost" size="sm">Social</Button>
          </div>
        </Panel>
      </div>
    </div>
  );
};

export default VRDashboard;