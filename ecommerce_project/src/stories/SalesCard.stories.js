import SalesCard from "../Components/SalesCard";

export default {
  title: "SalesCard",
  component: SalesCard,
};

const Template = (args) => <SalesCard {...args} />;

export const FirstStory = {
  args: {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqKIRIL_wVajdKxxGQ_NxeZHz_h7cIAiCjIg&usqp=CAU",
    name: "Stylish Leather watch",
    percentage: "50",
  },
};
