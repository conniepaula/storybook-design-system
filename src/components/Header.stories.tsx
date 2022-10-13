import { Meta, StoryObj } from "@storybook/react";
import { Header, HeaderProps } from "./Header";

export default {
  title: "Components/Header",
  component: Header,
  args: { children: "Lorem Ipsum Dolor Sit Amet", size: "md" },
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: {
        type: "inline-radio",
      },
    },
  },
} as Meta<HeaderProps>;

export const Default: StoryObj<HeaderProps> = {};

export const Small: StoryObj<HeaderProps> = {
  args: {
    size: "sm",
  },
};

export const Large: StoryObj<HeaderProps> = {
  args: {
    size: "lg",
  },
};

export const CustomComponent: StoryObj<HeaderProps> = {
  args: {
    asChild: true,
    children: <h1>Consectetur adipiscing elit</h1>,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    asChild: {
      table: {
        disable: true,
      },
    },
  },
};
