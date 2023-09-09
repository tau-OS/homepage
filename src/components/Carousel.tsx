import { Tab } from "@headlessui/react";
import { Fragment, type FC } from "react";

interface CarouselItem {
  name: string;
  image: string;
  description: string;
}

const Carousel: FC<{ views: CarouselItem[] }> = (props) => {
  const panels = props?.views?.map(({ name }) => (
    <Tab.Panel>
      <img src="/trans.png" alt="" className="h-96" />
    </Tab.Panel>
  ));
  const tabs = props?.views?.map(({ name }) => (
    <Tab as={Fragment}>
      {({ selected }) => (
        <button
          className={
            selected
              ? "border-violet-700 dark:border-violet-300 border-b-2"
              : ""
          }
        >
          {name}
        </button>
      )}
    </Tab>
  ));

  return (
    <Tab.Group>
      <Tab.Panels>{panels}</Tab.Panels>
      <Tab.List className="flex flex-row gap-6 justify-center">{tabs}</Tab.List>
    </Tab.Group>
  );
};

export default Carousel;
