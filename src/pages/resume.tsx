import React from "react";
import { ResumeSchema } from "@supastuff/json-resume-types";
import { GetStaticProps } from "next";
import resume from "resume.json";

export const getStaticProps: GetStaticProps<ResumeSchema> = async (context) => {
  return {
    props: resume,
  };
};

export default function Resume({
  basics,
  skills,
  work,
  education,
}: ResumeSchema) {
  return <></>;
}
