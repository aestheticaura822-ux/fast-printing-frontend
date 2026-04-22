import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Industries from "./pages/Industries";
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

// Service Detail Pages
import DigitalPrinting from "./pages/services/DigitalPrinting";
import OffsetPrinting from "./pages/services/OffsetPrinting";
import ScreenPrinting from "./pages/services/ScreenPrinting";
import LargeFormatPrinting from "./pages/services/LargeFormatPrinting";
import CustomBoxes from "./pages/services/CustomBoxes";
import LabelsStickers from "./pages/services/LabelsStickers";
import BagsPouching from "./pages/services/BagsPouching";
import BrandIdentity from "./pages/services/BrandIdentity";
import Flexography from "./pages/services/Flexography";
import EcoFriendly from "./pages/services/EcoFriendly";
import LogoDesign from "./pages/services/LogoDesign";
import PackagingDesign from "./pages/services/PackagingDesign";
import MarketingMaterials from "./pages/services/MarketingMaterials";
import BusinessPrinting from "./pages/services/BusinessPrinting";
import PromotionalProducts from "./pages/services/PromotionalProducts";
import SpecialtyPrinting from "./pages/services/SpecialtyPrinting";

// product detail pages
import BusinessCards from "./pages/products/BusinessCards";
import Letterheads from "./pages/products/Letterheads";
import Envelopes from "./pages/products/Envelopes";
import PresentationFolders from "./pages/products/PresentationFolders";
import BillBooks from "./pages/products/BillBooks";

// Product Detail Pages - Marketing Materials
import Brochures from "./pages/products/Brochures";
import Flyers from "./pages/products/Flyers";
import Posters from "./pages/products/Posters";
import Catalogs from "./pages/products/Catalogs";

// Product Detail Pages - Large Format
import Banners from "./pages/products/Banners";
import RollUpBanners from "./pages/products/RollUpBanners";
import WindowGraphics from "./pages/products/WindowGraphics";
import WallGraphics from "./pages/products/WallGraphics";
import FlagPrinting from "./pages/products/FlagPrinting";

// Product Detail Pages - Packaging
import CustomBoxesProduct from "./pages/products/CustomBoxes";
import LabelsStickersProduct from "./pages/products/LabelsStickers";
import ShoppingBags from "./pages/products/ShoppingBags";
import FoodPackaging from "./pages/products/FoodPackaging";

// Product Detail Pages - Specialty Items
import WeddingCards from "./pages/products/WeddingCards";
import Calendars from "./pages/products/Calendars";
import Notepads from "./pages/products/Notepads";
import Certificates from "./pages/products/Certificates";

// Industry Pages Routes
import Education from "./pages/industries/Education";
import Healthcare from "./pages/industries/Healthcare";
import Restaurants from "./pages/industries/Restaurants";
import Retail from "./pages/industries/Retail";
import Corporate from "./pages/industries/Corporate";
import Events from "./pages/industries/Events";
import Technology from "./pages/industries/Technology";
import Fashion from "./pages/industries/Fashion";

