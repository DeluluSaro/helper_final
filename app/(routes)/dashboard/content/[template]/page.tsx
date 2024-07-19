"use client";
import React from "react";
import FormSection from "./_components/FormSection";
import OutputSection from "./_components/OutputSection";
import Template from "@/app/(data)/Template";
import { TEMPLATE } from "../../_components/Templatespace";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
interface PROPS {
  params: {
    template: string;
  };
}
function CursePage(dynaname: PROPS) {
  const selectedTemplate: TEMPLATE | any = Template?.find(
    (item) => item.gibberish == dynaname.params["template"]
  );
  const generateAI = (formData: any) => {
    // write logic
  };
  const router = useRouter();
  return (
  <div>
    <Button onClick={()=>router.push('/dashboard')} className="m-2 bg-[#7fff00]"><ArrowLeft></ArrowLeft>Back</Button>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 p-5 gap-5">
      {/* Form Section */}
      <FormSection
        selectedTemplate={selectedTemplate}
        userFormData={(v: any) => {
          generateAI(v);
        }}
      ></FormSection>
      {/* OutputSection */}
      <div className="col-span-2 border border-[#7fff00]">
        <OutputSection></OutputSection>
      </div>
    </div>
  </div>
  );
}

export default CursePage;
