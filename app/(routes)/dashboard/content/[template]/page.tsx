import React from "react";
import FormSection from "./_components/FormSection";
import OutputSection from "./_components/OutputSection";
import Template from "@/app/(data)/Template";
import { TEMPLATE } from "../../_components/Templatespace";
interface PROPS {
  params: {
    template: string;
  };
}
function CursePage(dynaname: PROPS) {
    
  const selectedTemplate:TEMPLATE|any=Template?.find((item)=>item.gibberish==dynaname.params['template'])
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 p-5 gap-5">
      {/* Form Section */}
<FormSection selectedTemplate={selectedTemplate}></FormSection >
      {/* OutputSection */}
      <OutputSection></OutputSection>


    </div>
  );
}

export default CursePage;