import LuxuryCosmeticPackaging from './pages/portfolio/LuxuryCosmeticPackaging';
import RestaurantBrandIdentity from './pages/portfolio/RestaurantBrandIdentity';
import EcommerceShippingBoxes from './pages/portfolio/EcommerceShippingBoxes';
import TechStartupBrandIdentity from './pages/portfolio/TechStartupBrandIdentity';
import SchoolProspectus from './pages/portfolio/SchoolProspectus';
import FoodProductLabels from './pages/portfolio/FoodProductLabels';
import CorporateBrandingPackage from './pages/portfolio/CorporateBrandingPackage';
import RetailDisplayPackaging from './pages/portfolio/RetailDisplayPackaging';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="font-sans overflow-x-hidden relative">
        <Navbar />
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/industries" element={<Industries />} />
           <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} /> 
          {/* Service Detail Pages */}
          <Route
            path="/services/digital-printing"
            element={<DigitalPrinting />}
          />
          <Route
            path="/services/offset-printing"
            element={<OffsetPrinting />}
          />
          <Route
            path="/services/screen-printing"
            element={<ScreenPrinting />}
          />
          <Route
            path="/services/large-format"
            element={<LargeFormatPrinting />}
          />
          <Route path="/services/custom-boxes" element={<CustomBoxes />} />
          <Route
            path="/services/labels-stickers"
            element={<LabelsStickers />}
          />
          <Route path="/services/bags-pouching" element={<BagsPouching />} />
          <Route path="/services/brand-identity" element={<BrandIdentity />} />
          <Route path="/services/flexography" element={<Flexography />} />
          <Route path="/services/eco-friendly" element={<EcoFriendly />} />
          <Route path="/services/logo-design" element={<LogoDesign />} />
          <Route
            path="/services/packaging-design"
            element={<PackagingDesign />}
          />
          <Route
            path="/services/marketing-design"
            element={<MarketingMaterials />}
          />
          <Route
            path="/services/business-printing"
            element={<BusinessPrinting />}
          />
          <Route
            path="/services/promotional-products"
            element={<PromotionalProducts />}
          />
          <Route
            path="/services/specialty-printing"
            element={<SpecialtyPrinting />}
          />
          {/* Product Detail Routes - Business Essentials */}
          <Route path="/products/business-cards" element={<BusinessCards />} />
          <Route path="/products/letterheads" element={<Letterheads />} />
          <Route path="/products/envelopes" element={<Envelopes />} />
          <Route
            path="/products/presentation-folders"
            element={<PresentationFolders />}
          />
          <Route path="/products/bill-books" element={<BillBooks />} />
          {/* Product Detail Routes - Marketing Materials */}
          <Route path="/products/brochures" element={<Brochures />} />
          <Route path="/products/flyers" element={<Flyers />} />
          <Route path="/products/posters" element={<Posters />} />
          <Route path="/products/catalogs" element={<Catalogs />} />
          {/* Product Detail Routes - Large Format */}
          <Route path="/products/banners" element={<Banners />} />
          <Route path="/products/roll-up-banners" element={<RollUpBanners />} />
          <Route
            path="/products/window-graphics"
            element={<WindowGraphics />}
          />
          <Route path="/products/wall-graphics" element={<WallGraphics />} />
          <Route path="/products/flag-printing" element={<FlagPrinting />} />
          {/* Product Detail Routes - Packaging */}
          <Route
            path="/products/custom-boxes"
            element={<CustomBoxesProduct />}
          />
          <Route
            path="/products/labels-stickers"
            element={<LabelsStickersProduct />}
          />
          <Route path="/products/shopping-bags" element={<ShoppingBags />} />
          <Route path="/products/food-packaging" element={<FoodPackaging />} />
          {/* Product Detail Routes - Specialty Items */}
          <Route path="/products/wedding-cards" element={<WeddingCards />} />
          <Route path="/products/calendars" element={<Calendars />} />
          <Route path="/products/notepads" element={<Notepads />} />
          <Route path="/products/certificates" element={<Certificates />} />
          // Add routes
          <Route path="/industries/education" element={<Education />} />
          <Route path="/industries/healthcare" element={<Healthcare />} />
          <Route path="/industries/restaurants" element={<Restaurants />} />
          <Route path="/industries/retail" element={<Retail />} />
          <Route path="/industries/corporate" element={<Corporate />} />
          <Route path="/industries/events" element={<Events />} />
          <Route path="/industries/technology" element={<Technology />} />
          <Route path="/industries/fashion" element={<Fashion />} />

          <Route path="/portfolio/luxury-cosmetic-packaging" element={<LuxuryCosmeticPackaging />} />
<Route path="/portfolio/restaurant-brand-identity" element={<RestaurantBrandIdentity />} />
<Route path="/portfolio/ecommerce-shipping-boxes" element={<EcommerceShippingBoxes />} />
<Route path="/portfolio/tech-startup-brand-identity" element={<TechStartupBrandIdentity />} />
<Route path="/portfolio/school-prospectus" element={<SchoolProspectus />} />
<Route path="/portfolio/food-product-labels" element={<FoodProductLabels />} />
<Route path="/portfolio/corporate-branding-package" element={<CorporateBrandingPackage />} />
<Route path="/portfolio/retail-display-packaging" element={<RetailDisplayPackaging />} />


          
        </Routes>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
