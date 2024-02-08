import type { Meta, StoryObj } from "@storybook/web-components";

import template from "./index.html?raw";
import source from "./index?raw";
import play from "./index";

type StroyArgs = {};

const meta: Meta<StroyArgs> = {
  id: "events",
  title: "Examples",
};
export default meta;

type Story = StoryObj<StroyArgs>;

export const story: Story = {
  name: "Events",
  render: () => template,
  play,
  args: {},
  parameters: {
    storySource: {
      source,
    },
  },
};