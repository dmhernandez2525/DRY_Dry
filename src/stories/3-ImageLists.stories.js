import React from "react";
import {
  QuiltedImageList,
  StandardImageList,
  WovenImageList
} from "../stories";

export default {
  title: "ImageLists"
  // component: ImageLists
};

const QuiltedImage = QuiltedImageList.Default;
const StandardImage = StandardImageList.Default;
const WovenImage = WovenImageList.Default;
export { QuiltedImage, StandardImage, WovenImage };
