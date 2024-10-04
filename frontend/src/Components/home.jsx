import React from "react";

function Home() {
  return (
    // This container ensures everything is centered and provides padding from the viewport edges
    <div className="flex justify-center items-center min-h-screen px-4 lg:px-20">
      <div className="grid gap-4 md:grid-cols-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 max-w-6xl w-full">
        {/* Each figure now includes mx-auto to center within its container and max-w to control width */}
        {[
          {
            quote: "Very easy this was to integrate",
            detail:
              "If you care for your time, I hands down would go with this.",
            name: "Bonnie Green",
            role: "Developer at Open AI",
            imgSrc:
              "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png",
          },
          {
            quote: "Solid foundation for any project",
            detail:
              "Designing with Figma components that can be easily translated to the utility classes of Tailwind CSS is a huge timesaver!",
            name: "Roberta Casas",
            role: "Lead designer at Dropbox",
            imgSrc:
              "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png",
          },
          {
            quote: "Mindblowing workflow",
            detail:
              "Aesthetically, the well designed components are beautiful and will undoubtedly level up your next application.",
            name: "Jese Leos",
            role: "Software Engineer at Facebook",
            imgSrc:
              "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png",
          },
          {
            quote: "Efficient Collaborating",
            detail:
              "You have many examples that can be used to create a fast prototype for your team.",
            name: "Joseph McFall",
            role: "CTO at Google",
            imgSrc:
              "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png",
          },
        ].map((item, index) => (
          <figure
            key={index}
            className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 md:rounded-lg"
          >
            <blockquote className="max-w-xl mx-auto mb-4 text-gray-500 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {item.quote}
              </h3>
              <p className="my-4">{item.detail}</p>
            </blockquote>
            <figcaption className="flex items-center justify-center">
              <img
                className="rounded-full w-9 h-9"
                src={item.imgSrc}
                alt="profile"
              />
              <div className="ml-3 text-left">
                <div className="font-medium dark:text-white">{item.name}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {item.role}
                </div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

export default Home;
