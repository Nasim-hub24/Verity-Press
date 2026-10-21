import React from 'react';
import Marquee from 'react-fast-marquee';


const news = [
  {
    "id": 1,
    "title": "Bangladesh Announces New Technology Development Initiative",
    "slug": "bangladesh-technology-development-initiative",
    "description": "Bangladesh introduces a new initiative to support technology startups, digital innovation, and young entrepreneurs."
  },
  {
    "id": 2,
    "title": "Artificial Intelligence Is Transforming Education",
    "slug": "ai-transforming-education",
    "description": "Educational institutions are exploring artificial intelligence to improve learning experiences and support teachers."
  },
  {
    "id": 3,
    "title": "Global Markets Respond to Economic Changes",
    "slug": "global-markets-economic-changes",
    "description": "Investors monitor economic indicators and policy decisions as global financial markets respond to new developments."
  },
  {
    "id": 4,
    "title": "Real Madrid Prepare for Their Next Big Match",
    "slug": "real-madrid-next-big-match",
    "description": "Real Madrid prepare for their upcoming fixture as fans anticipate another exciting football contest."
  },
  {
    "id": 5,
    "title": "Scientists Explore Renewable Energy Solutions",
    "slug": "scientists-explore-renewable-energy-solutions",
    "description": "Researchers investigate new ways to make renewable energy more affordable, efficient, and accessible."
  },
  {
    "id": 6,
    "title": "Smartphone Companies Introduce New Security Features",
    "slug": "smartphone-new-security-features",
    "description": "Technology companies develop new privacy controls and security features to help protect users' personal information."
  },
  {
    "id": 7,
    "title": "Bangladesh Cricket Team Prepares for Upcoming Series",
    "slug": "bangladesh-cricket-upcoming-series",
    "description": "Bangladesh's cricket team focuses on preparation and performance ahead of its upcoming international series."
  },
  {
    "id": 8,
    "title": "Electric Vehicles Gain Popularity Worldwide",
    "slug": "electric-vehicles-gain-popularity",
    "description": "Growing interest in sustainable transportation encourages manufacturers to develop more affordable electric vehicles."
  },
  {
    "id": 9,
    "title": "New Research Highlights the Importance of Ocean Conservation",
    "slug": "research-ocean-conservation",
    "description": "Environmental researchers emphasize the need to protect marine ecosystems and reduce ocean pollution."
  },
  {
    "id": 10,
    "title": "Digital Banking Services Continue to Expand",
    "slug": "digital-banking-services-expand",
    "description": "Financial institutions expand digital banking services to make everyday transactions more convenient for customers."
  }
]


const BreakingNews = () => {
    return (
        <div className='flex justify-between gap-4 items-center bg-amber-100 py-4 px-2 container mx-auto'>
            <button className='btn bg-amber-900 text-white'>Latest News</button>
            <Marquee className='gap-4'>
                    {news.map((n) =>{
                        return <span key={n._id}>{n.title} </span>
                    } )}
            </Marquee>
        </div>
    );
};

export default BreakingNews;