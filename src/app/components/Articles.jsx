import LinkTo from "../assets/LinkTo";

export default function Articles() {
  const articles = [
    {
      title: "JavaScript Callbacks Unraveled: A Beginner’s Breakthrough",
      link: "https://swoniowei.hashnode.dev/javascript-callbacks-unraveled-a-beginners-breakthrough",
      img: "https://res.cloudinary.com/shmulky/image/upload/v1704273760/Screenshot_2024-01-03_at_10.23.43.png",
    },
    {
      title:"Web Frameworks vs Libraries: Decoding the Essential Distinctions for Developers",
      link: "https://swoniowei.hashnode.dev/web-frameworks-vs-libraries-decoding-the-essential-distinctions-for-developers",
      img: "https://res.cloudinary.com/shmulky/image/upload/v1704273740/luca-bravo-XJXWbfSo2f0-unsplash.jpg",
    },
  ];
  return (
    <div className="" id="articles">
      <h2 className="text-xl font-karla mb-8 mt-28 lg:mt-0 lg:mb-3">WRITING</h2>
      {articles.map((article, idx) => (
        <div className="flex gap-4 mb-14" key={idx}>
          <div className="w-1/5">
            <img className="h-30 w-28" src={article.img} alt="Project Image" />
          </div>
          <div className="w-4/5 text-sm md:text-md">
            <a href={article.link} target="_blank" rel="noopener noreferrer" className="block hover:text-name">
              {article.title}
              <LinkTo />
            </a>
            
          </div>
        </div>
      ))}
    </div>
  );
}
