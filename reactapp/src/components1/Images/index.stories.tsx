import type { Meta, StoryObj } from "@storybook/react";
import Image from ".";

const meta: Meta<typeof Image> = {
  title: "Atoms/Image",
  component: Image,
  tags: ["autodocs"],
  args: {
    src: "https://tse3.mm.bing.net/th/id/OIP.4sxGxlea0uvOZ8ng9AWPogHaE8?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    alt: "Alternate Image",
  },
  argTypes: {
    rounded: {
      control: "boolean",
    },
    width: {
      control: "number",
    },
    height: {
      control: "number",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Image>;

export const Default: Story = {};

export const FixedSize: Story = {
  args: {
    width: 200,
    height: 200,
  },
};

export const RoundedAvatar: Story = {
  args: {
    width: 120,
    height: 120,
    rounded: true,
  },
};
