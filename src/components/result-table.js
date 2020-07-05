import React from "react";
import {
  AccordionWithHeader,
  AccordionNode,
  AccordionHeader,
  AccordionPanel,
} from "react-accordion-with-header";
import parse from 'html-react-parser';

import showdown  from 'showdown'


let MyAccordion = (props) => {

  var converter = new showdown.Converter()

  return (
    <AccordionWithHeader className="w-custom border bg-gray-100 my-2 shadow-blue">
      {props.repos
        .filter((repo) => repo)
        .map((repo, i) => {
          if (repo) {
            return (
              <AccordionNode key={i}>
                <AccordionHeader
                  horizontalAlignment="spaceBetween"
                  verticalAlignment="center"
                >
                  <div>{repo.info.full_name.split("/")[1]}</div>
                  <div style={{ textAlign: "right" }}>
                    {" "}
                    {repo.info.stargazers_count}
                  </div>
                </AccordionHeader>
                <AccordionPanel>
                  <div className={"p-6"}>
                    <p>{repo.info.description}</p>
                  </div>
                  <div>
                    <ul>
                      {repo.issues.map((issue, j) => {
                        // return "a"
                        return <div className="p-6"> {parse(converter.makeHtml(issue.body))}</div>;
                      })}
                    </ul>
                  </div>
                </AccordionPanel>
              </AccordionNode>
            );
          }
        })}
    </AccordionWithHeader>
  );
};

export default MyAccordion;
