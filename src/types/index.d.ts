export type RegularPage = {
  frontmatter: {
    title: string;
    image?: string;
    description?: string;
    meta_title?: string;
    layout?: string;
    draft?: boolean;
  };
  content: string;
  slug?: string;
};

export type Feature = {
  button: button;
  image: string;
  bulletpoints: string[];
  content: string;
  title: string;
};

export type news = {
  name: string;
  designation: string;
  image: string;
  content: string;
};

export type Call_to_action = {
  enable?: boolean;
  title: string;
  description: string;
  name:string;
  image: string;
  content: string;
  button: Button;
};

export type Button = {
  enable: boolean;
  label: string;
  link: string;
};
export type Carousel = {
  avatar: string;
};