import React from "react";
import { Accordion, AccordionItem } from "react-sanfona";

export default (props) => {
  return (
    <div className="flex justify-center">
      <Accordion>
        {props.repos.map((repo) => {
          if (repo) {
            return (
              <AccordionItem title={repo.info.full_name}>
                <div>
                  <p className="border px-4 py-2">{repo.info.full_name}</p>
                  <p className="border px-4 py-2">{repo.issues.length}</p>
                  <p className="border px-4 py-2">
                    {repo.info.stargazers_count}
                  </p>
                </div>
              </AccordionItem>
            );
          }
        })}
      </Accordion>
    </div>
  );
};
