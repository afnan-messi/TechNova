import { FaShoppingCart, FaPalette, FaSearch, FaEdit, FaUserLock, FaPlug, FaLanguage, FaCloud, FaHeadset } from 'react-icons/fa'

export const projectTypes = [
  { id: 'website', label: 'Website', basePrice: 800 },
  { id: 'web-app', label: 'Web Application', basePrice: 2500 },
  { id: 'mobile-app', label: 'Mobile App', basePrice: 4000 },
]

export const features = [
  { id: 'ecommerce', label: 'E-commerce Integration', price: 900, icon: FaShoppingCart },
  { id: 'ui-ux', label: 'Custom UI/UX Design', price: 1200, icon: FaPalette },
  { id: 'seo', label: 'SEO Optimization', price: 450, icon: FaSearch },
  { id: 'cms', label: 'CMS', price: 650, icon: FaEdit },
  { id: 'accounts', label: 'User Accounts & Login', price: 850, icon: FaUserLock },
  { id: 'api', label: 'Third-Party API Integration', price: 750, icon: FaPlug },
  { id: 'languages', label: 'Multi-language Support', price: 550, icon: FaLanguage },
  { id: 'cloud', label: 'Cloud Hosting & DevOps', price: 1100, icon: FaCloud },
  { id: 'support', label: '3-Month Support & Maintenance', price: 700, icon: FaHeadset },
]

export const timelines = [
  { id: 'standard', label: 'Standard', multiplier: 1 },
  { id: 'priority', label: 'Priority', multiplier: 1.2 },
  { id: 'rush', label: 'Rush', multiplier: 1.45 },
]
