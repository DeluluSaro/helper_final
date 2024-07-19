"use client";
import React, { useState } from "react";
import { FORM, TEMPLATE } from "../../../_components/Templatespace";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
interface SELECTTEMPLATE {
  selectedTemplate?: TEMPLATE;
  userFormData:any
}
function FormSection({ selectedTemplate,userFormData }: SELECTTEMPLATE | any) {
  const onSubmit = (e: any) => {
    e.preventDefault();
    userFormData(formData)
  };
  const [formData, setFormData] = useState<any>();
  const onHandleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({...formData,[name]:value})
  };
  
  return (
    <div className="shadow-md bg-slate-100">
      <div className="p-5  flex flex-col justify-center items-center">
        <Image
          src={selectedTemplate?.icon}
          alt="img"
          width={50}
          height={50}
        ></Image>

        <h1 className="font-bold text-[#7fff00]"> {selectedTemplate?.name}</h1>
      </div>
      <form className="p-5" onSubmit={onSubmit}>
        {selectedTemplate?.form?.map((item: FORM, index: number) => (
          <div>
            <div className="flex flex-col gap-5">
              <h1 className="text-xs font-bold">{item?.label}</h1>
              {item?.field == "input" ? (
                <Input
                  name={item.name}
                  required={item?.required}
                  onChange={onHandleChange}
                  className="mb-5"
                ></Input>
              ) : item?.field == "textarea" ? (
                <Textarea
                  name={item.name}
                  required={item?.required}
                  onChange={onHandleChange}
                  className="mt-5"
                ></Textarea>
              ) : null}
            </div>
          </div>
        ))}
        <Button
          type="submit"
          className="w-full text-center flex justify-center items-center mt-5 bg-[#7fff00] "
        >
          Generate content
        </Button>
      </form>
    </div>
  );
}

export default FormSection;
