import { GetStaticProps } from "next";
import React from "react";

type AboutProps = {
  name: string;
  locations: string[];
  about: string;
};

export const getStaticProps: GetStaticProps<AboutProps> = async (context) => {
  return {
    props: {
      name: "Edward Sanders",
      locations: [],
      about: "",
    },
  };
};

export default function About({ name, locations, about }: AboutProps) {
  return <></>;
}
