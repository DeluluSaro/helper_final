"use client";
import React, { useState } from "react";
import FormSection from "./_components/FormSection";
import OutputSection from "./_components/OutputSection";
import Template from "@/app/(data)/Template";
import { TEMPLATE } from "../../_components/Templatespace";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { chatSession } from "@/Gen-AI/Model";
import { db } from "@/Backend/db";
import { AIResult } from "@/Backend/schema";
import { useUser } from "@clerk/nextjs";
import moment from "moment";
interface PROPS {
  params: {
    template: string;
  };
}
function CursePage(dynaname: PROPS) {
  const selectedTemplate: TEMPLATE | any = Template?.find(
    (item) => item.gibberish == dynaname.params["template"]
  );
  const [loading, setLoading] = useState(false);
  const [aiResult, setAiResult] = useState<string>("");
  const generateAI = async (formData: any) => {
    // write logic
    setLoading(true);
    const TempPrompt = selectedTemplate.aiprompt;
    const finalPrompt = JSON.stringify(formData) + " , " + TempPrompt;
    const result = await chatSession.sendMessage(finalPrompt);
    setAiResult(result?.response.text());
    await saveData(
      formData,
      selectedTemplate?.gibberish,
      result?.response.text()
    );
    setLoading(false);
  };
  const { user } = useUser();
  const saveData = async (formData: any, gibberish: any, aiResult: any) => {
    const result = await db.insert(AIResult).values({
      formData: formData,
      gibberish: gibberish,
      result: aiResult,
      createdBy: user?.primaryEmailAddress?.emailAddress,
      createdAt: moment().format("DD/MM/yyyy"),
    });
    console.log(result)
  };
  const router = useRouter();
  return (
    <div>
      <Button
        onClick={() => router.push("/dashboard")}
        className="m-2 bg-[#7fff00]"
      >
        <ArrowLeft></ArrowLeft>Back
      </Button>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 p-5 gap-5">
        {/* Form Section */}
        <FormSection
          selectedTemplate={selectedTemplate}
          userFormData={(v: any) => {
            generateAI(v);
          }}
          loading={loading}
        ></FormSection>
        {/* OutputSection */}
        <div className="col-span-2 border border-[#7fff00]">
          <OutputSection aiResult={aiResult}></OutputSection>
        </div>
      </div>
    </div>
  );
}

export default CursePage;
