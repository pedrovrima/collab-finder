import React from "react";
import {
  AccordionWithHeader,
  AccordionNode,
  AccordionHeader,
  AccordionPanel,
} from "react-accordion-with-header";

// let Header = (props)=>{

//     return(
//         <div>
//         <p className="border px-4 py-2">{props.repo.info.full_name}</p>
//       </div>
//     )
// }

// class BodyTpl extends React.Component {
//     render() {
//       return <div>Look at this {this.props.item}</div>;
//     }
//   }

// export default (props) => {
//   return (
//     <div className="flex justify-center">
//       <AccordionWithHeader>
//         {props.repos.map((repo, i) => {
//           if (repo) {
//             return (
//               <AccordionNode key={i}>
//                 <AccordionHeader >
//                   <Header repo={repo}></Header>
//                 </AccordionHeader>
//                 <AccordionPanel title={repo.info.full_name}>
//                   {/* <div>
//                     <p className="border px-4 py-2">{repo.info.full_name}</p>
//                     <p className="border px-4 py-2">{repo.issues.length}</p>
//                     <p className="border px-4 py-2">
//                       {repo.info.stargazers_count}
//                     </p>
//                   </div> */}
//                                     <BodyTpl item={repo}></BodyTpl>

//                 </AccordionPanel>
//               </AccordionNode>
//             );
//           }
//         })}
//       </AccordionWithHeader>
//     </div>
//   );
// };

// note: due to the warning "Stateless function components cannot be given refs. Attempts to access this ref will fail."
// the components passed into <AccordionPanel> must be class components
// this allows to measure the height of the element via refs
class BodyTpl extends React.Component {
  render() {
    return <div>Look at this {this.props.item}</div>;
  }
}

let MyAccordion = (props) => {
  return (
    <AccordionWithHeader className="w-custom border bg-gray-100 my-2 shadow-blue">
      {props.repos
        .filter((repo) => repo)
        .map((repo, i) => {
          if (repo) {
            return (
              <AccordionNode key={i}>
                <AccordionHeader
                  horizontalAlignment="centerSpaceAround"
                  verticalAlignment="center"
                >
                  <div>This is the header</div>
                  <div>It has flexbox layout</div>
                </AccordionHeader>
                <AccordionPanel>
                  <p >{repo.info.full_name}</p>
                  <p >{repo.issues.length}</p>
                  <p >
                    {repo.info.stargazers_count}
                  </p>
                </AccordionPanel>
              </AccordionNode>
            );
          }
        })}
    </AccordionWithHeader>
  );
};

export default MyAccordion;
