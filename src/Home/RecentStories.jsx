import React from "react";
import Helmet from "../Components/Helmet/Helmet";
import Heading from "../Components/Heading/Heading";
import StoriesCard from "../Components/StoriesCard/StoriesCard";
import StoriesData from "../Data/StoriesData";
import Button from "../Components/Button/Button";

const RecentStories = () => {
  return (
    <div className="py-20">
      <Helmet>
        <Heading text="Recent Stories" />
        <div className="mt-10 flex justify-center gap-12 flex-wrap ">
          {StoriesData.slice(0, 3).map((item) => {
            return <StoriesCard key={item.id} {...item} />;
          })}
        </div>
        <div className="flex justify-center mt-10">
          <Button
            text="Read More"
            className=" bg-black text-white border-white rounded-md text-lg hover:bg-white hover:text-black duration-300 hover:border-black border"
          />
        </div>
      </Helmet>
    </div>
  );
};

export default RecentStories;
