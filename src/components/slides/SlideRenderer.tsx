import { Slide } from "./SlideData";
import { SlideLayout } from "./SlideLayout";
import { HeroSlide } from "./content/HeroSlide";
import { OverviewSlide } from "./content/OverviewSlide";
import { ProtocolSlide } from "./content/ProtocolSlide";
import { UsersSlide } from "./content/UsersSlide";
import { FeaturesSlide } from "./content/FeaturesSlide";
import { StreamingSlide } from "./content/StreamingSlide";
import { DexSlide } from "./content/DexSlide";
import { AlgorithmSlide } from "./content/AlgorithmSlide";
import { HotPairsSlide } from "./content/HotPairsSlide";
import { HotPairsAlgoSlide } from "./content/HotPairsAlgoSlide";
import { InstasettleSlide } from "./content/InstasettleSlide";
import { MaintenanceSlide } from "./content/MaintenanceSlide";
import { FeesSlide } from "./content/FeesSlide";
import { SubgraphSlide } from "./content/SubgraphSlide";
import { RoadmapSlide } from "./content/RoadmapSlide";
import { ClosingSlide } from "./content/ClosingSlide";

interface SlideRendererProps {
  slide: Slide;
}

export const SlideRenderer = ({ slide }: SlideRendererProps) => {
  const renderContent = () => {
    switch (slide.content.type) {
      case "hero":
        return <HeroSlide data={slide.content.data} />;
      case "overview":
        return <OverviewSlide data={slide.content.data} />;
      case "protocol":
        return <ProtocolSlide data={slide.content.data} />;
      case "users":
        return <UsersSlide data={slide.content.data} />;
      case "features":
        return <FeaturesSlide data={slide.content.data} />;
      case "streaming":
        return <StreamingSlide data={slide.content.data} />;
      case "dex":
        return <DexSlide data={slide.content.data} />;
      case "algorithm":
        return <AlgorithmSlide data={slide.content.data} />;
      case "hotpairs":
        return <HotPairsSlide data={slide.content.data} />;
      case "hotpairs-algo":
        return <HotPairsAlgoSlide data={slide.content.data} />;
      case "instasettle":
        return <InstasettleSlide data={slide.content.data} />;
      case "maintenance":
        return <MaintenanceSlide data={slide.content.data} />;
      case "fees":
        return <FeesSlide data={slide.content.data} />;
      case "subgraph":
        return <SubgraphSlide data={slide.content.data} />;
      case "roadmap":
        return <RoadmapSlide data={slide.content.data} />;
      case "closing":
        return <ClosingSlide data={slide.content.data} />;
      default:
        return null;
    }
  };

  // Hero and Closing slides have special layouts
  if (slide.content.type === "hero" || slide.content.type === "closing") {
    return (
      <div className="slide-container">
        <div 
          className="slide-bg"
          style={{ backgroundImage: `url(${slide.background})` }}
        />
        <div className="slide-overlay" />
        {renderContent()}
      </div>
    );
  }

  return (
    <SlideLayout
      background={slide.background}
      badge={slide.badge}
      title={slide.title}
      subtitle={slide.subtitle}
    >
      {renderContent()}
    </SlideLayout>
  );
};
